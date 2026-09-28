/* Chapter 3 — Business Meetings. Each card's k = the book track its phrase comes from. */
const CH3=[
 { id:"mt1", part:"Business meetings", art:"meeting", minutes:22,
   title:"The rescue meeting", ar:"اجتماع إنقاذ الشركة",
   desc:"A full board meeting: opening, debating, disagreeing, agreeing on action items and voting on the final plan.",
   reading:["mt_179"],
   cards:[
    {k:"mt_179", en:"The purpose of this meeting is to address…", ar:"الغرض من الاجتماع ده إننا نتكلم في…", ex:"<mark>The purpose of this meeting is to address</mark> the financial challenges that our company has been facing.", tip:"أقوى جملة تفتح بيها أي اجتماع: قول الهدف من الأول."},
    {k:"mt_179", en:"I would like to express my gratitude for your prompt attendance.", ar:"بشكركم إنكم جيتوا بسرعة", ex:"Given the urgency of the situation, <mark>I would like to express my gratitude for your prompt attendance</mark>.", tip:"‎prompt‎ = سريع وفي الميعاد. جملة رسمية لرئيس الاجتماع."},
    {k:"mt_179", en:"I couldn't agree more.", ar:"موافق جدًا / مفيش كلام بعد كده", ex:"<mark>I couldn't agree more</mark>, Ms. Nadia.", tip:"معناها موافق ١٠٠٪، مش العكس."},
    {k:"mt_179", en:"I have a question for clarification.", ar:"عندي سؤال للتوضيح", ex:"<mark>I have a question for clarification</mark>. How will we define success with this plan?", tip:"مؤدبة وبتخليك تسأل من غير ما تبان معترض."},
    {k:"mt_179", en:"Let's take a moment to consider different viewpoints.", ar:"خلونا ناخد لحظة نشوف وجهات النظر المختلفة", ex:"<mark>Let's take a moment to consider different viewpoints</mark> and try to find a solution that everyone can agree on.", tip:"بتهدّي النقاش لما يسخن."},
    {k:"mt_179", en:"Let's put that on the action item list.", ar:"نحط ده في قائمة المهام", ex:"<mark>Let's put that on the action item list</mark> for Ibrahim and Nadia to explore.", tip:"‎action items‎ = مهام بعد الاجتماع، ولكل مهمة مسؤول."},
    {k:"mt_179", en:"All in favour, raise your hands.", ar:"الموافقين يرفعوا إيديهم", ex:"All right, let's move on to the final rescue plan for the company. <mark>All in favour, raise your hands</mark>.", tip:"وبعد التصويت: ‎The motion is carried‎ = الاقتراح اتوافق عليه."}
   ],
   quiz:[
    {type:"mcq", q:"إيه معنى ‎I couldn't agree more‎؟", options:["مش موافق خالص","موافق تمامًا","مش قادر أقرر"], answer:1, why:"معناها مفيش موافقة أكتر من كده، يعني موافق ١٠٠٪."},
    {type:"gap", sentence:"The purpose of this meeting is to ___ the financial challenges.", options:["address","speak","say"], answer:0, why:"‎address a problem‎ = نتعامل مع مشكلة ونناقشها."},
    {type:"order", words:["Let's","put","that","on","the","action","item","list"], answer:"Let's put that on the action item list", why:"بتحوّل الفكرة لمهمة ليها مسؤول."},
    {type:"mcq", q:"بعد التصويت والكل وافق، رئيس الاجتماع بيقول:", options:["The motion is carried.","The motion is dead.","We are voted."], answer:0, why:"‎The motion is carried‎ = الاقتراح اتوافق عليه."},
    {type:"mcq", q:"الاجتماع طوّل والناس فقدت التركيز. أنسب جملة:", options:["You are all sleeping!","I think it's time to regroup and summarize where we're at.","Meeting finished."], answer:1, why:"‎regroup‎ = نلم الكلام ونرتب نفسنا تاني."}
   ],
   match:[["agenda","جدول الأعمال"],["action item","مهمة بعد الاجتماع"],["compromise","حل وسط"],["fiscal year","السنة المالية"],["reconvene","نرجع نكمل الاجتماع"],["motion","اقتراح رسمي للتصويت"]],
   roleplay:{ scene:"انت رئيس اجتماع طارئ عن خسائر في الشركة. لازم تفتح الاجتماع، وتدير خلاف، وتقفل بتصويت.",
    turns:[
     {them:"(The team is seated.) Everyone is waiting for you to begin."},
     {you:[{t:"Good morning, everyone. The purpose of this meeting is to address the financial challenges we've been facing. Thank you for your prompt attendance.",ok:1,fb:"فتحت بالهدف وشكرت الحضور."},{t:"OK, we lost money. Talk.",ok:0,fb:"جافة ومفيهاش هدف واضح."},{t:"Hi guys, what's up?",ok:0,fb:"كاجوال جدًا لاجتماع رسمي."}]},
     {them:"Sales Director: I'm not sure a 10% increase is realistic. Operations Director: But we need to aim high!"},
     {you:[{t:"I understand both concerns. Let's take a moment to consider different viewpoints and find a solution everyone can agree on.",ok:1,fb:"هديت الخلاف وفتحت باب لحل وسط."},{t:"Stop arguing.",ok:0,fb:"أمر جاف."},{t:"The sales director is wrong.",ok:0,fb:"انحياز وبيسخّن الخلاف."}]},
     {them:"The team agrees on a 5% target. Now you need a decision on the full plan."},
     {you:[{t:"All right, let's move on to the final plan. All in favour, raise your hands… The motion is carried. Thank you, everyone.",ok:1,fb:"قفلت بتصويت رسمي وشكر."},{t:"I decided alone. Bye.",ok:0,fb:"بتلغي الفريق."},{t:"Maybe we vote next month?",ok:0,fb:"بتأجل القرار من غير سبب."}]}
    ]}
 },
 { id:"mt2", part:"Business meetings", art:"handshake", minutes:18,
   title:"Opening a meeting: welcome, goals & introductions", ar:"فتح الاجتماع: ترحيب وأهداف وتعارف",
   desc:"Welcome people, introduce yourself and others, present the meeting goals — and apologize if you're late.",
   reading:["mt_187","mt_190","mt_192"],
   cards:[
    {k:"mt_187", en:"Allow me to introduce myself.", ar:"اسمحولي أعرّفكم بنفسي", ex:"Welcome, and thank you for joining us today. <mark>Allow me to introduce myself</mark>.", tip:"رسمية ولطيفة. بعدها اسمك ووظيفتك."},
    {k:"mt_187", en:"I'd like to extend a warm welcome to our guests.", ar:"أحب أرحب ترحيب حار بضيوفنا", ex:"<mark>I'd like to extend a warm welcome to our guests</mark>.", tip:"‎extend a welcome‎ تعبير ثابت في الاجتماعات والعروض."},
    {k:"mt_187", en:"Please join me in welcoming…", ar:"رحبوا معايا بـ…", ex:"<mark>Please join me in welcoming</mark> our new operations manager.", tip:"لما تقدّم ضيف أو زميل جديد."},
    {k:"mt_190", en:"Our objective for this meeting is to…", ar:"هدفنا من الاجتماع ده إننا…", ex:"<mark>Our objective for this meeting is to</mark> agree on the maintenance schedule.", tip:"قول الهدف في جملة واحدة واضحة."},
    {k:"mt_190", en:"Let's go over the agenda to make sure we're on the same page.", ar:"نراجع جدول الأعمال علشان نبقى متفقين", ex:"Before we get started, <mark>let's go over the agenda to make sure we're on the same page</mark>.", tip:"‎on the same page‎ = فاهمين نفس الحاجة."},
    {k:"mt_190", en:"Could you please introduce yourself and your role in the company?", ar:"ممكن تعرّفنا بنفسك ودورك في الشركة؟", ex:"<mark>Could you please introduce yourself and your role in the company?</mark>", tip:"لما فيه ناس أول مرة تحضر."},
    {k:"mt_190", en:"My apologies for running behind schedule.", ar:"آسف إني اتأخرت عن الميعاد", ex:"<mark>My apologies for running behind schedule</mark>.", tip:"اعتذار قصير ومهني، وبعدها ادخل في الموضوع على طول."}
   ],
   quiz:[
    {type:"mcq", q:"وصلت الاجتماع متأخر ١٠ دقايق. تقول إيه؟", options:["Traffic was crazy, you know Cairo!","I'm sorry to have kept you waiting.","Why did you start without me?"], answer:1, why:"اعتذار قصير ومهني من غير حجج طويلة."},
    {type:"gap", sentence:"I'd like to ___ a warm welcome to our guests.", options:["extend","give up","make"], answer:0, why:"‎extend a warm welcome‎ تعبير ثابت."},
    {type:"order", words:["Could","you","please","introduce","yourself","and","your","role"], answer:"Could you please introduce yourself and your role", why:"بتطلب من الحضور يعرّفوا نفسهم بأدب."},
    {type:"mcq", q:"عايز تقول هدف الاجتماع:", options:["Our objective for this meeting is to agree on the new schedule.","We meet because meeting.","The meeting is about many things."], answer:0, why:"الهدف واضح ومحدد."},
    {type:"mcq", q:"إيه معنى ‎on the same page‎؟", options:["في نفس الصفحة في الكتاب","متفقين وفاهمين نفس الحاجة","قاعدين جنب بعض"], answer:1, why:"تعبير شائع جدًا في الشغل."}
   ],
   match:[["agenda","جدول الأعمال"],["objective","هدف"],["participant","مشارك"],["guest","ضيف"],["tardiness","التأخير"],["background","خلفية / خبرة سابقة"]],
   roleplay:{ scene:"انت بتفتح اجتماع kick-off لمشروع UPS مع عميل جديد. أول مرة الفريقين يتقابلوا.",
    turns:[
     {them:"(Everyone is seated. The client's team has just arrived.)"},
     {you:[{t:"Good morning, everyone. Welcome, and thank you for joining us today. Allow me to introduce myself: I'm Omar, the project manager.",ok:1,fb:"ترحيب وتعريف بنفسك بشكل رسمي."},{t:"Hello. Let's start.",ok:0,fb:"ناقص ترحيب وتعريف."},{t:"Who are you people?",ok:0,fb:"غير مهذبة خالص."}]},
     {them:"Client: Thank you. We're happy to be here."},
     {you:[{t:"Could you each introduce yourselves and your role in the company? Then let's go over the agenda to make sure we're on the same page.",ok:1,fb:"تعارف وبعدين أجندة، ترتيب ممتاز."},{t:"Tell me your salaries.",ok:0,fb:"مش مناسب خالص."},{t:"We don't need introductions.",ok:0,fb:"بتضيّع فرصة تبني علاقة."}]},
     {them:"(Introductions are done.)"},
     {you:[{t:"Our objective for this meeting is to agree on the installation schedule and the site requirements.",ok:1,fb:"هدف واضح ومحدد."},{t:"We will talk about stuff.",ok:0,fb:"مبهم."},{t:"No objective today.",ok:0,fb:"اجتماع من غير هدف = وقت ضايع."}]}
    ]}
 },
 { id:"mt3", part:"Business meetings", art:"chat", minutes:20,
   title:"Running the discussion", ar:"إدارة النقاش",
   desc:"Ask for opinions, hand over to a speaker, clarify, move to the next item, keep people on track and agree.",
   reading:["mt_194","mt_197"],
   cards:[
    {k:"mt_194", en:"Can I have your input on this matter?", ar:"ممكن رأيك في الموضوع ده؟", ex:"<mark>Can I have your input on this matter?</mark>", tip:"‎input‎ = رأي أو مساهمة. أرق من ‎What do you think?‎"},
    {k:"mt_194", en:"I'll now turn the floor over to…", ar:"دلوقتي هدي الكلمة لـ…", ex:"<mark>I'll now turn the floor over to</mark> Hany, who will provide an update on the project.", tip:"‎the floor‎ = حق الكلام في الاجتماع."},
    {k:"mt_194", en:"Could you elaborate on that a bit more, please?", ar:"ممكن توضح ده أكتر شوية؟", ex:"<mark>Could you elaborate on that a bit more, please?</mark>", tip:"‎elaborate‎ = يشرح بتفاصيل أكتر."},
    {k:"mt_197", en:"Shall we proceed to the next item on the agenda?", ar:"ننتقل للبند اللي بعده؟", ex:"<mark>Shall we proceed to the next item on the agenda?</mark>", tip:"‎item‎ = بند في جدول الأعمال."},
    {k:"mt_197", en:"Let's not get sidetracked.", ar:"ما نخرجش بره الموضوع", ex:"<mark>Let's not get sidetracked</mark>.", tip:"‎sidetracked‎ = اتشتتنا في موضوع جانبي."},
    {k:"mt_197", en:"Can we hold that thought for a moment and come back to it later?", ar:"نأجل النقطة دي شوية ونرجعلها بعدين؟", ex:"<mark>Can we hold that thought for a moment and come back to it later?</mark>", tip:"بتأجل مقاطعة من غير ما تكسف حد."},
    {k:"mt_197", en:"I'm on board with that.", ar:"أنا معاكم في ده / موافق", ex:"<mark>I'm on board with that</mark>.", tip:"موافقة ودودة وشائعة جدًا."}
   ],
   quiz:[
    {type:"mcq", q:"الكلام خرج عن الأجندة. أنسب جملة:", options:["Shut up, please.","Can we steer the conversation back to the original agenda?","This is boring."], answer:1, why:"بترجّع النقاش بأدب."},
    {type:"gap", sentence:"Could you ___ on that a bit more, please?", options:["elaborate","elevate","eliminate"], answer:0, why:"‎elaborate on‎ = اشرح بتفاصيل."},
    {type:"order", words:["Shall","we","proceed","to","the","next","item"], answer:"Shall we proceed to the next item", why:"انتقال مهذب للبند اللي بعده."},
    {type:"mcq", q:"زميل قاطع بنقطة مهمة بس مش وقتها:", options:["Can we hold that thought for a moment and come back to it later?","Not now!","Nobody asked you."], answer:0, why:"بتأجلها باحترام وبتوعده ترجعلها."},
    {type:"mcq", q:"إيه معنى ‎I'm on board with that‎؟", options:["أنا في المركب","موافق ومعاكم","مش فاهم"], answer:1, why:"‎on board‎ = موافق وداخل معاكم."}
   ],
   match:[["input","رأي / مساهمة"],["elaborate","يوضح بالتفصيل"],["sidetracked","خرجنا عن الموضوع"],["the floor","حق الكلام"],["item","بند"],["objection","اعتراض"]],
   roleplay:{ scene:"انت بتدير اجتماع صيانة أسبوعي. فيه مهندس بيتكلم كتير في موضوع جانبي.",
    turns:[
     {them:"Engineer: …and that's why I think we should change the company cars, the canteen, and…"},
     {you:[{t:"Thanks, Karim. Those are good points, but let's not get sidetracked. Can we come back to that later?",ok:1,fb:"شكرته وأجلت بأدب."},{t:"Karim, stop talking.",ok:0,fb:"بتحرجه قدام الكل."},{t:"OK, let's discuss the canteen now.",ok:0,fb:"سبت الأجندة."}]},
     {them:"(The team is back on the main topic: preventive maintenance.)"},
     {you:[{t:"Mona, can I have your input on this matter? You visited the site last week.",ok:1,fb:"طلبت رأي الشخص المناسب."},{t:"Anyone? No? OK.",ok:0,fb:"مفيش مشاركة حقيقية."},{t:"I decide everything.",ok:0,fb:"بتقفل الباب على الفريق."}]},
     {them:"Mona: I think we need two more technicians on Fridays."},
     {you:[{t:"That seems reasonable. Shall we proceed to the next item on the agenda?",ok:1,fb:"وافقت وانتقلت بسلاسة."},{t:"Whatever.",ok:0,fb:"مش مهني."},{t:"No, never.",ok:0,fb:"رفض من غير سبب."}]}
    ]}
 },
 { id:"mt4", part:"Business meetings", art:"star", minutes:20,
   title:"Disagreeing, interrupting & sending apologies", ar:"الاعتراض والمقاطعة والاعتذار عن الحضور",
   desc:"Disagree politely, ask people to repeat, interrupt without being rude, share your opinion — and apologize if you can't attend.",
   reading:["mt_200"],
   cards:[
    {k:"mt_200", en:"I see your point, but I have a different perspective.", ar:"فاهم وجهة نظرك، بس عندي رأي مختلف", ex:"<mark>I see your point, but I have a different perspective</mark>.", tip:"ابدأ بالاحترام وبعدين اعترض."},
    {k:"mt_200", en:"I have reservations about that proposal.", ar:"عندي تحفظات على الاقتراح ده", ex:"<mark>I have reservations about that proposal</mark>.", tip:"‎reservations‎ هنا = تحفظات، مش حجوزات."},
    {k:"mt_200", en:"I didn't catch the last part. Would you mind repeating it?", ar:"مالحقتش آخر جزء، ممكن تعيده؟", ex:"<mark>I didn't catch the last part. Would you mind repeating it?</mark>", tip:"‎catch‎ هنا = أسمع وألحق الكلام."},
    {k:"mt_200", en:"I'm sorry to interrupt, but I have a quick question.", ar:"آسف للمقاطعة، بس عندي سؤال سريع", ex:"<mark>I'm sorry to interrupt, but I have a quick question</mark>.", tip:"اعتذر الأول، وخلي السؤال فعلًا سريع."},
    {k:"mt_200", en:"If I may, I'd like to interject with a suggestion.", ar:"لو تسمحوا، عندي اقتراح", ex:"<mark>If I may, I'd like to interject with a suggestion</mark>.", tip:"‎interject‎ = يدخل في الكلام. رسمية ومؤدبة."},
    {k:"mt_200", en:"I'd like to bring up an additional point.", ar:"عايز أضيف نقطة كمان", ex:"<mark>I'd like to bring up an additional point</mark>.", tip:"‎bring up‎ = يفتح موضوع أو نقطة."},
    {k:"mt_200", en:"I regret to inform you that I won't be able to attend the meeting.", ar:"للأسف مش هقدر أحضر الاجتماع", ex:"<mark>I regret to inform you that I won't be able to attend the meeting</mark>.", tip:"رسمية جدًا، تنفع في إيميل."}
   ],
   quiz:[
    {type:"mcq", q:"مديرك اقترح حاجة شايفها غلط. أنسب رد:", options:["That's a stupid idea.","I respectfully disagree. I think we need to consider a different approach.","No."], answer:1, why:"اعتراض محترم مع بديل."},
    {type:"gap", sentence:"I have ___ about that proposal.", options:["reservations","bookings","reserves"], answer:0, why:"‎have reservations about‎ = عندي تحفظات."},
    {type:"order", words:["I'm","sorry","to","interrupt","but","I","have","a","quick","question"], answer:"I'm sorry to interrupt but I have a quick question", why:"مقاطعة مهذبة."},
    {type:"mcq", q:"مسمعتش آخر جزء من كلام العميل على Zoom:", options:["What??","I didn't catch the last part. Would you mind repeating it?","Speak louder!"], answer:1, why:"مؤدبة ومهنية."},
    {type:"mcq", q:"عندك ميعاد دكتور ومش هتحضر اجتماع الساعة ٤:", options:["I can't go to the meeting at four o'clock. I have a doctor's appointment. Can you take notes for me?","I won't come. Bye.","Cancel the meeting for me."], answer:0, why:"زي الكتاب: سبب + طلب مساعدة."}
   ],
   match:[["disagree","يعترض / مش موافق"],["perspective","وجهة نظر"],["reservations","تحفظات"],["interrupt","يقاطع"],["interject","يدخل في الكلام"],["unforeseen","مش متوقع"]],
   roleplay:{ scene:"اجتماع مع عميل. المدير بتاعك بيقترح خصم ٢٠٪ وانت شايف ده كتير جدًا على هامش الربح.",
    turns:[
     {them:"Manager: So I think we can offer them a 20% discount on the whole UPS project."},
     {you:[{t:"If I may, I'd like to interject with a suggestion. I have reservations about 20% — our margin is only 18%.",ok:1,fb:"دخلت بأدب وقلت السبب بالأرقام."},{t:"Are you crazy?",ok:0,fb:"هجوم مش اعتراض."},{t:"(Say nothing.)",ok:0,fb:"السكوت هنا هيكلف الشركة."}]},
     {them:"Manager: Hmm. What do you propose?"},
     {you:[{t:"I see your point about winning the deal, but I have a different perspective: 7% plus a free first-year maintenance visit.",ok:1,fb:"احترمت رأيه وقدمت بديل ذكي."},{t:"Nothing. No discount ever.",ok:0,fb:"متشدد من غير حل."},{t:"Whatever you want.",ok:0,fb:"مفيش رأي."}]},
     {them:"Client (on the phone, the line is bad): …and we need delivery by the…"},
     {you:[{t:"I'm sorry, I didn't catch the last part. Would you mind repeating the delivery date?",ok:1,fb:"طلب تكرار مهذب ومحدد."},{t:"What?",ok:0,fb:"مختصرة وجافة."},{t:"OK, no problem.",ok:0,fb:"وافقت على حاجة ماسمعتهاش!"}]}
    ]}
 },
 { id:"mt5", part:"Business meetings", art:"chart", minutes:20,
   title:"Cancelling, voting & closing", ar:"إلغاء الاجتماع والتصويت والختام",
   desc:"Cancel or reschedule a meeting by email, call a vote, and wrap up with action items and next steps.",
   reading:["mt_203","mt_209"],
   cards:[
    {k:"mt_203", en:"I apologize, but I will have to reschedule our meeting.", ar:"بعتذر، بس هضطر أغير ميعاد الاجتماع", ex:"<mark>I apologize, but I will have to reschedule our meeting</mark>.", tip:"‎reschedule‎ = يحدد ميعاد جديد."},
    {k:"mt_203", en:"The meeting needs to be postponed.", ar:"الاجتماع لازم يتأجل", ex:"I regret to inform you that <mark>the meeting needs to be postponed</mark>.", tip:"‎postpone‎ = يأجل لوقت بعدين."},
    {k:"mt_203", en:"Please let me know which option works best for everyone.", ar:"قولولي أنهي اختيار يناسب الكل", ex:"<mark>Please let me know which option works best for everyone</mark>, and I will make arrangements accordingly.", tip:"اقترح دايمًا ميعادين بدل ما تلغي وخلاص."},
    {k:"mt_203", en:"Shall we put it to a vote?", ar:"نعمل تصويت؟", ex:"<mark>Shall we put it to a vote?</mark>", tip:"‎put it to a vote‎ = نحسم بالتصويت."},
    {k:"mt_203", en:"Can we get a show of hands?", ar:"الموافقين يرفعوا إيديهم", ex:"<mark>Can we get a show of hands?</mark>", tip:"‎a show of hands‎ = تصويت برفع الإيد."},
    {k:"mt_203", en:"Let's take a moment to summarize the key takeaways and decisions made today.", ar:"نلخص أهم النقط والقرارات اللي اتاخدت النهارده", ex:"<mark>Let's take a moment to summarize the key takeaways and decisions made today</mark>.", tip:"‎key takeaways‎ = أهم الخلاصات."},
    {k:"mt_203", en:"That concludes our meeting for today.", ar:"كده اجتماعنا خلص النهارده", ex:"<mark>That concludes our meeting for today</mark>.", tip:"جملة الختام الرسمية."}
   ],
   quiz:[
    {type:"mcq", q:"لازم تلغي اجتماع بكرة بسبب ظرف طارئ. أنسب بداية للإيميل:", options:["Meeting cancelled.","I regret to inform you that our scheduled meeting has to be postponed due to a last-minute scheduling conflict.","Sorry, can't come lol."], answer:1, why:"رسمية وفيها السبب."},
    {type:"gap", sentence:"Shall we put it to a ___?", options:["vote","voice","voting"], answer:0, why:"‎put it to a vote‎ تعبير ثابت."},
    {type:"order", words:["That","concludes","our","meeting","for","today"], answer:"That concludes our meeting for today", why:"ختام رسمي."},
    {type:"mcq", q:"قبل ما تقفل الاجتماع:", options:["Are there any final comments or concerns before we adjourn?","Go home.","We finished, right?"], answer:0, why:"‎adjourn‎ = نقفل الاجتماع رسميًا."},
    {type:"mcq", q:"إيه معنى ‎key takeaways‎؟", options:["المفاتيح اللي اتاخدت","أهم الخلاصات والنقط","الأكل التيك أواي"], answer:1, why:"‎takeaways‎ في الاجتماعات = الخلاصة."}
   ],
   match:[["postpone","يأجل"],["reschedule","يحدد ميعاد جديد"],["vote","تصويت"],["show of hands","رفع الإيد للتصويت"],["adjourn","يقفل الاجتماع"],["next steps","الخطوات الجاية"]],
   roleplay:{ scene:"آخر اجتماع ميزانية التسويق. الفريق مختلف: إعلانات ديجيتال ولا تقليدية.",
    turns:[
     {them:"Team member 1: Digital is better! Team member 2: No, print and TV still work!"},
     {you:[{t:"Both are good points. Shall we put it to a vote? All in favour of more digital advertising, raise your hand.",ok:1,fb:"حسمت بالتصويت بشكل عادل."},{t:"I like TV. Done.",ok:0,fb:"قرار فردي من غير مشاركة."},{t:"Let's argue for another hour.",ok:0,fb:"مضيعة وقت."}]},
     {them:"(Most hands go up for digital.)"},
     {you:[{t:"The vote is in favour of digital advertising. Let's take a moment to summarize the key takeaways and decisions made today.",ok:1,fb:"أعلنت النتيجة ولخصت."},{t:"OK bye.",ok:0,fb:"قفلت من غير تلخيص."},{t:"Let's vote again.",ok:0,fb:"مفيش داعي."}]},
     {them:"(Summary done.) Everyone is packing up."},
     {you:[{t:"The next steps are to finalize the plan and meet again in two weeks. Any final comments? … That concludes our meeting for today. Thank you, everyone.",ok:1,fb:"خطوات جاية + فرصة أخيرة + ختام."},{t:"Finished.",ok:0,fb:"مفيش خطوات جاية."},{t:"Nobody leaves yet.",ok:0,fb:"غير مناسب."}]}
    ]}
 }
];
