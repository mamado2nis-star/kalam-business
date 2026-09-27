/* ============================================================
   Kalam Business — Unit: Job Interview · Phone Interview
   Source: Main Book, Chapter 1, pages 9–31 (6 audio tracks).
   Same shape as COURSE units in business-english/index.html:
   each lesson = cards (learn) → quiz (practice) → match (game) → roleplay (speak).
   `audio` points at the book track for that lesson (optional; the player
   can show a "listen to the book" button when it exists).
   ============================================================ */
const UNIT_PHONE_INTERVIEW = { id:"u0", time:"08:00", title:"Job Interview · Phone Screening", ar:"مقابلة الشغل: المكالمة الأولى", level:"B1",
 lessons:[
 { id:"pi1", title:"Taking the call & talking about yourself", ar:"ترد على المكالمة وتتكلم عن نفسك",
   tracks:[{"t": "Story one: the phone call (p. 9–11)", "src": "audio/phone/book-p9.mp3"}, {"t": "Asking to delay & talking about yourself (p. 12–17)", "src": "audio/phone/book-p12.mp3"}],
   cards:[
    {en:"Is it OK if I call you back?", ar:"ينفع أكلمك تاني؟", ex:"I'm just in the middle of something. <mark>Is it OK if I call you back</mark> in about thirty minutes?", tip:"لو المكالمة جت في وقت مش مناسب، أجّلها بأدب وحدد وقت.", clip:"audio/phone/pi1-1.mp3"},
    {en:"I'm a little tied up just now.", ar:"أنا مشغول شوية دلوقتي", ex:"<mark>I'm a little tied up just now</mark>, so is it OK if I call you back?", tip:"‎tied up‎ = مشغول. أرق من ‎I'm busy‎.", clip:"audio/phone/pi1-2.mp3"},
    {en:"Can you tell me a little about yourself?", ar:"ممكن تحكيلي شوية عن نفسك؟", ex:"Just to start off with a general question: <mark>can you tell me a little about yourself?</mark>", tip:"أول سؤال في أغلب المقابلات. جهّز إجابة ٣٠–٦٠ ثانية.", clip:"audio/phone/pi1-3.mp3"},
    {en:"I thrive on new challenges.", ar:"بحب التحديات الجديدة وبتألق فيها", ex:"I adapt well to new situations and <mark>I thrive on new challenges</mark>.", tip:"‎thrive on‎ + اسم: بتنجح وبتنبسط بحاجة معينة.", clip:"audio/phone/pi1-4.mp3"},
    {en:"I'm goal-oriented and ambitious.", ar:"أنا بشتغل بأهداف وطموح", ex:"<mark>I'm goal-oriented and ambitious</mark>; I welcome stretch targets.", tip:"‎stretch targets‎ = أهداف أعلى من العادي.", clip:"audio/phone/pi1-5.mp3"},
    {en:"I'm a self-starter.", ar:"بتحرك لوحدي من غير ما حد يزقني", ex:"<mark>I'm a self-starter</mark> and I can work without supervision.", tip:"صفة محبوبة جدًا عند المديرين.", clip:"audio/phone/pi1-6.mp3"},
    {en:"I'm detail-oriented.", ar:"بهتم بالتفاصيل", ex:"<mark>I'm detail-oriented</mark>; I pay attention to all the details of my job.", tip:"قول مثال يثبت ده في المقابلة.", clip:"audio/phone/pi1-7.mp3"}
   ],
   quiz:[
    {type:"mcq", q:"الـ HR اتصلت وانت بتتعشى. أنسب رد:", options:["I'm eating. Call later.","I'm just about to sit down for dinner. Do you mind if I call you back in half an hour?","No time, sorry."], answer:1, why:"مؤدب، وبيحدد وقت، وبيبين إنك مهتم."},
    {type:"gap", sentence:"I adapt well to new situations and thrive ___ new challenges.", options:["in","on","with"], answer:1, why:"التعبير الثابت ‎thrive on‎."},
    {type:"order", words:["I","can","work","without","supervision"], answer:"I can work without supervision", why:"بتقول إنك مستقل في شغلك."},
    {type:"mcq", q:"إيه معنى ‎resourceful‎؟", options:["عنده موارد مالية كتير","بيعرف يلاقي حلول باللي متاح","بيحب القراية"], answer:1, why:"‎resourceful‎ = بيتصرف ويلاقي حل بالإمكانيات الموجودة."},
    {type:"mcq", q:"أحسن بداية لـ ‎Tell me about yourself‎ لخريج جديد:", options:["I was born in 1999 in Cairo…","I am an enthusiastic engineering graduate with freelance experience.","I don't know what to say."], answer:1, why:"ابدأ بمين انت مهنيًا، مش قصة حياتك."}
   ],
   match:[["self-starter","بيبدأ لوحده"],["detail-oriented","مهتم بالتفاصيل"],["resourceful","بيتصرف بالمتاح"],["reliable","يُعتمد عليه"],["punctual","ملتزم بالمواعيد"],["team player","بيحب الشغل الجماعي"]],
   roleplay:{ scene:"الساعة ٨ بالليل. Susan من الـ HR بتتصل بيك تعمل screening interview وانت قاعد تتعشى.",
     turns:[
      {them:"Hello, this is Susan from Human Resources. Have you got time to answer a few questions about your application?"},
      {you:[{t:"I'm just about to sit down for dinner. Do you mind if I call you back in half an hour?",ok:1,fb:"ممتاز: مؤدب وحددت وقت."},{t:"Not now.",ok:0,fb:"جافة، وممكن تضيّع الفرصة."},{t:"Who gave you my number?",ok:0,fb:"انت اللي قدّمت! الرد ده غريب."}]},
      {them:"Thanks for calling back. Can you tell me a little about yourself?"},
      {you:[{t:"I'm an enthusiastic engineering graduate with freelance experience. I'm a team player and I thrive on new challenges.",ok:1,fb:"مختصر ومهني، ومليان صفات قوية."},{t:"I like football and sleeping.",ok:0,fb:"مش ده المقصود في مقابلة شغل."},{t:"Everything is in my CV.",ok:0,fb:"بتضيّع فرصة تبيع نفسك."}]},
      {them:"And what are you looking for in your first job?"},
      {you:[{t:"A position where I can use my skills and grow. Professional development is really important to me.",ok:1,fb:"بتبين طموح ورغبة في التعلم."},{t:"Just money.",ok:0,fb:"صريح بزيادة وبيعطي انطباع سيء."},{t:"Anything is fine.",ok:0,fb:"بيبين إنك مش عارف انت عايز إيه."}]}
     ]}
 },
 { id:"pi2", title:"Your experience & why you're moving on", ar:"خبرتك وليه عايز تغيّر شغلك",
   tracks:[{"t": "Speaking about previous jobs (p. 18–20)", "src": "audio/phone/book-p18.mp3"}, {"t": "Why are you looking for a new job? (p. 21–24)", "src": "audio/phone/book-p21.mp3"}],
   cards:[
    {en:"I was responsible for…", ar:"كنت مسؤول عن…", ex:"In my role, <mark>I was responsible for</mark> directing a team of six.", tip:"بعدها اسم أو فعل بـ ‎-ing‎.", clip:"audio/phone/pi2-1.mp3"},
    {en:"I was in charge of…, ensuring that…", ar:"كنت ماسك… وبتأكد إن…", ex:"<mark>I was in charge of</mark> logistics, <mark>ensuring that</mark> every order shipped on time.", tip:"بيوضح المسؤولية والنتيجة مع بعض.", clip:"audio/phone/pi2-2.mp3"},
    {en:"My experience includes a variety of…", ar:"خبرتي فيها أنواع كتير من…", ex:"<mark>My experience includes a variety of</mark> consulting and research projects.", tip:"مفيدة لو خبرتك متنوعة.", clip:"audio/phone/pi2-3.mp3"},
    {en:"We were able to increase sales by 15%.", ar:"قدرنا نزود المبيعات ١٥٪", ex:"The campaign was a success: <mark>we were able to increase sales by 15%</mark>.", tip:"الأرقام بتقنع أكتر من أي وصف.", clip:"audio/phone/pi2-4.mp3"},
    {en:"I'm ready for a new challenge.", ar:"أنا جاهز لتحدي جديد", ex:"I loved my team, but <mark>I'm ready for a new challenge</mark> in my career.", tip:"سبب إيجابي لترك الشغل.", clip:"audio/phone/pi2-5.mp3"},
    {en:"There are no longer growth opportunities for me.", ar:"مبقاش فيه فرص أتطور", ex:"I love my role and co-workers, but I've come to a point where <mark>there are no longer growth opportunities for me</mark>.", tip:"اتكلم عن المستقبل، ماتشتكيش من الماضي.", clip:"audio/phone/pi2-6.mp3"},
    {en:"The company had to eliminate my job.", ar:"الشركة اضطرت تلغي وظيفتي", ex:"In my last role, the company suffered some financial hardships and <mark>had to eliminate my job</mark>, along with many others.", tip:"طريقة محترمة تقول إنك اتسرّحت، من غير لوم.", clip:"audio/phone/pi2-7.mp3"}
   ],
   quiz:[
    {type:"mcq", q:"سألوك ‎Why did you leave your last job?‎ ومديرك كان صعب. أنسب إجابة:", options:["My boss was terrible.","My boss and I had different work styles, and I thrive in a more collaborative environment.","I hated everyone there."], answer:1, why:"ماتتكلمش وحش عن مديرك القديم أبدًا. خليك دبلوماسي."},
    {type:"gap", sentence:"I have spent five years ___ a sales engineer.", options:["as","like","for"], answer:0, why:"‎as‎ + وظيفة."},
    {type:"order", words:["My","years","of","experience","have","prepared","me","well"], answer:"My years of experience have prepared me well", why:"جملة قوية تربط خبرتك بالوظيفة."},
    {type:"mcq", q:"أي جملة أقوى في المقابلة؟", options:["I did marketing.","I worked on campaigns.","I ran a campaign that increased sales by 15%."], answer:2, why:"إنجاز محدد وبرقم."},
    {type:"gap", sentence:"I was in charge of the team, ___ that every project finished on time.", options:["ensure","ensuring","ensured"], answer:1, why:"‎ensuring that‎ بتشرح النتيجة."}
   ],
   match:[["responsible for","مسؤول عن"],["in charge of","ماسك / مسؤول عن"],["restructure","يعيد الهيكلة"],["relocate","ينقل مكان سكنه"],["growth opportunity","فرصة تطور"],["collaborative","بيشجع التعاون"]],
   roleplay:{ scene:"مكالمة screening لوظيفة Senior Sales. المحاور بيسأل عن خبرتك وليه عايز تمشي من شغلك الحالي.",
     turns:[
      {them:"Can you tell me about your previous jobs?"},
      {you:[{t:"For the last four years I've worked as a sales engineer. I was responsible for key accounts, and we increased sales by 15%.",ok:1,fb:"مدة ومسؤولية ونتيجة برقم. ممتاز."},{t:"I worked in many companies.",ok:0,fb:"عامة جدًا. قول الوظيفة والإنجاز."},{t:"Sales. It was OK.",ok:0,fb:"قصيرة وماتبيعش نفسك."}]},
      {them:"So why are you looking for a new job?"},
      {you:[{t:"I've learned a lot, but I'm ready for a more senior role and a new challenge.",ok:1,fb:"سبب إيجابي وبيبص للمستقبل."},{t:"My manager is useless.",ok:0,fb:"ماتنتقدش مديرك أبدًا في مقابلة."},{t:"Honestly, I'm bored.",ok:0,fb:"قولها بشكل إيجابي: ‎I'm looking for a new challenge‎."}]},
      {them:"I see. Was it a difficult decision?"},
      {you:[{t:"Yes, I love the people there, but I want to keep growing, so I think it's the right choice.",ok:1,fb:"صادق ومتوازن."},{t:"No, I just want to leave.",ok:0,fb:"بيبان إنك مش مستقر."},{t:"Why do you ask?",ok:0,fb:"دفاعي وملوش لازمة."}]}
     ]}
 },
 { id:"pi3", title:"Salary talk & your questions", ar:"الكلام عن المرتب وأسئلتك انت",
   tracks:[{"t": "Salary requirements (p. 25–28)", "src": "audio/phone/book-p25.mp3"}, {"t": "Why us? & your questions (p. 29–31)", "src": "audio/phone/book-p29.mp3"}],
   cards:[
    {en:"I'm looking for somewhere between … and …", ar:"أنا متوقع حاجة ما بين … و…", ex:"<mark>I'm looking for somewhere between</mark> 25,000 and 30,000 a month.", tip:"ادّي range مش رقم واحد، وخلي أقل رقم فيه مقبول ليك.", clip:"audio/phone/pi3-1.mp3"},
    {en:"I'm open to negotiating based on the entire package.", ar:"مستعد نتفاوض حسب الباكدج كلها", ex:"<mark>I'm open to negotiating based on the entire compensation package</mark>.", tip:"‎package‎ = المرتب + المزايا.", clip:"audio/phone/pi3-2.mp3"},
    {en:"Benefits matter to me as well.", ar:"المزايا مهمة ليا كمان", ex:"<mark>Benefits matter to me as well</mark>: training, insurance and transport.", tip:"بتفتح باب إنك تقبل مرتب أقل مقابل مزايا أكتر.", clip:"audio/phone/pi3-3.mp3"},
    {en:"Could you give me an idea of the salary range?", ar:"ممكن تديني فكرة عن رينج المرتب؟", ex:"I don't have a specific figure in mind. <mark>Could you give me an idea of the salary range?</mark>", tip:"لو مش عايز تقول رقم الأول.", clip:"audio/phone/pi3-4.mp3"},
    {en:"I've always been a fan of your products.", ar:"طول عمري معجب بمنتجاتكم", ex:"<mark>I've always been a fan of</mark> X Co.'s products, and your focus on quality is what drew me in.", tip:"إجابة لـ ‎Why our company?‎ وضيف سبب حقيقي.", clip:"audio/phone/pi3-5.mp3"},
    {en:"What are the next steps in the process?", ar:"إيه الخطوات الجاية؟", ex:"Thank you. <mark>What are the next steps in the interview process?</mark>", tip:"اسألها دايمًا في آخر المقابلة.", clip:"audio/phone/pi3-6.mp3"},
    {en:"What is the most important indicator of success in this position?", ar:"إيه أهم مؤشر للنجاح في الوظيفة دي؟", ex:"<mark>What is the most important indicator of success in this position?</mark>", tip:"سؤال ذكي بيبين إنك بتفكر في النتايج.", clip:"audio/phone/pi3-7.mp3"}
   ],
   quiz:[
    {type:"mcq", q:"سألوك عن المرتب ومش عايز تقول رقم الأول:", options:["Whatever you pay.","I don't have a specific figure. Could you give me an idea of the range for this position?","That's a secret."], answer:1, why:"بترجّع السؤال بأدب وتعرف الرينج الأول."},
    {type:"gap", sentence:"I'm open to negotiating based on the entire compensation ___.", options:["package","box","price"], answer:0, why:"‎compensation package‎ = المرتب + المزايا."},
    {type:"order", words:["What","are","the","next","steps","in","the","process"], answer:"What are the next steps in the process", why:"سؤال ختام أساسي."},
    {type:"mcq", q:"قالولك ‎Do you have any questions for me?‎. أحسن رد:", options:["No, thanks.","Yes: can you tell me about the team I'd be part of?","How many vacation days do I get?"], answer:1, why:"‎No‎ بيبين عدم اهتمام، وأسئلة الإجازات بدري أوي."},
    {type:"mcq", q:"إيه معنى ‎perks‎؟", options:["مزايا إضافية","خصومات من المرتب","ساعات إضافي"], answer:0, why:"‎perks‎ = مزايا زي عربية، تأمين، تدريب."}
   ],
   match:[["salary range","رينج المرتب"],["benefits","مزايا"],["perks","مزايا إضافية"],["negotiate","يتفاوض"],["shortlisted","اتختار في القايمة المختصرة"],["onboarding","فترة الاستلام والتأهيل"]],
   roleplay:{ scene:"آخر المكالمة. Susan بتسأل عن المرتب المتوقع وبعدين بتسألك لو عندك أسئلة.",
     turns:[
      {them:"Can you tell me a little about your salary expectations for this position?"},
      {you:[{t:"I'm looking for somewhere between 25,000 and 30,000, but benefits matter to me as well, so I'm a bit flexible.",ok:1,fb:"رينج واضح مع مرونة. ده بالظبط اللي في الكتاب."},{t:"As much as possible.",ok:0,fb:"مش احترافية وماتدّيش معلومة."},{t:"50,000 or I won't come.",ok:0,fb:"بتقفل التفاوض من أوله."}]},
      {them:"OK, that's helpful. Why did you choose our company?"},
      {you:[{t:"I've always been a fan of your products and your focus on quality, and I think my skills are a great match for this team.",ok:1,fb:"سبب عن الشركة، وربطته بنفسك."},{t:"You were the first result on Google.",ok:0,fb:"صريحة بزيادة وماتفرقش شركتهم عن غيرها."},{t:"Because I need a job.",ok:0,fb:"بيبين إنك مش مهتم بيهم هما."}]},
      {them:"Great. Have you got any last questions?"},
      {you:[{t:"Yes: what are the next steps in the interview process?",ok:1,fb:"سؤال الختام المثالي."},{t:"No.",ok:0,fb:"دايمًا حضّر سؤال أو اتنين."},{t:"When do I start?",ok:0,fb:"سابق للأحداث شوية."}]}
     ]}
 }]
};
