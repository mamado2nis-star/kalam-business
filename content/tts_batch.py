import json,sys,os,numpy as np,soundfile as sf,subprocess
from kokoro_onnx import Kokoro
k=Kokoro("kokoro-v1.0.onnx","voices-v1.0.bin")
jobs=json.load(open('jobs.json'))
LV={'l1':('af_heart',0.8,'en-us'),'l2':('am_michael',0.95,'en-us'),'l3':('bm_george',1.05,'en-gb')}
for lv in sys.argv[1:]:
  voice,spd,lang=LV[lv]; out=f'/home/claude/worktalk/audio/say/{lv}'; os.makedirs(out,exist_ok=True); os.makedirs(f'maps/{lv}',exist_ok=True)
  for g in jobs:
    if os.path.exists(f'maps/{lv}/{g}.json'): continue
    parts=[];m={};t=0.0;sr=24000
    for it in jobs[g]:
        txt=it['t']
        s,sr=k.create(txt if txt[-1] in '.?!"”' else txt+'.',voice=voice,speed=spd,lang=lang)
        idx=np.where(np.abs(s)>0.01)[0]
        if len(idx): s=s[max(0,idx[0]-1200):idx[-1]+2400]
        m[txt]=[round(t,2),round(t+len(s)/sr,2)]
        parts+=[s,np.zeros(int(sr*0.45),dtype=s.dtype)]; t+=len(s)/sr+0.45
    sf.write(f'/tmp/{lv}{g}.wav',np.concatenate(parts),sr)
    subprocess.run(['ffmpeg','-loglevel','error','-y','-i',f'/tmp/{lv}{g}.wav','-ac','1','-b:a','56k',f'{out}/{g}.mp3'],check=True)
    os.remove(f'/tmp/{lv}{g}.wav'); json.dump(m,open(f'maps/{lv}/{g}.json','w'),ensure_ascii=False)
    print(lv,g,round(t),'s',flush=True)
