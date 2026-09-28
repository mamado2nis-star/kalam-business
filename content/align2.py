"""Global word-level alignment of cleaned text to pocketsphinx segments.
Each line's start time = time of its first matched word (words inside a segment get linearly interpolated times)."""
import json,re,sys
from align import parse   # same md format
W=lambda x:re.findall(r"[a-z0-9']+",x.lower())
SP=re.compile(r'^[A-Z][A-Za-z.\- ]{1,26}:\s+')
def norm(w): return w.replace("'","")
def sim(a,b):
    a,b=norm(a),norm(b)
    if a==b: return 2
    if len(a)>3 and len(b)>3 and (a[:4]==b[:4] or a[-4:]==b[-4:]): return 1
    return -1
def align_section(sec):
    segs=json.load(open(sec['key']+'.json'))['segments']
    hyp=[]
    for s,e,t in segs:
        ws=W(t); n=len(ws)
        for i,w in enumerate(ws): hyp.append((w,s+(e-s)*i/max(n,1)))
    ref=[]; lines=[l for l in sec['lines']]
    for li,l in enumerate(lines):
        if l['k']!='p': continue
        for w in W(SP.sub('',l['s']).replace('___',' ')): ref.append((w,li))
    n,m=len(ref),len(hyp); G=-1
    # DP (Needleman-Wunsch), keep only direction matrix as bytes
    prev=[j*G for j in range(m+1)]; dirs=[]
    for i in range(1,n+1):
        cur=[i*G]+[0]*m; d=bytearray(m+1); d[0]=1; rw=ref[i-1][0]
        for j in range(1,m+1):
            a=prev[j-1]+sim(rw,hyp[j-1][0]); b=prev[j]+G; c=cur[j-1]+G
            if a>=b and a>=c: cur[j]=a; d[j]=0
            elif b>=c: cur[j]=b; d[j]=1
            else: cur[j]=c; d[j]=2
        dirs.append(d); prev=cur
    i,j=n,m; match={}
    while i>0 and j>0:
        dd=dirs[i-1][j]
        if dd==0:
            if sim(ref[i-1][0],hyp[j-1][0])>0: match[i-1]=hyp[j-1][1]
            i-=1;j-=1
        elif dd==1: i-=1
        else: j-=1
    # line start = earliest matched word among its first 6 words, with sanity via median of first matches
    first={}
    for k,(w,li) in enumerate(ref):
        if li not in first: first[li]=[]
        if len(first[li])<6: first[li].append(match.get(k))
    times={}
    for li,ts in first.items():
        vals=[(idx,t) for idx,t in enumerate(ts) if t is not None]
        if vals:
            idx,t=vals[0]; times[li]=max(0,t-0.35*idx)   # back off for unmatched leading words
    # enforce monotonic + interpolate gaps
    pl=[li for li,l in enumerate(lines) if l['k']=='p']
    known=[(li,times[li]) for li in pl if li in times]
    clean=[]; last=-1
    for li,t in known:
        if t>last: clean.append((li,t)); last=t
    ok=dict(clean); res={}
    for idx,li in enumerate(pl):
        if li in ok: res[li]=ok[li]; continue
        before=[x for x in clean if x[0]<li]; after=[x for x in clean if x[0]>li]
        if before and after:
            (a,ta),(b,tb)=before[-1],after[0]; res[li]=ta+(tb-ta)*(pl.index(li)-pl.index(a))/(pl.index(b)-pl.index(a))
        elif before: res[li]=before[-1][1]+1
        else: res[li]=0.0
    for li,l in enumerate(lines):
        if l['k']=='p': l['t']=round(res[li],2)
    return {'title':sec['title'],'key':sec['key'],'lines':lines}
if __name__=='__main__':
    secs=[align_section(s) for s in parse(open(sys.argv[1]).read())]
    for s in secs:
        ts=[l['t'] for l in s['lines'] if l['k']=='p']; print(s['key'],len(ts),'unique',len(set(ts)))
    json.dump(secs,open(sys.argv[2],'w'),ensure_ascii=False)
