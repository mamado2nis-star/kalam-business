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
t=t.replace('/*__STORIES__*/',open('/home/claude/asr/stories.js').read())
t=t.replace('/*__FIX__*/','const CARD_FIX='+open('/home/claude/asr/card_fixes.json').read()+';')
open('/home/claude/worktalk/index.html','w').write(t)
print(len(t))
