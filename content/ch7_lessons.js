/* Chapter 7 — Office Talk. Each card's k = the book track its phrase comes from. */
const CH7=[
 { id:"ot1", part:"Office etiquette", art:"laptop", minutes:22,
   title:"Everyday office etiquette", ar:"آداب المكتب اليومية",
   desc:"Polite phrases for everyday office situations: arriving late, calls and noise, asking for help, apologizing, sensitive topics, sick days, vacations, language barriers and phone etiquette.",
   reading:["ot_299","ot_304","ot_309"],
   cards:[
    {k:"ot_299", en:"I was held up in a previous meeting.", ar:"اتعطلت في اجتماع قبلها", ex:"I apologize for being late. <mark>I was held up in a previous meeting</mark>.", tip:"‎held up‎ يعني اتأخرت بسبب حاجة، أحسن من إنك تقول ‎I was busy‎."},
    {k:"ot_299", en:"Would you mind taking your call outside?", ar:"ممكن تكمل المكالمة برّه؟", ex:"<mark>Would you mind taking your call outside</mark>? It's a bit disruptive. Thanks.", tip:"‎Would you mind + -ing‎ طلب مؤدب جدًا من زميل."},
    {k:"ot_299", en:"Sorry to interrupt, but I have a quick question", ar:"آسف إني بقاطعك، بس عندي سؤال سريع", ex:"<mark>Sorry to interrupt, but I have a quick question</mark>, if you have a moment.", tip:"قولها لما زميلك مشغول وانت محتاج حاجة صغيرة."},
    {k:"ot_299", en:"Could you please walk me through this process one more time?", ar:"ممكن تشرحلي الخطوات دي مرة كمان؟", ex:"<mark>Could you please walk me through this process one more time</mark>? I want to make sure I'm on the right track.", tip:"‎walk me through‎ = اشرحلي خطوة بخطوة."},
    {k:"ot_304", en:"I'd rather not engage in gossip.", ar:"أفضّل مادخلش في النميمة", ex:"<mark>I'd rather not engage in gossip</mark>. Let's focus on our work instead.", tip:"رفض محترم من غير ما تجرح حد."},
    {k:"ot_304", en:"I've come down with something and need to take a sick day.", ar:"جالي دور برد/تعب ومحتاج آخد يوم أجازة مرضي", ex:"Unfortunately, <mark>I've come down with something and need to take a sick day</mark>.", tip:"‎come down with‎ = يجيلك مرض، ومش لازم تقول تفاصيل."},
    {k:"ot_309", en:"Could you please hold the line for a moment?", ar:"ممكن تستنى على الخط لحظة؟", ex:"<mark>Could you please hold the line for a moment</mark>? I'll be right back with you.", tip:"متسيبش العميل على الخط من غير ما تقوله."}
   ],
   quiz:[
    {type:"mcq", q:"وصلت الاجتماع متأخر عشان الزحمة:", options:["Traffic. Sorry.","I apologize for running late. I was caught in traffic.","It's not my fault."], answer:1, why:"اعتذار + سبب قصير."},
    {type:"gap", sentence:"Would you mind ___ the volume down? It's a bit distracting.", options:["turn","turning","to turn"], answer:1, why:"‎Would you mind‎ بعدها فعل بـ ‎-ing‎."},
    {type:"order", words:["I'll","be","away","from","my","desk","for","a","few","minutes"], answer:"I'll be away from my desk for a few minutes", why:"تبلغ زمايلك إنك سايب مكتبك شوية."},
    {type:"mcq", q:"زميل بيسألك عن مرتبك وده موضوع حساس:", options:["That's a sensitive subject for me, and I'd prefer not to talk about it.","Mind your own business!","(Tell him everything.)"], answer:0, why:"رفض لطيف ومحترم."},
    {type:"mcq", q:"حد اتصل بزميلك وهو مش موجود:", options:["He's not here. Bye.","I'm sorry, but he is not available at the moment. Can I take a message?","Call later."], answer:1, why:"الجملة المهنية لأخذ رسالة."}
   ],
   match:[["punctuality","الالتزام بالمواعيد"],["disruptive","مزعج / بيعطل"],["gossip","نميمة"],["sick day","يوم أجازة مرضي"],["hold the line","استنى على الخط"],["bear with me","اصبر عليا شوية"]],
   roleplay:{ scene:"انت مهندس في شركة صيانة ‎UPS‎ والمكتب مفتوح. زميلك بيتكلم في التليفون بصوت عالي وانت بتكتب تقرير لعميل، وبعدين عميل بيتصل على مديرك وهو مش موجود.",
    turns:[
     {them:"(Your colleague is on a loud personal call next to you.)"},
     {you:[{t:"I can see you're on a personal call, but could you please keep it down a little? Thank you.",ok:1,fb:"طلب مؤدب ومباشر."},{t:"Stop talking! I'm working!",ok:0,fb:"عنيف ومش لطيف."},{t:"(Say nothing and get angry.)",ok:0,fb:"المشكلة هتفضل."}]},
     {them:"Caller: Hello, I'd like to speak to Mr. Hany about our battery replacement."},
     {you:[{t:"I'm sorry, but Mr. Hany is not available at the moment. Can I take a message?",ok:1,fb:"مهني وبيحافظ على العميل."},{t:"He's out. Call tomorrow.",ok:0,fb:"جاف والعميل ممكن يزعل."},{t:"I don't know where he is.",ok:0,fb:"بتبان مش منظم."}]},
     {them:"Caller: Yes, please ask him to call me back about the UPS batteries."},
     {you:[{t:"Of course. Could you please hold the line for a moment while I get a pen? I'll be right back with you.",ok:1,fb:"استأذنت العميل قبل ما تسيبه."},{t:"(Leave the line without saying anything.)",ok:0,fb:"العميل هيفتكر الخط قطع."},{t:"Wait.",ok:0,fb:"مقتضبة زيادة."}]}
    ]}
 },
 { id:"ot2", part:"Office etiquette", art:"phone", minutes:18,
   title:"A day of good office manners", ar:"يوم في المكتب بأدب واحترام",
   desc:"Two office dialogues: taking calls, asking for help, a late colleague, an unfamiliar idiom, a loud personal call and leaving for the day.",
   reading:["ot_311","ot_314"],
   cards:[
    {k:"ot_311", en:"I'll step outside to avoid disturbing anyone.", ar:"هطلع برّه عشان ماأزعجش حد", ex:"Excuse me, I need to take this call. <mark>I'll step outside to avoid disturbing anyone</mark>.", tip:"قولها قبل ما ترد على مكالمة في مكتب مفتوح."},
    {k:"ot_311", en:"Do you have a moment to help me with this task?", ar:"فاضي لحظة تساعدني في المهمة دي؟", ex:"Laura, <mark>do you have a moment to help me with this task</mark>?", tip:"اسأل الأول لو فاضي، متفرضش نفسك."},
    {k:"ot_311", en:"If you need any further assistance, please don't hesitate to ask.", ar:"لو احتجت أي مساعدة تانية، ماتترددش تسأل", ex:"Any time, Mark. <mark>If you need any further assistance, please don't hesitate to ask</mark>. I'm here to help.", tip:"بتفتح الباب لزميلك يرجعلك تاني."},
    {k:"ot_311", en:"Let's figure out the best time.", ar:"يلا نشوف أنسب وقت", ex:"Absolutely, Laura. <mark>Let's figure out the best time</mark>.", tip:"‎figure out‎ = نوصل لحل أو نحدد."},
    {k:"ot_314", en:"Just take it slow.", ar:"خد وقتك وماتستعجلش", ex:"You're doing great, Raj. <mark>Just take it slow</mark>.", tip:"جملة تشجيع لزميل متوتر أو إنجليزيته مش قوية."},
    {k:"ot_314", en:"Just try to be on time next time.", ar:"بس حاول تيجي في ميعادك المرة الجاية", ex:"That's all right, Colin. <mark>Just try to be on time next time</mark>.", tip:"تنبيه هادي من غير لوم كبير."},
    {k:"ot_314", en:"It means to make contact or check in with someone…", ar:"معناها تتواصل أو تطمن مع حد…", ex:"\"Touch base\" is a common business idiom. <mark>It means to make contact or check in with someone</mark> about a particular issue.", tip:"‎touch base‎ مشهورة جدًا في الإيميلات والمكالمات."}
   ],
   quiz:[
    {type:"mcq", q:"زميلك رجع من الأجازة وقالك ‎Let's touch base next week‎. يعني إيه؟", options:["نتخانق الأسبوع الجاي","نتواصل ونطمن على الشغل الأسبوع الجاي","نلعب ماتش"], answer:1, why:"‎touch base‎ = تتواصل أو تتابع مع حد."},
    {type:"gap", sentence:"I'll step outside to avoid ___ anyone.", options:["disturb","disturbing","disturbed"], answer:1, why:"بعد ‎avoid‎ الفعل بيبقى بـ ‎-ing‎."},
    {type:"order", words:["I'm","stepping","out","for","a","quick","break"], answer:"I'm stepping out for a quick break", why:"تبلغ إنك خارج استراحة قصيرة."},
    {type:"mcq", q:"زميل جديد إنجليزيته ضعيفة ومتوتر قبل مكالمة:", options:["Your English is bad.","You're doing great. Just take it slow.","Let someone else do it."], answer:1, why:"تشجيع ودعم."},
    {type:"mcq", q:"مروّح آخر اليوم:", options:["That's me for the day. Have a good evening, everyone.","Bye, I'm tired.","(Leave without a word.)"], answer:0, why:"وداع مهذب لكل الفريق."}
   ],
   match:[["cooperative","متعاون"],["step outside","يطلع برّه"],["idiom","تعبير اصطلاحي"],["touch base","يتواصل / يطمن"],["distraction","إلهاء"],["disturb","يزعج"]],
   roleplay:{ scene:"أول ساعة في مكتب شركة بتركب أنظمة طاقة شمسية. عندك مكالمة مع مورد ألواح، وزميل جديد محتاج مساعدة في برنامج إدارة المشاريع.",
    turns:[
     {them:"(Your phone rings. It's the panel supplier, and the office is quiet.)"},
     {you:[{t:"Excuse me, I need to take this call. I'll step outside to avoid disturbing anyone.",ok:1,fb:"احترمت هدوء المكتب."},{t:"(Answer loudly at your desk.)",ok:0,fb:"بتزعج الكل."},{t:"Everyone be quiet, I have a call!",ok:0,fb:"مش ذوق."}]},
     {them:"New colleague: Sorry to interrupt, but I have a quick question, if you have a moment."},
     {you:[{t:"Of course. What's up?",ok:1,fb:"ترحيب ومساعدة."},{t:"Not now, I'm busy.",ok:0,fb:"جاف مع زميل جديد."},{t:"Ask Google.",ok:0,fb:"مش متعاون."}]},
     {them:"New colleague: Thank you for your assistance. I really appreciate your support."},
     {you:[{t:"Any time. If you need any further assistance, please don't hesitate to ask. I'm here to help.",ok:1,fb:"بتبني علاقة كويسة."},{t:"OK, but don't ask again.",ok:0,fb:"بتقفل الباب."},{t:"Yes.",ok:0,fb:"ناشفة."}]}
    ]}
 },
 { id:"ot3", part:"Office conflict", art:"meeting", minutes:22,
   title:"Raising problems at work calmly", ar:"إزاي تتكلم عن مشاكل الشغل بهدوء",
   desc:"Phrases to raise workload stress, overtime, burnout, office environment problems, difficult colleagues and managers, and pay concerns without starting a fight.",
   reading:["ot_317","ot_321"],
   cards:[
    {k:"ot_317", en:"My current workload feels a bit overwhelming.", ar:"الشغل اللي عليا دلوقتي كتير عليا شوية", ex:"<mark>My current workload feels a bit overwhelming</mark>. Can we discuss how to manage it better?", tip:"‎a bit‎ بتخفف الجملة وتخليها مش شكوى."},
    {k:"ot_317", en:"Can we talk about sharing the work more evenly?", ar:"ممكن نتكلم إزاي نوزع الشغل بالعدل؟", ex:"I feel I have too many tasks. <mark>Can we talk about sharing the work more evenly</mark>?", tip:"اقترح حل بدل ما تشتكي بس."},
    {k:"ot_317", en:"I've been feeling quite burned out lately.", ar:"حاسس إني مستنزف ومرهق الفترة دي", ex:"<mark>I've been feeling quite burned out lately</mark>. Can we discuss how to manage the situation?", tip:"‎burned out‎ = إرهاق شديد من كتر الشغل."},
    {k:"ot_317", en:"Could we find a way to free up some more room?", ar:"ممكن نلاقي طريقة نوفر مساحة أكتر؟", ex:"The workspace feels a bit tight lately. <mark>Could we find a way to free up some more room</mark>?", tip:"‎free up‎ = تفضّي مكان أو وقت."},
    {k:"ot_321", en:"Can we discuss ways to improve our teamwork?", ar:"ممكن نتكلم إزاي نحسّن شغلنا كفريق؟", ex:"I've noticed that our collaboration has been a bit difficult lately. <mark>Can we discuss ways to improve our teamwork</mark>?", tip:"اتكلم عن \"إحنا\" مش \"انت\" عشان متبانش بتتهم."},
    {k:"ot_321", en:"Would it be possible to share feedback privately in the future?", ar:"ممكن بعد كده الملاحظات تكون بيني وبينك؟", ex:"Your feedback is important to me, but receiving it publicly can be a bit challenging. <mark>Would it be possible to share feedback privately in the future</mark>?", tip:"ابدأ بإنك مقدّر النقد، وبعدين اطلب طريقة أحسن."},
    {k:"ot_321", en:"I would appreciate it if we could lower our voices and discuss this issue respectfully.", ar:"ياريت نوطي صوتنا ونتكلم في الموضوع باحترام", ex:"<mark>I would appreciate it if we could lower our voices and discuss this issue respectfully</mark>.", tip:"قول ‎we‎ حتى لو هو اللي بيزعق، بتهدّي الموقف."}
   ],
   quiz:[
    {type:"mcq", q:"بقالك شهر بتقعد لحد ٩ بالليل:", options:["I'm done with this company.","I've been working late a lot. Can we talk about how to fit my work into regular hours?","I will go home at 5 from now on."], answer:1, why:"وصف المشكلة + طلب نقاش."},
    {type:"gap", sentence:"I've been feeling a bit ___ lately. Can we discuss a balance that allows me some freedom in my work?", options:["micromanaged","managed","microwaved"], answer:0, why:"‎micromanaged‎ = المدير بيتابع كل تفصيلة."},
    {type:"order", words:["Could","we","examine","my","current","compensation"], answer:"Could we examine my current compensation", why:"طلب مراجعة المرتب بشكل مهني."},
    {type:"mcq", q:"مجهودك في المشروع اتنسب لحد تاني:", options:["You stole my work!","I noticed that my contribution to the project wasn't recognized.","(Complain to everyone else.)"], answer:1, why:"هادي ومباشر ومن غير اتهام."},
    {type:"mcq", q:"إيه معنى ‎workload‎؟", options:["حجم الشغل المطلوب منك","مكان الشغل","مرتب الشغل"], answer:0, why:"كمية المهام اللي عليك."}
   ],
   match:[["workload","حجم الشغل"],["burned out","مستنزف"],["work-life balance","التوازن بين الشغل والحياة"],["performance evaluation","تقييم الأداء"],["compensation","المقابل المادي"],["misinformation","معلومات غلط"]],
   roleplay:{ scene:"انت مهندس صيانة ‎VFD‎ في شركة، وبقالك شهرين شغال زيادة وبتنزل مواقع الويك إند، ومدير الفرع طلب يقابلك.",
    turns:[
     {them:"Manager: You look tired lately. Is everything OK?"},
     {you:[{t:"To be honest, my current workload feels a bit overwhelming. Can we discuss how to manage it better?",ok:1,fb:"صريح ومحترم."},{t:"I'm fine.",ok:0,fb:"فرصة ضاعت."},{t:"You give me all the work!",ok:0,fb:"هجوم مش هيفيد."}]},
     {them:"Manager: What exactly is the problem?"},
     {you:[{t:"I feel I have too many site visits. Can we talk about sharing the work more evenly within the team?",ok:1,fb:"مشكلة محددة + حل."},{t:"Everything is a problem.",ok:0,fb:"مبهم."},{t:"The others are lazy.",ok:0,fb:"بتتهم زمايلك."}]},
     {them:"Manager: I'll look at the schedule. Anything else?"},
     {you:[{t:"Yes. I've taken on additional responsibilities but haven't seen an increase in my pay. Can we discuss compensation for my expanded role?",ok:1,fb:"طلب مادي مهني ومبرّر."},{t:"Give me more money.",ok:0,fb:"مباشر زيادة ومن غير سبب."},{t:"No, nothing.",ok:0,fb:"سيبت موضوع مهم."}]}
    ]}
 },
 { id:"ot4", part:"Office conflict", art:"money", minutes:20,
   title:"Talking about workload and salary", ar:"كلام عن ضغط الشغل والمرتب",
   desc:"Two dialogues: Omar talks to Leila about workload, overtime, the office and dismissed ideas; Ali asks Fatma about a salary review.",
   reading:["ot_327","ot_330"],
   cards:[
    {k:"ot_327", en:"Is there something bothering you?", ar:"فيه حاجة مضايقاك؟", ex:"Good morning, Omar. You look a bit stressed. <mark>Is there something bothering you</mark>?", tip:"سؤال لطيف تفتح بيه كلام مع زميل مضايق."},
    {k:"ot_327", en:"I feel like I'm juggling too many tasks at once.", ar:"حاسس إني ماسك مهام كتير في نفس الوقت", ex:"Yes, that would be helpful. <mark>I feel like I'm juggling too many tasks at once</mark>.", tip:"‎juggling‎ صورة البهلوان اللي بيلعب بكذا كورة."},
    {k:"ot_327", en:"Let's talk about which tasks we can delegate or reschedule.", ar:"يلا نشوف أنهي مهام ممكن نسلمها لحد تاني أو نأجلها", ex:"It's important that we share the work more evenly within the team. <mark>Let's talk about which tasks we can delegate or reschedule</mark>.", tip:"‎delegate‎ = تدي المهمة لحد تاني."},
    {k:"ot_327", en:"Those are definitely valid concerns", ar:"دي فعلًا مخاوف منطقية", ex:"<mark>Those are definitely valid concerns</mark>, Omar.", tip:"رد المدير الشاطر: يعترف بالمشكلة الأول."},
    {k:"ot_330", en:"Can we discuss potential raises or adjustments?", ar:"ممكن نتكلم في زيادة أو تعديل للمرتب؟", ex:"I've noticed that my salary hasn't changed in a while. <mark>Can we discuss potential raises or adjustments</mark>?", tip:"‎potential‎ بتخلي الطلب مرن ومش فرض."},
    {k:"ot_330", en:"Can we discuss compensation for my expanded role?", ar:"ممكن نتكلم في المقابل المادي لدوري اللي كبر؟", ex:"I've also taken on additional responsibilities but haven't seen an increase in my pay. <mark>Can we discuss compensation for my expanded role</mark>?", tip:"اربط الفلوس بالمسؤوليات الزيادة."},
    {k:"ot_330", en:"my salary doesn't seem to keep up with the cost of living", ar:"مرتبي مش ملاحق غلاء المعيشة", ex:"Lastly, with the current inflation rate, <mark>my salary doesn't seem to keep up with the cost of living</mark>.", tip:"‎keep up with‎ = يلاحق."}
   ],
   quiz:[
    {type:"mcq", q:"مديرك قالك ‎Those are definitely valid concerns‎. يعني:", options:["كلامك ملوش لازمة","مخاوفك منطقية ومفهومة","اتكلم بعدين"], answer:1, why:"‎valid‎ = منطقي ومقبول."},
    {type:"gap", sentence:"Let's talk about which tasks we can ___ or reschedule.", options:["delegate","delete","delay"], answer:0, why:"‎delegate‎ = تسلم المهمة لحد تاني."},
    {type:"order", words:["Could","we","review","my","salary"], answer:"Could we review my salary", why:"طلب مراجعة مرتب مختصر ومهذب."},
    {type:"mcq", q:"عرفت إن زمايل في نفس دورك بياخدوا أكتر:", options:["I've learned that some colleagues in similar roles earn more. Could we review my salary?","Why does Ahmed get more than me?","I'll quit."], answer:0, why:"من غير أسماء ومن غير تهديد."},
    {type:"mcq", q:"إيه معنى ‎salary parity‎؟", options:["خصم من المرتب","المساواة في المرتبات","مرتب إضافي"], answer:1, why:"‎parity‎ = تساوي."}
   ],
   match:[["delegate","يسلم المهمة لحد"],["reschedule","يأجل / يغير الميعاد"],["valid concerns","مخاوف منطقية"],["salary review","مراجعة المرتبات"],["inflation rate","معدل التضخم"],["cost of living","تكلفة المعيشة"]],
   roleplay:{ scene:"انت مسؤول مبيعات بطاريات في شركة ‎data centre‎ وبقالك سنتين من غير زيادة، ومسكت كمان عملاء البنوك. داخل على مديرة المبيعات.",
    turns:[
     {them:"Sales director: Good morning. You wanted to see me?"},
     {you:[{t:"Good morning. Yes, do you have a moment? There are a few things I'd like to discuss.",ok:1,fb:"افتتاح محترم."},{t:"We need to talk about money now.",ok:0,fb:"هجومي من أول جملة."},{t:"Nothing important.",ok:0,fb:"بتقلل من موضوعك."}]},
     {them:"Sales director: Of course. What's on your mind?"},
     {you:[{t:"I've noticed that my salary hasn't changed in a while, and I've also taken on the bank accounts. Can we discuss compensation for my expanded role?",ok:1,fb:"حقائق + طلب واضح."},{t:"I'm underpaid, everybody knows it.",ok:0,fb:"من غير دليل."},{t:"Can I have a raise, please, please?",ok:0,fb:"ضعيف."}]},
     {them:"Sales director: I see your point. I'll work with HR on a salary review."},
     {you:[{t:"Thank you. I truly value your support and understanding in this matter.",ok:1,fb:"ختام بتقدير."},{t:"When exactly? Tomorrow?",ok:0,fb:"ضغط زيادة."},{t:"We'll see.",ok:0,fb:"بتبان مش مصدق."}]}
    ]}
 },
 { id:"ot5", part:"Small talk", art:"coffee", minutes:22,
   title:"Small talk at work", ar:"الدردشة الخفيفة في الشغل",
   desc:"Start, keep going and end small talk about projects, weekend plans, vacations, hobbies, movies, current events, sports, food, weather, commutes and courses.",
   reading:["ot_332","ot_338"],
   cards:[
    {k:"ot_332", en:"How's your current project going?", ar:"المشروع اللي معاك ماشي إزاي؟", ex:"<mark>How's your current project going</mark>? Any updates or challenges?", tip:"أسهل بداية كلام مع زميل."},
    {k:"ot_332", en:"It's quite a learning curve.", ar:"بتعلم فيه حاجات كتير جديدة", ex:"I'm facing challenges in my current project. <mark>It's quite a learning curve</mark>.", tip:"طريقة إيجابية تقول إن الشغل صعب."},
    {k:"ot_332", en:"I have to give credit where credit is due.", ar:"لازم أدي كل واحد حقه", ex:"<mark>I have to give credit where credit is due</mark>. The team's efforts on this project were exceptional.", tip:"قولها قدام الناس لما الفريق يعمل شغل حلو."},
    {k:"ot_332", en:"Got any plans for the weekend?", ar:"عامل حساب حاجة في الويك إند؟", ex:"<mark>Got any plans for the weekend</mark>?", tip:"سؤال خميس الصبح الشهير."},
    {k:"ot_338", en:"What's your take on", ar:"إيه رأيك في…", ex:"<mark>What's your take on</mark> ___? It's been all over the news.", tip:"‎take‎ هنا = رأي. ابعد عن السياسة والدين."},
    {k:"ot_338", en:"Better bring an umbrella.", ar:"أحسن تاخد شمسية", ex:"I heard it's supposed to rain later this week. <mark>Better bring an umbrella</mark>.", tip:"الجو موضوع آمن دايمًا."},
    {k:"ot_338", en:"Sorry to cut this short, but I have a call scheduled soon.", ar:"آسف إني هقطع الكلام، بس عندي مكالمة كمان شوية", ex:"<mark>Sorry to cut this short, but I have a call scheduled soon</mark>.", tip:"تنهي الدردشة بلطف من غير ما تبان زهقان."}
   ],
   quiz:[
    {type:"mcq", q:"عايز تكمل الكلام بعد ما زميلك حكى عن هوايته:", options:["OK.","That sounds interesting. How did you get into it?","I don't like that."], answer:1, why:"سؤال متابعة بيكمل الحوار."},
    {type:"gap", sentence:"You've really gone above and ___ on this project.", options:["beyond","below","behind"], answer:0, why:"‎above and beyond‎ = عملت أكتر من المطلوب."},
    {type:"order", words:["How","was","your","commute","this","morning"], answer:"How was your commute this morning", why:"سؤال صباحي عن المشوار للشغل."},
    {type:"mcq", q:"عايز تنهي الكلام وترجع لشغلك:", options:["Well, I should be getting back to work now. It was really nice talking with you.","Go away, please.","(Walk away.)"], answer:0, why:"ختام مهذب."},
    {type:"mcq", q:"زائر وصل الشركة:", options:["What do you want?","Welcome to our office! Can I get you anything to drink?","Sit down."], answer:1, why:"ترحيب وضيافة."}
   ],
   match:[["learning curve","فترة تعلم"],["milestone","مرحلة مهمة"],["breakthrough","إنجاز كبير"],["pastime","هواية / تسلية"],["commute","المشوار للشغل"],["gripping","مشوّق"]],
   roleplay:{ scene:"انت في البوفيه مع زميل من قسم الطاقة الشمسية وقت البريك، ومش عارفين تتكلموا في إيه.",
    turns:[
     {them:"(You are both waiting for the coffee machine.)"},
     {you:[{t:"How's your current project going? Any updates or challenges?",ok:1,fb:"بداية سهلة ومفتوحة."},{t:"...",ok:0,fb:"صمت محرج."},{t:"How much do you earn?",ok:0,fb:"سؤال شخصي جدًا."}]},
     {them:"Colleague: It's quite a learning curve, the inverters on the new site are tricky. Got any plans for the weekend?"},
     {you:[{t:"I'm planning to try something new this weekend, a new fish restaurant in Alexandria. I enjoy trying out new cuisines.",ok:1,fb:"رد فيه تفاصيل بيكمل الحوار."},{t:"No.",ok:0,fb:"بتقفل الكلام."},{t:"That's personal.",ok:0,fb:"ناشف في موقف خفيف."}]},
     {them:"(Your phone shows a meeting reminder.)"},
     {you:[{t:"Sorry to cut this short, but I have a call scheduled soon. It was great talking with you.",ok:1,fb:"إنهاء لطيف."},{t:"Bye.",ok:0,fb:"مفاجئ."},{t:"(Leave without saying anything.)",ok:0,fb:"قلة ذوق."}]}
    ]}
 },
 { id:"ot6", part:"Small talk", art:"handshake", minutes:18,
   title:"Chatting with colleagues", ar:"دردشة مع الزملاء",
   desc:"Two small-talk dialogues: Sana and Mohamed chat about projects, weekends, movies, coffee, holidays and the news; Ahmed welcomes Sarah, a new coworker.",
   reading:["ot_344","ot_347"],
   cards:[
    {k:"ot_344", en:"Anything interesting lined up?", ar:"عامل حساب حاجة حلوة؟", ex:"Oh, I'm planning to try a new hobby, pottery. What about you? <mark>Anything interesting lined up</mark>?", tip:"‎lined up‎ = مترتب ومخطط له."},
    {k:"ot_344", en:"I finally decided to give it a go.", ar:"أخيرًا قررت أجربها", ex:"Pottery has always been on my list of hobbies to try. <mark>I finally decided to give it a go</mark>.", tip:"‎give it a go‎ = تجرب حاجة لأول مرة."},
    {k:"ot_344", en:"It depends on what you're looking for", ar:"على حسب انت عايز إيه", ex:"Sure, I've been to a few places that might interest you. <mark>It depends on what you're looking for</mark>: relaxation, adventure, history?", tip:"رد ذكي قبل ما تدي نصيحة."},
    {k:"ot_344", en:"Let's catch up again soon.", ar:"نبقى نتكلم تاني قريب", ex:"Same here, Mohamed. <mark>Let's catch up again soon</mark>.", tip:"‎catch up‎ = ندردش ونعرف أخبار بعض."},
    {k:"ot_347", en:"Let me know if you need any help getting settled.", ar:"قولي لو احتجت أي مساعدة عشان تتأقلم", ex:"Hello, Sarah. Welcome to the team! <mark>Let me know if you need any help getting settled</mark>.", tip:"جملة ترحيب ممتازة لأي زميل جديد."},
    {k:"ot_347", en:"It's been quite an adjustment", ar:"كانت فترة تأقلم مش سهلة", ex:"So far, so good. <mark>It's been quite an adjustment</mark>, but everyone has been really welcoming.", tip:"‎adjustment‎ = إنك تتعود على مكان جديد."},
    {k:"ot_347", en:"I'm sure I'll be seeing you around.", ar:"أكيد هنشوف بعض كتير", ex:"Same here, Ahmed. <mark>I'm sure I'll be seeing you around</mark>.", tip:"ختام ودود لأول مقابلة."}
   ],
   quiz:[
    {type:"mcq", q:"زميلة قالتلك ‎I finally decided to give it a go‎. يعني:", options:["قررت تجرب الحاجة دي أخيرًا","قررت تمشي","قررت ترفض"], answer:0, why:"‎give it a go‎ = تجرب."},
    {type:"gap", sentence:"Let me know if you need any help getting ___.", options:["settled","set","setting"], answer:0, why:"‎get settled‎ = تستقر وتتأقلم."},
    {type:"order", words:["Let's","catch","up","again","soon"], answer:"Let's catch up again soon", why:"ختام دردشة ودود."},
    {type:"mcq", q:"زميل جديد لسه واصل، تسأله عن شغله:", options:["What does a typical day look like for you in your role?","Why did they hire you?","What's your salary?"], answer:0, why:"سؤال مهني ولطيف."},
    {type:"mcq", q:"عايز ترشح فيلم لزميل:", options:["I recently watched a movie called Inception. It was really good. I highly recommend it.","Movies are boring.","Watch whatever."], answer:0, why:"ترشيح واضح بسبب."}
   ],
   match:[["give it a go","يجرب"],["lined up","مترتب له"],["catch up","يدردش ويعرف الأخبار"],["get settled","يتأقلم"],["adjustment","تأقلم"],["welcoming","مرحّب / ودود"]],
   roleplay:{ scene:"مهندسة جديدة انضمت لفريق صيانة ‎UPS‎ في شركتك وقابلتها في الطرقة أول أسبوع.",
    turns:[
     {them:"(A new face walks past your desk.)"},
     {you:[{t:"Hello, I'm Karim. I don't think we've met before. What's your name?",ok:1,fb:"تعارف طبيعي ولطيف."},{t:"Who are you?",ok:0,fb:"جافة."},{t:"(Ignore her.)",ok:0,fb:"فرصة ضاعت تبني علاقة."}]},
     {them:"New engineer: Hi, I'm Mona. I just started working here last week."},
     {you:[{t:"Hello, Mona. Welcome to the team! Let me know if you need any help getting settled. How has your day been so far?",ok:1,fb:"ترحيب + عرض مساعدة + سؤال."},{t:"Good luck with the old batteries.",ok:0,fb:"بتخوّفها."},{t:"OK.",ok:0,fb:"مفيش ترحيب."}]},
     {them:"Mona: So far, so good. It's been quite an adjustment, but everyone has been really welcoming."},
     {you:[{t:"That's good to hear. Anyway, I should be getting back to work now. It was really nice talking with you.",ok:1,fb:"ختام ودود."},{t:"I have to go.",ok:0,fb:"مفاجئ."},{t:"Everyone is not that nice.",ok:0,fb:"سلبية مالهاش لازمة."}]}
    ]}
 }
];
