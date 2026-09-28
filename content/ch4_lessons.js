/* Chapter 4 — Presenting. Each card's k = the book track its phrase comes from. */
const CH4=[
 { id:"pr1", part:"Presenting", art:"chart", minutes:22,
   title:"The sales presentation", ar:"عرض المبيعات لعميل جديد",
   desc:"A full sales presentation: agenda, company overview, services, benefits, pricing and a question from the client.",
   reading:["pr_213"],
   cards:[
    {k:"pr_213", en:"Our agenda today will cover four main topics.", ar:"أجندتنا النهارده فيها ٤ مواضيع أساسية", ex:"<mark>Our agenda today will cover four main topics</mark>.", tip:"قول عدد النقط من الأول، المستمع بيرتاح لما يعرف الطريق."},
    {k:"pr_213", en:"As you can see from this graph…", ar:"زي ما انتو شايفين في الرسم ده…", ex:"In fact, <mark>as you can see from this graph</mark>, our company's market share has steadily increased.", tip:"استخدمها وانت بتشاور على الشريحة."},
    {k:"pr_213", en:"Moving on to the second topic…", ar:"ننتقل للموضوع التاني…", ex:"<mark>Moving on to the second topic</mark>, let me tell you about our fulfillment services.", tip:"جملة انتقال بسيطة بين أجزاء العرض."},
    {k:"pr_213", en:"We pride ourselves on offering personalized solutions.", ar:"بنفتخر إننا بنقدم حلول مخصصة لكل عميل", ex:"<mark>We pride ourselves on offering personalized solutions</mark> tailored to the unique requirements of each client.", tip:"‎pride ourselves on‎ + ‎-ing‎."},
    {k:"pr_213", en:"I want to apologize for not mentioning an important detail.", ar:"بعتذر إني مقلتش تفصيلة مهمة", ex:"But before that, <mark>I want to apologize for not mentioning an important detail</mark>.", tip:"لو نسيت حاجة، ارجعلها بهدوء واعتذر."},
    {k:"pr_213", en:"There are no hidden fees or charges.", ar:"مفيش أي رسوم مخفية", ex:"<mark>There are no hidden fees or charges</mark>; everything is clearly laid out in our pricing plans.", tip:"جملة قوية في أي عرض أسعار."},
    {k:"pr_213", en:"If you have any further questions, please do not hesitate to ask me.", ar:"لو عندكم أي أسئلة، ماتترددوش تسألوني", ex:"In closing, I would like to thank you all for your attention today. <mark>If you have any further questions, please do not hesitate to ask me</mark>.", tip:"ختام مفتوح ومحترم."}
   ],
   quiz:[
    {type:"mcq", q:"عايز تشاور على رسم بياني في العرض:", options:["Look at this picture.","As you can see from this graph, our sales have steadily increased.","This graph is good."], answer:1, why:"الجملة المهنية للإشارة لرسم بياني."},
    {type:"gap", sentence:"We pride ourselves ___ offering personalized solutions.", options:["on","in","with"], answer:0, why:"‎pride ourselves on‎."},
    {type:"order", words:["There","are","no","hidden","fees","or","charges"], answer:"There are no hidden fees or charges", why:"تطمين العميل في الأسعار."},
    {type:"mcq", q:"نسيت تذكر خدمة مهمة وانت في نص العرض:", options:["Oops, I forgot, sorry guys.","I want to apologize for not mentioning an important detail.","(Ignore it.)"], answer:1, why:"اعتذار مهني ورجوع للنقطة."},
    {type:"mcq", q:"إيه معنى ‎cost-effective‎؟", options:["غالي جدًا","اقتصادي وبيوفر فلوس بنتيجة كويسة","مجاني"], answer:1, why:"‎cost-effective‎ = بيدي قيمة كويسة مقابل التكلفة."}
   ],
   match:[["agenda","جدول العرض"],["market share","حصة السوق"],["cost-effective","اقتصادي"],["tailored","مفصّل على المقاس"],["hidden fees","رسوم مخفية"],["accuracy rate","نسبة الدقة"]],
   roleplay:{ scene:"انت بتقدم عرض لشركتك (صيانة UPS) قدام مدير مستشفى. لازم تفتح العرض، وتشاور على الأرقام، وترد على سؤال.",
    turns:[
     {them:"(The hospital team is ready.)"},
     {you:[{t:"Good afternoon, everyone. Thank you for joining me today. Our agenda will cover three main topics: our services, our results and our pricing.",ok:1,fb:"ترحيب + أجندة واضحة."},{t:"So, we fix UPS. Any questions?",ok:0,fb:"مفيش تنظيم."},{t:"I will talk a lot today.",ok:0,fb:"مش جذابة."}]},
     {them:"(You show a chart of response times.)"},
     {you:[{t:"As you can see from this graph, our average response time has dropped from six hours to two hours.",ok:1,fb:"ربطت الرسم برقم واضح."},{t:"This is a graph.",ok:0,fb:"مش بتشرح حاجة."},{t:"Numbers are boring, skip.",ok:0,fb:"ضيعت أقوى دليل."}]},
     {them:"Director: Do you charge extra for emergency visits at night?"},
     {you:[{t:"That's a great question. Emergency visits are included in the contract, and there are no hidden fees or charges.",ok:1,fb:"رد مباشر ومطمّن."},{t:"Maybe, I don't know.",ok:0,fb:"بيضعف الثقة."},{t:"Read the contract.",ok:0,fb:"جاف."}]}
    ]}
 },
 { id:"pr2", part:"Presenting", art:"handshake", minutes:18,
   title:"Opening a presentation", ar:"بداية العرض التقديمي",
   desc:"Greet the audience, state your objective, outline the agenda, say how long it will take and when to ask questions.",
   reading:["pr_218"],
   cards:[
    {k:"pr_218", en:"Thank you for taking the time to join us today.", ar:"شكرًا إنكم خصصتوا وقت وجيتوا النهارده", ex:"<mark>Thank you for taking the time to join us today</mark>.", tip:"بتقدّر وقت الحضور من أول جملة."},
    {k:"pr_218", en:"The objective of today's presentation is to…", ar:"هدف العرض النهارده هو…", ex:"<mark>The objective of today's presentation is to</mark> ___.", tip:"قول الهدف في جملة واحدة."},
    {k:"pr_218", en:"By the end of this presentation, you will have a clear understanding of…", ar:"في آخر العرض هيبقى عندكم فهم واضح لـ…", ex:"<mark>By the end of this presentation, you will have a clear understanding of</mark> ___.", tip:"بتوعد الجمهور بفايدة محددة."},
    {k:"pr_218", en:"I'll be breaking the presentation down into three parts.", ar:"هقسم العرض لـ ٣ أجزاء", ex:"<mark>I'll be breaking the presentation down into three parts</mark>.", tip:"‎break down‎ = يقسّم."},
    {k:"pr_218", en:"I know everyone's time is valuable.", ar:"عارف إن وقت الكل غالي", ex:"<mark>I know everyone's time is valuable</mark>, so I'll try to keep our presentation within a ___-minute time frame.", tip:"جملة بتكسب تعاطف الحضور."},
    {k:"pr_218", en:"Please feel free to raise your hand and ask.", ar:"براحتكم ارفعوا إيدكم واسألوا", ex:"If you have any questions during the presentation, <mark>please feel free to raise your hand and ask</mark>.", tip:"قول سياسة الأسئلة من الأول."},
    {k:"pr_218", en:"If you could hold your questions until the end…", ar:"لو ممكن تأجلوا أسئلتكم للآخر…", ex:"<mark>If you could hold your questions until the end</mark>, we'll have a dedicated Q&A session.", tip:"مؤدبة، وبتحافظ على ترتيب العرض."}
   ],
   quiz:[
    {type:"mcq", q:"عايز تقول للحضور إن العرض هياخد ٢٠ دقيقة:", options:["Our presentation should take about 20 minutes.","I will speak 20 minutes, sit down.","Maybe long, maybe short."], answer:0, why:"واضحة ومهذبة."},
    {type:"gap", sentence:"I'll be breaking the presentation ___ into three parts.", options:["down","up","off"], answer:0, why:"‎break down‎ = يقسّم."},
    {type:"order", words:["Thank","you","for","taking","the","time","to","join","us"], answer:"Thank you for taking the time to join us", why:"أول جملة شكر."},
    {type:"mcq", q:"عايز الأسئلة تبقى في الآخر:", options:["Don't ask me anything.","If you could hold your questions until the end, we'll have a dedicated Q&A session.","No questions now!"], answer:1, why:"طلب مؤدب ومعاه بديل."},
    {type:"mcq", q:"إيه معنى ‎Q&A session‎؟", options:["وقت الأسئلة والأجوبة","استراحة قهوة","اختبار"], answer:0, why:"‎questions and answers‎."}
   ],
   match:[["objective","هدف"],["agenda","أجندة"],["outline","يلخص / يعرض الخطوط العريضة"],["time frame","مدة زمنية"],["concise","مختصر"],["Q&A","أسئلة وأجوبة"]],
   roleplay:{ scene:"بتفتح عرض تدريبي لفريق الصيانة عن بطاريات الليثيوم الجديدة.",
    turns:[
     {them:"(The technicians sit down.)"},
     {you:[{t:"Good morning, everyone. My name is Hany, and I'm the service manager. Thank you for taking the time to join us today.",ok:1,fb:"تعريف + شكر."},{t:"OK, listen.",ok:0,fb:"مفيش ترحيب."},{t:"Hello, whatever.",ok:0,fb:"غير مهني."}]},
     {them:"(Everyone is listening.)"},
     {you:[{t:"The objective of today's presentation is to explain how to maintain the new lithium batteries. I'll be breaking it down into three parts.",ok:1,fb:"هدف واضح وتقسيم."},{t:"Batteries. Let's go.",ok:0,fb:"ناقص هدف."},{t:"I don't know what we'll cover.",ok:0,fb:"بيضيّع الثقة."}]},
     {them:"Technician: Can we ask questions during the talk?"},
     {you:[{t:"Of course. Please feel free to raise your hand and ask at any time.",ok:1,fb:"سياسة أسئلة واضحة ومرحبة."},{t:"No.",ok:0,fb:"جاف."},{t:"Only if it's smart.",ok:0,fb:"بيخوّف الناس."}]}
    ]}
 },
 { id:"pr3", part:"Presenting", art:"ladder", minutes:18,
   title:"Moving through your points", ar:"التنقل بين نقط العرض",
   desc:"Start your first point, move on, go back, link ideas, win back attention and check that everyone follows.",
   reading:["pr_223"],
   cards:[
    {k:"pr_223", en:"Let's begin by looking at our first main point.", ar:"نبدأ بأول نقطة أساسية", ex:"<mark>Let's begin by looking at our first main point</mark>, which is ___.", tip:"بداية منظمة للجزء الأول."},
    {k:"pr_223", en:"Now, I'd like to talk about…", ar:"دلوقتي عايز أتكلم عن…", ex:"<mark>Now, I'd like to talk about</mark> ___.", tip:"أسهل جملة انتقال."},
    {k:"pr_223", en:"As I mentioned earlier…", ar:"زي ما قلت قبل كده…", ex:"<mark>As I mentioned earlier</mark>, ___.", tip:"بترجع لنقطة قديمة وتربطها."},
    {k:"pr_223", en:"To build on that…", ar:"وعلى كده…", ex:"<mark>To build on that</mark>, ___.", tip:"بتكمّل الفكرة اللي قبلها وتطورها."},
    {k:"pr_223", en:"I'd like to draw your attention to the screen.", ar:"عايز ألفت انتباهكم للشاشة", ex:"Excuse me, but <mark>I'd like to draw your attention to the screen</mark> / flip chart / board.", tip:"‎draw attention to‎ = يلفت الانتباه."},
    {k:"pr_223", en:"If anyone needs to step out, please feel free to do so.", ar:"لو حد محتاج يخرج، براحته", ex:"Before I continue, I want to let you know that <mark>if anyone needs to step out</mark> or take a break, <mark>please feel free to do so</mark>.", tip:"بتحترم ظروف الحضور."},
    {k:"pr_223", en:"Please let me know if anything is unclear.", ar:"قولولي لو فيه حاجة مش واضحة", ex:"<mark>Please let me know if anything is unclear</mark> or if you need further explanation on any points.", tip:"اسأل كل شوية، مش بس في الآخر."}
   ],
   quiz:[
    {type:"mcq", q:"الناس بقت بتبص في موبايلاتها:", options:["Hey! Look at me!","If I could have your attention for a moment, I'd like to discuss an important point.","Stop using your phones."], answer:1, why:"بترجع الانتباه بأدب."},
    {type:"gap", sentence:"I'd like to ___ your attention to the screen.", options:["draw","pull","make"], answer:0, why:"‎draw attention to‎."},
    {type:"order", words:["As","I","mentioned","earlier"], answer:"As I mentioned earlier", why:"رجوع لنقطة قبل كده."},
    {type:"mcq", q:"عايز تنتقل للنقطة اللي بعدها:", options:["Our next point is the maintenance schedule.","Next thing, whatever.","Finished this."], answer:0, why:"انتقال واضح."},
    {type:"mcq", q:"إيه معنى ‎step out‎؟", options:["يخرج شوية ويرجع","يرقص","يستقيل"], answer:0, why:"يخرج من القاعة لفترة قصيرة."}
   ],
   match:[["main point","نقطة أساسية"],["circle back","نرجع للنقطة"],["link","يربط"],["distracted","مشتت"],["step out","يخرج شوية"],["clarification","توضيح"]],
   roleplay:{ scene:"بتعرض نتايج صيانة ربع سنوية لإدارة مصنع.",
    turns:[
     {them:"(You finished the introduction.)"},
     {you:[{t:"Let's begin by looking at our first main point, which is equipment downtime.",ok:1,fb:"بداية منظمة."},{t:"Umm… so… downtime maybe.",ok:0,fb:"متردد."},{t:"Let me read all the slides.",ok:0,fb:"ممل."}]},
     {them:"(Some managers are checking their phones.)"},
     {you:[{t:"If I could have your attention for a moment, I'd like to draw your attention to the screen. This number is important.",ok:1,fb:"رجعت الانتباه بلباقة."},{t:"Put your phones away!",ok:0,fb:"عدوانية."},{t:"(Keep talking to the wall.)",ok:0,fb:"ضيعت الجمهور."}]},
     {them:"(You finished point two.)"},
     {you:[{t:"To build on that, let's look at the cost savings. Please let me know if anything is unclear so far.",ok:1,fb:"ربط + تأكد من الفهم."},{t:"Next.",ok:0,fb:"مفيش ربط."},{t:"You understood, right?",ok:0,fb:"سؤال بيحرج."}]}
    ]}
 },
 { id:"pr4", part:"Presenting", art:"star", minutes:20,
   title:"Numbers, stories & evidence", ar:"الأرقام والأمثلة والأدلة",
   desc:"Present data and charts, tell a story, and back up your point with research, quotes and common knowledge.",
   reading:["pr_227"],
   cards:[
    {k:"pr_227", en:"These numbers paint a clear picture of the current situation.", ar:"الأرقام دي بتوضح الصورة الحالية", ex:"<mark>These numbers paint a clear picture of the current situation</mark>.", tip:"‎paint a picture‎ = يوضح الصورة."},
    {k:"pr_227", en:"Let me walk you through this chart.", ar:"خليني أشرحلكم الرسم ده خطوة خطوة", ex:"<mark>Let me walk you through this chart</mark>, which shows the distribution of our customer base.", tip:"‎walk you through‎ = يشرح بالتدريج."},
    {k:"pr_227", en:"There has been a significant increase in this area.", ar:"فيه زيادة كبيرة في المجال ده", ex:"As you can see from the chart, <mark>there has been a significant increase in this area</mark> over the past year.", tip:"‎significant‎ = ملحوظ ومهم."},
    {k:"pr_227", en:"To put this in context, let me give you an example.", ar:"علشان الصورة تبقى أوضح، هديكم مثال", ex:"<mark>To put this in context, let me give you an example</mark>.", tip:"المثال بيخلي الرقم مفهوم."},
    {k:"pr_227", en:"Research has shown that…", ar:"الأبحاث أثبتت إن…", ex:"<mark>Research has shown that</mark> ___.", tip:"بتسند كلامك بدليل."},
    {k:"pr_227", en:"It's a well-known fact that…", ar:"معروف إن…", ex:"<mark>It's a well-known fact that</mark> ___.", tip:"لما المعلومة معروفة للكل."},
    {k:"pr_227", en:"I want to open the floor for any questions or comments.", ar:"عايز أفتح الباب لأي أسئلة أو تعليقات", ex:"Before we move on, <mark>I want to open the floor for any questions or comments</mark> you may have.", tip:"‎open the floor‎ = نسمع الحضور."}
   ],
   quiz:[
    {type:"mcq", q:"عايز تشرح رسم بياني خطوة خطوة:", options:["Let me walk you through this chart.","Let me run this chart.","Chart, look."], answer:0, why:"‎walk you through‎ = يشرح بالتدريج."},
    {type:"gap", sentence:"These numbers ___ a clear picture of the current situation.", options:["paint","draw out","color"], answer:0, why:"‎paint a clear picture‎."},
    {type:"order", words:["Research","has","shown","that"], answer:"Research has shown that", why:"بتسند كلامك بدليل."},
    {type:"mcq", q:"عايز تستشهد بمقولة:", options:["As Steve Jobs once said, …","Some guy said…","I heard somewhere…"], answer:0, why:"اسم المصدر بيدي مصداقية."},
    {type:"mcq", q:"إيه معنى ‎to put this in context‎؟", options:["نحط ده في صندوق","علشان نوضح الصورة ونربطها بالواقع","نأجل الموضوع"], answer:1, why:"بتربط المعلومة بموقف مفهوم."}
   ],
   match:[["statistics","إحصائيات"],["trend","اتجاه"],["illustrate","يوضح بمثال"],["study","دراسة"],["quote","اقتباس"],["well-known","معروف"]],
   roleplay:{ scene:"بتعرض على مدير مالي ليه لازم يغير بطاريات الـ UPS لليثيوم.",
    turns:[
     {them:"CFO: Why should we pay more for lithium?"},
     {you:[{t:"Let me walk you through this chart. It compares the ten-year cost of lead-acid and lithium batteries.",ok:1,fb:"رد بالأرقام."},{t:"Because it's better.",ok:0,fb:"مفيش دليل."},{t:"Trust me.",ok:0,fb:"مش مقنعة."}]},
     {them:"CFO: Hmm, the numbers look good, but is it proven?"},
     {you:[{t:"Research has shown that lithium batteries last two to three times longer. To put this in context, let me give you an example from a bank we worked with.",ok:1,fb:"دليل + مثال واقعي."},{t:"I think so.",ok:0,fb:"ضعيفة."},{t:"Google it.",ok:0,fb:"غير مهنية."}]},
     {them:"(The CFO is convinced.)"},
     {you:[{t:"Before we move on, I want to open the floor for any questions or comments.",ok:1,fb:"بتسيب مساحة للحوار."},{t:"OK, sign here.",ok:0,fb:"ضغط زيادة."},{t:"We're done.",ok:0,fb:"ناقص فرصة للأسئلة."}]}
    ]}
 },
 { id:"pr5", part:"Presenting", art:"coffee", minutes:20,
   title:"Recommending, concluding & answering questions", ar:"التوصيات والخاتمة والرد على الأسئلة",
   desc:"Recover when you get lost, make recommendations, conclude, take questions, check your answer and close.",
   reading:["pr_233"],
   cards:[
    {k:"pr_233", en:"Sorry, I seem to have lost my train of thought.", ar:"آسف، شكلي تهت مني الفكرة", ex:"<mark>Sorry, I seem to have lost my train of thought</mark>. Let me get back to the main point.", tip:"‎train of thought‎ = تسلسل الأفكار."},
    {k:"pr_233", en:"Based on the data, we recommend that…", ar:"بناءً على البيانات، بنوصي إن…", ex:"<mark>Based on the data, we recommend that</mark> ___.", tip:"التوصية القوية مبنية على أرقام."},
    {k:"pr_233", en:"After careful consideration, our team recommends…", ar:"بعد دراسة كويسة، فريقنا بيوصي بـ…", ex:"<mark>After careful consideration, our team recommends</mark> ___.", tip:"رسمية ومقنعة."},
    {k:"pr_233", en:"To recap, we discussed…", ar:"باختصار، اتكلمنا عن…", ex:"<mark>To recap, we discussed</mark> ___.", tip:"‎recap‎ = تلخيص سريع."},
    {k:"pr_233", en:"I'd like to open the floor for any questions you may have.", ar:"أحب أسمع أي أسئلة عندكم", ex:"<mark>I'd like to open the floor for any questions you may have</mark>.", tip:"بداية فقرة الأسئلة."},
    {k:"pr_233", en:"Did that answer your question?", ar:"كده جاوبت على سؤالك؟", ex:"<mark>Did that answer your question</mark>, or would you like me to go into more detail?", tip:"اتأكد إن السائل مبسوط بالإجابة."},
    {k:"pr_233", en:"Thank you all for your attention and time today.", ar:"شكرًا لكم كلكم على انتباهكم ووقتكم", ex:"<mark>Thank you all for your attention and time today</mark>. I hope this presentation was informative and helpful.", tip:"ختام العرض الرسمي."}
   ],
   quiz:[
    {type:"mcq", q:"نسيت انت كنت بتقول إيه:", options:["Sorry, I seem to have lost my train of thought. Let me get back to the main point.","I forgot everything, bye.","Umm… umm… umm…"], answer:0, why:"اعتراف بسيط ورجوع."},
    {type:"gap", sentence:"Based on the data, we ___ that we replace the old batteries.", options:["recommend","remember","remind"], answer:0, why:"‎recommend that‎ = نوصي بإن."},
    {type:"order", words:["Did","that","answer","your","question"], answer:"Did that answer your question", why:"تتأكد إن الإجابة كفاية."},
    {type:"mcq", q:"ماسمعتش سؤال واحد من الحضور:", options:["What?","I'm sorry, I didn't catch that. Could you please repeat the question?","Next question."], answer:1, why:"مؤدبة وواضحة."},
    {type:"mcq", q:"إيه معنى ‎digression‎؟", options:["خروج عن الموضوع","خصم","تأخير"], answer:0, why:"لما تتكلم في حاجة جانبية بعيد عن الموضوع."}
   ],
   match:[["train of thought","تسلسل الأفكار"],["recommendation","توصية"],["conclusion","خاتمة"],["recap","تلخيص"],["rephrase","يعيد الصياغة"],["informative","مفيد ومليان معلومات"]],
   roleplay:{ scene:"بتختم عرض عن خطة الصيانة الوقائية لشركة أدوية.",
    turns:[
     {them:"(You're at the last slide.)"},
     {you:[{t:"After careful consideration, our team recommends monthly thermal scans and replacing the batteries every four years.",ok:1,fb:"توصية واضحة ومحددة."},{t:"Do whatever you like.",ok:0,fb:"مفيش توصية."},{t:"Maybe some maintenance.",ok:0,fb:"مبهمة."}]},
     {them:"Manager: How much will this cost us per year?"},
     {you:[{t:"About 180,000 pounds a year, including spare parts. Did that answer your question, or would you like more detail?",ok:1,fb:"رقم + تأكد من الفهم."},{t:"A lot.",ok:0,fb:"مش مهني."},{t:"Ask accounts.",ok:0,fb:"بتتهرب."}]},
     {them:"(No more questions.)"},
     {you:[{t:"To recap, we discussed the risks, our plan and the cost. Thank you all for your attention and time today.",ok:1,fb:"تلخيص + شكر."},{t:"Bye.",ok:0,fb:"مفيش ختام."},{t:"That's all, I think.",ok:0,fb:"ضعيفة."}]}
    ]}
 }
];
