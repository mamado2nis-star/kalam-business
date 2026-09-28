/* ============================================================
   PILOT FEATURES
   WORDS   — Word Spotlight: one hard/real-world word, 3 places it lives (email, chat, meeting),
             the words it goes with, the common Arabic-speaker mistake, and how formal it is.
   UPGRADE — Say it like a pro: a sentence that sounds translated from Arabic → the natural version.
   JARGON  — Office talk decoder: what people say at work vs what they mean.
   ============================================================ */
const WORDS={
 pi2:[
  {w:"roll out", pos:"verb", ar:"يطلق / يبدأ تطبيق حاجة على مراحل", def:"to launch something new (a product, a system, a campaign) — often step by step.",
   book:"I've worked closely with our marketing and sales teams to roll out critical marketing campaigns.",
   uses:[["Email","We'll roll out the new pricing to all clients on 1 March."],["Chat","heads-up: HR is rolling out the new leave app tomorrow 🚀"],["Meeting","Let's roll it out in Cairo first, then Alex next month."]],
   goes:["roll out a campaign","roll out a system","a phased roll-out"],
   dont:["We will make the launching of the system."],doo:["We will roll out the system."], level:2},
  {w:"phenomenal", pos:"adjective", ar:"هايل / استثنائي", def:"extremely good — much better than expected.",
   book:"The customer response was phenomenal, and we were able to increase sales by 15%.",
   uses:[["Email","Thank you all — the response to the launch has been phenomenal."],["Chat","phenomenal work on the deck yesterday 👏"],["Meeting","Q3 results were phenomenal, especially in retail."]],
   goes:["a phenomenal response","phenomenal results","phenomenal growth"],
   dont:["The response was very very good."],doo:["The response was phenomenal."], level:2},
  {w:"leads", pos:"noun", ar:"عملاء محتملين", def:"people or companies who might buy from you — the start of a sale.",
   book:"A blog post I recently wrote has reached 1,000 organic visits, resulting in 19 leads and 6 sales.",
   uses:[["Email","The webinar generated 40 new leads; I've shared them with the sales team."],["Chat","any warm leads from the exhibition?"],["Meeting","Our goal this quarter is 200 qualified leads."]],
   goes:["generate leads","qualified leads","follow up on a lead"],
   dont:["We got 19 clients maybe."],doo:["We got 19 leads."], level:2},
  {w:"track record", pos:"noun", ar:"سجل إنجازات / تاريخك في الشغل", def:"your history of results — proof that you have done it before.",
   book:"Employers are really looking for a track record, for that history.",
   uses:[["Email","The supplier has a strong track record with government projects."],["Chat","she's got a great track record in B2B sales"],["Meeting","I have a proven track record of hitting targets."]],
   goes:["a proven track record","a strong track record","a track record of + -ing"],
   dont:["I have a good history of work."],doo:["I have a proven track record of delivering results."], level:3},
  {w:"restructure", pos:"verb", ar:"يعيد الهيكلة", def:"to change how a company is organised — usually to save money or change direction.",
   book:"My company is pursuing a different strategy, restructuring, or being acquired by another organization.",
   uses:[["Email","As part of the restructuring, the two teams will merge in April."],["Chat","did you hear finance is being restructured?"],["Meeting","After the company restructured, my role no longer existed."]],
   goes:["restructure a department","a company restructuring","go through a restructuring"],
   dont:["They fired me because of the new organization."],doo:["My role was eliminated when the company restructured."], level:3},
  {w:"hybrid", pos:"adjective", ar:"هجين: جزء من البيت وجزء من المكتب", def:"a way of working where you spend some days in the office and some days at home.",
   book:"I'm looking for a hybrid, remote or in-office setup, or hours my current job doesn't allow.",
   uses:[["Email","The role is hybrid: three days in the office, two from home."],["Chat","are you fully remote or hybrid?"],["Meeting","We're moving to a hybrid model from next month."]],
   goes:["hybrid role","hybrid work","a hybrid model"],
   dont:["I want to work some days from my house."],doo:["I'm looking for a hybrid role."], level:1}
 ]
};
const UPGRADE={
 pi2:[
  {plain:"I made the marketing in my old company.", ar:"كنت عامل الماركتنج في شركتي القديمة", pro:["In my previous role, I was responsible for marketing.","I was the marketing in my old company.","I did marketing things before."], a:0, why:"‎made the marketing‎ ترجمة حرفية. قول ‎was responsible for‎."},
  {plain:"I am working in this company since 3 years.", ar:"بشتغل في الشركة دي من ٣ سنين", pro:["I am working here since 3 years.","I've been with the company for three years.","I work here from 3 years."], a:1, why:"مدة مستمرة لحد دلوقتي = ‎have been … for‎."},
  {plain:"My boss is very bad, so I want to go.", ar:"مديري وحش فعايز أمشي", pro:["My boss is terrible, so I'm leaving.","My manager and I have different working styles, and I'm looking for a more collaborative environment.","I hate my boss."], a:1, why:"في المقابلة ماتنتقدش مديرك. قولها بشكل مهني."},
  {plain:"We made the sales bigger 15%.", ar:"كبّرنا المبيعات ١٥٪", pro:["We increased sales by 15%.","We made sales more 15%.","Sales became big 15%."], a:0, why:"‎increase by‎ + النسبة."},
  {plain:"The company closed my job because no money.", ar:"الشركة لغت وظيفتي عشان مفيش فلوس", pro:["They kicked me out.","The company faced financial difficulties and had to eliminate my role.","No money, so no job."], a:1, why:"‎eliminate my role‎ محترمة ومن غير لوم."},
  {plain:"I want a bigger position.", ar:"عايز منصب أكبر", pro:["I want a bigger chair.","I'm ready for a more senior role.","Give me a higher job."], a:1, why:"‎a more senior role‎ هي الطريقة الطبيعية."}
 ]
};
const JARGON=[
 {t:"circle back", m:"return to a topic later", ar:"نرجع للموضوع ده بعدين", eg:"Let's circle back on the budget after lunch.", ch:"meeting"},
 {t:"loop someone in", m:"add someone to the conversation or email", ar:"دخّل فلان معانا في الموضوع", eg:"Can you loop in Sara from finance?", ch:"email"},
 {t:"touch base", m:"have a short talk to check how things are", ar:"نتواصل سريع نطمن", eg:"Let's touch base on Thursday.", ch:"chat"},
 {t:"heads-up", m:"an early warning", ar:"تنبيه مسبق / خلي بالك", eg:"Just a heads-up: the client is coming at 10.", ch:"chat"},
 {t:"ping", m:"send a quick message", ar:"ابعتلي رسالة سريعة", eg:"Ping me when the file is ready.", ch:"chat"},
 {t:"bandwidth", m:"time or energy to take on more work", ar:"عندك وقت ومساحة لشغل زيادة", eg:"I don't have the bandwidth for this project this week.", ch:"meeting"},
 {t:"action items", m:"tasks agreed in a meeting", ar:"المهام المطلوبة بعد الاجتماع", eg:"I'll send the action items after the call.", ch:"email"},
 {t:"deliverables", m:"the things you must hand in", ar:"المطلوب تسليمه", eg:"The deliverables are due on Friday.", ch:"email"},
 {t:"EOD", m:"end of the working day", ar:"آخر اليوم", eg:"Can you send it by EOD?", ch:"chat"},
 {t:"OOO", m:"out of office", ar:"مش في المكتب / أجازة", eg:"I'm OOO until Sunday.", ch:"email"},
 {t:"on my radar", m:"I'm aware of it and will deal with it", ar:"في بالي ومتابعه", eg:"The invoice issue is on my radar.", ch:"chat"},
 {t:"take it offline", m:"discuss it privately, not in this meeting", ar:"نتكلم فيه بعد الاجتماع لوحدنا", eg:"Good point — let's take it offline.", ch:"meeting"},
 {t:"quick win", m:"an easy improvement with fast results", ar:"مكسب سريع وسهل", eg:"Fixing the signup form is a quick win.", ch:"meeting"},
 {t:"low-hanging fruit", m:"the easiest tasks to do first", ar:"الحاجات السهلة اللي نبدأ بيها", eg:"Let's start with the low-hanging fruit.", ch:"meeting"},
 {t:"a hard stop", m:"I must leave at an exact time", ar:"لازم أمشي في معاد محدد", eg:"I have a hard stop at 3.", ch:"meeting"},
 {t:"sync", m:"a short meeting to align", ar:"اجتماع سريع نظبط فيه الدنيا", eg:"Can we have a quick sync tomorrow?", ch:"chat"},
 {t:"get the ball rolling", m:"start something", ar:"نبدأ ونحرك الموضوع", eg:"Let's get the ball rolling on the new website.", ch:"meeting"},
 {t:"ballpark figure", m:"a rough estimate", ar:"رقم تقريبي", eg:"Can you give me a ballpark figure for the project?", ch:"email"},
 {t:"on the same page", m:"agree and understand the same thing", ar:"متفقين وفاهمين نفس الحاجة", eg:"Let's make sure we're all on the same page.", ch:"meeting"},
 {t:"follow up", m:"contact again to check progress", ar:"أتابع معاك", eg:"I'll follow up with the supplier tomorrow.", ch:"email"}
];
/* MINI STORY — AJ Hoge style: a short story in the learner's own industry that reuses the lesson's words,
   then asks many quick, easy questions so the words repeat again and again. */
const STORY={
 pi2:{ title:"The hospital that couldn't lose power", ar:"المستشفى اللي ماينفعش النور يقطع فيها",
  scene:"Karim is a field engineer at a power-solutions company in Cairo. He installs UPS systems and battery banks.",
  lines:[
   "Karim has a strong track record. For five years, he was responsible for installing UPS systems in hospitals and data centres.",
   "Last year, his company won a huge project: a 400 kVA UPS for a big hospital in Nasr City.",
   "Karim was in charge of the whole project, ensuring that the operating rooms never lost power — not even for one second.",
   "The old system used lead-acid batteries. They were heavy, hot and needed a lot of maintenance.",
   "So Karim's team decided to roll out lithium-ion batteries, one floor at a time.",
   "The hospital's response was phenomenal. Power cuts stopped being a problem, and the maintenance costs fell by 30%.",
   "Other hospitals heard about it. In three months, the project generated twenty new leads for the sales team.",
   "Then the company restructured. Karim's department was merged with sales, and his role changed.",
   "He wasn't installing systems any more. He was writing reports all day.",
   "Karim loved his colleagues, but he felt there were no longer growth opportunities for him.",
   "So now he is ready for a new challenge: a senior role at a solar company that offers hybrid work."
  ],
  qa:[
   {q:"Is Karim a sales manager?", a:"No, he isn't. He's a field engineer. He installs UPS systems and battery banks.", opts:["Yes","No"], k:1},
   {q:"Does Karim have a weak track record?", a:"No! He has a strong track record — five years in hospitals and data centres.", opts:["Weak","Strong"], k:1},
   {q:"What was he responsible for?", a:"He was responsible for installing UPS systems in hospitals and data centres.", opts:["Installing UPS systems","Selling cars"], k:0},
   {q:"How big was the hospital UPS?", a:"It was 400 kVA — a huge project.", opts:["40 kVA","400 kVA"], k:1},
   {q:"Who was in charge of the project?", a:"Karim was in charge of the whole project.", opts:["Karim","The hospital director"], k:0},
   {q:"Could the operating rooms lose power for one second?", a:"No, not even for one second. Karim was ensuring that.", opts:["Yes, one second is OK","No, not even one second"], k:1},
   {q:"Were the old lead-acid batteries light?", a:"No, they weren't light. They were heavy, hot and needed a lot of maintenance.", opts:["Light","Heavy"], k:1},
   {q:"Did the team roll out the new batteries all at once?", a:"No. They rolled them out one floor at a time.", opts:["All at once","One floor at a time"], k:1},
   {q:"How was the hospital's response?", a:"It was phenomenal! Power cuts stopped and maintenance costs fell by 30%.", opts:["Phenomenal","Terrible"], k:0},
   {q:"How many leads did the project generate?", a:"Twenty new leads for the sales team, in three months.", opts:["Two","Twenty"], k:1},
   {q:"Why did Karim's role change?", a:"Because the company restructured and merged his department with sales.", opts:["The company restructured","He was lazy"], k:0},
   {q:"Why does he want to leave?", a:"There were no longer growth opportunities for him, so he's ready for a new challenge.", opts:["He hates his colleagues","No more growth opportunities"], k:1},
   {q:"What kind of work does the new company offer?", a:"Hybrid work — some days in the office, some days from home.", opts:["Hybrid work","Night shifts only"], k:0}
  ],
  pov:"Now tell it as Karim, in the past: \"I was responsible for installing UPS systems… I was in charge of a 400 kVA project… The response was phenomenal…\" — say it out loud."
 }
};
