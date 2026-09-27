/* Chapter 1 — remaining lessons (face-to-face, internal, experienced candidates).
   Each card has k = the audio track its phrase is taken from; the build step cuts a clip for it. */
const CH1_MORE=[
 { id:"ff1", part:"Face-to-face interview", art:"handshake", minutes:20,
   title:"The panel interview", ar:"المقابلة قدام لجنة",
   desc:"Meet a panel, agree the format, and talk about your studies so they sound relevant to the job.",
   reading:["ff_35","ff_41"],
   cards:[
    {k:"ff_35", en:"Do you mind if I take notes while we're speaking?", ar:"تمانعوا لو كتبت ملاحظات وإحنا بنتكلم؟", ex:"<mark>Do you mind if I take notes while we're speaking?</mark> I'd like to keep track of things.", tip:"بتبان منظم ومهتم. اسألها في أول المقابلة."},
    {k:"ff_35", en:"I really enjoy analyzing situations and solving problems.", ar:"بحب أحلل المواقف وأحل المشاكل", ex:"I like to know how things work, and <mark>I really enjoy analyzing situations and solving problems</mark>.", tip:"جملة مناسبة لأي وظيفة فنية أو هندسية."},
    {k:"ff_35", en:"It was up to me to adapt them to our needs.", ar:"كان عليا أنا إني أظبطها على احتياجنا", ex:"We couldn't get some parts, so <mark>it was up to me</mark> to scavenge parts and <mark>adapt them to our needs</mark>.", tip:"‎it was up to me‎ = المسؤولية كانت عليا. بتحكي بيها موقف اتصرفت فيه."},
    {k:"ff_35", en:"There's something else I can bring to the table.", ar:"فيه حاجة كمان أقدر أضيفها", ex:"<mark>There's something else I can bring to the table</mark>: the customer-relations side of things.", tip:"‎bring to the table‎ = تضيف قيمة. مشهورة جدًا في المقابلات."},
    {k:"ff_35", en:"I always keep an eye on the big picture.", ar:"دايمًا عيني على الصورة الكبيرة", ex:"I like taking care of details, but <mark>I always keep an eye on the big picture</mark>.", tip:"بتوازن بين الاهتمام بالتفاصيل والرؤية الشاملة."},
    {k:"ff_41", en:"I majored in finance and international business.", ar:"اتخصصت في المالية والبيزنس الدولي", ex:"<mark>I majored in finance and international business</mark> at Ohio University.", tip:"‎major in‎ = تتخصص في مادة في الجامعة."},
    {k:"ff_41", en:"I'm ready to put my knowledge into practice.", ar:"أنا جاهز أطبق اللي اتعلمته", ex:"I've worked hard in my education, and now <mark>I'm ready to put my knowledge into practice</mark>.", tip:"جملة ختام قوية لخريج جديد."}
   ],
   quiz:[
    {type:"mcq", q:"اللجنة بدأت المقابلة. عايز تستأذن تكتب ملاحظات:", options:["I will write now.","Do you mind if I take notes while we're speaking?","Give me paper."], answer:1, why:"‎Do you mind if…?‎ طريقة مؤدبة جدًا تستأذن بيها."},
    {type:"gap", sentence:"I ___ in computer science at Cairo University.", options:["majored","studied at","graduated"], answer:0, why:"‎major in‎ + التخصص."},
    {type:"order", words:["I","always","keep","an","eye","on","the","big","picture"], answer:"I always keep an eye on the big picture", why:"تعبير ثابت: ‎keep an eye on‎."},
    {type:"mcq", q:"إيه معنى ‎bring something to the table‎؟", options:["تجيب أكل للاجتماع","تضيف قيمة أو ميزة","تحجز ترابيزة"], answer:1, why:"معناها المهارة أو القيمة اللي هتضيفها للشركة."},
    {type:"mcq", q:"سألوك عن دراستك وانت خريج جديد. أقوى جملة ختام:", options:["That's all.","I'm ready to put my knowledge into practice.","I forgot most of it."], answer:1, why:"بتربط الدراسة بالشغل الفعلي."}
   ],
   match:[["panel interview","مقابلة قدام لجنة"],["ground rules","قواعد وترتيب المقابلة"],["major in","يتخصص في"],["GPA","المعدل التراكمي"],["troubleshooter","اللي بيلاقي الأعطال ويحلها"],["end user","المستخدم النهائي"]],
   roleplay:{ scene:"مقابلة قدام لجنة من ٣: Rehab من الـ Recruiting، وMazen مدير الهندسة، وMona من الـ HR.",
    turns:[
     {them:"Good morning. Before we start, I'll lead the meeting and Mazen will ask the technical questions."},
     {you:[{t:"Good to hear. Do you mind if I take notes while we're speaking?",ok:1,fb:"مؤدب ومنظم، زي Khaled في الكتاب بالظبط."},{t:"OK. Start.",ok:0,fb:"جافة شوية مع لجنة."},{t:"Can we be quick? I'm busy.",ok:0,fb:"بتدي انطباع إنك مش مهتم."}]},
     {them:"What did you study that's relevant to this position?"},
     {you:[{t:"I majored in electronics engineering. Circuits and signal processing were my favorites, and I did very well in them.",ok:1,fb:"ربطت الدراسة بالوظيفة، وقلت إنك اتفوقت."},{t:"Many subjects.",ok:0,fb:"عامة جدًا. سمّي المواد."},{t:"I don't remember.",ok:0,fb:"أسوأ إجابة ممكنة."}]},
     {them:"What makes you different from other candidates?"},
     {you:[{t:"I worked in a repair shop during my gap year, so I understand how real users use products. That's something else I can bring to the table.",ok:1,fb:"مثال حقيقي، وخلّصت بتعبير قوي."},{t:"I'm just better.",ok:0,fb:"ادعاء من غير دليل."},{t:"Nothing really.",ok:0,fb:"دايمًا فيه حاجة تميزك. دوّر عليها."}]}
    ]}
 },
 { id:"ff2", part:"Face-to-face interview", art:"star", minutes:18,
   title:"Grades, hobbies & internships", ar:"الدرجات والهوايات والتدريب",
   desc:"Talk about your grades honestly, turn hobbies into skills, and describe what your internship taught you.",
   reading:["ff_45","ff_48"],
   cards:[
    {k:"ff_45", en:"I think my grades reflect my work.", ar:"أعتقد إن درجاتي بتعكس شغلي", ex:"<mark>I think my grades reflect my work.</mark> My GPA is 3.84, which is equivalent to an A.", tip:"لو درجاتك كويسة، ابدأ بيها وقول الرقم."},
    {k:"ff_45", en:"It was not an easy feat, but I managed to succeed.", ar:"ماكانتش حاجة سهلة، بس قدرت أنجح", ex:"<mark>It was not an easy feat, but I managed to succeed</mark> in all three areas.", tip:"‎feat‎ = إنجاز صعب."},
    {k:"ff_45", en:"My grades are not necessarily a good indication of what I can achieve.", ar:"درجاتي مش بالضرورة مؤشر على اللي أقدر أحققه", ex:"<mark>My grades are not necessarily a good indication of what I can achieve</mark> professionally.", tip:"لو درجاتك متوسطة، قولها بصراحة وانقل الكلام للخبرة العملية."},
    {k:"ff_48", en:"It allows me to serve my community.", ar:"بيخليني أخدم مجتمعي", ex:"Volunteering not only introduces me to new people but also <mark>allows me to serve my community</mark>.", tip:"التطوع بيبان كويس جدًا في السي في."},
    {k:"ff_48", en:"I have always been a voracious reader.", ar:"طول عمري بقرا كتير جدًا", ex:"I love reading; <mark>I have always been a voracious reader</mark>.", tip:"‎voracious‎ = نهم وشغوف جدًا."},
    {k:"ff_48", en:"I have two internships under my belt.", ar:"عندي تدريبين في رصيدي", ex:"<mark>I have two internships under my belt</mark>, both in marketing.", tip:"‎under my belt‎ = خلصتها وبقت خبرة عندي."},
    {k:"ff_48", en:"I learned how to take ownership of my actions.", ar:"اتعلمت أتحمل مسؤولية تصرفاتي", ex:"<mark>I learned how to take ownership of my actions</mark> and be responsible for my team's results.", tip:"‎take ownership‎ = تتحمل المسؤولية بالكامل."}
   ],
   quiz:[
    {type:"mcq", q:"درجاتك متوسطة بس عندك تدريب قوي. أحسن إجابة:", options:["My grades were bad, sorry.","My grades are not necessarily a good indication of what I can achieve. My internships are where I achieved the most.","Grades don't matter at all."], answer:1, why:"صريح ونقلت الكلام لنقطة قوتك."},
    {type:"gap", sentence:"I have two internships ___ my belt.", options:["under","on","in"], answer:0, why:"التعبير الثابت ‎under my belt‎."},
    {type:"order", words:["I","learned","how","to","take","ownership","of","my","actions"], answer:"I learned how to take ownership of my actions", why:"‎take ownership of‎ = تتحمل مسؤولية."},
    {type:"mcq", q:"إيه معنى ‎a voracious reader‎؟", options:["بيقرا بسرعة","بيقرا كتير جدًا وبشغف","بيكره القراية"], answer:1, why:"‎voracious‎ = نهم."},
    {type:"mcq", q:"أي هواية بتتقال بشكل مهني أكتر؟", options:["I sleep a lot.","I visit the gym three times a week; staying in shape helps me keep a positive outlook.","I play games all night."], answer:1, why:"ربطت الهواية بفايدة للشغل."}
   ],
   match:[["GPA","المعدل"],["extracurricular","نشاط خارج الدراسة"],["internship","تدريب عملي"],["volunteer","يتطوع"],["accountability","المساءلة وتحمل النتيجة"],["time management","إدارة الوقت"]],
   roleplay:{ scene:"مقابلة وجهًا لوجه. المحاور بيسأل عن درجاتك وهواياتك والتدريب.",
    turns:[
     {them:"How do your grades reflect your quality of work?"},
     {you:[{t:"I think my grades reflect my work. My GPA is 3.6, and I balanced it with an internship and student activities.",ok:1,fb:"رقم واضح، ومعاه دليل على إدارة الوقت."},{t:"Grades are stupid.",ok:0,fb:"هجومية ومش مهنية."},{t:"I don't know my GPA.",ok:0,fb:"لازم تعرف معدلك."}]},
     {them:"What do you do in your free time?"},
     {you:[{t:"I volunteer at a local NGO. It allows me to serve my community and it improved my communication skills.",ok:1,fb:"هواية بتبين قيم ومهارات."},{t:"Nothing special.",ok:0,fb:"ضيّعت فرصة تبين شخصيتك."},{t:"I watch TV all day.",ok:0,fb:"مش الصورة اللي عايز توصلها."}]},
     {them:"What did you learn during your internship?"},
     {you:[{t:"I learned how to use my academic knowledge in real projects, and how to take ownership of my actions.",ok:1,fb:"كلام من الكتاب بالظبط، ومقنع."},{t:"Making coffee.",ok:0,fb:"حتى لو ده حصل، قول مهارة حقيقية."},{t:"Not much.",ok:0,fb:"كل تدريب فيه درس. قوله."}]}
    ]}
 },
 { id:"ff3", part:"Face-to-face interview", art:"ladder", minutes:20,
   title:"Why hire you? Strengths & weaknesses", ar:"ليه نختارك؟ نقاط قوتك وضعفك",
   desc:"Sell yourself as a fresh graduate, describe your five-year plan, and talk about a weakness the right way.",
   reading:["ff_53","ff_59"],
   cards:[
    {k:"ff_53", en:"As a fresh graduate, I bring a lot to the table.", ar:"كخريج جديد، عندي حاجات كتير أضيفها", ex:"<mark>As a fresh graduate, I bring a lot to the table</mark> in terms of skill and ability.", tip:"بتحوّل قلة الخبرة لميزة."},
    {k:"ff_53", en:"I always play by the rules and follow company guidelines.", ar:"دايمًا ماشي بالقواعد وسياسات الشركة", ex:"<mark>I always play by the rules and follow company guidelines</mark>, so you can trust me.", tip:"‎play by the rules‎ = تلتزم بالقواعد."},
    {k:"ff_53", en:"I want to be the go-to person for solving problems.", ar:"عايز أبقى الشخص اللي الناس بترجعله لحل المشاكل", ex:"<mark>I want to be the go-to person for solving problems</mark> in this department.", tip:"‎go-to person‎ = المرجع اللي الكل بيروحله."},
    {k:"ff_53", en:"I'd be interested in further job progression.", ar:"هكون مهتم بالترقي بعد كده", ex:"If the opportunity came, <mark>I would be interested in further job progression</mark>.", tip:"إجابة لـ ‎Where do you see yourself in five years?‎ من غير ما تبان طماع."},
    {k:"ff_59", en:"I'm a fast learner and very keen to acquire new skills.", ar:"بتعلم بسرعة وحريص أكتسب مهارات جديدة", ex:"<mark>I am a fast learner and very keen to acquire new skills</mark>.", tip:"قوة مناسبة جدًا لخريج جديد."},
    {k:"ff_59", en:"I can be quite critical of myself.", ar:"ساعات بكون قاسي على نفسي", ex:"<mark>I can be quite critical of myself</mark>, which can lead to negative self-talk.", tip:"نقطة ضعف حقيقية، بس بعدها لازم تقول إزاي بتحسنها."},
    {k:"ff_59", en:"I've learned that it's OK to say no.", ar:"اتعلمت إن عادي أقول لأ", ex:"Taking on everything affected my work, so <mark>I've learned that it's OK to say no</mark>.", tip:"بتبين إنك اتعلمت من غلطة."}
   ],
   quiz:[
    {type:"mcq", q:"أحسن طريقة تتكلم بيها عن نقطة ضعف:", options:["I have no weaknesses.","I'm a perfectionist, and I've learned to finish things within the time available.","I'm always late and I don't care."], answer:1, why:"ضعف حقيقي + إزاي بتعالجه."},
    {type:"gap", sentence:"I want to be the go-___ person for solving problems.", options:["to","for","at"], answer:0, why:"‎go-to person‎ تعبير ثابت."},
    {type:"order", words:["I","always","play","by","the","rules"], answer:"I always play by the rules", why:"‎play by the rules‎ = تلتزم بالقواعد."},
    {type:"mcq", q:"سألوك ‎Where do you see yourself in five years?‎:", options:["In your chair.","Mastering this role and, if the opportunity comes, growing into a leadership role.","I don't know."], answer:1, why:"طموح بس واقعي ومربوط بالوظيفة."},
    {type:"mcq", q:"إيه معنى ‎keen to acquire new skills‎؟", options:["خايف من المهارات الجديدة","حريص ومتحمس يكتسب مهارات","عنده مهارات كتير"], answer:1, why:"‎keen‎ = متحمس وحريص."}
   ],
   match:[["fresh graduate","خريج جديد"],["strength","نقطة قوة"],["weakness","نقطة ضعف"],["procrastination","التأجيل والتسويف"],["perfectionist","بيدوّر على الكمال"],["progression","الترقي"]],
   roleplay:{ scene:"آخر المقابلة. المحاور بيسألك الأسئلة الصعبة: ليه نختارك، ونقط ضعفك، وخطتك.",
    turns:[
     {them:"Why should we hire you instead of someone with more experience?"},
     {you:[{t:"As a fresh graduate, I bring a lot to the table. I'm a fast learner, and my internship taught me how to work in a team.",ok:1,fb:"حوّلت قلة الخبرة لميزة."},{t:"Because I need the money.",ok:0,fb:"بتتكلم عن احتياجك مش عن قيمتك."},{t:"You shouldn't, maybe.",ok:0,fb:"ماتقللش من نفسك أبدًا."}]},
     {them:"What is your greatest weakness?"},
     {you:[{t:"I can be quite critical of myself, so now I track my goals and celebrate small achievements.",ok:1,fb:"ضعف حقيقي ومعاه حل."},{t:"I work too hard.",ok:0,fb:"إجابة محفوظة والمحاورين بيعرفوها."},{t:"I hate people.",ok:0,fb:"صريحة زيادة وبتقفل عليك الفرصة."}]},
     {them:"And where do you see yourself in five years?"},
     {you:[{t:"I want to master this role and be the go-to person for solving problems. If the opportunity comes, I'd like to lead a small team.",ok:1,fb:"طموح ومرتبط بالشركة."},{t:"Running my own company.",ok:0,fb:"بيبين إنك هتمشي بسرعة."},{t:"Retired on a beach.",ok:0,fb:"هزار في وقت غلط."}]}
    ]}
 },
 { id:"in1", part:"Internal interview", art:"chart", minutes:20,
   title:"Going for a promotion", ar:"مقابلة ترقية داخل الشركة",
   desc:"Describe your current role and a typical day, and explain why you want the bigger job.",
   reading:["in_68","in_75"],
   cards:[
    {k:"in_68", en:"I'm in charge of managing the creation and release of new products.", ar:"أنا مسؤول عن إدارة تصميم وإطلاق المنتجات الجديدة", ex:"I currently work as a product manager. <mark>I'm in charge of managing the creation and release of new products</mark>.", tip:"وصف مختصر وواضح لوظيفتك الحالية."},
    {k:"in_68", en:"My days are usually quite varied.", ar:"أيامي عادةً متنوعة جدًا", ex:"<mark>My days are usually quite varied.</mark> I spend a lot of time meeting with cross-functional teams.", tip:"بداية طبيعية لسؤال ‎What does a typical day look like?‎"},
    {k:"in_68", en:"to ensure we stay on schedule", ar:"علشان نفضل ماشيين على الجدول", ex:"I track the progress of projects <mark>to ensure we stay on schedule</mark>.", tip:"‎on schedule‎ = في المعاد المحدد."},
    {k:"in_68", en:"I've reached a plateau in my growth.", ar:"وصلت لمرحلة ثبات في تطوري", ex:"<mark>I have come to recognize that I've reached a plateau</mark> in terms of my experience and personal growth.", tip:"سبب محترم تطلب بيه ترقية."},
    {k:"in_75", en:"I oversee the day-to-day operations.", ar:"بشرف على الشغل اليومي", ex:"<mark>I am responsible for overseeing the day-to-day operations</mark> of the customer service department.", tip:"‎oversee‎ = يشرف على."},
    {k:"in_75", en:"I am eager to leverage my expertise.", ar:"متحمس أستغل خبرتي", ex:"<mark>I am eager to leverage my expertise</mark> in marketing to make a meaningful impact.", tip:"‎leverage‎ = تستفيد من حاجة عندك للآخر."},
    {k:"in_75", en:"It aligns perfectly with my career goals.", ar:"متماشية تمامًا مع أهدافي المهنية", ex:"I'm drawn to this role, as <mark>it aligns perfectly with my career goals</mark> and aspirations.", tip:"‎align with‎ = يتماشى مع."}
   ],
   quiz:[
    {type:"mcq", q:"سألوك ‎What does a typical day look like for you?‎:", options:["Boring.","My days are usually quite varied. I meet with teams, create roadmaps and track progress.","I come at 9 and leave at 5."], answer:1, why:"بتوصف مسؤوليات حقيقية."},
    {type:"gap", sentence:"I track progress to ensure we stay ___ schedule.", options:["in","on","at"], answer:1, why:"‎on schedule‎."},
    {type:"order", words:["It","aligns","perfectly","with","my","career","goals"], answer:"It aligns perfectly with my career goals", why:"‎align with‎."},
    {type:"mcq", q:"ليه عايز الترقية؟ أحسن سبب:", options:["My manager is annoying.","I've reached a plateau in my current role, and I'm eager to take on more responsibility.","The new office is bigger."], answer:1, why:"سبب عن التطور، مش شكوى."},
    {type:"mcq", q:"إيه معنى ‎cross-functional teams‎؟", options:["فرق من أقسام مختلفة","فرق بتتخانق","فرق من شركات تانية"], answer:0, why:"فرق فيها ناس من أقسام مختلفة بيشتغلوا مع بعض."}
   ],
   match:[["promotion","ترقية"],["oversee","يشرف على"],["roadmap","خطة طريق للمنتج"],["plateau","مرحلة ثبات"],["leverage","يستفيد من"],["upkeep","الصيانة والمتابعة"]],
   roleplay:{ scene:"انت Product Manager ومتقدم لوظيفة Director في نفس الشركة. Mr. Hossam من الـ HR بيسألك.",
    turns:[
     {them:"Can you tell me a little bit about your current role at the company?"},
     {you:[{t:"I'm a product manager. I'm in charge of managing the creation and release of new products, and the upkeep of existing ones.",ok:1,fb:"وصف واضح ودقيق."},{t:"You know my role already.",ok:0,fb:"حتى لو يعرفك، لازم تشرح."},{t:"I do products.",ok:0,fb:"مختصرة لدرجة إنها مش مفيدة."}]},
     {them:"What's one weakness you're working on?"},
     {you:[{t:"I can get overwhelmed by large projects, so I now use project-management tools and delegate more.",ok:1,fb:"ضعف حقيقي ومعاه خطة."},{t:"None.",ok:0,fb:"مش مصدقة."},{t:"My team is weak, not me.",ok:0,fb:"بترمي اللوم على غيرك."}]},
     {them:"Why are you interested in this new position?"},
     {you:[{t:"I've reached a plateau in my current role, and I'm eager to take on more responsibility. It aligns perfectly with my career goals.",ok:1,fb:"صادق ومرتبط بالتطور."},{t:"More money.",ok:0,fb:"مش السبب اللي يقنع."},{t:"Everyone else applied.",ok:0,fb:"مش سبب خالص."}]}
    ]}
 },
 { id:"in2", part:"Internal interview", art:"star", minutes:15,
   title:"Your fit, achievements & new ideas", ar:"مناسبتك للوظيفة وإنجازاتك وأفكارك",
   desc:"Show how your skills match the role, tell an achievement with results, and pitch a fresh idea.",
   reading:["in_80","in_83"],
   cards:[
    {k:"in_80", en:"My experience and skills align very well with this role.", ar:"خبرتي ومهاراتي مناسبة جدًا للوظيفة دي", ex:"<mark>I believe my experience and skills align very well with the requirements of this role</mark>.", tip:"جملة افتتاح لسؤال المناسبة."},
    {k:"in_80", en:"I have a proven track record of delivering results.", ar:"عندي سجل مثبت في تحقيق النتايج", ex:"<mark>I have a proven track record of delivering results</mark> in fast-paced environments.", tip:"‎track record‎ = تاريخك في الإنجاز."},
    {k:"in_80", en:"It generated a 25% increase in website traffic.", ar:"زوّدت زيارات الموقع ٢٥٪", ex:"The campaign <mark>generated a 25% increase in website traffic</mark> within three months.", tip:"الأرقام بتقنع أكتر."},
    {k:"in_83", en:"One accomplishment that stands out in my mind…", ar:"إنجاز من اللي فاكرها كويس…", ex:"<mark>One specific accomplishment that stands out in my mind</mark> was when I led a new ERP system.", tip:"بداية ممتازة لحكاية إنجاز."},
    {k:"in_83", en:"The project was completed on time and under budget.", ar:"المشروع خلص في معاده وبأقل من الميزانية", ex:"Through my leadership, <mark>the project was completed on time and under budget</mark>.", tip:"‎under budget‎ = صرفت أقل من المتوقع."},
    {k:"in_83", en:"It exceeded sales targets by 20%.", ar:"تعدّى أهداف المبيعات بـ ٢٠٪", ex:"The launch was ahead of schedule and <mark>exceeded sales targets by 20%</mark>.", tip:"‎exceed‎ = يتعدى."},
    {k:"in_83", en:"I believe new ideas are crucial for growth.", ar:"مؤمن إن الأفكار الجديدة ضرورية للنمو", ex:"<mark>I believe new ideas are crucial for growth</mark>, and I have a few for the team.", tip:"بداية لعرض فكرة جديدة."}
   ],
   quiz:[
    {type:"mcq", q:"أقوى طريقة تحكي بيها إنجاز:", options:["I did a project.","I led a team of ten, and the project was completed on time and under budget.","I was there when the project happened."], answer:1, why:"دور واضح ونتيجة محددة."},
    {type:"gap", sentence:"The launch exceeded sales targets ___ 20%.", options:["with","by","for"], answer:1, why:"‎exceed by‎ + النسبة."},
    {type:"order", words:["I","have","a","proven","track","record"], answer:"I have a proven track record", why:"‎track record‎."},
    {type:"mcq", q:"إيه معنى ‎under budget‎؟", options:["أقل من الميزانية","فوق الميزانية","من غير ميزانية"], answer:0, why:"صرفت أقل من المخطط."},
    {type:"mcq", q:"سألوك عن أفكار جديدة للفريق:", options:["The team is fine.","I have experience with agile methods, and I think using them could speed up our development.","Ask my manager."], answer:1, why:"فكرة محددة من خبرتك."}
   ],
   match:[["track record","سجل الإنجازات"],["on time","في المعاد"],["under budget","أقل من الميزانية"],["exceed","يتعدى"],["revamp","يجدد بالكامل"],["align with","يتماشى مع"]],
   roleplay:{ scene:"مقابلة الترقية مكملة. المحاور عايز يعرف مناسبتك وإنجازاتك وأفكارك.",
    turns:[
     {them:"How do your experience and skills align with this role?"},
     {you:[{t:"I have eight years in marketing and a proven track record: my last campaign generated a 25% increase in website traffic.",ok:1,fb:"خبرة ورقم. مقنع."},{t:"I think they align.",ok:0,fb:"من غير دليل."},{t:"You tell me.",ok:0,fb:"بترمي السؤال عليه."}]},
     {them:"Tell me about a notable achievement."},
     {you:[{t:"One accomplishment that stands out in my mind is a new product line I launched. It exceeded sales targets by 20%.",ok:1,fb:"إنجاز محدد ونتيجة برقم."},{t:"I never missed a day.",ok:0,fb:"التزام، بس مش إنجاز."},{t:"The team did everything.",ok:0,fb:"اتكلم عن دورك انت."}]},
     {them:"Any fresh ideas for the team?"},
     {you:[{t:"I believe new ideas are crucial for growth. I'd like to start a customer feedback program to find areas for improvement.",ok:1,fb:"فكرة واضحة ومفيدة."},{t:"No, everything is perfect.",ok:0,fb:"ضيّعت فرصة تبين تفكيرك."},{t:"Fire half the team.",ok:0,fb:"مش فكرة بنّاءة."}]}
    ]}
 },
 { id:"ex1", part:"Experienced candidates", art:"meeting", minutes:22,
   title:"The senior-level interview", ar:"مقابلة الوظايف القيادية",
   desc:"Present a long career in a few strong sentences and connect it to the company's bottom line.",
   reading:["ex_89","ex_96"],
   cards:[
    {k:"ex_89", en:"I've heard great things about your work.", ar:"سمعت كلام كويس جدًا عن شغلك", ex:"Likewise. <mark>I've heard great things about your work</mark>, and I'm looking forward to getting to know you.", tip:"بيقولها المحاور. ممكن انت كمان تقولها لو حد عرّفك عليه."},
    {k:"ex_89", en:"I worked my way up to my current role.", ar:"اتدرجت لحد ما وصلت لوظيفتي الحالية", ex:"I started as an entry-level analyst and <mark>worked my way up to my current role</mark> as a product manager.", tip:"‎work your way up‎ = تترقى خطوة خطوة."},
    {k:"ex_89", en:"It had a significant impact on the company's bottom line.", ar:"أثر بشكل كبير على أرباح الشركة", ex:"I was able to <mark>make a significant impact on the company's bottom line</mark> by launching new products.", tip:"‎bottom line‎ = صافي الربح."},
    {k:"ex_89", en:"It was a complex project with many moving parts.", ar:"كان مشروع معقد فيه حاجات كتير بتتحرك مع بعض", ex:"<mark>It was a complex project with many moving parts</mark>, and multiple teams were involved.", tip:"‎moving parts‎ = عناصر كتير مترابطة."},
    {k:"ex_89", en:"I'd like to reiterate my enthusiasm for the role.", ar:"حابب أأكد تاني على حماسي للوظيفة", ex:"<mark>I would like to reiterate my excitement and enthusiasm</mark> for the role.", tip:"جملة ختام قوية لما يسألوك ‎Anything else?‎"},
    {k:"ex_96", en:"I have a diverse background in the industry.", ar:"عندي خلفية متنوعة في المجال", ex:"<mark>I have a diverse background in the industry</mark>, starting as an entry-level employee.", tip:"بداية لإجابة ‎previous work experience‎."},
    {k:"ex_96", en:"I led my team to exceed sales targets.", ar:"قُدت فريقي لتعدي أهداف المبيعات", ex:"<mark>I was able to lead my team to exceed sales targets</mark> and increase revenue.", tip:"دور قيادي + نتيجة."}
   ],
   quiz:[
    {type:"mcq", q:"إيه معنى ‎the company's bottom line‎؟", options:["آخر سطر في العقد","صافي أرباح الشركة","أقل موظف"], answer:1, why:"‎bottom line‎ = النتيجة المالية النهائية."},
    {type:"gap", sentence:"I started as an analyst and worked my way ___ to manager.", options:["up","on","in"], answer:0, why:"‎work your way up‎."},
    {type:"order", words:["It","was","a","complex","project","with","many","moving","parts"], answer:"It was a complex project with many moving parts", why:"وصف لمشروع صعب."},
    {type:"mcq", q:"آخر المقابلة قالولك ‎Anything else you'd like to share?‎:", options:["No. Bye.","I'd like to reiterate my enthusiasm for the role and how well my experience fits it.","When will I get the salary?"], answer:1, why:"ختام إيجابي بيأكد اهتمامك."},
    {type:"mcq", q:"أحسن وصف لخبرة طويلة:", options:["I worked in many places.","I have a diverse background in sales, and I led my team to exceed targets.","I worked for 15 years."], answer:1, why:"تنوع + قيادة + نتيجة."}
   ],
   match:[["bottom line","صافي الربح"],["entry-level","وظيفة مبتدئ"],["track record","سجل الإنجازات"],["reiterate","يأكد تاني"],["asset","ميزة / إضافة قيمة"],["revenue","الإيرادات"]],
   roleplay:{ scene:"مقابلة لوظيفة Director في Tech Genius Corp. قدامك مدير المنتجات ومدير الـ HR.",
    turns:[
     {them:"Can you tell us about your background in the industry?"},
     {you:[{t:"I have a diverse background. I started as an entry-level analyst and worked my way up to product manager, launching several successful products.",ok:1,fb:"مسار واضح ونتايج."},{t:"It's on my LinkedIn.",ok:0,fb:"قولها بنفسك."},{t:"I've done everything.",ok:0,fb:"مبالغة من غير تفاصيل."}]},
     {them:"Tell us about a challenging project."},
     {you:[{t:"It was a complex project with many moving parts. I set a clear plan and checked in with all teams regularly.",ok:1,fb:"وصفت التحدي وإزاي اتعاملت معاه."},{t:"All my projects are easy.",ok:0,fb:"مش مصدقة، وبتضيّع فرصة."},{t:"It failed, so I left.",ok:0,fb:"قصة سلبية من غير درس."}]},
     {them:"Is there anything else you'd like us to know?"},
     {you:[{t:"I'd like to reiterate my enthusiasm for this role. I believe my experience aligns well with it.",ok:1,fb:"ختام زي الكتاب بالظبط."},{t:"No.",ok:0,fb:"ختام ضعيف."},{t:"How many days off do I get?",ok:0,fb:"مش وقته."}]}
    ]}
 },
 { id:"ex2", part:"Experienced candidates", art:"deal", minutes:20,
   title:"Personality & handling conflict", ar:"شخصيتك وإدارة الخلافات",
   desc:"Describe yourself with the right adjectives and handle difficult situations and disagreements professionally.",
   reading:["ex_99","ex_102"],
   cards:[
    {k:"ex_99", en:"I consider myself a natural leader.", ar:"بعتبر نفسي قائد بالفطرة", ex:"<mark>I consider myself a natural leader</mark>, and I have experience managing teams.", tip:"قولها ومعاها مثال."},
    {k:"ex_99", en:"I can express myself clearly, both verbally and in writing.", ar:"بعرف أعبّر عن نفسي بوضوح كلام وكتابة", ex:"Communication is key for me. <mark>I am able to express myself clearly and effectively, both verbally and in writing</mark>.", tip:"‎verbally‎ = بالكلام."},
    {k:"ex_102", en:"I try to understand the root cause of the problem.", ar:"بحاول أفهم السبب الأساسي للمشكلة", ex:"<mark>I try to understand the root cause of the problem</mark> and identify potential solutions.", tip:"‎root cause‎ = أصل المشكلة."},
    {k:"ex_102", en:"I try to stay calm and composed.", ar:"بحاول أفضل هادي ومتماسك", ex:"When faced with difficult situations, <mark>I try to stay calm and composed</mark>.", tip:"‎composed‎ = مسيطر على أعصابه."},
    {k:"ex_102", en:"I avoid getting defensive or personal.", ar:"بتجنب إني أدافع بعصبية أو آخدها على نفسي", ex:"I remain respectful and professional, and <mark>I avoid getting defensive or personal</mark>.", tip:"مفتاح أي خلاف في الشغل."},
    {k:"ex_102", en:"I always strive for a win-win solution.", ar:"دايمًا بدوّر على حل يكسب فيه الطرفين", ex:"<mark>I always strive for a win-win solution.</mark>", tip:"‎win-win‎ = الكل كسبان."},
    {k:"ex_102", en:"We were able to get the project back on track.", ar:"قدرنا نرجّع المشروع لمساره", ex:"As a result, <mark>we were able to get the project back on track</mark> and deliver it on time.", tip:"‎back on track‎ = رجع لمساره الصح."}
   ],
   quiz:[
    {type:"mcq", q:"زميلك مختلف معاك في اتجاه المشروع. أحسن تصرف:", options:["I ignore him.","I try to understand his perspective, stay professional, and look for a win-win solution.","I complain to the manager immediately."], answer:1, why:"ده بالظبط اللي الكتاب بيعلمه."},
    {type:"gap", sentence:"I try to understand the ___ cause of the problem.", options:["root","main","first"], answer:0, why:"‎root cause‎."},
    {type:"order", words:["I","avoid","getting","defensive","or","personal"], answer:"I avoid getting defensive or personal", why:"جملة أساسية في إدارة الخلاف."},
    {type:"mcq", q:"إيه معنى ‎calm and composed‎؟", options:["هادي ومتماسك","ساكت ومتضايق","سريع ومتوتر"], answer:0, why:"‎composed‎ = مسيطر على نفسه."},
    {type:"mcq", q:"عميل غضبان جدًا من المنتج. أول خطوة:", options:["I told him he was wrong.","I listened carefully and empathized with his situation.","I hung up."], answer:1, why:"الاستماع والتعاطف الأول، بعدين الحل."}
   ],
   match:[["root cause","السبب الأساسي"],["composed","هادي ومتماسك"],["defensive","بيدافع بعصبية"],["win-win","مكسب للطرفين"],["stakeholders","أصحاب المصلحة"],["back on track","رجع لمساره"]],
   roleplay:{ scene:"المحاورين بيسألوك عن شخصيتك وإزاي بتتعامل مع المواقف الصعبة والخلافات.",
    turns:[
     {them:"How would you describe yourself?"},
     {you:[{t:"I consider myself a natural leader. I can express myself clearly, both verbally and in writing, and I'm highly organized.",ok:1,fb:"صفات واضحة ومهنية."},{t:"I'm a nice guy.",ok:0,fb:"مش كفاية في مقابلة قيادية."},{t:"Ask my friends.",ok:0,fb:"اتكلم عن نفسك."}]},
     {them:"How do you handle a project that's behind schedule?"},
     {you:[{t:"I stay calm, find the root cause, and set clear goals and weekly meetings to get the project back on track.",ok:1,fb:"خطوات واضحة ونتيجة."},{t:"I panic.",ok:0,fb:"عكس المطلوب."},{t:"I blame the team.",ok:0,fb:"مش قيادة."}]},
     {them:"And if you disagree with your manager?"},
     {you:[{t:"I try to understand their perspective, avoid getting defensive or personal, and look for a win-win solution.",ok:1,fb:"ناضج ومحترف."},{t:"I do it my way anyway.",ok:0,fb:"بيبين إنك مش بتشتغل في فريق."},{t:"I quit.",ok:0,fb:"رد فعل مبالغ فيه."}]}
    ]}
 },
 { id:"ex3", part:"Experienced candidates", art:"laptop", minutes:18,
   title:"Staying current, priorities & goals", ar:"متابعة المجال والأولويات والأهداف",
   desc:"Explain how you keep up with your industry, how you juggle priorities, and where your career is heading.",
   reading:["ex_108","ex_115"],
   cards:[
    {k:"ex_108", en:"I stay current by reading industry news and publications.", ar:"بتابع جديد المجال من الأخبار والمنشورات المتخصصة", ex:"<mark>I stay current by regularly reading industry-related news and publications</mark>.", tip:"‎stay current‎ = تفضل مواكب."},
    {k:"ex_108", en:"I keep an eye on the market.", ar:"عيني دايمًا على السوق", ex:"To stay informed, <mark>I keep an eye on the market</mark> by following industry trends.", tip:"‎keep an eye on‎ = تتابع باستمرار."},
    {k:"ex_108", en:"I took a data-driven approach.", ar:"اتعاملت بأسلوب مبني على البيانات", ex:"<mark>I took a data-driven approach</mark> to analyzing the situation.", tip:"بيبين إنك بتقرر بالأرقام مش بالإحساس."},
    {k:"ex_108", en:"I implemented a daily check-in meeting.", ar:"عملت اجتماع متابعة يومي قصير", ex:"<mark>I implemented a daily check-in meeting</mark> to make sure everyone was on the same page.", tip:"‎check-in‎ = متابعة سريعة."},
    {k:"ex_115", en:"I analyze the urgency and importance of each task.", ar:"بحلل مدى استعجال وأهمية كل مهمة", ex:"To handle competing priorities, <mark>I first analyze the urgency and importance of each task</mark>.", tip:"أساس ‎Eisenhower Matrix‎."},
    {k:"ex_115", en:"I focus on the 20% of tasks that have the greatest impact.", ar:"بركز على الـ ٢٠٪ من المهام اللي ليها أكبر تأثير", ex:"Using the 80/20 rule, <mark>I focus on the 20% of tasks that will have the greatest impact</mark>.", tip:"قاعدة باريتو ٨٠/٢٠."},
    {k:"ex_115", en:"My long-term goal is to advance to a leadership position.", ar:"هدفي على المدى البعيد إني أوصل لمنصب قيادي", ex:"<mark>My long-term career goal is to advance to a leadership position</mark> within the company.", tip:"إجابة مباشرة لسؤال الأهداف."}
   ],
   quiz:[
    {type:"mcq", q:"إزاي بتتابع جديد مجالك؟", options:["I don't need to.","I read industry news, attend webinars, and follow key influencers on social media.","My friends tell me."], answer:1, why:"مصادر محددة ومتنوعة."},
    {type:"gap", sentence:"I keep an eye ___ the market.", options:["in","on","at"], answer:1, why:"‎keep an eye on‎."},
    {type:"order", words:["I","took","a","data-driven","approach"], answer:"I took a data-driven approach", why:"بيبين إنك بتقرر بالبيانات."},
    {type:"mcq", q:"قاعدة ٨٠/٢٠ معناها:", options:["تشتغل ٨٠ ساعة","تركز على الـ ٢٠٪ من المهام اللي ليها ٨٠٪ من التأثير","تاخد ٢٠٪ زيادة"], answer:1, why:"قاعدة باريتو."},
    {type:"mcq", q:"الفريق مش ملحّق على المواعيد. حل من الكتاب:", options:["I set clear goals and regular check-ins.","I work alone.","I extend every deadline."], answer:0, why:"أهداف واضحة ومتابعة منتظمة."}
   ],
   match:[["stay current","يفضل مواكب"],["webinar","ندوة أونلاين"],["newsletter","نشرة دورية"],["data-driven","مبني على البيانات"],["priority","أولوية"],["check-in","متابعة سريعة"]],
   roleplay:{ scene:"آخر أسئلة مقابلة وظيفة قيادية: متابعة المجال، والأولويات، والأهداف.",
    turns:[
     {them:"How do you keep up to date with changes in the industry?"},
     {you:[{t:"I stay current by reading industry news, attending webinars and conferences, and staying active in my professional network.",ok:1,fb:"إجابة كاملة من الكتاب."},{t:"Google.",ok:0,fb:"مختصرة جدًا."},{t:"I don't have time.",ok:0,fb:"بيبين إنك مش مواكب."}]},
     {them:"How do you handle competing priorities?"},
     {you:[{t:"I analyze the urgency and importance of each task, make a plan, and keep my team and stakeholders informed.",ok:1,fb:"منهجية واضحة."},{t:"I do whatever my boss says first.",ok:0,fb:"مفيش تفكير منك."},{t:"I work until midnight.",ok:0,fb:"مش إدارة أولويات."}]},
     {them:"What are your long-term career goals?"},
     {you:[{t:"My long-term goal is to advance to a leadership position, and this role lets me take on more responsibility.",ok:1,fb:"هدف واضح ومرتبط بالوظيفة."},{t:"To have your job.",ok:0,fb:"ممكن تتفهم غلط."},{t:"I'll see.",ok:0,fb:"بيبين غياب رؤية."}]}
    ]}
 }
];
