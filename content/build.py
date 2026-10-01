import json
t=open('/home/claude/asr/kalam_template.html').read()
r=[{'title':s['title'],'src':'audio/phone/book-p'+s['key'].split('_')[1]+'.mp3','lines':s['lines']} for s in json.load(open('/home/claude/asr/read_phone_book.json'))]
for sec in r:
    last=0
    for l in sec['lines']:
        if l.get('t') is None: l['t']=last
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
ch3={}
for sec in json.load(open('/home/claude/asr/read_meetings.json')):
    ch3[sec['key']]={'title':sec['title'],'src':f"audio/ch3/book-{sec['key']}.mp3",'lines':sec['lines']}
t=t.replace('/*__CH3__*/','const READING_CH3='+json.dumps(ch3,ensure_ascii=False)+';\n'+open('/home/claude/asr/ch3_lessons.js').read())
ch4={}
for sec in json.load(open('/home/claude/asr/read_presenting.json')):
    ch4[sec['key']]={'title':sec['title'],'src':f"audio/ch4/book-{sec['key']}.mp3",'lines':sec['lines']}
t=t.replace('/*__CH4__*/','const READING_CH4='+json.dumps(ch4,ensure_ascii=False)+';\n'+open('/home/claude/asr/ch4_lessons.js').read())
ch5={}
for sec in json.load(open('/home/claude/asr/read_negotiation.json')):
    ch5[sec['key']]={'title':sec['title'],'src':f"audio/ch5/book-{sec['key']}.mp3",'lines':sec['lines']}
t=t.replace('/*__CH5__*/','const READING_CH5='+json.dumps(ch5,ensure_ascii=False)+';\n'+open('/home/claude/asr/ch5_lessons.js').read())
ch6={}
for sec in json.load(open('/home/claude/asr/read_digital.json')):
    ch6[sec['key']]={'title':sec['title'],'src':f"audio/ch6/book-{sec['key']}.mp3",'lines':sec['lines']}
t=t.replace('/*__CH6__*/','const READING_CH6='+json.dumps(ch6,ensure_ascii=False)+';\n'+open('/home/claude/asr/ch6_lessons.js').read())
ch7={}
for sec in json.load(open('/home/claude/asr/read_office.json')):
    ch7[sec['key']]={'title':sec['title'],'src':f"audio/ch7/book-{sec['key']}.mp3",'lines':sec['lines']}
t=t.replace('/*__CH7__*/','const READING_CH7='+json.dumps(ch7,ensure_ascii=False)+';\n'+open('/home/claude/asr/ch7_lessons.js').read())
t=t.replace('/*__PILOT__*/',open('/home/claude/asr/pilot.js').read())
t=t.replace('/*__STORIES__*/',open('/home/claude/asr/stories.js').read()+'\n'+open('/home/claude/asr/stories2.js').read()+'\n'+open('/home/claude/asr/stories3.js').read()+'\n'+open('/home/claude/asr/stories4.js').read()+'\n'+open('/home/claude/asr/stories5.js').read()+'\n'+open('/home/claude/asr/bec.js').read())
import glob,os
say={}
for f in sorted(glob.glob('/home/claude/tts/maps/*/*.json')):
    lv=f.split('/')[-2]; say.setdefault(lv,{})[os.path.basename(f)[:-5]]=json.load(open(f))
t=t.replace('/*__SAY__*/',('const SAY='+json.dumps(say,ensure_ascii=False,separators=(',',':'))+';') if say else '')
t=t.replace('/*__SAR__*/',open('/home/claude/asr/story_ar.js').read())
t=t.replace('/*__BANK__*/',open('/home/claude/asr/bank_ar.js').read()+open('/home/claude/asr/blank_ex.js').read())
wm={}
for f in sorted(glob.glob('/home/claude/asr/wmap/out/*.json')):
    wm[os.path.basename(f)[:-5]]=json.load(open(f))
ewm={}
for f in sorted(glob.glob('/home/claude/asr/email/wmap/*.json')):
    ewm[os.path.basename(f)[:-5]]=json.load(open(f))
t=t.replace('/*__EWMAP__*/','const EWMAP='+json.dumps(ewm,ensure_ascii=False)+';')
t=t.replace('/*__WMAP__*/','const WMAP='+json.dumps(wm,ensure_ascii=False)+';')
t=t.replace('/*__WUE__*/',open('/home/claude/asr/wu_emails.js').read())
t=t.replace('/*__FIX__*/','const CARD_FIX='+open('/home/claude/asr/card_fixes.json').read()+';')
open('/home/claude/worktalk/index.html','w').write(t)
print(len(t))
