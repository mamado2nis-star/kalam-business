import json
t=open('/home/claude/asr/kalam_template.html').read()
r=json.load(open('/home/claude/asr/reading_phone.json'))
for sec in r:
    last=0
    for l in sec['lines']:
        if l['t'] is None: l['t']=last
        else:
            if l['t']<last: l['t']=last
            last=l['t']
        if l['k']=='h': l.pop('t',None)
ch1={}
for f in ['face','internal','experienced']:
    for sec in json.load(open(f'/home/claude/asr/read_{f}.json')):
        ch1[sec['key']]={'title':sec['title'],'src':f"audio/ch1/book-{sec['key']}.mp3",'lines':sec['lines']}
t=t.replace('/*__READING__*/','const READING_PHONE='+json.dumps(r,ensure_ascii=False)+';')
t=t.replace('/*__UNIT__*/',open('/home/claude/asr/unit_phone_interview.js').read())
t=t.replace('/*__CH1__*/','const READING_CH1='+json.dumps(ch1,ensure_ascii=False)+';\n'+open('/home/claude/asr/ch1_more.js').read())
ch2={}
for sec in json.load(open('/home/claude/asr/read_email.json')):
    ch2[sec['key']]={'title':sec['title'],'src':f"audio/ch2/book-{sec['key']}.mp3",'lines':sec['lines']}
t=t.replace('/*__CH2__*/','const READING_CH2='+json.dumps(ch2,ensure_ascii=False)+';\n'+open('/home/claude/asr/ch2_lessons.js').read())
t=t.replace('/*__PILOT__*/',open('/home/claude/asr/pilot.js').read())
t=t.replace('/*__STORIES__*/',open('/home/claude/asr/stories.js').read()+'\n'+open('/home/claude/asr/stories2.js').read())
import glob,os
say={}
for f in sorted(glob.glob('/home/claude/tts/maps/*/*.json')):
    lv=f.split('/')[-2]; say.setdefault(lv,{})[os.path.basename(f)[:-5]]=json.load(open(f))
t=t.replace('/*__SAY__*/',('const SAY='+json.dumps(say,ensure_ascii=False,separators=(',',':'))+';') if say else '')
t=t.replace('/*__WUE__*/',open('/home/claude/asr/wu_emails.js').read())
t=t.replace('/*__FIX__*/','const CARD_FIX='+open('/home/claude/asr/card_fixes.json').read()+';')
open('/home/claude/worktalk/index.html','w').write(t)
print(len(t))
