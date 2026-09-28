/* Chapter 5 — Negotiation. Each card's k = the book track its phrase comes from. */
const CH5=[
 { id:"ng1", part:"Negotiation", art:"deal", minutes:24,
   title:"The smartphone supply negotiation", ar:"مفاوضة توريد الموبايلات",
   desc:"Seven tips for negotiating in English, then a full negotiation between a CEO and a supplier: offers, deal breakers, stalling, compromise and closing the deal.",
   reading:["ng_241"],
   cards:[
    {k:"ng_241", en:"We are looking for a more competitive offer.", ar:"إحنا بندور على عرض أحسن في السعر", ex:"I appreciate your concern, but I'm afraid that this price is too high for us. <mark>We are looking for a more competitive offer</mark>.", tip:"بترفض السعر من غير ما تقفل الباب."},
    {k:"ng_241", en:"We cannot lower our price any further.", ar:"مش هنقدر ننزل السعر أكتر من كده", ex:"We understand your position, but <mark>we cannot lower our price any further</mark>.", tip:"جملة المورد لما يوصل للحد الأدنى بتاعه."},
    {k:"ng_241", en:"We have other options available to us", ar:"عندنا بدائل تانية", ex:"I see. Well, <mark>we have other options available to us</mark>, so we may need to consider finding a different supplier if we cannot reach a mutually beneficial agreement.", tip:"ورقة ضغط مؤدبة: إنت مش مضطر تقبل."},
    {k:"ng_241", en:"Can you offer any other incentives or adjustments", ar:"ممكن تقدم أي حوافز أو تعديلات تانية؟", ex:"<mark>Can you offer any other incentives or adjustments</mark> to help us reach a more favorable agreement?", tip:"اطلب حاجات غير السعر: خصم، مدة سداد، شحن."},
    {k:"ng_241", en:"We could also provide a 90-day payment term to help with cash flow.", ar:"ممكن كمان نديكم مهلة سداد ٩٠ يوم عشان السيولة", ex:"<mark>We could also provide a 90-day payment term to help with cash flow</mark>.", tip:"مدة السداد جزء مهم من أي صفقة، مش السعر بس."},
    {k:"ng_241", en:"the delivery timeline is a critical aspect of this agreement", ar:"ميعاد التسليم نقطة أساسية في الاتفاق ده", ex:"I'm afraid that <mark>the delivery timeline is a critical aspect of this agreement</mark>.", tip:"كده بتوضح الـ ‎deal breaker‎ بتاعك."},
    {k:"ng_241", en:"That sounds like a reasonable offer.", ar:"ده عرض معقول", ex:"<mark>That sounds like a reasonable offer</mark>. Thank you for working with us to find a solution that meets our needs.", tip:"قبول هادي ومحترم للعرض النهائي."}
   ],
   quiz:[
    {type:"mcq", q:"المورد قال سعر عالي وعايز ترفض بأدب:", options:["No, too expensive, goodbye.","I appreciate your concern, but I'm afraid that this price is too high for us.","You are a thief."], answer:1, why:"تقدير + رفض مؤدب."},
    {type:"gap", sentence:"We also offer a 5% discount ___ orders over one million units.", options:["for","to","at"], answer:0, why:"a discount for orders."},
    {type:"order", words:["Let's","review","the","numbers","and","see","if","we","can","find","a","solution"], answer:"Let's review the numbers and see if we can find a solution", why:"دعوة لمراجعة الأرقام مع بعض."},
    {type:"mcq", q:"إيه معنى ‎deal breaker‎؟", options:["خصم كبير","شرط لو مااتحققش الصفقة تقع","عقد جديد"], answer:1, why:"‎deal breaker‎ = حاجة ممكن تلغي الصفقة كلها."},
    {type:"mcq", q:"حسب النصايح، إيه أهم حاجة لو الطرف التاني اتعصب؟", options:["Stay calm and composed.","Shout back.","Leave the room."], answer:0, why:"Keep emotions in check."}
   ],
   match:[["supplier","المورد"],["profit margin","هامش الربح"],["volume discount","خصم الكمية"],["cash flow","السيولة النقدية"],["deal breaker","شرط أساسي للصفقة"],["compromise","حل وسط"]],
   roleplay:{ scene:"انت مدير مشتريات في شركة صيانة ‎UPS‎. مورد بطاريات عارض عليك سعر عالي، ولازم توصل لاتفاق من غير ما تخسره.",
    turns:[
     {them:"Supplier: Our price for the 12V 100Ah batteries is 9,000 pounds per unit."},
     {you:[{t:"I appreciate your offer, but I'm afraid that this price is too high for us. We are looking for a more competitive offer.",ok:1,fb:"رفض مؤدب وبيفتح باب التفاوض."},{t:"That's crazy, no way.",ok:0,fb:"عدائية."},{t:"OK, fine.",ok:0,fb:"قبلت من غير أي تفاوض."}]},
     {them:"Supplier: We cannot lower our price any further. Our costs are quite high."},
     {you:[{t:"I understand. Can you offer any other incentives or adjustments, such as a volume discount or a 90-day payment term?",ok:1,fb:"طلبت حوافز تانية غير السعر."},{t:"Then we'll never work with you.",ok:0,fb:"قفلت الباب."},{t:"Hmm.",ok:0,fb:"مفيش خطوة جاية."}]},
     {them:"Supplier: We could offer 10% off if you order more than 200 units, with delivery in six weeks."},
     {you:[{t:"That sounds like a reasonable offer, but the delivery timeline is a critical aspect of this agreement. Can we guarantee four weeks?",ok:1,fb:"قبول مشروط بالنقطة الأهم."},{t:"Six weeks is fine, whatever.",ok:0,fb:"تنازلت عن شرط مهم."},{t:"No.",ok:0,fb:"رفض من غير سبب."}]}
    ]}
 },
 { id:"ng2", part:"Negotiation", art:"handshake", minutes:18,
   title:"Opening a negotiation and stating your position", ar:"بداية التفاوض وتوضيح موقفك",
   desc:"Introduce a negotiation, establish the terms, state your position, ask for concessions and show goodwill.",
   reading:["ng_249"],
   cards:[
    {k:"ng_249", en:"I wanted to touch base with you about…", ar:"كنت عايز أتواصل معاك بخصوص…", ex:"<mark>I wanted to touch base with you about</mark> ___.", tip:"‎touch base‎ = نتكلم / نتابع مع بعض."},
    {k:"ng_249", en:"Let's establish some ground rules before we begin.", ar:"خلينا نحط شوية قواعد قبل ما نبدأ", ex:"<mark>Let's establish some ground rules before we begin</mark>.", tip:"بتنظم التفاوض من الأول."},
    {k:"ng_249", en:"Can we outline the key terms and conditions of our agreement?", ar:"ممكن نحدد الشروط الأساسية للاتفاق؟", ex:"<mark>Can we outline the key terms and conditions of our agreement</mark>?", tip:"‎terms and conditions‎ = الشروط والأحكام."},
    {k:"ng_249", en:"Our bottom line is…", ar:"الحد الأدنى اللي نقبله هو…", ex:"<mark>Our bottom line is</mark> ___.", tip:"‎bottom line‎ = آخر كلام / أقل حاجة تقبلها."},
    {k:"ng_249", en:"Is there any flexibility on your end?", ar:"فيه أي مرونة من ناحيتكم؟", ex:"<mark>Is there any flexibility on your end?</mark>", tip:"طريقة لطيفة تطلب بيها تنازل."},
    {k:"ng_249", en:"Can we find a way to meet in the middle on this issue?", ar:"ممكن نلاقي حل وسط في النقطة دي؟", ex:"<mark>Can we find a way to meet in the middle on this issue?</mark>", tip:"‎meet in the middle‎ = كل واحد يتنازل شوية."},
    {k:"ng_249", en:"Let's work towards a mutually beneficial agreement.", ar:"خلينا نشتغل على اتفاق يفيد الطرفين", ex:"<mark>Let's work towards a mutually beneficial agreement</mark>.", tip:"‎mutually beneficial‎ = مفيد للطرفين."}
   ],
   quiz:[
    {type:"mcq", q:"عايز تبدأ الاجتماع وتقول هدفه:", options:["The purpose of this meeting is to explore a long-term maintenance contract.","Why are we here?","Talk now."], answer:0, why:"The purpose of this meeting is to explore ___."},
    {type:"gap", sentence:"Can we find a way to meet in the ___ on this issue?", options:["middle","center","half"], answer:0, why:"meet in the middle."},
    {type:"order", words:["Is","there","any","flexibility","on","your","end"], answer:"Is there any flexibility on your end", why:"طلب تنازل مؤدب."},
    {type:"mcq", q:"إيه معنى ‎stance‎؟", options:["موقف / وجهة نظر","سعر","ميعاد"], answer:0, why:"stance = position."},
    {type:"mcq", q:"عايز توضح إن ده أقل حاجة تقبلها:", options:["Our bottom line is a two-year contract.","Maybe two years, maybe not.","We don't care."], answer:0, why:"‎bottom line‎ = الحد الأدنى."}
   ],
   match:[["ground rules","قواعد أساسية"],["parameters","حدود / معايير"],["stance","موقف"],["bottom line","الحد الأدنى"],["concession","تنازل"],["goodwill","حسن نية"]],
   roleplay:{ scene:"بتفتح تفاوض مع مدير مصنع على عقد صيانة سنوي لمحولات السرعة ‎VFD‎.",
    turns:[
     {them:"Plant manager: Good morning. So, what did you want to talk about?"},
     {you:[{t:"Thank you for taking the time to meet with me today. I'd like to discuss a one-year maintenance contract for your VFDs.",ok:1,fb:"شكر + موضوع واضح."},{t:"Contract. Sign here.",ok:0,fb:"مباشرة زيادة."},{t:"Nothing special.",ok:0,fb:"مفيش هدف."}]},
     {them:"Plant manager: We need visits every month, but our budget is limited."},
     {you:[{t:"From our perspective, we believe that quarterly visits plus emergency support would cover your needs. Is there any flexibility on your end?",ok:1,fb:"وضحت موقفك وسألت عن المرونة."},{t:"Monthly is impossible.",ok:0,fb:"رفض جاف."},{t:"Your budget is your problem.",ok:0,fb:"مش مهنية."}]},
     {them:"Plant manager: Maybe, but I'm not sure yet."},
     {you:[{t:"I understand that we may have different perspectives, but I'm confident that we can work together to find common ground.",ok:1,fb:"حسن نية بيقرّب الطرفين."},{t:"Decide now.",ok:0,fb:"ضغط زيادة."},{t:"OK, bye.",ok:0,fb:"سيبت التفاوض."}]}
    ]}
 },
 { id:"ng3", part:"Negotiation", art:"money", minutes:20,
   title:"Clarifying, making offers and giving reasons", ar:"التوضيح وتقديم العروض وذكر الأسباب",
   desc:"Avoid misunderstandings, make offers and counteroffers, make strong statements, give reasons and react positively to an offer.",
   reading:["ng_253"],
   cards:[
    {k:"ng_253", en:"Just to clarify, are you saying…", ar:"بس عشان أتأكد، انت قصدك إن…", ex:"<mark>Just to clarify, are you saying</mark> ___?", tip:"بتمنع سوء الفهم قبل ما يكبر."},
    {k:"ng_253", en:"How about if we offer you ___ in exchange for ___?", ar:"إيه رأيك لو قدمنالك ‎___‎ مقابل ‎___‎؟", ex:"<mark>How about if we offer you ___ in exchange for ___?</mark>", tip:"‎in exchange for‎ = في مقابل."},
    {k:"ng_253", en:"we're open to negotiating if you have any counteroffers", ar:"إحنا مستعدين نتفاوض لو عندك عرض مضاد", ex:"Our offer is ___, but <mark>we're open to negotiating if you have any counteroffers</mark>.", tip:"‎counteroffer‎ = عرض مقابل من الطرف التاني."},
    {k:"ng_253", en:"we're prepared to sweeten the deal", ar:"مستعدين نحلّي الصفقة", ex:"Our initial offer is ___, but <mark>we're prepared to sweeten the deal</mark> with ___ if that helps.", tip:"‎sweeten the deal‎ = نضيف ميزة تخلي العرض أحلى."},
    {k:"ng_253", en:"I cannot stress enough the importance of…", ar:"مهما قلت مش هوفي أهمية…", ex:"<mark>I cannot stress enough the importance of</mark> ___.", tip:"جملة قوية لنقطة مش هتتنازل عنها."},
    {k:"ng_253", en:"Based on our experience, we think that this approach would be the most beneficial.", ar:"من خبرتنا، شايفين إن الطريقة دي الأفيد", ex:"<mark>Based on our experience, we think that this approach would be the most beneficial</mark>.", tip:"ادعم عرضك بسبب وخبرة."},
    {k:"ng_253", en:"Your proposal is definitely worth considering.", ar:"عرضك أكيد يستاهل نفكر فيه", ex:"<mark>Your proposal is definitely worth considering</mark>.", tip:"رد إيجابي من غير ما تلتزم."}
   ],
   quiz:[
    {type:"mcq", q:"مش فاهم كلام العميل كويس:", options:["What?","Could you please explain that in more detail?","You are not clear."], answer:1, why:"طلب توضيح مؤدب."},
    {type:"gap", sentence:"We can offer ___, but we would need ___ in ___.", options:["return","back","change"], answer:0, why:"‎in return‎ = في المقابل."},
    {type:"order", words:["It's","critical","that","we","find","a","solution","that","satisfies","both","parties"], answer:"It's critical that we find a solution that satisfies both parties", why:"جملة قوية وعادلة."},
    {type:"mcq", q:"عايز تقول إن العرض أحسن من توقعاتك:", options:["I have to admit, this offer is better than what I was expecting.","It's OK I guess.","Too good, something is wrong."], answer:0, why:"تقييم إيجابي واضح."},
    {type:"mcq", q:"إيه معنى ‎imperative‎؟", options:["ضروري جدًا","اختياري","متأخر"], answer:0, why:"‎It's imperative that we ___‎ = لازم جدًا."}
   ],
   match:[["clarify","يوضّح"],["rephrase","يعيد الصياغة"],["counteroffer","عرض مضاد"],["sweeten the deal","يحسّن العرض"],["imperative","ضروري جدًا"],["appealing","جذاب"]],
   roleplay:{ scene:"بتقدم عرض لتركيب منظومة طاقة شمسية لمزرعة، والعميل عنده أسئلة.",
    turns:[
     {them:"Farm owner: So the price includes the panels, but not the inverter?"},
     {you:[{t:"Just to clarify, are you saying you'd like the inverter included in the price?",ok:1,fb:"اتأكدت من الفهم قبل الرد."},{t:"Yes. No. Maybe.",ok:0,fb:"مشوّش."},{t:"Read the quote again.",ok:0,fb:"جاف."}]},
     {them:"Farm owner: Yes, and I also want a longer warranty."},
     {you:[{t:"How about if we offer you a five-year warranty in exchange for a 50% advance payment?",ok:1,fb:"عرض واضح مقابل شرط."},{t:"Free warranty forever.",ok:0,fb:"تنازل من غير مقابل."},{t:"Warranty is not possible.",ok:0,fb:"قفلت الباب."}]},
     {them:"Farm owner: Why should I pay that much in advance?"},
     {you:[{t:"Based on our experience, we think that this approach would be the most beneficial, because we can order the panels at a lower price.",ok:1,fb:"سبب مقنع للطرفين."},{t:"Because we said so.",ok:0,fb:"مفيش سبب."},{t:"Everyone does it.",ok:0,fb:"ضعيفة."}]}
    ]}
 },
 { id:"ng4", part:"Negotiation", art:"coffee", minutes:20,
   title:"Reservations, rejections, buying time and bargaining", ar:"التحفظات والرفض وكسب الوقت والمساومة",
   desc:"Welcome an offer with reservations, turn an offer down politely, buy time or stay non-committal, and bargain.",
   reading:["ng_257"],
   cards:[
    {k:"ng_257", en:"there are still a couple of loose ends to tie up", ar:"لسه فيه كام حاجة صغيرة محتاجة تتقفل", ex:"The arrangement under discussion obviously has a lot to offer both sides, but <mark>there are still a couple of loose ends to tie up</mark>.", tip:"‎loose ends‎ = تفاصيل لسه مخلصتش."},
    {k:"ng_257", en:"That being said, there are a few areas where we'd like to negotiate", ar:"ومع ده، فيه كام نقطة عايزين نتفاوض عليها", ex:"<mark>That being said, there are a few areas where we'd like to negotiate</mark> and see if we can come to a better agreement.", tip:"‎That being said‎ = ومع ذلك."},
    {k:"ng_257", en:"I'm afraid we can't accept this offer as it stands.", ar:"للأسف مش هنقدر نقبل العرض بشكله الحالي", ex:"<mark>I'm afraid we can't accept this offer as it stands</mark>. We were hoping for something more in line with our budget and timeline.", tip:"‎as it stands‎ = زي ما هو دلوقتي، يعني ممكن نقبله لو اتعدل."},
    {k:"ng_257", en:"Let me take a closer look at this and get back to you.", ar:"سيبني أبص عليه كويس وأرجعلك", ex:"<mark>Let me take a closer look at this and get back to you</mark>.", tip:"بتكسب وقت من غير ما ترفض."},
    {k:"ng_257", en:"I need to discuss this with my team before making a decision.", ar:"محتاج أناقش ده مع الفريق قبل ما آخد قرار", ex:"<mark>I need to discuss this with my team before making a decision</mark>.", tip:"سبب مقبول لتأجيل القرار."},
    {k:"ng_257", en:"I'm willing to make some concessions in other areas.", ar:"مستعد أتنازل في نقط تانية", ex:"If we can agree on this point, <mark>I'm willing to make some concessions in other areas</mark>.", tip:"مساومة: خد هنا وادّي هناك."},
    {k:"ng_257", en:"Can you give me some more details about how you arrived at that price?", ar:"ممكن تفاصيل أكتر عن إزاي وصلت للسعر ده؟", ex:"I see the value in what you're offering, but I think it's still a bit high. <mark>Can you give me some more details about how you arrived at that price?</mark>", tip:"بتخلي الطرف التاني يبرر السعر."}
   ],
   quiz:[
    {type:"mcq", q:"العرض كويس بس عندك ملاحظات:", options:["I appreciate the offer, and I think there's a lot of potential here. At the same time, we do have some concerns.","Perfect, sign now.","Bad offer."], answer:0, why:"إيجابي مع تحفظ."},
    {type:"gap", sentence:"While I appreciate the effort put into this offer, it falls ___ of what we were hoping for.", options:["short","down","low"], answer:0, why:"‎fall short of‎ = أقل من المتوقع."},
    {type:"order", words:["Let","me","get","back","to","you","by","the","end","of","the","week"], answer:"Let me get back to you by the end of the week", why:"كسب وقت بميعاد محدد."},
    {type:"mcq", q:"ليه ممكن تبقى ‎non-committal‎ في التفاوض؟", options:["عشان تاخد وقت تفكر وماتكشفش معلومات بدري","عشان تزعّل الطرف التاني","عشان تنهي التفاوض بسرعة"], answer:0, why:"بيديك ‎leverage‎ ووقت، بس من غير مبالغة."},
    {type:"mcq", q:"إيه معنى ‎leverage‎؟", options:["ورقة ضغط / قوة تفاوضية","خصم","تأخير"], answer:0, why:"‎leverage‎ = قوة في التفاوض."}
   ],
   match:[["reservations","تحفظات"],["loose ends","تفاصيل ناقصة"],["as it stands","بوضعه الحالي"],["hold off","يأجل"],["non-committal","مش ملتزم برأي"],["leverage","ورقة ضغط"]],
   roleplay:{ scene:"عميل داتا سنتر بعتلك عرض لتوريد ‎UPS‎ بشروط مش مناسبة، ولازم ترد.",
    turns:[
     {them:"Client: We'd like to pay in 180 days, and you cover installation for free."},
     {you:[{t:"I'm afraid we can't accept this offer as it stands. We were hoping for something more in line with our budget and timeline.",ok:1,fb:"رفض مؤدب بيسيب مساحة."},{t:"Never.",ok:0,fb:"قفلت التفاوض."},{t:"OK, no problem.",ok:0,fb:"خسارة ليك."}]},
     {them:"Client: Then what can you accept?"},
     {you:[{t:"If we can agree on 60-day payment, I'm willing to make some concessions in other areas, like free installation.",ok:1,fb:"مساومة واضحة."},{t:"Whatever you want.",ok:0,fb:"مفيش موقف."},{t:"I don't know.",ok:0,fb:"ضعيفة."}]},
     {them:"Client: Hmm, let me think about the 60 days."},
     {you:[{t:"Of course. Can we schedule another meeting to discuss this further?",ok:1,fb:"بتحافظ على الزخم."},{t:"Answer me now.",ok:0,fb:"ضغط زيادة."},{t:"Fine, forget it.",ok:0,fb:"استسلام."}]}
    ]}
 },
 { id:"ng5", part:"Negotiation", art:"ladder", minutes:20,
   title:"Price bargaining, directness and past deals", ar:"المساومة على السعر والوضوح والصفقات السابقة",
   desc:"Bargain on price, get the other side to be direct and stop stalling, break a deadlock and use past deals to strengthen your position.",
   reading:["ng_261"],
   cards:[
    {k:"ng_261", en:"Is there any way you could match or beat those offers?", ar:"فيه أي طريقة تساوي العروض دي أو تنزل عنها؟", ex:"We've received other offers at a lower price point. <mark>Is there any way you could match or beat those offers?</mark>", tip:"‎match‎ = تساوي، ‎beat‎ = تكسب."},
    {k:"ng_261", en:"Is there any way we could negotiate a bulk discount", ar:"ممكن نتفاوض على خصم كميات؟", ex:"<mark>Is there any way we could negotiate a bulk discount</mark> if we increase our order quantity?", tip:"‎bulk discount‎ = خصم على الكمية الكبيرة."},
    {k:"ng_261", en:"can we get to the heart of the matter?", ar:"ممكن ندخل في الموضوع على طول؟", ex:"I appreciate that you're trying to be diplomatic, but <mark>can we get to the heart of the matter?</mark>", tip:"لما الطرف التاني بيلف ويدور."},
    {k:"ng_261", en:"I want to make sure we're both on the same page.", ar:"عايز أتأكد إننا فاهمين بعض", ex:"<mark>I want to make sure we're both on the same page</mark>. Can you give me a straightforward answer so we can address any issues and reach an agreement?", tip:"‎on the same page‎ = متفقين في الفهم."},
    {k:"ng_261", en:"Let's take a step back and review what we've covered so far.", ar:"خلينا نرجع خطوة ونراجع اللي اتفقنا عليه لحد دلوقتي", ex:"<mark>Let's take a step back and review what we've covered so far</mark>.", tip:"بتكسر الجمود لما التفاوض يقف."},
    {k:"ng_261", en:"let's consider the bigger picture", ar:"خلينا نبص للصورة الكبيرة", ex:"I appreciate your perspective, but <mark>let's consider the bigger picture</mark> and what's best for both companies in the long run.", tip:"بترجّع الطرفين للهدف الأساسي."},
    {k:"ng_261", en:"We have a track record of successful partnerships with…", ar:"عندنا تاريخ من الشراكات الناجحة مع…", ex:"<mark>We have a track record of successful partnerships with</mark> ___, and I believe our previous arrangements can serve as a model for this negotiation.", tip:"‎track record‎ = سجل وخبرة سابقة."}
   ],
   quiz:[
    {type:"mcq", q:"جالك عرض أرخص من مورد تاني:", options:["We've received other offers at a lower price point. Is there any way you could match or beat those offers?","You are expensive, bye.","Others are cheaper, lower it now!"], answer:0, why:"ضغط مهذب بمعلومة حقيقية."},
    {type:"gap", sentence:"Perhaps we can bring in a neutral third party to ___ and help us find a resolution.", options:["mediate","meditate","medicate"], answer:0, why:"‎mediate‎ = يتوسط."},
    {type:"order", words:["Let's","take","a","short","break","and","come","back","to","this"], answer:"Let's take a short break and come back to this", why:"حل للجمود."},
    {type:"mcq", q:"الطرف التاني بيماطل ومش بيرد:", options:["I sense that there may be some hesitation or uncertainty. Can you please be direct with me?","Stop wasting my time!","(Say nothing.)"], answer:0, why:"بتطلب الوضوح بأدب."},
    {type:"mcq", q:"إيه معنى ‎stalling‎؟", options:["المماطلة وكسب الوقت","الموافقة","الدفع"], answer:0, why:"‎stall‎ = يماطل."}
   ],
   match:[["price point","مستوى السعر"],["bulk discount","خصم الكميات"],["stalling","مماطلة"],["roadblock","عقبة"],["mediate","يتوسط"],["track record","سجل سابق"]],
   roleplay:{ scene:"بتتفاوض مع مورد ألواح طاقة شمسية على سعر طلبية كبيرة، والمورد بيماطل.",
    turns:[
     {them:"Supplier: Our price is 4,500 pounds per panel."},
     {you:[{t:"We've received other offers at a lower price point. Is there any way you could match or beat those offers?",ok:1,fb:"ضغط محترم بمعلومة."},{t:"Too high. Bye.",ok:0,fb:"قفلت الباب."},{t:"OK.",ok:0,fb:"مفيش تفاوض."}]},
     {them:"Supplier: Well... it depends... we'll see... there are many factors..."},
     {you:[{t:"I appreciate that you're trying to be diplomatic, but can we get to the heart of the matter?",ok:1,fb:"طلب وضوح مؤدب."},{t:"You talk too much.",ok:0,fb:"قليل الذوق."},{t:"Fine, take your time, a month or two.",ok:0,fb:"سيبته يماطل."}]},
     {them:"Supplier: I can't go lower than 4,300."},
     {you:[{t:"Let's take a step back. In our previous dealings with you, we established a 5% discount for orders over 500 panels. Is there any way we could negotiate a bulk discount again?",ok:1,fb:"استخدمت صفقة سابقة لتقوية موقفك."},{t:"You are unfair.",ok:0,fb:"مش مهنية."},{t:"OK, 4,300 then.",ok:0,fb:"قبلت بسرعة."}]}
    ]}
 }
];
