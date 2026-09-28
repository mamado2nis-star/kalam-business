/* Chapter 2 — Business Email. Each card's k = the book track its phrase comes from. */
const CH2=[
 { id:"em1", part:"Writing emails", art:"mail", minutes:18,
   title:"Anatomy of a business email", ar:"تركيب إيميل الشغل",
   desc:"Subject, greeting, body, closing and signature — plus the right greeting and opening line for every situation.",
   reading:["em_121","em_125"],
   cards:[
    {k:"em_121", en:"Make sure your subject line is clear and catchy.", ar:"خلي عنوان الإيميل واضح وجذاب", ex:"First, <mark>make sure your subject line is clear and catchy</mark>.", tip:"العنوان أول حاجة بتتقري. خليه يقول الموضوع في كلمات قليلة."},
    {k:"em_121", en:"I'm reaching out to you today to ask a quick question.", ar:"بتواصل معاك النهارده علشان أسأل سؤال سريع", ex:"<mark>I'm reaching out to you today to ask a quick question</mark> about the project deadline.", tip:"‎reach out‎ = يتواصل. بداية ودودة ومهنية."},
    {k:"em_121", en:"I look forward to hearing back from you soon.", ar:"مستني ردك قريب", ex:"I appreciate your help, and <mark>I look forward to hearing back from you soon</mark>.", tip:"بعد ‎look forward to‎ ييجي فعل بـ ‎-ing‎."},
    {k:"em_125", en:"Dear Hiring Manager,", ar:"السيد مدير التوظيف،", ex:"If you don't know the name of the recipient, write <mark>Dear Hiring Manager</mark>.", tip:"لما ماتعرفش اسم الشخص في إيميل تقديم على وظيفة."},
    {k:"em_125", en:"The purpose of this email is to address…", ar:"الغرض من الإيميل ده إني أتكلم عن…", ex:"<mark>The purpose of this email is to address</mark> the delay in the last shipment.", tip:"مقدمة رسمية تقول بيها موضوع الإيميل على طول."},
    {k:"em_125", en:"I was referred to you by…", ar:"حد رشّحلي أتواصل معاك", ex:"<mark>I was referred to you by</mark> Ahmed Samir, who spoke highly of your work.", tip:"بتفتح الباب لما حد مشترك يعرّفكم."},
    {k:"em_125", en:"I hope this email finds you well.", ar:"أتمنى تكون بخير", ex:"Dear Mr. Kamal, <mark>I hope this email finds you well</mark>.", tip:"أشهر جملة افتتاح في الإيميلات الرسمية."}
   ],
   quiz:[
    {type:"mcq", q:"بتبعت تقديم على وظيفة ومش عارف اسم الشخص:", options:["Hey you,","Dear Hiring Manager,","Hi guys,"], answer:1, why:"رسمية ومناسبة لما الاسم مش معروف."},
    {type:"gap", sentence:"I look forward to ___ back from you soon.", options:["hear","hearing","heard"], answer:1, why:"‎look forward to‎ + ‎-ing‎."},
    {type:"order", words:["The","purpose","of","this","email","is","to","address"], answer:"The purpose of this email is to address", why:"مقدمة رسمية لموضوع الإيميل."},
    {type:"mcq", q:"قبل ما تدوس Send، الكتاب بينبّه على إيه؟", options:["تختار Reply أو Reply All صح وتتأكد من المرفقات","تكتب بخط كبير","تبعت نسخة لكل الشركة"], answer:0, why:"غلطتين شائعين جدًا."},
    {type:"mcq", q:"زميلك أحمد رشّحك لعميل جديد. تبدأ الإيميل إزاي؟", options:["I was referred to you by Ahmed, who spoke highly of your work.","Ahmed said you need us.","Do you know Ahmed?"], answer:0, why:"‎referred to you by‎ بتدي مصداقية من أول سطر."}
   ],
   match:[["subject line","عنوان الإيميل"],["recipient","المستلم"],["signature","التوقيع"],["attachment","مرفق"],["Reply All","رد على الكل"],["referral","ترشيح"]],
   roleplay:{ scene:"بتكتب إيميل لزميلة اسمها Jane تسألها عن معاد تسليم المشروع. اختار أنسب جملة في كل جزء.",
    turns:[
     {them:"(Step 1) Choose a subject line."},
     {you:[{t:"Quick question about the project deadline",ok:1,fb:"واضح ومختصر، زي مثال الكتاب."},{t:"Hello!!!",ok:0,fb:"مش بيقول الموضوع."},{t:"URGENT READ NOW",ok:0,fb:"عدواني ومزعج."}]},
     {them:"(Step 2) Open the email."},
     {you:[{t:"Hi Jane, hope you're having a great day! I'm reaching out to ask a quick question about the deadline.",ok:1,fb:"تحية ودودة ودخلت في الموضوع."},{t:"Jane, answer me.",ok:0,fb:"أمر مباشر وجاف."},{t:"Dear Sir or Madam,",ok:0,fb:"رسمية زيادة لزميلة تعرفها."}]},
     {them:"(Step 3) Close the email."},
     {you:[{t:"I appreciate your help, and I look forward to hearing back from you soon. Best regards,",ok:1,fb:"ختام مهذب ومهني."},{t:"Reply fast.",ok:0,fb:"بيضغط عليها."},{t:"Bye bye",ok:0,fb:"غير مهنية."}]}
    ]}
 },
 { id:"em2", part:"Writing emails", art:"cv", minutes:20,
   title:"The email body: updates, requests & apologies", ar:"جسم الإيميل: تحديثات وطلبات واعتذارات",
   desc:"Attach files, give updates, ask for help or approval, clear up confusion, apologize and answer complaints.",
   reading:["em_134","em_139"],
   cards:[
    {k:"em_134", en:"Please find attached … for your review.", ar:"مرفق … للمراجعة", ex:"<mark>Please find attached</mark> the updated budget <mark>for your review</mark> and consideration.", tip:"الصيغة القياسية لذكر المرفقات."},
    {k:"em_134", en:"As you may recall, we previously discussed…", ar:"زي ما انت فاكر، اتكلمنا قبل كده عن…", ex:"<mark>As you may recall, we previously discussed</mark> moving the launch to May.", tip:"بتفكّر القارئ بالسياق بأدب."},
    {k:"em_134", en:"We're on track to meet the project's objectives.", ar:"إحنا ماشيين صح لتحقيق أهداف المشروع", ex:"I wanted to let you know that <mark>we're on track to meet the project's objectives</mark>.", tip:"‎on track‎ = ماشيين حسب الخطة."},
    {k:"em_134", en:"at your earliest convenience", ar:"في أقرب وقت يناسبك", ex:"Could we schedule a call to discuss this <mark>at your earliest convenience</mark>?", tip:"أرق من ‎ASAP‎ بكتير."},
    {k:"em_134", en:"There seems to have been a misunderstanding.", ar:"واضح إن حصل سوء تفاهم", ex:"<mark>There seems to have been a misunderstanding</mark> about the delivery date, and I wanted to clarify.", tip:"بتصحح من غير ما تلوم حد."},
    {k:"em_139", en:"I apologize for my mistake, and I am committed to making things right.", ar:"بعتذر عن غلطتي، وملتزم أصلح الموضوع", ex:"<mark>I apologize for my mistake, and I am committed to making things right</mark>.", tip:"اعتذار + التزام بحل."},
    {k:"em_139", en:"Thank you for bringing this matter to our attention.", ar:"شكرًا إنك نبهتنا للموضوع ده", ex:"<mark>Thank you for bringing this matter to our attention</mark>; we take your concerns very seriously.", tip:"أول جملة في الرد على شكوى عميل."}
   ],
   quiz:[
    {type:"mcq", q:"عايز تطلب مكالمة من مدير كبير بأدب:", options:["Call me now.","Could we schedule a call at your earliest convenience?","I need a call ASAP!!!"], answer:1, why:"‎at your earliest convenience‎ مؤدبة ومهنية."},
    {type:"gap", sentence:"Please find ___ the updated budget for your review.", options:["attached","attach","attaching"], answer:0, why:"‎Please find attached‎ صيغة ثابتة."},
    {type:"order", words:["We're","on","track","to","meet","the","project's","objectives"], answer:"We're on track to meet the project's objectives", why:"تحديث إيجابي عن المشروع."},
    {type:"mcq", q:"عميل اشتكى من تأخير. أول جملة في ردك:", options:["It's not our fault.","Thank you for bringing this matter to our attention.","Calm down."], answer:1, why:"بتشكره وبتبين إنك واخد الموضوع بجد."},
    {type:"mcq", q:"فيه لخبطة في معاد التسليم بينك وبين عميل:", options:["You misunderstood me.","There seems to have been a misunderstanding about the date, and I wanted to clarify.","Read my email again."], answer:1, why:"بتصحح من غير ما تلوم."}
   ],
   match:[["milestone","مرحلة مهمة"],["recap","تلخيص سريع"],["authorize","يوافق رسميًا"],["clarify","يوضح"],["clause","بند في العقد"],["dissatisfaction","عدم رضا"]],
   roleplay:{ scene:"عميل اسمه Mr. Lewis بعت شكوى إن الشحنة اتأخرت. انت بترد عليه.",
    turns:[
     {them:"(Step 1) How do you open your reply?"},
     {you:[{t:"Thank you for bringing this matter to our attention. Please know that we take your concerns very seriously.",ok:1,fb:"زي الكتاب بالظبط."},{t:"We are not responsible for shipping.",ok:0,fb:"دفاعية وبتزود غضب العميل."},{t:"OK.",ok:0,fb:"باردة جدًا."}]},
     {them:"(Step 2) Apologize and commit to a fix."},
     {you:[{t:"I apologize for the delay, and I am committed to making things right. The shipment will arrive on Monday.",ok:1,fb:"اعتذار + حل + معاد."},{t:"Sorry, these things happen.",ok:0,fb:"مفيش التزام بحل."},{t:"Maybe it will come.",ok:0,fb:"مش مطمّنة."}]},
     {them:"(Step 3) Close the email."},
     {you:[{t:"Please let me know if there's anything else we can do to make things right. Best regards,",ok:1,fb:"ختام مهتم ومهني."},{t:"Don't complain again.",ok:0,fb:"عدائية."},{t:"Bye.",ok:0,fb:"مش مناسبة."}]}
    ]}
 },
 { id:"em3", part:"Writing emails", art:"chart", minutes:15,
   title:"Closings, abbreviations & linking words", ar:"الختام والاختصارات وأدوات الربط",
   desc:"Pick the right sign-off, understand ASAP, EOD, FYI and friends, and connect your ideas smoothly.",
   reading:["em_146","em_149"],
   cards:[
    {k:"em_146", en:"Best regards,", ar:"مع خالص التحية،", ex:"Thank you for your help. <mark>Best regards,</mark> Mona", tip:"الأكثر أمانًا لما يكون بينكم تواصل مستمر."},
    {k:"em_146", en:"Sincerely,", ar:"مع التحية،", ex:"<mark>Sincerely,</mark> Ahmed Adel", tip:"رسمية، لما تبعت لحد لأول مرة."},
    {k:"em_146", en:"Please don't hesitate to reach out if you have any questions.", ar:"ماتترددش تكلمني لو عندك أي سؤال", ex:"<mark>Please don't hesitate to reach out if you have any questions</mark>.", tip:"ختام بيدعو القارئ يتواصل."},
    {k:"em_146", en:"Could you please confirm that you've received this message?", ar:"ممكن تأكدلي إن الرسالة وصلتك؟", ex:"<mark>Could you please confirm that you've received this message?</mark>", tip:"مفيدة مع المرفقات المهمة والعقود."},
    {k:"em_146", en:"EOD — end of day", ar:"آخر اليوم", ex:"Please send the report by <mark>EOD</mark> today.", tip:"وبنفس الطريقة ‎EOW‎ = آخر الأسبوع."},
    {k:"em_149", en:"It's important to note that…", ar:"من المهم نلاحظ إن…", ex:"<mark>It's important to note that</mark> prices will change next month.", tip:"بتلفت النظر لنقطة مهمة."},
    {k:"em_149", en:"As a result,", ar:"ونتيجة لكده،", ex:"The supplier was late. <mark>As a result,</mark> we moved the launch.", tip:"بتربط السبب بالنتيجة."}
   ],
   quiz:[
    {type:"mcq", q:"إيه معنى ‎FYI‎؟", options:["For your information","Finish your items","Fix your issue"], answer:0, why:"‎FYI‎ = للعلم."},
    {type:"mcq", q:"أول إيميل لعميل جديد. أنسب ختام:", options:["Cheers,","Sincerely,","See you later,"], answer:1, why:"‎Sincerely‎ رسمية للتواصل الأول."},
    {type:"gap", sentence:"The shipment was late. ___, we missed the deadline.", options:["As a result","However","For instance"], answer:0, why:"سبب ← نتيجة."},
    {type:"order", words:["Please","don't","hesitate","to","reach","out"], answer:"Please don't hesitate to reach out", why:"ختام بيدعو للتواصل."},
    {type:"mcq", q:"‎RSVP‎ في دعوة معناها:", options:["من فضلك رد","لا ترد","تعالى بدري"], answer:0, why:"عبارة فرنساوي: ‎please respond‎."}
   ],
   match:[["ASAP","في أقرب وقت ممكن"],["EOD","آخر اليوم"],["FYI","للعلم"],["TBD","لسه هيتحدد"],["OOO","خارج المكتب"],["ETA","الوقت المتوقع للوصول"]],
   roleplay:{ scene:"بتراجع إيميلات زميل جديد قبل ما يبعتها. اختار الأنسب.",
    turns:[
     {them:"(1) He's emailing a new client for the first time. Which closing?"},
     {you:[{t:"Sincerely,",ok:1,fb:"رسمية ومناسبة لأول تواصل."},{t:"Cheers mate,",ok:0,fb:"غير رسمية زيادة."},{t:"Later,",ok:0,fb:"مش مهنية."}]},
     {them:"(2) He wants the report today before he leaves. Which line?"},
     {you:[{t:"Could you please send the report by EOD?",ok:1,fb:"واضحة ومؤدبة."},{t:"Send it NOW.",ok:0,fb:"أمر جاف."},{t:"Send it sometime.",ok:0,fb:"مش واضح إمتى."}]},
     {them:"(3) He wants to connect two ideas: the supplier was late, so the launch moved."},
     {you:[{t:"The supplier was late. As a result, we moved the launch.",ok:1,fb:"أداة ربط صح للسبب والنتيجة."},{t:"The supplier was late. For instance, we moved the launch.",ok:0,fb:"‎for instance‎ للأمثلة."},{t:"The supplier was late. Similarly, we moved the launch.",ok:0,fb:"‎similarly‎ للتشابه."}]}
    ]}
 },
 { id:"em4", part:"Email templates", art:"money", minutes:15,
   title:"Inquiry, introduction & follow-up emails", ar:"إيميلات الاستفسار والتعارف والمتابعة",
   desc:"Ask a supplier for details, introduce your company, follow up after a meeting, and send a quotation.",
   reading:["em_155","em_159"],
   cards:[
    {k:"em_155", en:"Could you kindly provide the following information?", ar:"ممكن تتفضل تبعتلنا المعلومات دي؟", ex:"To assist us in our assessment, <mark>could you kindly provide the following information</mark>:", tip:"‎kindly‎ بتخلي الطلب مؤدب ورسمي."},
    {k:"em_155", en:"We appreciate your prompt attention to this matter.", ar:"نقدّر اهتمامك السريع بالموضوع", ex:"<mark>We appreciate your prompt attention to this matter</mark> and look forward to hearing from you.", tip:"ختام مهذب بيطلب رد سريع."},
    {k:"em_155", en:"I wanted to take a moment to introduce myself.", ar:"حبيت آخد دقيقة أعرّفك بنفسي", ex:"I recently came across your company, and <mark>I wanted to take a moment to introduce myself</mark> and our business.", tip:"بداية إيميل تعارف مع شركة جديدة."},
    {k:"em_155", en:"There may be potential synergies between our organizations.", ar:"ممكن يكون فيه تكامل مفيد بين شركاتنا", ex:"I believe <mark>there may be potential synergies between our organizations</mark>.", tip:"‎synergy‎ = تعاون بيطلع نتيجة أكبر."},
    {k:"em_159", en:"I wanted to follow up on our meeting.", ar:"حبيت أتابع بعد اجتماعنا", ex:"<mark>I wanted to follow up on our</mark> meeting that took place on Monday.", tip:"أول سطر في إيميل المتابعة."},
    {k:"em_159", en:"To keep the momentum going, I'd like to propose the following next steps.", ar:"علشان نكمّل بنفس الحماس، بقترح الخطوات دي", ex:"<mark>To keep the momentum going, I would like to propose the following next steps</mark>:", tip:"‎momentum‎ = قوة الدفع."},
    {k:"em_159", en:"As per our recent discussion…", ar:"زي ما اتفقنا في كلامنا الأخير…", ex:"<mark>As per our recent discussion</mark>, I am pleased to provide you with a quotation.", tip:"‎as per‎ = حسب / بناءً على."}
   ],
   quiz:[
    {type:"mcq", q:"عايز تطلب من مورد أسعار وتفاصيل منتج:", options:["Send prices.","Could you kindly provide the following information?","What's the price, man?"], answer:1, why:"رسمية ومؤدبة."},
    {type:"gap", sentence:"___ per our recent discussion, please find the quotation attached.", options:["As","Like","For"], answer:0, why:"‎as per‎."},
    {type:"order", words:["I","wanted","to","follow","up","on","our","meeting"], answer:"I wanted to follow up on our meeting", why:"بداية إيميل متابعة."},
    {type:"mcq", q:"إيه معنى ‎potential synergies‎؟", options:["مشاكل محتملة","فرص تعاون مفيدة","مصاريف إضافية"], answer:1, why:"‎synergy‎ = تكامل بيزود النتيجة."},
    {type:"mcq", q:"آخر إيميل الاستفسار. أنسب جملة:", options:["We appreciate your prompt attention to this matter.","Answer quickly.","Whatever."], answer:0, why:"بتطلب رد سريع بأدب."}
   ],
   match:[["inquiry","استفسار"],["quotation","عرض سعر"],["proposal","اقتراح / عرض"],["follow up","يتابع"],["bulk purchase","شراء بالجملة"],["warranty","ضمان"]],
   roleplay:{ scene:"قابلت عميل يوم الاتنين وعايز تبعتله إيميل متابعة ومعاه عرض السعر.",
    turns:[
     {them:"(Step 1) Open the follow-up email."},
     {you:[{t:"I hope you're doing well. I wanted to follow up on our meeting on Monday.",ok:1,fb:"افتتاحية متابعة مثالية."},{t:"Did you forget me?",ok:0,fb:"مش مهنية."},{t:"Why didn't you call?",ok:0,fb:"فيها لوم."}]},
     {them:"(Step 2) Suggest what happens next."},
     {you:[{t:"To keep the momentum going, I'd like to propose the following next steps.",ok:1,fb:"بتقود المحادثة لقدام."},{t:"Tell me what to do.",ok:0,fb:"مفيش مبادرة."},{t:"Let's wait.",ok:0,fb:"بتضيّع الحماس."}]},
     {them:"(Step 3) Mention the quotation."},
     {you:[{t:"As per our recent discussion, please find the detailed quotation attached.",ok:1,fb:"رسمية وواضحة."},{t:"Price is in file.",ok:0,fb:"ناقصة ومش مهنية."},{t:"Look at the attachment.",ok:0,fb:"أمر جاف."}]}
    ]}
 },
 { id:"em5", part:"Email templates", art:"meeting", minutes:15,
   title:"Meetings, announcements & reminders", ar:"طلب اجتماع وإعلانات وتذكير بالدفع",
   desc:"Request a meeting, announce news, ask for feedback, and chase an unpaid invoice politely.",
   reading:["em_163","em_166"],
   cards:[
    {k:"em_163", en:"Here are my proposed dates and times.", ar:"دي المواعيد اللي بقترحها", ex:"I'd like to request a meeting to discuss the budget. <mark>Here are my proposed dates and times</mark>:", tip:"اقترح أكتر من معاد."},
    {k:"em_163", en:"Please let me know which option works best for you.", ar:"قولّي أنهي اختيار يناسبك", ex:"<mark>Please let me know which option works best for you</mark>, or suggest another time.", tip:"بتدي الطرف التاني الاختيار."},
    {k:"em_163", en:"We're excited to announce…", ar:"يسعدنا نعلن عن…", ex:"<mark>We're excited to announce</mark> the opening of our new branch.", tip:"بداية إيميل إعلان."},
    {k:"em_163", en:"Your input is invaluable.", ar:"رأيك مهم جدًا بالنسبة لنا", ex:"<mark>Your input is invaluable</mark> in helping us serve you better.", tip:"‎invaluable‎ = لا يقدر بثمن، مش ‎without value‎."},
    {k:"em_166", en:"This is a gentle reminder that your invoice remains unpaid.", ar:"ده تذكير لطيف إن الفاتورة لسه متدفعتش", ex:"<mark>This is a gentle reminder that your invoice</mark> #204 <mark>remains unpaid</mark>.", tip:"بتطالب بالفلوس من غير ما تضايق العميل."},
    {k:"em_166", en:"Please kindly arrange for the payment.", ar:"برجاء ترتيب الدفع", ex:"<mark>Please kindly arrange for the payment</mark> at your earliest convenience.", tip:"طلب رسمي ومؤدب."},
    {k:"em_166", en:"Thank you for your business.", ar:"شكرًا لتعاملك معانا", ex:"We appreciate your prompt attention. <mark>Thank you for your business.</mark>", tip:"ختام بيحافظ على العلاقة مع العميل."}
   ],
   quiz:[
    {type:"mcq", q:"عميل ماسددش فاتورة من شهر. أنسب بداية:", options:["You didn't pay!","This is a gentle reminder that your invoice remains unpaid.","Pay or else."], answer:1, why:"مؤدبة وبتحافظ على العلاقة."},
    {type:"gap", sentence:"Your input is ___ in helping us improve.", options:["invaluable","valueless","unvalued"], answer:0, why:"‎invaluable‎ = مهم جدًا."},
    {type:"order", words:["Please","let","me","know","which","option","works","best"], answer:"Please let me know which option works best", why:"بتدي اختيار المعاد."},
    {type:"mcq", q:"بتطلب اجتماع. أحسن طريقة:", options:["Meeting tomorrow 9am. Come.","I'd like to request a meeting. Here are my proposed dates and times.","When are you free? Any time."], answer:1, why:"طلب واضح ومعاه اختيارات."},
    {type:"mcq", q:"إيه معنى ‎Thank you for your business‎؟", options:["شكرًا على شغلك","شكرًا لتعاملك معانا كعميل","شكرًا على شركتك"], answer:1, why:"بتتقال للعميل بعد الشراء أو الدفع."}
   ],
   match:[["invoice","فاتورة"],["due date","تاريخ الاستحقاق"],["outstanding","لسه متدفعش"],["survey","استبيان"],["announce","يعلن"],["appointment","معاد"]],
   roleplay:{ scene:"انت في قسم الحسابات. عميل عليه فاتورة ماتدفعتش من ٣ أسابيع.",
    turns:[
     {them:"(Step 1) Open the reminder."},
     {you:[{t:"I hope this email finds you well. This is a gentle reminder that invoice #204 remains unpaid.",ok:1,fb:"زي قالب الكتاب."},{t:"You owe us money.",ok:0,fb:"عدائية."},{t:"Hi, pay please.",ok:0,fb:"ناقصة التفاصيل."}]},
     {them:"(Step 2) Ask for payment."},
     {you:[{t:"Please kindly arrange for the payment at your earliest convenience via bank transfer.",ok:1,fb:"مؤدبة وواضحة."},{t:"Pay today or we stop working.",ok:0,fb:"تهديد في أول تذكير."},{t:"If you want, you can pay.",ok:0,fb:"ضعيفة وملهاش لازمة."}]},
     {them:"(Step 3) Close the email."},
     {you:[{t:"If you have already made the payment, please ignore this message. Thank you for your business.",ok:1,fb:"لبق وبيحافظ على العلاقة."},{t:"We are waiting.",ok:0,fb:"جافة."},{t:"Bye.",ok:0,fb:"مش مهنية."}]}
    ]}
 },
 { id:"em6", part:"Email templates", art:"laptop", minutes:18,
   title:"Invitations, job applications & networking", ar:"الدعوات والتقديم على وظيفة وبناء العلاقات",
   desc:"Invite people to an event, remind about deadlines, apply for a job with a cover letter, and reach out to new contacts.",
   reading:["em_169","em_175"],
   cards:[
    {k:"em_169", en:"We're excited to invite you to our upcoming event.", ar:"يسعدنا ندعوك لحدثنا الجاي", ex:"<mark>We're excited to invite you to our upcoming event</mark>, taking place on 5 May.", tip:"بداية إيميل دعوة."},
    {k:"em_169", en:"This is just a friendly reminder that the deadline is fast approaching.", ar:"تذكير ودّي إن المعاد النهائي قرّب", ex:"<mark>This is just a friendly reminder that the deadline</mark> for the report <mark>is fast approaching</mark>.", tip:"‎fast approaching‎ = قرّب جدًا."},
    {k:"em_169", en:"I am writing to express my interest in the position.", ar:"بكتب علشان أعبّر عن اهتمامي بالوظيفة", ex:"<mark>I am writing to express my interest in the</mark> Sales Engineer <mark>position</mark>.", tip:"أول سطر في إيميل التقديم."},
    {k:"em_169", en:"I believe I would be a great fit for the role.", ar:"شايف إني هكون مناسب جدًا للوظيفة", ex:"With my background in sales, <mark>I believe I would be a great fit for the role</mark>.", tip:"‎a great fit‎ = مناسب."},
    {k:"em_169", en:"Thank you for considering my application.", ar:"شكرًا لاهتمامك بطلبي", ex:"<mark>Thank you for considering my application.</mark> I look forward to hearing from you.", tip:"ختام إيميل التقديم."},
    {k:"em_175", en:"I wanted to acknowledge receipt of your message.", ar:"حبيت أأكد إن رسالتك وصلتني", ex:"<mark>I wanted to acknowledge receipt of your message</mark> and let you know I'm looking into it.", tip:"رد سريع لحد ما تجهز الإجابة الكاملة."},
    {k:"em_175", en:"Would you be available for a 15–20 minute call?", ar:"ممكن نعمل مكالمة ١٥–٢٠ دقيقة؟", ex:"If you're open to it, <mark>would you be available for a 15–20 minute call</mark> sometime next week?", tip:"طلب صغير ومحدد بيسهّل الموافقة."}
   ],
   quiz:[
    {type:"mcq", q:"أول سطر في إيميل تقديم على وظيفة:", options:["I want job.","I am writing to express my interest in the Sales Engineer position.","Hire me please."], answer:1, why:"رسمي وواضح."},
    {type:"gap", sentence:"The deadline is fast ___ on Friday.", options:["approaching","coming near","arrive"], answer:0, why:"‎fast approaching‎."},
    {type:"order", words:["Thank","you","for","considering","my","application"], answer:"Thank you for considering my application", why:"ختام إيميل التقديم."},
    {type:"mcq", q:"إيه معنى ‎acknowledge receipt‎؟", options:["تأكد إن الرسالة وصلتك","ترفض الرسالة","تمسح الرسالة"], answer:0, why:"‎receipt‎ هنا = الاستلام."},
    {type:"mcq", q:"عايز تتعرف على حد في مجالك على LinkedIn. أحسن طلب:", options:["Give me a job.","Would you be available for a 15–20 minute call next week?","Call me now."], answer:1, why:"طلب محدد وصغير ومؤدب."}
   ],
   match:[["RSVP","رجاء الرد"],["deadline","آخر معاد"],["cover letter","خطاب تقديم"],["résumé","السيرة الذاتية"],["networking","بناء علاقات مهنية"],["acknowledge","يأكد الاستلام"]],
   roleplay:{ scene:"لقيت إعلان وظيفة Social Media Coordinator على LinkedIn، وبتكتب إيميل التقديم.",
    turns:[
     {them:"(Step 1) First sentence."},
     {you:[{t:"I am writing to express my interest in the Social Media Coordinator position advertised on LinkedIn.",ok:1,fb:"بداية مثالية."},{t:"I saw your job. I want it.",ok:0,fb:"مش رسمية."},{t:"Hello, are you hiring?",ok:0,fb:"الإعلان واضح إنهم بيعينوا."}]},
     {them:"(Step 2) Show why you fit."},
     {you:[{t:"In my previous role, I increased engagement by 25%, so I believe I would be a great fit for the role.",ok:1,fb:"إنجاز برقم وربطته بالوظيفة."},{t:"I use Facebook every day.",ok:0,fb:"مش خبرة مهنية."},{t:"I'm the best.",ok:0,fb:"ادعاء من غير دليل."}]},
     {them:"(Step 3) Close."},
     {you:[{t:"Please find my résumé attached. Thank you for considering my application. Sincerely,",ok:1,fb:"ختام كامل ومهني."},{t:"Waiting your call.",ok:0,fb:"غلط لغوي ومش مهنية."},{t:"Thanks bye",ok:0,fb:"مش مناسبة لتقديم."}]}
    ]}
 }
];
