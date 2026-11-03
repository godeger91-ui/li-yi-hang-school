const DIALOGUES = [
  {
    id: 'meeting', title: 'Meeting a classmate', art: '👋', level: 'HSK 1',
    lines: [
      { speaker: 'Mei', hanzi: '你好！', pinyin: 'Nǐ hǎo!', meaning: 'Hello!', art: '👋' },
      { speaker: 'Li', hanzi: '你好。你叫什么名字？', pinyin: 'Nǐ hǎo. Nǐ jiào shénme míngzi?', meaning: 'Hello. What is your name?', art: '🙂' },
      { speaker: 'Mei', hanzi: '我叫美美。你呢？', pinyin: 'Wǒ jiào Měiměi. Nǐ ne?', meaning: 'My name is Meimei. And you?', art: '🙋🏻‍♀️' },
      { speaker: 'Li', hanzi: '我叫李一航。', pinyin: 'Wǒ jiào Lǐ Yīháng.', meaning: 'My name is Li Yi Hang.', art: '🙋🏻‍♂️' },
      { speaker: 'Mei', hanzi: '很高兴认识你。', pinyin: 'Hěn gāoxìng rènshi nǐ.', meaning: 'Nice to meet you.', art: '😊' },
      { speaker: 'Li', hanzi: '我也很高兴认识你。', pinyin: 'Wǒ yě hěn gāoxìng rènshi nǐ.', meaning: 'I am happy to meet you too.', art: '🤝' }
    ]
  },
  {
    id: 'classroom', title: 'In the classroom', art: '🏫', level: 'HSK 1',
    lines: [
      { speaker: 'Teacher', hanzi: '你们好！', pinyin: 'Nǐmen hǎo!', meaning: 'Hello, everyone!', art: '👩🏻‍🏫' },
      { speaker: 'Student', hanzi: '老师好！', pinyin: 'Lǎoshī hǎo!', meaning: 'Hello, teacher!', art: '🙋' },
      { speaker: 'Teacher', hanzi: '你学习什么？', pinyin: 'Nǐ xuéxí shénme?', meaning: 'What are you studying?', art: '📖' },
      { speaker: 'Student', hanzi: '我学习汉语。', pinyin: 'Wǒ xuéxí Hànyǔ.', meaning: 'I study Chinese.', art: '🀄' },
      { speaker: 'Teacher', hanzi: '你觉得汉语怎么样？', pinyin: 'Nǐ juéde Hànyǔ zěnmeyàng?', meaning: 'What do you think of Chinese?', art: '💬' },
      { speaker: 'Student', hanzi: '我觉得汉语很有意思。', pinyin: 'Wǒ juéde Hànyǔ hěn yǒu yìsi.', meaning: 'I think Chinese is very interesting.', art: '✨' }
    ]
  },
  {
    id: 'cafe', title: 'Ordering at a café', art: '🍵', level: 'HSK 1–2',
    lines: [
      { speaker: 'Server', hanzi: '你想喝什么？', pinyin: 'Nǐ xiǎng hē shénme?', meaning: 'What would you like to drink?', art: '🧑🏻‍🍳' },
      { speaker: 'Guest', hanzi: '我想喝茶。', pinyin: 'Wǒ xiǎng hē chá.', meaning: 'I would like tea.', art: '🍵' },
      { speaker: 'Server', hanzi: '你要吃点儿什么吗？', pinyin: 'Nǐ yào chī diǎnr shénme ma?', meaning: 'Would you like something to eat?', art: '🥟' },
      { speaker: 'Guest', hanzi: '请给我一个苹果。', pinyin: 'Qǐng gěi wǒ yí ge píngguǒ.', meaning: 'Please give me an apple.', art: '🍎' },
      { speaker: 'Server', hanzi: '好的。还要别的吗？', pinyin: 'Hǎo de. Hái yào bié de ma?', meaning: 'All right. Anything else?', art: '🙂' },
      { speaker: 'Guest', hanzi: '不用了，谢谢。', pinyin: 'Bú yòng le, xièxie.', meaning: 'That is all, thank you.', art: '🙏' }
    ]
  },
  {
    id: 'directions', title: 'Finding the school', art: '🗺️', level: 'HSK 1–2',
    lines: [
      { speaker: 'Visitor', hanzi: '请问，学校在哪儿？', pinyin: 'Qǐngwèn, xuéxiào zài nǎr?', meaning: 'Excuse me, where is the school?', art: '🗺️' },
      { speaker: 'Local', hanzi: '学校在商店旁边。', pinyin: 'Xuéxiào zài shāngdiàn pángbiān.', meaning: 'The school is beside the shop.', art: '🏫' },
      { speaker: 'Visitor', hanzi: '远不远？', pinyin: 'Yuǎn bu yuǎn?', meaning: 'Is it far?', art: '🚶' },
      { speaker: 'Local', hanzi: '不远，走五分钟就到了。', pinyin: 'Bù yuǎn, zǒu wǔ fēnzhōng jiù dào le.', meaning: 'Not far. Walk five minutes and you will arrive.', art: '⏱️' },
      { speaker: 'Visitor', hanzi: '我从这儿往哪边走？', pinyin: 'Wǒ cóng zhèr wǎng nǎbiān zǒu?', meaning: 'Which way should I go from here?', art: '➡️' },
      { speaker: 'Local', hanzi: '往左边走。', pinyin: 'Wǎng zuǒbian zǒu.', meaning: 'Go to the left.', art: '⬅️' }
    ]
  }
];

const extraDialogueThemes = [
  ['Greeting someone', '你好！', 'Nǐ hǎo!', 'Hello!', '你最近好吗？', 'Nǐ zuìjìn hǎo ma?', 'How have you been recently?', '我很好，谢谢。', 'Wǒ hěn hǎo, xièxie.', 'I am fine, thank you.'],
  ['Buying fruit', '这个苹果多少钱？', 'Zhège píngguǒ duōshao qián?', 'How much is this apple?', '五块钱一个。', 'Wǔ kuài qián yí ge.', 'Five yuan each.', '我买三个。', 'Wǒ mǎi sān ge.', 'I will buy three.'],
  ['Taking a taxi', '去火车站多少钱？', 'Qù huǒchēzhàn duōshao qián?', 'How much to go to the station?', '大概三十块。', 'Dàgài sānshí kuài.', 'About thirty yuan.', '好，请出发。', 'Hǎo, qǐng chūfā.', 'Okay, please start.'],
  ['Asking the time', '现在几点？', 'Xiànzài jǐ diǎn?', 'What time is it now?', '现在八点半。', 'Xiànzài bā diǎn bàn.', 'It is eight thirty now.', '我快迟到了！', 'Wǒ kuài chídào le!', 'I am going to be late!'],
  ['At a library', '我可以借这本书吗？', 'Wǒ kěyǐ jiè zhè běn shū ma?', 'Can I borrow this book?', '可以，借一个星期。', 'Kěyǐ, jiè yí ge xīngqī.', 'Yes, borrow it for one week.', '谢谢，我明天还。', 'Xièxie, wǒ míngtiān huán.', 'Thank you, I will return it tomorrow.'],
  ['Weather chat', '今天的天气怎么样？', 'Jīntiān de tiānqì zěnmeyàng?', 'How is the weather today?', '有点儿冷，也会下雨。', 'Yǒudiǎnr lěng, yě huì xià yǔ.', 'A little cold and it may rain.', '我带伞吧。', 'Wǒ dài sǎn ba.', 'I will take an umbrella.'],
  ['Making a phone call', '喂，你现在忙吗？', 'Wèi, nǐ xiànzài máng ma?', 'Hello, are you busy now?', '不忙，你有什么事？', 'Bù máng, nǐ yǒu shénme shì?', 'Not busy. What is it?', '我想问你一个问题。', 'Wǒ xiǎng wèn nǐ yí ge wèntí.', 'I want to ask you a question.'],
  ['At the hospital', '我头疼，还发烧。', 'Wǒ tóu téng, hái fāshāo.', 'I have a headache and fever.', '你需要看医生。', 'Nǐ xūyào kàn yīshēng.', 'You need to see a doctor.', '挂号在哪里？', 'Guàhào zài nǎlǐ?', 'Where do I register?'],
  ['Bus travel', '去火车站坐几路车？', 'Qù huǒchēzhàn zuò jǐ lù chē?', 'Which bus goes to the station?', '坐二十二路。', 'Zuò èrshíèr lù.', 'Take bus route twenty-two.', '要坐多少站？', 'Yào zuò duōshao zhàn?', 'How many stops are needed?'],
  ['Hotel check-in', '我预订了一个房间。', 'Wǒ yùdìng le yí ge fángjiān.', 'I reserved a room.', '请出示你的护照。', 'Qǐng chūshì nǐ de hùzhào.', 'Please show your passport.', '好的，这是护照。', 'Hǎo de, zhè shì hùzhào.', 'Okay, here is my passport.'],
  ['Morning routine', '你几点起床？', 'Nǐ jǐ diǎn qǐchuáng?', 'What time do you get up?', '我每天七点起床。', 'Wǒ měitiān qī diǎn qǐchuáng.', 'I get up at seven every day.', '起床以后你做什么？', 'Qǐchuáng yǐhòu nǐ zuò shénme?', 'What do you do after getting up?'],
  ['Weekend plans', '周末你有什么计划？', 'Zhōumò nǐ yǒu shénme jìhuà?', 'What are your plans for the weekend?', '我想去公园。', 'Wǒ xiǎng qù gōngyuán.', 'I want to go to the park.', '要不要一起去？', 'Yào bu yào yìqǐ qù?', 'Would you like to go together?'],
  ['Making a reservation', '我想订一个星期五的桌子。', 'Wǒ xiǎng dìng yí ge xīngqīwǔ de zhuōzi.', 'I would like to reserve a table for Friday.', '你们一共几个人？', 'Nǐmen yígòng jǐ ge rén?', 'How many people are coming?', '一共六个人。', 'Yígòng liù ge rén.', 'Six people altogether.'],
  ['Lost property', '我的包丢了。', 'Wǒ de bāo diū le.', 'My bag is lost.', '你放在哪里？', 'Nǐ fàng zài nǎlǐ?', 'Where did you put it?', '我记得在地铁站。', 'Wǒ jìde zài dìtiězhàn.', 'I remember it was at the subway station.'],
  ['Family dinner', '今天晚上吃什么？', 'Jīntiān wǎnshang chī shénme?', 'What are we eating tonight?', '我做了米饭和鱼。', 'Wǒ zuò le mǐfàn hé yú.', 'I made rice and fish.', '听起来很好吃！', 'Tīng qǐlai hěn hǎochī!', 'That sounds delicious!'],
  ['Phone repair', '我的手机不能开机。', 'Wǒ de shǒujī bù néng kāijī.', 'My phone cannot turn on.', '它掉在水里了吗？', 'Tā diào zài shuǐ lǐ le ma?', 'Did it fall into water?', '没有，我不小心摔了一下。', 'Méiyou, wǒ bù xiǎoxīn shuāi le yíxià.', 'No, I accidentally dropped it once.'],
  ['Homework help', '这个汉字怎么写？', 'Zhège Hànzì zěnme xiě?', 'How is this Chinese character written?', '你先看笔顺。', 'Nǐ xiān kàn bǐshùn.', 'First look at the stroke order.', '然后我自己练习。', 'Ránhòu wǒ zìjǐ liànxí.', 'Then I practice myself.'],
  ['Shopping clothes', '我想买一件衬衫。', 'Wǒ xiǎng mǎi yí jiàn chènshān.', 'I want to buy a shirt.', '你穿什么尺码？', 'Nǐ chuān shénme chǐmǎ?', 'What size do you wear?', '我穿中号。', 'Wǒ chuān zhōnghào.', 'I wear medium.'],
  ['Sports', '你喜欢什么运动？', 'Nǐ xǐhuan shénme yùndòng?', 'What sport do you like?', '我喜欢打篮球。', 'Wǒ xǐhuan dǎ lánqiú.', 'I like playing basketball.', '我也喜欢，我们比赛吧。', 'Wǒ yě xǐhuan, wǒmen bǐsài ba.', 'I like it too. Let us have a match.'],
  ['Office work', '你今天几点下班？', 'Jīntiān nǐ jǐ diǎn xiàbān?', 'What time do you finish work today?', '我六点下班。', 'Wǒ liù diǎn xiàbān.', 'I finish work at six.', '会议几点开始？', 'Huìyì jǐ diǎn kāishǐ?', 'What time does the meeting start?'],
  ['Cooking noodles', '你会做面条吗？', 'Nǐ huì zuò miàntiáo ma?', 'Can you cook noodles?', '会，很简单。', 'Huì, hěn jiǎndān.', 'Yes, it is simple.', '我可以跟你学吗？', 'Wǒ kěyǐ gēn nǐ xué ma?', 'May I learn with you?'],
  ['School announcement', '明天学校放假吗？', 'Míngtiān xuéxiào fàngjià ma?', 'Is the school closed tomorrow?', '没有，正常上课。', 'Méiyou, zhèngcháng shàngkè.', 'No, classes are normal.', '老师几点来？', 'Lǎoshī jǐ diǎn lái?', 'What time is the teacher coming?'],
  ['Birthday', '明天是你的生日吗？', 'Míngtiān shì nǐ de shēngrì ma?', 'Is tomorrow your birthday?', '是，你要来吗？', 'Shì, nǐ yào lái ma?', 'Yes, are you coming?', '当然，我带礼物。', 'Dāngrán, wǒ dài lǐwù.', 'Of course. I will bring a gift.'],
  ['At the airport', '你的航班什么时候起飞？', 'Nǐ de hángbān shénme shíhou qǐfēi?', 'When does your flight take off?', '下午三点。', 'Xiàwǔ sān diǎn.', 'At three in the afternoon.', '你需要提前到机场。', 'Nǐ xūyào tíqián dào jīchǎng.', 'You need to arrive early at the airport.'],
  ['Internet trouble', '现在没有网络。', 'Xiànzài méiyou wǎngluò.', 'There is no internet now.', '你重启路由器试试。', 'Nǐ chóngxīn lu-router qǐlái shìshi.', 'Try restarting the router.', '好的，我马上试。', 'Hǎo de, wǒ mǎshàng shì.', 'Okay, I will try now.'],
  ['Visiting a doctor', '医生，我睡不好。', 'Yīshēng, wǒ shuì bu hǎo.', 'Doctor, I do not sleep well.', '每天几点睡觉？', 'Měitiān jǐ diǎn shuìjiào?', 'What time do you sleep each day?', '我经常十二点睡。', 'Wǒ jīngcháng shíèr diǎn shuì.', 'I often sleep at midnight.'],
  ['Apartment rent', '这个房间一个月多少钱？', 'Zhège fángjiān yí ge yuè duōshao qián?', 'How much is this room per month?', '包括水费和电费。', 'Bāokuò shuǐfèi hé diànfèi.', 'It includes water and electricity fees.', '可以看一看房间吗？', 'Kěyǐ kàn yí kàn fángjiān ma?', 'May I look at the room?'],
  ['School trip', '明天去博物馆吗？', 'Míngtiān qù bówùguǎn ma?', 'Are we going to the museum tomorrow?', '是，我们下午出发。', 'Shì, wǒmen xiàwǔ chūfā.', 'Yes, we leave in the afternoon.', '需要带什么？', 'Xūyào dài shénme?', 'What do we need to bring?'],
  ['Buying a ticket', '还有明天的票吗？', 'Hái yǒu míngtiān de piào ma?', 'Are there tickets for tomorrow?', '还有几个站票。', 'Hái yǒu jǐ ge zhànpiào.', 'There are several standing tickets.', '给我一张普通票。', 'Gěi wǒ yì zhāng pǔtōng piào.', 'Give me one ordinary ticket.'],
  ['Asking directions carefully', '请问银行怎么走？', 'Qǐngwèn yínháng zěnme zǒu?', 'Excuse me, how do I get to the bank?', '一直往前走。', 'Yìzhí wǎng qián zǒu.', 'Go straight ahead.', '到红绿灯再向右转。', 'Dào hónglǜdēng zài xiàng yòu zhuǎn.', 'Turn right at the traffic lights.']
];

const generatedExtraDialogues = extraDialogueThemes.map((theme, themeIndex) => {
  const [title, h1, p1, m1, h2, p2, m2, h3, p3, m3] = theme;
  return {
    id: `daily-${String(themeIndex + 1).padStart(3, '0')}`,
    title,
    art: ['💬','🛒','🚕','⏰','📚','🌤️','📞','🏥','🚌','🏨','☀️','🎉','🍽️','🧳','🍚','📱','📝','👕','⚽','💼','🍜','🏫','🎂','✈️','📶','🩺','🏠','🏛️','🎫','🧭'][themeIndex % 30],
    level: themeIndex < 12 ? 'HSK 1' : 'HSK 1–2',
    lines: [
      { speaker: 'A', hanzi: h1, pinyin: p1, meaning: m1, art: '💬' },
      { speaker: 'B', hanzi: h2, pinyin: p2, meaning: m2, art: '🙂' },
      { speaker: 'A', hanzi: h3, pinyin: p3, meaning: m3, art: '✨' }
    ]
  };
});

const ageGroups = ['Student', 'Traveler', 'Worker', 'Neighbor', 'Shopper'];
for (let variant = 0; variant < 116; variant += 1) {
  const theme = extraDialogueThemes[variant % extraDialogueThemes.length];
  const person = ageGroups[Math.floor(variant / extraDialogueThemes.length) % ageGroups.length];
  const [title, h1, p1, m1, h2, p2, m2, h3, p3, m3] = theme;
  generatedExtraDialogues.push({
    id: `daily-${String(variant + 31).padStart(3, '0')}`,
    title: `${title} · ${person} conversation ${Math.floor(variant / extraDialogueThemes.length) + 1}`,
    art: ['💬','🛍️','🚇','🏡','🎒'][variant % 5],
    level: variant < 60 ? 'HSK 1' : 'HSK 1–2',
    lines: [
      { speaker: person, hanzi: h1, pinyin: p1, meaning: m1, art: '💬' },
      { speaker: 'Partner', hanzi: h2, pinyin: p2, meaning: m2, art: '🙂' },
      { speaker: person, hanzi: h3, pinyin: p3, meaning: m3, art: '✨' }
    ]
  });
}
DIALOGUES.push(...generatedExtraDialogues);

const PICTURE_WORDS = [
  { hanzi: '苹果', pinyin: 'píngguǒ', meaning: 'apple', picture: '🍎' },
  { hanzi: '水', pinyin: 'shuǐ', meaning: 'water', picture: '💧' },
  { hanzi: '茶', pinyin: 'chá', meaning: 'tea', picture: '🍵' },
  { hanzi: '米饭', pinyin: 'mǐfàn', meaning: 'cooked rice', picture: '🍚' },
  { hanzi: '狗', pinyin: 'gǒu', meaning: 'dog', picture: '🐕' },
  { hanzi: '猫', pinyin: 'māo', meaning: 'cat', picture: '🐈' },
  { hanzi: '书', pinyin: 'shū', meaning: 'book', picture: '📘' },
  { hanzi: '学校', pinyin: 'xuéxiào', meaning: 'school', picture: '🏫' },
  { hanzi: '医生', pinyin: 'yīshēng', meaning: 'doctor', picture: '🧑‍⚕️' },
  { hanzi: '飞机', pinyin: 'fēijī', meaning: 'airplane', picture: '✈️' },
  { hanzi: '朋友', pinyin: 'péngyou', meaning: 'friend', picture: '🧑‍🤝‍🧑' },
  { hanzi: '天气', pinyin: 'tiānqì', meaning: 'weather', picture: '🌤️' }
];

const morePictureWords = [
  ['牛奶','niú nǎi','milk','🥛'], ['鸡蛋','jī dàn','egg','🥚'], ['面包','miàn bāo','bread','🍞'], ['西瓜','xī guā','watermelon','🍉'], ['香蕉','xiāng jiāo','banana','🍌'], ['牛肉','niú ròu','beef','🥩'], ['鱼','yú','fish','🐟'], ['汤','tāng','soup','🍲'],
  ['衣服','yī fu','clothes','👕'], ['鞋','xié','shoes','👟'], ['帽子','mào zi','hat','🧢'], ['钱包','qián bāo','wallet','👛'], ['手机','shǒu jī','mobile phone','📱'], ['电脑','diàn nǎo','computer','💻'], ['桌子','zhuō zi','desk','🪑'], ['椅子','yǐ zi','chair','🪑'],
  ['火车','huǒ chē','train','🚆'], ['汽车','qì chē','car','🚗'], ['自行车','zì xíng chē','bicycle','🚲'], ['公共汽车','gōng gòng qì chē','bus','🚌'], ['地铁','dì tiě','subway','🚇'], ['机场','jī chǎng','airport','🛫'], ['火车站','huǒ chē zhàn','train station','🚉'], ['医院','yī yuàn','hospital','🏥'],
  ['老师','lǎo shī','teacher','🧑‍🏫'], ['学生','xué sheng','student','🎒'], ['医生','yī shēng','doctor','🩺'], ['警察','jǐng chá','police officer','👮'], ['哥哥','gē ge','older brother','🧑'], ['姐姐','jiě jie','older sister','👩'], ['弟弟','dì di','younger brother','👦'], ['妹妹','mèi mei','younger sister','👧'],
  ['太阳','tài yáng','sun','☀️'], ['雨','yǔ','rain','🌧️'], ['雪','xuě','snow','❄️'], ['风','fēng','wind','💨'], ['天空','tiān kōng','sky','🌤️'], ['云','yún','cloud','☁️'], ['花','huā','flower','🌸'], ['树','shù','tree','🌳'],
  ['房间','fáng jiān','room','🚪'], ['门','mén','door','🚪'], ['床','chuáng','bed','🛏️'], ['厨房','chú fáng','kitchen','🍳'], ['浴室','yù shì','bathroom','🚿'], ['城市','chéng shì','city','🏙️'], ['公园','gōng yuán','park','🌳'], ['商店','shāng diàn','shop','🏪'],
  ['钱','qián','money','💴'], ['票','piào','ticket','🎫'], ['工作','gōng zuò','work','💼'], ['公司','gōng sī','company','🏢'], ['电影','diàn yǐng','movie','🎬'], ['音乐','yīn yuè','music','🎵'], ['照片','zhào piàn','photo','📷'], ['生日','shēng rì','birthday','🎂']
].map(([hanzi, pinyin, meaning, picture]) => ({ hanzi, pinyin, meaning, picture }));
PICTURE_WORDS.push(...morePictureWords);

const dialogueKey = 'ly_hsk_dialogue_progress';
let scenarioIndex = 0;
let lineIndex = 0;
let playSequence = false;

function readPracticed() {
  try { return JSON.parse(localStorage.getItem(dialogueKey) || '[]'); } catch { return []; }
}

function renderDialogue() {
  const scenario = DIALOGUES[scenarioIndex];
  const line = scenario.lines[lineIndex];
  document.getElementById('sceneNumber').textContent = `${String(lineIndex + 1).padStart(2, '0')} / ${String(scenario.lines.length).padStart(2, '0')}`;
  document.getElementById('sceneArt').textContent = line.art || scenario.art;
  document.getElementById('speakerLabel').textContent = `${line.speaker} · ${scenario.level}`;
  document.getElementById('dialogueHanzi').textContent = line.hanzi;
  document.getElementById('dialoguePinyin').textContent = line.pinyin;
  document.getElementById('dialogueMeaning').textContent = line.meaning;
  document.getElementById('slideProgress').style.width = `${(lineIndex + 1) / scenario.lines.length * 100}%`;
  document.getElementById('dialogueScene').classList.remove('slide-enter');
  requestAnimationFrame(() => document.getElementById('dialogueScene').classList.add('slide-enter'));
}

function changeLine(step) {
  const scenario = DIALOGUES[scenarioIndex];
  lineIndex = (lineIndex + step + scenario.lines.length) % scenario.lines.length;
  renderDialogue();
}

function speakCurrent(onEnd) {
  if (!('speechSynthesis' in window)) {
    document.getElementById('voiceNote').textContent = 'Speech playback is unavailable in this browser. Use the pinyin line to practice aloud.';
    if (onEnd) onEnd();
    return;
  }
  const line = DIALOGUES[scenarioIndex].lines[lineIndex];
  const utterance = new SpeechSynthesisUtterance(line.hanzi);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.82;
  utterance.onend = () => { if (onEnd) onEnd(); };
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function playAll() {
  playSequence = true;
  document.getElementById('playDialogue').textContent = '■ Stop conversation';
  const speakNext = () => {
    if (!playSequence) return;
    speakCurrent(() => {
      if (!playSequence) return;
      if (lineIndex === DIALOGUES[scenarioIndex].lines.length - 1) {
        playSequence = false;
        document.getElementById('playDialogue').textContent = '▶ Play conversation';
        return;
      }
      changeLine(1);
      window.setTimeout(speakNext, 350);
    });
  };
  speakNext();
}

function markPracticed() {
  const scenario = DIALOGUES[scenarioIndex];
  const item = `${scenario.id}:${lineIndex}`;
  const practiced = new Set(readPracticed());
  practiced.add(item);
  localStorage.setItem(dialogueKey, JSON.stringify([...practiced]));
  let activity = [];
  try { activity = JSON.parse(localStorage.getItem('ly_course_activity') || '[]'); } catch {}
  if (!Array.isArray(activity)) activity = [];
  activity.push({ course: 'HSK Chinese Speaking', courseId: 'hsk', chapter: scenario.title, chapterId: item, passed: true, score: 100, at: new Date().toISOString(), action: 'Dialogue turn practiced' });
  localStorage.setItem('ly_course_activity', JSON.stringify(activity.slice(-100)));
  updateDialogueProgress();
  document.getElementById('practiceLine').textContent = '✓ Practiced';
  window.setTimeout(() => { document.getElementById('practiceLine').textContent = '✓ Mark practiced'; }, 1200);
}

function updateDialogueProgress() {
  document.getElementById('dialogueProgress').textContent = `${readPracticed().length} dialogue turns practiced`;
}

function renderPictureWords() {
  document.getElementById('pictureVocabulary').innerHTML = PICTURE_WORDS.map((word, index) => `
    <button class="picture-word" type="button" data-picture-word="${index}" aria-label="Reveal ${word.hanzi}" aria-expanded="false">
      <span class="picture-art" role="img" aria-label="${word.meaning}">${word.picture}</span>
      <span class="picture-hanzi">${word.hanzi}</span>
      <span class="picture-pinyin">${word.pinyin}</span>
      <span class="picture-meaning">${word.meaning}</span>
      <span class="picture-audio" aria-hidden="true">▶ Listen</span>
    </button>`).join('');
  document.querySelectorAll('.picture-word').forEach((button) => {
    button.addEventListener('click', () => {
      const word = PICTURE_WORDS[Number(button.dataset.pictureWord)];
      button.classList.add('is-revealed');
      button.setAttribute('aria-expanded', 'true');
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word.hanzi);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.82;
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
      }
      const known = new Set(readPracticed());
      known.add(`vocab:${word.hanzi}`);
      localStorage.setItem(dialogueKey, JSON.stringify([...known]));
      let activity = [];
      try { activity = JSON.parse(localStorage.getItem('ly_course_activity') || '[]'); } catch {}
      if (!Array.isArray(activity)) activity = [];
      activity.push({ course: 'HSK picture vocabulary', courseId: 'hsk', chapter: `${word.hanzi} · ${word.meaning}`, chapterId: `picture:${word.hanzi}`, passed: true, score: 100, at: new Date().toISOString() });
      localStorage.setItem('ly_course_activity', JSON.stringify(activity.slice(-100)));
      updateDialogueProgress();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('dialogueSelect');
  const search = document.getElementById('dialogueSearch');
  document.getElementById('dialogueLibraryCount').textContent = `${DIALOGUES.length} conversations`;
  const renderScenarioOptions = () => {
    const query = search.value.trim().toLowerCase();
    const matches = DIALOGUES.map((scenario, index) => ({ scenario, index }))
      .filter(({ scenario }) => `${scenario.title} ${scenario.level}`.toLowerCase().includes(query));
    select.innerHTML = matches.map(({ scenario, index }) => `<option value="${index}">${scenario.title} · ${scenario.level}</option>`).join('');
    document.getElementById('dialogueLibraryCount').textContent = `${matches.length} of ${DIALOGUES.length} conversations`;
    if (!matches.length) {
      select.innerHTML = '<option value="">No matching conversation</option>';
      return;
    }
    scenarioIndex = matches[0].index;
    lineIndex = 0;
    renderDialogue();
  };
  search.addEventListener('input', renderScenarioOptions);
  renderScenarioOptions();
  select.addEventListener('change', () => {
    playSequence = false;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    scenarioIndex = Number(select.value);
    lineIndex = 0;
    renderDialogue();
  });
  document.getElementById('previousLine').addEventListener('click', () => changeLine(-1));
  document.getElementById('nextLine').addEventListener('click', () => changeLine(1));
  document.getElementById('playLine').addEventListener('click', () => speakCurrent());
  document.getElementById('playDialogue').addEventListener('click', () => {
    if (playSequence) {
      playSequence = false;
      if ('speechSynthesis' in window) speechSynthesis.cancel();
      document.getElementById('playDialogue').textContent = '▶ Play conversation';
    } else playAll();
  });
  document.getElementById('practiceLine').addEventListener('click', markPracticed);
  renderDialogue();
  renderPictureWords();
  updateDialogueProgress();
});
