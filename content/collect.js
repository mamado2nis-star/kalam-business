const fs=require('fs');
let src=['unit_phone_interview.js','ch1_more.js','ch2_lessons.js','pilot.js','stories.js','stories2.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n');
src+='\n;({U:UNIT_PHONE_INTERVIEW,C1:CH1_MORE,C2:CH2,WORDS,UPGRADE,JARGON,STORY,STORY_MORE})';
const D=eval(src.replace(/^const /gm,'var '));
Object.assign(D.STORY,D.STORY_MORE);
const L=[];for(const g of [D.U,D.C1,D.C2]){const a=Array.isArray(g)?g:(g.lessons||Object.values(g));a.forEach(l=>l&&l.cards&&L.push(l))}
const clean=s=>String(s).replace(/<[^>]+>/g,'').replace(/[‎‏]/g,'').replace(/\s+/g,' ').trim();
const isEn=s=>{const t=clean(s);return t.length>1&&!/[؀-ۿ]/.test(t)&&/[A-Za-z]/.test(t)};
const N='af_heart', M='am_michael';
const jobs={};
for(const l of L){
  const J=[],seen=new Set(),add=(t,v=N,kind='say')=>{t=clean(t);if(!isEn(t)||seen.has(t))return;seen.add(t);J.push({t,v,kind})};
  const st=D.STORY[l.id];
  if(st){st.lines.forEach(x=>add(x,N,'line'));(st.tech||[]).forEach(([e])=>add(e));st.qa.forEach(q=>{add(q.q,M,'q');add(q.a,N,'a')})}
  l.cards.forEach(c=>add(c.en.replace(/…/g,'')));
  (l.quiz||[]).forEach(q=>{ if(q.type==='mcq'){add(q.q);q.options.forEach(o=>add(o))}
     else if(q.type==='gap') add(q.sentence.replace(/_{2,}/,q.options[q.answer]));
     else if(q.type==='order') add(q.answer)});
  (l.match||[]).forEach(([e])=>add(e));
  if(l.roleplay) l.roleplay.turns.forEach(t=>{ if(t.them) add(t.them,M); if(t.you) t.you.forEach(o=>add(o.t))});
  (D.WORDS[l.id]||[]).forEach(w=>{add(w.w);add(w.book);(w.uses||[]).forEach(u=>add(u[1]));});
  (D.UPGRADE[l.id]||[]).forEach(u=>{add(u.plain);u.pro.forEach(p=>add(p))});
  jobs[l.id]=J;
}
const J=[],seen=new Set();D.JARGON.forEach(j=>{for(const t of [j.t,j.eg]){const c=clean(t);if(!seen.has(c)){seen.add(c);J.push({t:c,v:N,kind:'say'})}}});jobs.jargon=J;
fs.writeFileSync('/home/claude/tts/jobs.json',JSON.stringify(jobs));
let tot=0;for(const k in jobs){const n=jobs[k].reduce((a,b)=>a+b.t.length,0);tot+=n;console.log(k,jobs[k].length,n)}console.log('chars',tot);
