/* Chapter 6 — Digital Business Communications. Each card's k = the book track its phrase comes from. */
const CH6=[
 { id:"dg1", part:"Digital communication", art:"laptop", minutes:22,
   title:"Technical problems and chat in online meetings", ar:"مشاكل تقنية والشات في الاجتماعات الأونلاين",
   desc:"Handle connection, audio, video and screen-sharing problems, help others with their mic and camera, use the chat and deal with disruptions.",
   reading:["dg_266","dg_272"],
   cards:[
    {k:"dg_266", en:"I'm experiencing some connectivity issues.", ar:"عندي مشاكل في الاتصال", ex:"<mark>I'm experiencing some connectivity issues</mark>. Please bear with me while I try to resolve them.", tip:"أول ما النت يقطع، قولها واطلب منهم يستحملوك شوية."},
    {k:"dg_266", en:"Please bear with me", ar:"استحملوني شوية / معلش اصبروا عليا", ex:"I'm experiencing some connectivity issues. <mark>Please bear with me</mark> while I try to resolve them.", tip:"‎bear with me‎ يعني اصبر عليا، مش ليها علاقة بالدب."},
    {k:"dg_266", en:"Let me quickly troubleshoot and get back to you.", ar:"خليني أحل المشكلة بسرعة وأرجعلكم", ex:"It seems my microphone isn't working. <mark>Let me quickly troubleshoot and get back to you</mark>.", tip:"‎troubleshoot‎ = تدوّر على سبب العطل وتحله، كلمة بنستخدمها كل يوم في الصيانة."},
    {k:"dg_266", en:"Apologies for the sudden disconnection.", ar:"آسف إن الخط فصل فجأة", ex:"<mark>Apologies for the sudden disconnection</mark>. I experienced a technical issue and am now back online.", tip:"أول جملة تقولها لما ترجع للاجتماع بعد ما فصلت."},
    {k:"dg_266", en:"Kindly mute your microphone when you're not speaking", ar:"لو سمحت اقفل المايك وانت مش بتتكلم", ex:"<mark>Kindly mute your microphone when you're not speaking</mark> to minimize background noise.", tip:"‎Kindly‎ بتخلي الطلب مؤدب ومش أمر."},
    {k:"dg_272", en:"Please feel free to use the chat function to ask any questions", ar:"براحتكم استخدموا الشات عشان تسألوا أي سؤال", ex:"<mark>Please feel free to use the chat function to ask any questions</mark> during the presentation. We'll address them at the end.", tip:"بتنظم الأسئلة من غير ما حد يقاطع العرض."},
    {k:"dg_272", en:"let's allow the current speaker to finish their point first", ar:"خلينا نسيب اللي بيتكلم يكمل كلامه الأول", ex:"It looks like ___ has a question or comment, but <mark>let's allow the current speaker to finish their point first</mark>.", tip:"طريقة لطيفة توقف بيها مقاطعة من غير إحراج."}
   ],
   quiz:[
    {type:"mcq", q:"الفيديو بتاعك وقف في نص الاجتماع:", options:["My camera is stupid.","It seems my video has frozen. I'll try turning off my camera and turning it back on.","Wait wait wait."], answer:1, why:"بتوصف المشكلة وبتقول هتعمل إيه."},
    {type:"gap", sentence:"Please bear ___ me while I try to resolve them.", options:["with","to","for"], answer:0, why:"‎bear with me‎ = اصبر عليا."},
    {type:"order", words:["Can","everyone","please","check","if","their","microphones","are","muted"], answer:"Can everyone please check if their microphones are muted", why:"طلب مؤدب لما يبقى فيه صدى في الصوت."},
    {type:"mcq", q:"حد دخل الاجتماع متأخر:", options:["You're late!","Welcome! We're glad you could join us. Please mute your microphone and feel free to catch up through the chat.","(Ignore him.)"], answer:1, why:"ترحيب + تعليمات بسيطة."},
    {type:"mcq", q:"إيه معنى ‎off-topic‎؟", options:["خارج الموضوع","مهم جدًا","متأخر"], answer:0, why:"كلام بعيد عن موضوع الاجتماع."}
   ],
   match:[["connectivity issues","مشاكل في الاتصال"],["troubleshoot","يحل العطل"],["mute","يكتم الصوت"],["lagging video","فيديو بيقطّع"],["background noise","دوشة في الخلفية"],["derail","يخرج عن المسار"]],
   roleplay:{ scene:"انت في اجتماع أونلاين مع عميل (مصنع) بتشرح عرض صيانة لـ ‎UPS‎، والنت عندك بيقطع وفي حد بيقاطع.",
    turns:[
     {them:"Client: Hello? Your screen is frozen and we can't hear you well."},
     {you:[{t:"Apologies, I'm experiencing some connectivity issues. Please bear with me while I try to resolve them.",ok:1,fb:"اعتذار + طمأنة."},{t:"My internet is bad, not my problem.",ok:0,fb:"مش مهنية."},{t:"(Leave the meeting.)",ok:0,fb:"العميل هيفتكر إنك مشيت."}]},
     {them:"(You are back. An engineer from the client's team starts asking questions while their manager is still talking.)"},
     {you:[{t:"It looks like Karim has a question, but let's allow the current speaker to finish their point first. We'll address any questions afterward.",ok:1,fb:"نظمت الكلام بأدب."},{t:"Stop talking, Karim!",ok:0,fb:"جارحة."},{t:"Everyone talk now.",ok:0,fb:"فوضى."}]},
     {them:"Manager: Can you send us the battery test report?"},
     {you:[{t:"Sure. I'm posting a link to the relevant documents in the chat for everyone to access.",ok:1,fb:"استخدمت الشات صح."},{t:"Search for it yourself.",ok:0,fb:"مش خدمة عملاء."},{t:"Maybe later, maybe not.",ok:0,fb:"مش واضح."}]}
    ]}
 },
 { id:"dg2", part:"Digital communication", art:"phone", minutes:22,
   title:"Running online meetings and messaging clients", ar:"إدارة الاجتماع الأونلاين والتواصل مع العملاء على الواتساب",
   desc:"Join late, leave early, manage time, record meetings and use breakout rooms, then message clients about delays, payments, progress and new products.",
   reading:["dg_275","dg_278"],
   cards:[
    {k:"dg_275", en:"Could you please give me a quick recap?", ar:"ممكن تلخصلي بسرعة اللي فات؟", ex:"I'm just joining the call. <mark>Could you please give me a quick recap?</mark>", tip:"لو دخلت متأخر، بدل ما تسأل فاتني إيه؟."},
    {k:"dg_275", en:"In the interest of time", ar:"عشان نلحق الوقت", ex:"<mark>In the interest of time</mark>, let's limit our responses to one minute each.", tip:"بتستخدمها لما الاجتماع يطوّل."},
    {k:"dg_275", en:"By continuing in this meeting, you consent to being recorded.", ar:"استمرارك في الاجتماع معناه إنك موافق على التسجيل", ex:"<mark>By continuing in this meeting, you consent to being recorded</mark>.", tip:"لازم تنبّه قبل ما تسجل أي اجتماع."},
    {k:"dg_278", en:"I wanted to touch base regarding", ar:"حبيت أطمن / أتواصل معاك بخصوص", ex:"Hi ___, I hope you're doing well. <mark>I wanted to touch base regarding</mark> ___.", tip:"‎touch base‎ = تتواصل بسرعة تتابع حاجة."},
    {k:"dg_278", en:"we've encountered an unexpected issue with", ar:"قابلتنا مشكلة مش متوقعة في", ex:"Unfortunately, <mark>we've encountered an unexpected issue with</mark> ___ that may cause a delay.", tip:"ابدأ بـ ‎Unfortunately‎ ووضح إنك شغال على الحل."},
    {k:"dg_278", en:"we're on track to meet the deadline", ar:"ماشيين صح وهنسلم في الميعاد", ex:"So far, everything is going according to plan, and <mark>we're on track to meet the deadline</mark>.", tip:"جملة بتطمن العميل في تحديثات المشروع."},
    {k:"dg_278", en:"Just a friendly reminder that invoice", ar:"مجرد تذكير ودي إن الفاتورة", ex:"<mark>Just a friendly reminder that invoice</mark> #___ is due on ___.", tip:"طريقة لطيفة تطالب بيها بالفلوس من غير إحراج."}
   ],
   quiz:[
    {type:"mcq", q:"عندك اجتماع تاني بعد ده ولازم تمشي بدري:", options:["Bye, I'm going.","I have another meeting right after this, so I may need to leave a few minutes early.","(Leave silently.)"], answer:1, why:"بتبلغهم من الأول بأدب."},
    {type:"gap", sentence:"We will prioritize this matter and work ___ to resolve it.", options:["diligently","lazy","slowly"], answer:0, why:"‎diligently‎ = بجدية واجتهاد."},
    {type:"order", words:["Thank","you","for","choosing","us"], answer:"Thank you for choosing us", why:"شكر العميل على تعامله معاك."},
    {type:"mcq", q:"العميل مدفعش فاتورة متأخرة:", options:["Pay now!!","Just a friendly reminder that invoice #245 is due on May 5. If you've already made a payment, please disregard this message.","Why didn't you pay?"], answer:1, why:"تذكير مؤدب ومحترم."},
    {type:"mcq", q:"إيه معنى ‎downtime‎؟", options:["وقت راحة الموظفين","فترة توقف الخدمة أو الجهاز","وقت الغدا"], answer:1, why:"الوقت اللي السيستم بيبقى فيه واقف."}
   ],
   match:[["recap","ملخص سريع"],["breakout room","غرفة نقاش جانبية"],["touch base","يتواصل للمتابعة"],["testimonial","شهادة / رأي عميل"],["overdue invoice","فاتورة متأخرة"],["downtime","فترة توقف"]],
   roleplay:{ scene:"بتكلم عميل (داتا سنتر) على الواتساب. شحنة البطاريات اتأخرت، وعندكم صيانة مجدولة للـ ‎UPS‎.",
    turns:[
     {them:"Client: Hi, any news about the battery shipment? We need it urgently."},
     {you:[{t:"I understand the urgency of your request. Unfortunately, we've encountered an unexpected issue with customs that may cause a two-day delay. We'll keep you informed of any changes.",ok:1,fb:"فهمت الاستعجال ووضحت السبب والمدة."},{t:"It's late. Not our fault.",ok:0,fb:"بتخسر العميل."},{t:"Soon, inshallah.",ok:0,fb:"مفيش معلومة."}]},
     {them:"Client: OK. Also, when is the UPS maintenance?"},
     {you:[{t:"We have scheduled maintenance on Saturday, which may result in some temporary downtime for your server room. We apologize for any inconvenience.",ok:1,fb:"ميعاد + تأثير + اعتذار."},{t:"Saturday. Everything will turn off.",ok:0,fb:"مخيفة ومن غير اعتذار."},{t:"I don't know.",ok:0,fb:"مش مهنية."}]},
     {them:"Client: Fine, thanks."},
     {you:[{t:"Thank you for choosing us. We truly appreciate your business and look forward to assisting you in the future.",ok:1,fb:"ختام ودود."},{t:"OK bye.",ok:0,fb:"جافة."},{t:"Thumbs up.",ok:0,fb:"قليلة مع عميل مهم."}]}
    ]}
 },
 { id:"dg3", part:"Digital communication", art:"star", minutes:18,
   title:"Writing your LinkedIn bio", ar:"اكتب نبذة عنك على ‎LinkedIn‎",
   desc:"Key phrases for a strong LinkedIn bio, with three full examples: a digital marketer, an HR professional and a web developer.",
   reading:["dg_284"],
   cards:[
    {k:"dg_284", en:"Results-driven professional with", ar:"شخص محترف بيركز على النتايج عنده", ex:"<mark>Results-driven professional with</mark> ___ years of experience in the ___ sector.", tip:"افتتاحية كلاسيكية للـ ‎bio‎، حط عدد سنين خبرتك."},
    {k:"dg_284", en:"Proven track record of success in", ar:"سجل نجاح مثبت في", ex:"<mark>Proven track record of success in</mark> ___.", tip:"‎track record‎ = تاريخك في الشغل وإنجازاتك."},
    {k:"dg_284", en:"Adept at solving complex problems", ar:"شاطر في حل المشاكل المعقدة", ex:"<mark>Adept at solving complex problems</mark> and driving significant improvements in ___.", tip:"‎adept at + -ing‎ = ماهر في."},
    {k:"dg_284", en:"A collaborative team player", ar:"بحب الشغل الجماعي ومتعاون", ex:"<mark>A collaborative team player</mark> with exceptional communication and interpersonal skills.", tip:"الشركات بتدور على الصفة دي دايمًا."},
    {k:"dg_284", en:"seeking to leverage extensive experience in", ar:"عايز أستفيد من خبرتي الكبيرة في", ex:"Motivated ___ <mark>seeking to leverage extensive experience in</mark> ___ to contribute to ___.", tip:"‎leverage‎ = تستغل حاجة عندك لمصلحة الشغل."},
    {k:"dg_284", en:"Committed to lifelong learning", ar:"ملتزم إني أتعلم طول الوقت", ex:"<mark>Committed to lifelong learning</mark> and staying current with industry trends and best practices.", tip:"مهمة في مجال تقني بيتغير بسرعة زي الطاقة الشمسية."},
    {k:"dg_284", en:"I have a proven track record of driving growth", ar:"عندي سجل مثبت في تحقيق نمو", ex:"With over 7 years of experience in the digital marketing landscape, <mark>I have a proven track record of driving growth</mark> and improving online visibility for businesses of all sizes.", tip:"اكتبها بصيغة ‎I‎ في الفقرة الطويلة."}
   ],
   quiz:[
    {type:"mcq", q:"أحسن بداية لـ ‎LinkedIn bio‎:", options:["I am a person who works.","Results-driven professional with 8 years of experience in the power solutions sector.","Hire me please."], answer:1, why:"واضحة وفيها خبرة ومجال."},
    {type:"gap", sentence:"Adept ___ solving complex problems.", options:["at","in","on"], answer:0, why:"adept at + ‎-ing‎."},
    {type:"order", words:["Proven","track","record","of","success","in","sales"], answer:"Proven track record of success in sales", why:"عبارة قوية للـ ‎bio‎."},
    {type:"mcq", q:"إيه معنى ‎keen eye for‎؟", options:["عين تعبانة","حس عالي وملاحظة دقيقة لـ","كره لحاجة"], answer:1, why:"بتقول إنك بتلاحظ التفاصيل."},
    {type:"mcq", q:"إيه معنى ‎staying current with industry trends‎؟", options:["متابع آخر اتجاهات المجال","بتشتغل في الكهربا","بتغير شغلك كتير"], answer:0, why:"‎current‎ هنا = مواكب."}
   ],
   match:[["results-driven","بيركز على النتايج"],["track record","سجل إنجازات"],["adept at","ماهر في"],["leverage","يستغل / يستفيد من"],["interpersonal skills","مهارات التعامل مع الناس"],["retain talent","يحافظ على الكفاءات"]],
   roleplay:{ scene:"زميلك مهندس صيانة ‎VFD‎ و‎UPS‎ بيكتب ‎LinkedIn bio‎ وطالب رأيك في كل جملة.",
    turns:[
     {them:"Colleague: How should I start my bio?"},
     {you:[{t:"Try: Results-driven professional with 6 years of experience in the power electronics sector.",ok:1,fb:"افتتاحية قوية ومحددة."},{t:"Write: I am an engineer, that's it.",ok:0,fb:"ضعيفة."},{t:"Just list your hobbies.",ok:0,fb:"مش مكانها."}]},
     {them:"Colleague: I'm good at fixing difficult faults. How do I say that?"},
     {you:[{t:"Adept at solving complex problems and driving significant improvements in equipment uptime.",ok:1,fb:"عبارة الكتاب مع نتيجة واضحة."},{t:"I fix stuff.",ok:0,fb:"مش احترافية."},{t:"Very very good engineer.",ok:0,fb:"مفيهاش دليل."}]},
     {them:"Colleague: And how do I end it?"},
     {you:[{t:"Committed to lifelong learning and staying current with industry trends and best practices.",ok:1,fb:"ختام بيبين إنك بتطور نفسك."},{t:"Call me now.",ok:0,fb:"مش مناسبة للـ ‎bio‎."},{t:"The end.",ok:0,fb:"مالهاش لازمة."}]}
    ]}
 },
 { id:"dg4", part:"Digital communication", art:"handshake", minutes:24,
   title:"Networking on LinkedIn", ar:"التواصل وبناء العلاقات على ‎LinkedIn‎",
   desc:"Send connection requests, comment on posts, congratulate, endorse, ask for and write recommendations, answer job posts, ask for opportunities and share milestones.",
   reading:["dg_289","dg_293"],
   cards:[
    {k:"dg_289", en:"I came across your profile and was impressed by your background in", ar:"شفت البروفايل بتاعك وعجبتني خلفيتك في", ex:"Hello ___, <mark>I came across your profile and was impressed by your background in</mark> ___.", tip:"رسالة طلب إضافة شخصية أحسن من الطلب الفاضي."},
    {k:"dg_289", en:"Thanks for shedding light on this topic.", ar:"شكرًا إنك وضحت الموضوع ده", ex:"<mark>Thanks for shedding light on this topic</mark>.", tip:"‎shed light on‎ = يوضح. تعليق محترم على بوست."},
    {k:"dg_289", en:"Your hard work has paid off!", ar:"تعبك جاب نتيجة!", ex:"<mark>Your hard work has paid off!</mark> Congratulations on the new job.", tip:"‎pay off‎ = يجيب نتيجة."},
    {k:"dg_289", en:"would be willing to write me a recommendation", ar:"ممكن تكتبلي توصية؟", ex:"Hi ___, I was wondering if you <mark>would be willing to write me a recommendation</mark> based on our work together at ___.", tip:"اطلبها من حد اشتغلت معاه فعلًا."},
    {k:"dg_293", en:"I highly recommend them.", ar:"أنصح بيهم جدًا", ex:"Their dedication and hard work made a significant impact, and <mark>I highly recommend them</mark>.", tip:"جملة الختام في أي توصية."},
    {k:"dg_293", en:"I appreciate your acceptance of my connection request.", ar:"شكرًا إنك قبلت طلب الإضافة", ex:"Hi ___, <mark>I appreciate your acceptance of my connection request</mark>.", tip:"رسالة شكر قصيرة بتفتح باب للتواصل."},
    {k:"dg_293", en:"I would be grateful if you could keep me in mind.", ar:"هكون ممتن لو افتكرتني", ex:"If you come across any relevant openings or know someone who might be hiring, <mark>I would be grateful if you could keep me in mind</mark>.", tip:"طلب فرصة شغل من غير ضغط."}
   ],
   quiz:[
    {type:"mcq", q:"زميلك اترقى وكتب بوست:", options:["Congratulations on your new role! Wishing you all the best.","Why you and not me?","OK."], answer:0, why:"تهنئة محترمة."},
    {type:"gap", sentence:"Thanks for shedding ___ on this topic.", options:["light","sun","lamp"], answer:0, why:"‎shed light on‎ = يوضح."},
    {type:"order", words:["I","highly","recommend","them"], answer:"I highly recommend them", why:"ختام التوصية."},
    {type:"mcq", q:"شفت إعلان وظيفة وعايز تقدم:", options:["Give me the job.","I came across your job posting for Service Engineer and I am very interested in the position.","Job?"], answer:1, why:"بداية مهنية لرسالة التقديم."},
    {type:"mcq", q:"إيه معنى ‎endorse‎؟", options:["يرفض","يشهد لمهارة حد ويدعمها","يمسح"], answer:1, why:"تأييد مهارات حد على ‎LinkedIn‎."}
   ],
   match:[["connection request","طلب إضافة"],["mutual connection","معرفة مشتركة"],["endorse","يشهد بمهارة"],["recommendation","توصية"],["pivotal role","دور محوري"],["milestone","إنجاز / محطة مهمة"]],
   roleplay:{ scene:"انت مهندس مبيعات طاقة شمسية، وعايز تكبّر شبكة علاقاتك على ‎LinkedIn‎ مع مدير مشتريات في شركة داتا سنتر.",
    turns:[
     {them:"(You send him a connection request with a note.)"},
     {you:[{t:"Hello Mr. Tarek, I came across your profile and was impressed by your background in data-centre operations. I'd like to connect with you to expand my professional network.",ok:1,fb:"رسالة شخصية ومحترمة."},{t:"Add me.",ok:0,fb:"جافة."},{t:"Buy our panels now!",ok:0,fb:"بيع مباشر بدري قوي."}]},
     {them:"Tarek: Thanks for connecting!"},
     {you:[{t:"Thank you for accepting my connection request. I value the opportunity to be connected with you.",ok:1,fb:"شكر لطيف."},{t:"Finally.",ok:0,fb:"قليلة ذوق."},{t:"(No reply.)",ok:0,fb:"ضيعت فرصة."}]},
     {them:"Tarek: I just posted an article about cooling and UPS efficiency."},
     {you:[{t:"Informative article! Thanks for shedding light on this topic.",ok:1,fb:"تعليق مهني بيقوي العلاقة."},{t:"Nice.",ok:0,fb:"ضعيف."},{t:"Our UPS is better.",ok:0,fb:"مش في مكانه."}]}
    ]}
 }
];
