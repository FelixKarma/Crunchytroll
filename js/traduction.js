let fr = document.getElementById('frLangue')
let en = document.getElementById('enLangue')
let ru = document.getElementById('ruLangue')
let btnfrLangue = document.getElementById('btnfrLangue')
let btnenLangue = document.getElementById('btnenLangue')
let btnruLangue = document.getElementById('btnruLangue')
if (document.location.href.includes("profil.html")) {
    btnenLangue.addEventListener("click", () => {
        localStorage.setItem("lang", 'en')
        location.reload();
    })
    btnfrLangue.addEventListener("click", () => {
        localStorage.setItem("lang", 'fr')
        location.reload();
    })
    btnruLangue.addEventListener("click", () => {
        localStorage.setItem("lang", 'ru')
        location.reload();
    })
}
class MangaEN {
    constructor(titre, synopsis) {
        this.titre = titre;
        this.synopsis = synopsis;
    }
}


let tableauMangasEN = [
    new MangaEN("Demon Slayer", "Japan, at the beginning of the 20th century. A small coal merchant named Tanjiro lives a peaceful life in the mountains. Until the tragic day when, after a short absence, he finds his village and family massacred by a demon! The only survivor of this tragedy is his young sister Nezuko. Unfortunately, she has also been transformed into a monster after coming into contact with the demon... In order to reverse the process and avenge his family, Tanjiro decides to embark on a quest for truth. For the young hero and his sister, it is the beginning of a long adventure of blood and steel!"),
    new MangaEN("Oshi no Ko", "Doctor Gorô is an obstetrician in a rural hospital. He is far from the glitz and glamour world in which Ai Hoshino, a rising singer, lives and he is her 'absolute fan'. These two might meet under unfavorable circumstances, but this event will change their lives forever!"),
    new MangaEN("One Piece", "Everyone is afraid of pirates except for Luffy, who dreams of becoming one! The unpredictable teenager even has grand ambitions: he wants to become the strongest of them all, the Pirate King. To achieve this, he must find a legendary treasure, the One Piece. But what if it's just a legend?"),
    new MangaEN("Kono Subarashii Sekai ni Bakuen wo!", "Megumin had everything to become the best in the Crimson Magic Clan, but she chose a different path: the path of explosion magic. This powerful offensive power is used by her mysterious savior. One day, her younger sister found a black kitten in the woods. It turns out that it is the key to awakening a Dark God..."),
    new MangaEN("Vinland Saga Saison 1", "Since Askeladd, a treacherous and dishonorable war chief, killed his father when he was a child, Thorfinn has been following him everywhere in order to avenge his father. But even though he has become a formidable warrior, he still can't defeat his enemy. Over the years, as he undertakes dangerous missions and fights to get duels against the man he hates more than anything, the kind-hearted Thorfinn has become cold and solitary, trapped in his past and unable to move forward. Until life forces him to look at the world differently..."),
    new MangaEN("Jigokuraku", "The story takes place in 11th century Japan. Gabimaru, 'The Nothing,' the most famous and powerful assassin ninja, has been captured and is languishing in prison. Claiming to have no reason to live anymore, he desperately awaits an executioner who can finally take his life, as his superhuman training allows him to withstand the worst punishments. That's when he receives a visit from an executioner unlike any other: a powerful swordswoman and head cutter. After a fierce battle from which he barely escapes, she pushes him to his limits. In exchange for sparing his life, she offers him a deal: he must go to a mysterious island to retrieve an elixir of immortality. The only problem is that everyone who has gone to that island has returned in pieces..."),
    new MangaEN("Dr. STONE", "Taiju, a high school student from Tokyo, is one day the victim of a mysterious phenomenon: in the blink of an eye, all of humanity is transformed into stone! Thousands of years later, upon awakening, he decides to rebuild civilization from scratch with his friend Senku!"),
    new MangaEN("Skip to Loafer", `Mitsumi is a young girl from the countryside who is about to attend high school in Tokyo. She is very intelligent but is about to discover that she is not at all prepared for the social norms of city high school students.`),
    new MangaEN("Kubo-san wa Mob wo Yurusanai", `Shiraishi is an ordinary boy who is on the verge of being invisible to his classmates and peers. Nagisa Kubo, his tablemate who always notices him, playfully experiments to gauge how invisible he is. That's how she declares herself to be Shiraishi's heroine.`),
    new MangaEN("Tengoku Daimakyou", `In a Japan devastated by a mysterious cataclysm, Maru and Kiruko, two teenagers from the post-catastrophe generation, try to survive. Despite the threat of man-eating monsters looming over them, they have one goal: to reach "paradise"... In a vast garden cut off from the world, a group of children enjoy a sweet life, protected by scientists. The outside world is unknown to them, but some of them question: what lies beyond the walls of their paradise?`),
    new MangaEN("Dungeon Meshi", `The wild story begins as a group of six adventurers face off against a dragon in a dungeon. The battle turns into a rout, and Farin (a human magician) uses a spell to save the rest of the team as she gets swallowed by the dragon. Laios (her brother, a knight) decides with three other team members to quickly return to the dungeon to rescue Farin from the dragon's stomach. Unfortunately, they find themselves without provisions and decide to eat whatever they find as they descend further into the dungeon. Along the way, they meet Senshi, a self-sufficient dwarf who teaches them in each chapter how to cook different monsters.`),
    new MangaEN("Yamada-kun to Lv999 no Koi wo Suru", `Akane has been dumped by her boyfriend, who is in love with another girl. Sad, she logs into a game and meets a certain Yamada online. One day, while running into her ex-boyfriend, she coincidentally meets Yamada in person.`),
    new MangaEN("MASHLE", `Mash Burnedead was born without magical powers but survived hidden in a thick forest. The day his secret is discovered, he is offered a deal: to enroll in Easton, the prestigious magic academy, and obtain the title of divine chosen one. In order to regain his peaceful life, Mash accepts.`),
    new MangaEN("Kimi wa Houkago Insomnia", `Ganta Nakami is an insomniac. At school, he appears tired and antisocial. One day, in the astronomy room, he discovers Isaki Magari sleeping in a corner. Insomniac like him but much more sociable, she suggests they share the place to secretly sleep there. Their growing closeness seems to help them find sleep, as each becomes sensitive to the other's heartbeat...`),
    new MangaEN("Dead Mount Death Play", `The fate of the world is at stake as the Master of Corpses, a necromancer demon with immeasurable power, clashes with a legendary holy knight. But at the last moment, the monster uses a mysterious magical arcana that envelops the hero in a strange light. Through space and time, a boy named Polka Shinoyama wakes up feeling not quite himself... Who could have expected the outcome of the confrontation to unfold in this way?`),
    new MangaEN("HUNTERxHUNTER", "The young Gon lives on a small island with his aunt. Abandoned by his father, who is a Hunter, both an adventurer and a bounty hunter, Gon decides at the age of 12 to become a Hunter himself. It won't be easy; he will have to undergo a series of tests and exams alongside thousands of other applicants for the Hunter title. He will be aided by new acquaintances who share the same goal, such as Kurapika, Leorio, and Killua."),
    new MangaEN("NARUTO", "In the village of Konoha lives Naruto, a young boy who is despised and feared by the villagers because he possesses the incredible power of Kyuubi, a nine-tailed fox demon that has caused the death of many people. The most powerful ninja in Konoha at the time, the Fourth Hokage, Minato Namikaze, managed to seal the demon inside Naruto's body but lost his own life in the process. Twelve years later, Naruto dreams of becoming the greatest Hokage of Konoha so that he can earn the recognition he deserves. However, the path to becoming Hokage is long and filled with challenges and numerous enemies that Naruto must face to achieve his goal!"),
    new MangaEN("Black Clover", "Asta and Yuno are two 15-year-old teenagers who grew up together in a small village in the Clover Kingdom. Their ultimate goal is to become the next Wizard King! Strangely, in this kingdom, Asta is the only one who is unable to produce any magical power. Undeterred, he still participates in the annual ceremony for the distribution of grimoires, which gathers all 15-year-olds from across the Clover Kingdom. During the ceremony, Yuno receives a legendary grimoire, while Asta is unfortunately left without one. But Asta won't be discouraged; no matter the efforts he has to put in, he is determined to compete with Yuno and achieve his dream..."),
    new MangaEN("Chainsaw Man", "To repay his debts, Denji, a young man in the depths of despair, works as a Devil Hunter with his demon-dog-chainsaw, Pochita. But after a cruel betrayal, he finally sees an opportunity to escape the slums where he lives! After a powerful fusion with Pochita, Denji is recruited by an organization and embarks on a demon-hunting mission..."),
    new MangaEN("BLEACH", "Kurosaki Ichigo, a fifteen-year-old student with orange hair who loves to fight (just like his father), has the ability to see ghosts and even touch them. This leads him to encounter Kuchiki Rukia, a Shinigami (death god) who fights against Hollows. During their battle, Kuchiki ends up transferring her powers to Ichigo, turning him into a Shinigami himself. Now it's his turn to protect the city from Hollows."),
    new MangaEN("Bocchi the Rock!", "The story follows the daily life of Gotou Hitori, a high school girl who started learning to play the guitar to fulfill her dream of being part of a band. Unfortunately, the young musician is extremely shy and has failed to make a single friend. However, her encounter with Ijichi Nijika could change everything. Nijika is a drummer who is in search of a guitarist for her band."),
    new MangaEN("Blue Lock", `In the 2018 World Cup, the Japanese national football team is eliminated in the round of 16... This new failure prompts the Japanese Football Union to establish "Blue Lock": a revolutionary training center bringing together the top 300 high school forwards in the country. The goal of Blue Lock's coach, Jinpachi Ego, is clear: to identify the one striker who will crush all his rivals with his talent and hyper-individualism! For Yoichi Isagi, a still unknown but passionate player, there is no alternative... If he wants to survive the highly selective program that awaits him, he must abandon team play and transcend himself to become the ultimate striker!`),
    new MangaEN("FULLMETAL ALCHEMIST", `In Amestris, a vast country, the military holds a very important position as its leader, King Bradley, is also the president of the country. This army is supported by alchemists, State Alchemists, the youngest of whom, Edward Elric, specializes in metal alchemy. He is nicknamed the Fullmetal Alchemist. Edward is only 15 years old and travels the country with his younger brother Alphonse in search of the Philosopher's Stone. His goal is to restore his brother's body because Alphonse is only a soul attached to armor by a blood seal. When they were younger, they attempted to revive their mother using alchemy, but the attempt ended in a disastrous failure, and Alphonse lost his body. Edward also carries the scars of their attempt, as he has a metal right arm and left leg. But the brothers' quest may lead them to a truth more terrible than they imagined.`),
    new MangaEN("Mahoutsukai no Yome", `Chise Hatori is a slave until her path crosses that of the Magus Elias Ainsworth. He sees a certain talent for magic in her and decides to buy her to make her his apprentice. She will also have to marry him in the future.`),
    new MangaEN("Boku no Hero Academia", `In the near future, due to a genetic mutation, 80% of the world's population possesses superpowers called "Quirks." Superheroes protect the global population from supervillains who use their Quirks for evil purposes. The most famous superhero is All Might. Izuku Midoriya is a fan of All Might and dreams of joining the hero course at U.A. High School to follow in his idol's footsteps and become the greatest superhero. Unfortunately, Izuku does not have a Quirk.`),
    new MangaEN("SPYxFAMILY", `Twilight, the world's greatest spy, must create a family from scratch for his new mission to infiltrate the prestigious aristocratic school. Completely inexperienced in family life, he adopts a little girl, unaware that she is a telepath, and teams up with a shy young woman, unaware that she is a deadly assassin. This atypical trio must blend in while discovering the true values of a united and loving family.`),
    new MangaEN("Gintama", `During the Edo period, samurai were highly respected by all, but the arrival of the Amanto (aliens) led to the decline of the samurai with the prohibition of carrying swords. However, a young boy named Gintoki Sakata decides to live life on his own terms by becoming a freelancer, accepting odd jobs to help others. Accompanied by his two friends Kagura and Shinpachi, they live and fight as outlaws.`),
    new MangaEN("Jojo's Bizarre Adventure", `It all begins with Jonathan Joestar, son of an English aristocrat, who lives a normal life. Everything changes when Lord Joestar takes Dio Brando, a self-centered and vain young man whose father has just died, under his wing. A rivalry between the two boys ensues, and Dio decides to do everything in his power to bring Jonathan down and seize the Joestar family's inheritance. The battle between the two young men reaches its climax when Dio puts on a mysterious Aztec stone mask that transforms him into a bloodthirsty and invincible creature. For Jonathan, there is no doubt that he must get rid of this formidable adversary, and the battle that begins will extend to future generations of the Joestar family...`),
    new MangaEN("Jujutsu Kaisen", `In most cases, it is the negative emotions of human beings that are to blame. Suffering, regrets, humiliation: when these emotions accumulate in one place, they often give rise to fatal curses... This is what Yuji Itadori, a high school student and member of the Occult Research Club, will learn at his own expense. He doesn't believe in ghosts, but his extraordinary physical strength is a valuable asset for the group's missions... until one of them goes wrong. The relic they unearth, the severed finger of a millennia-old creature, attracts monsters! Without hesitation, the young man swallows the relic to ward off the curse!`),
    new MangaEN("Shingeki no Kyojin", `107 years ago, the Titans nearly exterminated the human race. These Titans are mainly about ten meters tall and feed on humans. The surviving humans built a fortified city with 50-meter-high walls to protect themselves from the Titans. For 100 years, humans have known peace. Eren is a young boy who dreams of leaving the city to explore the outside world. He leads a peaceful life with his parents and his sister Mikasa in the district of Shiganshina.`),
]
let tableauMangasRU = [
    new MangaEN("Demon Slayer", "Япония, в начале 20-го века. Маленький угольный торговец по имени Танджиро живет мирной жизнью в горах. Пока трагическим днем, после небольшого отсутствия, он не обнаруживает свою деревню и семью, истребленными демоном! Единственным выжившим в этой трагедии является его молодая сестра Незуко. К сожалению, она тоже превратилась в монстра после контакта с демоном... Чтобы изменить процесс и отомстить за свою семью, Танджиро решает отправиться в путь за истиной. Для молодого героя и его сестры это начало долгого приключения кровью и сталью!"),
    new MangaEN("Oshi no Ko", `Доктор Горо - акушер в сельской больнице. Он далек от мира блеска и гламура, в котором живет Аи Хошино, восходящая звезда певицы, и он ее "абсолютный фанат". Эти двое могут встретиться в неблагоприятных обстоятельствах, но это событие навсегда изменит их жизни!`),
    new MangaEN("One Piece", "Все боятся пиратов, кроме Луффи, который мечтает стать одним из них! Непредсказуемый подросток даже имеет грандиозные амбиции: он хочет стать самым сильным, Пиратским Королем. Для достижения этой цели ему нужно найти легендарное сокровище, Один Кусок. Но что, если это всего лишь легенда?"),
    new MangaEN("Kono Subarashii Sekai ni Bakuen wo!", "Мэгумин могла стать лучшей в Красном Магическом Клане, но она выбрала другой путь: путь взрывной магии.Эта мощная атакующая сила используется ее загадочным спасителем.Однажды ее младшая сестра нашла черного котенка в лесу.Оказывается, это ключ к пробуждению Темного Бога..."),
    new MangaEN("Vinland Saga Saison 1", "С тех пор, как Аскеладд, коварный и бесчестный военачальник, убил его отца, когда Торфинн был ребенком, он следует за ним повсюду, чтобы отомстить за своего отца. Но даже став сильным воином, он все равно не может победить своего врага. Годы спустя, выполняя опасные миссии и сражаясь, чтобы провести поединки с человеком, которого он ненавидит больше всего, добродушный Торфинн становится холодным и одиноким, пленником своего прошлого и неспособным двигаться вперед. Пока жизнь не заставляет его смотреть на мир иначе..."),
    new MangaEN("Jigokuraku", `История происходит в Японии XI века. Габимару, "Ничто", самый известный и мощный ассасин-ниндзя, был пойман и сидит в тюрьме. Заявляя, что у него больше нет причины жить, он с нетерпением ждет палача, который наконец сможет лишить его жизни, так как его сверхчеловеческая тренировка позволяет ему выдерживать самые страшные наказания. И вот к нему приходит палач, отличающийся от всех остальных: могущественная фехтовальщица и главная кровопролитница. После жесткой схватки, из которой ему едва удается спастись, она выталкивает его на пределы его возможностей. В обмен на сохранение его жизни она предлагает ему сделку: он должен отправиться на загадочный остров, чтобы достать эликсир бессмертия. Единственная проблема в том, что все, кто отправлялся на этот остров, возвращались в кусках...`),
    new MangaEN("Dr. STONE", "Тайджу, старшеклассник из Токио, однажды становится жертвой загадочного явления: в одном мгновении вся человечность превращается в камень! Через тысячи лет, пробудившись, он решает восстановить цивилизацию с нуля вместе со своим другом Сэнку!"),
    new MangaEN("Skip to Loafer", `Мицуми - молодая девушка из деревни, которая собирается поступить в старшую школу в Токио. Она очень умна, но скоро понимает, что совсем не готова к социальным нормам городских старшеклассников.`),
    new MangaEN("Kubo-san wa Mob wo Yurusanai", `Сираиси - обычный парень, который на грани становится невидимым для своих одноклассников и сверстников. Нагиса Кубо, его сосед по столу, который всегда замечает его, игриво экспериментирует, чтобы определить, насколько он невидим. Так она объявляет себя героиней Шираиши.`),
    new MangaEN("Tengoku Daimakyou", `В разрушенной загадочной катастрофой Японии Мару и Кируко, двое подростков из поколения после катастрофы, пытаются выжить. Несмотря на угрозу пожирающих людей монстров, у них есть одна цель: достичь "райского места"... В огромном саду, отрезанном от мира, группа детей наслаждается сладкой жизнью, защищенной учеными. Внешний мир для них неизвестен, но некоторые из них задаются вопросом: что находится за стенами их рая?`),
    new MangaEN("Dungeon Meshi", `История начинается, когда группа из шести искателей приключений сражается с драконом в подземелье. Битва превращается в поражение, и Фарин (человек-маг) использует заклинание, чтобы спасти остальных членов команды, но сама она оказывается поглощенной драконом. Её брат Лайос (рыцарь) решает вернуться в подземелье вместе с тремя другими участниками, чтобы спасти Фарин из желудка дракона. Однако им не хватает провизии, и они решают есть все, что найдут по пути, спускаясь глубже в подземелье. Встречая по дороге Сэнши, самодостаточного гнома, который учит их готовить различных монстров.`),
    new MangaEN("Yamada-kun to Lv999 no Koi wo Suru", `Ямада-кун и любовь на уровне 999": Акане была брошена её парнем, который влюбился в другую девушку. Печальная, она входит в игру и случайно встречает Ямаду в реальной жизни, встретившись с бывшим парнем.`),
    new MangaEN("MASHLE", `Мэш Бернеди был рожден без магических способностей, но сумел выжить, прятаясь в густом лесу. В тот день, когда его секрет обнаруживают, ему предлагают сделку: поступить в престижную магическую академию Истон и стать избранным богом. Чтобы вернуть себе мирную жизнь, Мэш соглашается.`),
    new MangaEN("Kimi wa Houkago Insomnia", `Ты бессонница после школы": Ганта Наками страдает от бессонницы. В школе он выглядит уставшим и замкнутым. Однажды, в астрономической комнате, он находит Исаки Магари, спящую в углу. Она тоже бессонница, но намного общительнее. Она предлагает им разделить это место для секретного сна. Их растущая близость кажется помогает им заснуть, так как каждый начинает слышать сердцебиение другого.`),
    new MangaEN("Dead Mount Death Play", `Кейт Харди, шутник и убийца, стал бессмертным, после того как его душа была внедрена в тело нежити. Он пробуждается в мире, полном магии и монстров, где у него есть способности использовать магию. Кейт решает использовать свои навыки и встретить своего создателя, который возможно является причиной его бессмертия.`),
    new MangaEN("HUNTERxHUNTER", "Молодой Гон живет на маленьком острове со своей тетей. Оставленный своим отцом, который является Охотником, искателем приключений и охотником на преступников, Гон решает стать сам Охотником в возрасте 12 лет. Это не будет легко; ему предстоит пройти серию испытаний и экзаменов вместе с тысячами других претендентов на звание Охотника. Ему помогут новые знакомые, разделяющие его цель, такие как Курапика, Леорио и Киллуа."),
    new MangaEN("NARUTO", "В деревне Коноха живет Наруто, молодой парень, которого жители презирают и боятся из-за его невероятной силы Кюби, девятихвостого лиса-демона, который причинил гибель многим людям. Самый мощный ниндзя в Конохе того времени, Четвертый Хокаге Минато Намикадзе, сумел запечатать демона в теле Наруто, но потерял свою жизнь в процессе. Через двенадцать лет Наруто мечтает стать величайшим Хокаге Конохи, чтобы заслужить признание, которое он заслуживает. Однако путь к становлению Хокаге долог и полон испытаний и многочисленных врагов, с которыми Наруто должен столкнуться, чтобы достичь своей цели!"),
    new MangaEN("Black Clover", `Аста и Юно - двое пятнадцатилетних подростков, которые выросли вместе в небольшой деревне в Королевстве Клевера. Их окончательная цель - стать следующим Королем Волшебников! Странно, но в этом королевстве Аста - единственный, кто не может проявить магическую силу. Не сдаваясь, он всё равно участвует в ежегодной церемонии раздачи гримуаров, которая собирает всех пятнадцатилетних из всего Королевства Клевера. Во время церемонии Юно получает легендарный гримуар, в то время как Асте, к сожалению, остается без него. Но Аста не собирается опускать руки; несмотря на все усилия, ему намеренно конкурировать с Юно и осуществить свою мечту...`),
    new MangaEN("Chainsaw Man", "Чтобы погасить свои долги, Денджи, молодой человек, погруженный в отчаяние, работает Охотником на Дьяволов со своей дьявольской собакой-бензопилой, Почитой. Но после жестокой предательства у него наконец-то появляется возможность выбраться из трущоб, где он живет! После мощного слияния с Почитой, Денджи привлекает внимание организации и отправляется на задание по охоте на демонов..."),
    new MangaEN("BLEACH", "Куросаки Ичиго, пятнадцатилетний студент с оранжевыми волосами, который любит сражаться (как и его отец), обладает способностью видеть призраков и даже касаться их. Это приводит его к встрече с Кучики Рукией, Шинигами (богиня смерти), которая сражается с Пустыми. Во время их битвы Кучики случайно передает свои способности Ичиго, превращая его самого в Шинигами. Теперь его очередь защищать город от Пустых."),
    new MangaEN("Bocchi the Rock!", "История повествует о повседневной жизни Гото Хитори, девушки-старшеклассницы, которая начала изучать игру на гитаре, чтобы осуществить свою мечту стать участницей группы. К сожалению, юная музыкантка чрезвычайно стеснительна и не смогла завести ни одного друга. Однако ее встреча с Иджичи Ниджикой может изменить все. Ниджика - барабанщица, которая ищет гитаристку для своей группы."),
    new MangaEN("Blue Lock", `На чемпионате мира 2018 года японская национальная футбольная команда выбывает в 1/8 финала... Этот новый неудачный результат заставляет Японское футбольное союз учредить "Синюю Тюрьму": революционный тренировочный центр, собравший 300 лучших юных нападающих страны. Цель тренера Синей Тюрьмы, Дзинпачи Эго, ясна: найти нападающего, который сокрушит всех своих конкурентов своим талантом и сверхиндивидуализмом! Для Йоити Исаги, до сих пор неизвестного, но страстного игрока, нет альтернативы... Если он хочет пережить высоко селективную программу, которая его ожидает, ему придется отказаться от командной игры и превзойти себя, чтобы стать идеальным нападающим!`),
    new MangaEN("FULLMETAL ALCHEMIST", `В Аместрисе, обширной стране, военные имеют очень важное положение, так как их лидер, король Брэдли, является также президентом страны. Эту армию поддерживают алхимики, государственные алхимики, младший из которых, Эдвард Элрик, специализируется на алхимии металла. Его прозвали Полным Металлическим Алхимиком. Эдварду всего 15 лет, и он путешествует по стране со своим младшим братом Альфонсом в поисках Философского Камня. Его цель - восстановить тело его брата, потому что Альфонс является только душой, прикрепленной к доспехам с помощью печати из крови. Когда они были младше, они попытались оживить свою мать с помощью алхимии, но попытка закончилась катастрофическим провалом, и Альфонс потерял свое тело. Эдвард тоже носит шрамы от их попытки, так как у него есть металлическая правая рука и левая нога. Но квест братьев может привести их к правде, более ужасной, чем они себе представляли.`),
    new MangaEN("Mahoutsukai no Yome", `Чизе Хатори - рабыня, пока ее путь не пересекается с магом Элиасом Эйнсвортом. Он видит в ней определенный талант к магии и решает купить ее в ученики и будущую жену.`),
    new MangaEN("Boku no Hero Academia", `В ближайшем будущем из-за генетической мутации 80% населения мира обладает сверхспособностями, называемыми "Quirks". Супергерои защищают мировое население от суперзлодеев, использующих свои способности для злых целей. Самым известным супергероем является Олл Майт. Изуку Мидория является фанатом Олл Майта и мечтает вступить в геройский курс в U.A. Высшей школе, чтобы следовать по стопам своего кумира и стать величайшим супергероем. К сожалению, у Изуку нет своей способности (Quirk).`),
    new MangaEN("SPYxFAMILY", `Твайлайт, лучший шпион в мире, должен создать семью с нуля для своей новой миссии - проникнуть в престижную аристократическую школу. Совершенно неопытный в семейной жизни, он усыновляет маленькую девочку, не подозревая о ее телепатических способностях, и сотрудничает с застенчивой молодой женщиной, не подозревающей о ее смертельных навыках убийцы. Этому необычному трио предстоит притвориться и в то же время открыть истинные ценности объединенной и любящей семьи.`),
    new MangaEN("Gintama", `Во время эпохи Эдо самураи были высоко уважаемыми всеми, но приход инопланетян Аманто привел к упадку самураев с запретом на ношение мечей. Однако молодой парень по имени Гинтоки Саката решает жить по своим правилам, став фрилансером и принимая необычные задания, чтобы помогать другим. Вместе со своими друзьями Кагурой и Шинпачи они живут и борются как изгои.`),
    new MangaEN("Jojo's Bizarre Adventure", `Все начинается с Джонатана ДжоДжо, сына английского аристократа, который живет обычной жизнью. Все меняется, когда лорд ДжоДжо берет под свое крыло Дио Брандо, самонадеянного и тщеславного молодого человека, чей отец только что умер. Между двумя мальчиками разворачивается соперничество, и Дио решает сделать все возможное, чтобы погубить Джонатана и завладеть наследством семьи ДжоДжо. Битва между двумя юношами достигает своего пика, когда Дио надевает таинственную ацтекскую каменную маску, превращаясь в кровожадное и неуязвимое существо. Для Джонатана нет сомнений в том, что он должен избавиться от этого смертоносного противника, и битва, начавшаяся, продлится в будущих поколениях семьи ДжоДжо...`),
    new MangaEN("Jujutsu Kaisen", `В большинстве случаев за неприятности виноваты отрицательные эмоции людей. Страдание, сожаление, унижение: когда эти эмоции накапливаются в одном месте, часто возникают смертоносные проклятия... Об этом узнает Юдзи Итадори, ученик старшей школы и член Клуба исследования оккультизма, на своем опыте. Он не верит в призраков, но его необычная физическая сила является ценным достоянием для миссий группы... пока одна из них не идет не так. Реликвия, которую они раскапывают - отрубленный палец тысячелетнего существа, привлекает монстров! Без колебаний юноша глотает реликвию, чтобы отогнать проклятие!`),
    new MangaEN("Shingeki no Kyojin", `107 лет назад титаны практически истребили человечество. Титаны, в основном, имеют высоту около десяти метров и питаются людьми. Выжившие люди построили укрепленный город со стенами высотой 50 метров, чтобы защититься от титанов. В течение 100 лет люди познали мир в мире, спокойно живя со своими семьями в районе Шиганшина.`),
]


let bouttonaccueil1 = document.getElementById('bouttonaccueil1');
let buttoncategoriebutton1 = document.getElementById('buttoncategoriebutton1');
let categorieaction = document.getElementById('categorieaction');
let categorieaventure = document.getElementById('categorieaventure');
let categoriecomedie = document.getElementById('categoriecomedie');
let categoriedrama = document.getElementById('categoriedrama');
let categoriefantaisie = document.getElementById('categoriefantaisie');
let categoriehorreur = document.getElementById('categoriehorreur');
let categoriepsy = document.getElementById('categoriepsy');
let buttonnouscontacterbutton1 = document.getElementById('buttonnouscontacterbutton1');
let destinataire = document.getElementById('destinataire');
let subject = document.getElementById('subject');
let contactmessage = document.getElementById('contactmessage');
let submitmsgcontact = document.getElementById('submitmsgcontact');
let buttonmentionlegale = document.getElementById('buttonmentionlegale');
let secobutton = document.getElementById('secobutton');
let sinscrire = document.getElementById('sinscrire');
let monprofilbtn = document.getElementById('monprofilbtn');
let favorisbtn = document.getElementById('favorisbtn');
let parametrebtn = document.getElementById('parametrebtn');
let decobtn = document.getElementById('decobtn');
let accueiltendance1b = document.getElementById('accueiltendance1b');
let accueilnouveauté1b = document.getElementById('accueilnouveauté1b');
let profilfavoris = document.getElementById('profilfavoris');
let profilhistorique = document.getElementById('profilhistorique');
let voirplus1 = document.getElementById('voirplus1');
let voirplus2 = document.getElementById('voirplus2');
let changemail = document.getElementById('changemail');
let newmail = document.getElementById('newmail');
let mdpactuel = document.getElementById('mdpactuel');
let changemdp = document.getElementById('changemdp');
let changepassword = document.getElementById('changepassword');
let newpassword = document.getElementById('newpassword');
let confirmnewpassword = document.getElementById('confirmnewpassword');
let suppaccount = document.getElementById('suppaccount');
let Notif = document.getElementById('Notif');
let mangasynopsis = document.getElementById('mangasynopsis');
let vidtrad = document.getElementById('vidtrad');
let addcomment = document.getElementById('addcomment');
let writecomment = document.getElementById('writecomment');
let favoritetitle = document.getElementById('favoritetitle');
let favoritesynopsis1 = document.getElementById('favoritesynopsis1');
let favoritesynopsis2 = document.getElementById('favoritesynopsis2');
let favoritesynopsis3 = document.getElementById('favoritesynopsis3');
let favoritesynopsis4 = document.getElementById('favoritesynopsis4');
let favoritesynopsis5 = document.getElementById('favoritesynopsis5');
let historysynopsis1 = document.getElementById('historysynopsis1');
let historysynopsis2 = document.getElementById('historysynopsis2');
let historysynopsis3 = document.getElementById('historysynopsis3');
let historysynopsis4 = document.getElementById('historysynopsis4');
let historysynopsis5 = document.getElementById('historysynopsis5');
let categorysynopsis = document.getElementById('categorysynopsis');
let connexion = document.getElementById('connexion');
let legaltitle = document.getElementById('legaltitle');

if (localStorage.getItem('lang') == 'en') {
    bouttonaccueil1.innerText = 'Welcome';
    buttoncategoriebutton1.innerText = 'Category';
    categorieaction.innerText = 'Action';
    categorieaventure.innerText = 'Adventure';
    categoriecomedie.innerText = 'Comedy';
    categoriedrama.innerText = 'Drama';
    categoriefantaisie.innerText = 'Fantasy';
    categoriehorreur.innerText = 'Horror';
    categoriepsy.innerText = 'Psychologic';
    buttonnouscontacterbutton1.innerText = 'Contact us';
    destinataire.innerText = 'Recipient';
    subject.innerText = 'Subject';
    contactmessage.innerText = 'Message';
    submitmsgcontact.innerText = 'Send';
    buttonmentionlegale.innerText = 'Legal notice';
    search.placeholder = 'Search manga...';
    if (localStorage.getItem('login') == 'true') {
        monprofilbtn.innerText = 'My Profil';
        favorisbtn.innerText = 'Favorites';
        parametrebtn.innerText = 'Settings';
        decobtn.innerText = 'Disconnect';

    }
    if (localStorage.getItem('login') == null) {
        secobutton.innerText = 'Login';
        sinscrire.innerText = 'Registration';
    }
    if (document.location.href.includes("accueil.html")) {
        accueiltendance1b.innerText = 'Trends';
        accueilnouveauté1b.innerText = 'News';
    }
    if (document.location.href.includes("profil.html")) {
        profilfavoris.innerText = 'Favorite';
        profilhistorique.innerText = 'History';
        voirplus1.innerText = 'See more';
        voirplus2.innerText = 'See more';
        btnMonCompte.innerText = 'My account';
        btnParametre.innerText = 'Settings';
        changemail.innerText = 'Change email address';
        newmail.placeholder = 'New email adress';
        mdpactuel.placeholder = 'Current password';
        changemdp.innerText = 'Change password';
        changepassword.placeholder = 'Current password';
        newpassword.placeholder = 'New password';
        confirmnewpassword.placeholder = 'Confirm new password';
        suppaccount.innerText = 'Delete account';
        langue.innerText = 'Language';
        btnfrLangue.innerText = 'French';
        btnenLangue.innerText = 'English';
        btnruLangue.innerText = 'Russian';
        Notif.innerText = 'Notifications';
    }
    if (document.location.href.includes("manga.html")) {
        for (let mangaEN of tableauMangasEN) {
            for (const manga of tableauMangas) {
                if (manga.titre == mangaEN.titre) {
                    mangasynopsis.innerText = mangaEN.synopsis
                }
            }
        }
        vidtrad.innerText = 'Click here to watch';
        writecomment.innerText = 'Write your comment here';
        addcomment.innerText = 'Add a comment';
    }
    if (document.location.href.includes("favoris.html")) {
        favoritetitle.innerText = 'Your favorites';
        favoritesynopsis1.innerText = 'Japan, at the beginning of the 20th century. A small coal merchant named Tanjiro lives a peaceful life in the mountains. Until the tragic day when, after a short absence, he finds his village and family massacred by a demon! The only survivor of this tragedy is his young sister Nezuko. Unfortunately, she has also been transformed into a monster after coming into contact with the demon... In order to reverse the process and avenge his family, Tanjiro decides to embark on a quest for truth. For the young hero and his sister, it is the beginning of a long adventure of blood and steel!';
        favoritesynopsis2.innerText = 'Since Askeladd, a treacherous and dishonorable war chief, killed his father when he was a child, Thorfinn has been following him everywhere in order to avenge his father. But even though he has become a formidable warrior, he still can\'t defeat his enemy. Over the years, as he undertakes dangerous missions and fights to get duels against the man he hates more than anything, the kind-hearted Thorfinn has become cold and solitary, trapped in his past and unable to move forward. Until life forces him to look at the world differently...';
        favoritesynopsis3.innerText = 'Doctor Gorô is an obstetrician in a rural hospital. He is far from the glitz and glamour world in which Ai Hoshino, a rising singer, lives and he is her \'absolute fan\'. These two might meet under unfavorable circumstances, but this event will change their lives forever!';
        favoritesynopsis4.innerText = 'Everyone is afraid of pirates except for Luffy, who dreams of becoming one! The unpredictable teenager even has grand ambitions: he wants to become the strongest of them all, the Pirate King. To achieve this, he must find a legendary treasure, the One Piece. But what if it\'s just a legend?';
        favoritesynopsis5.innerText = `The wild story begins as a group of six adventurers face off against a dragon in a dungeon. The battle turns into a rout, and Farin (a human magician) uses a spell to save the rest of the team as she gets swallowed by the dragon. Laios (her brother, a knight) decides with three other team members to quickly return to the dungeon to rescue Farin from the dragon's stomach. Unfortunately, they find themselves without provisions and decide to eat whatever they find as they descend further into the dungeon. Along the way, they meet Senshi, a self-sufficient dwarf who teaches them in each chapter how to cook different monsters.`;
    }
    if (document.location.href.includes("historique.html")) {
        historytitle.innerText = 'Your history';
        historysynopsis1.innerText = 'Japan, at the beginning of the 20th century. A small coal merchant named Tanjiro lives a peaceful life in the mountains. Until the tragic day when, after a short absence, he finds his village and family massacred by a demon! The only survivor of this tragedy is his young sister Nezuko. Unfortunately, she has also been transformed into a monster after coming into contact with the demon... In order to reverse the process and avenge his family, Tanjiro decides to embark on a quest for truth. For the young hero and his sister, it is the beginning of a long adventure of blood and steel!';
        historysynopsis2.innerText = 'Since Askeladd, a treacherous and dishonorable war chief, killed his father when he was a child, Thorfinn has been following him everywhere in order to avenge his father. But even though he has become a formidable warrior, he still can\'t defeat his enemy. Over the years, as he undertakes dangerous missions and fights to get duels against the man he hates more than anything, the kind-hearted Thorfinn has become cold and solitary, trapped in his past and unable to move forward. Until life forces him to look at the world differently...';
        historysynopsis3.innerText = 'Doctor Gorô is an obstetrician in a rural hospital. He is far from the glitz and glamour world in which Ai Hoshino, a rising singer, lives and he is her \'absolute fan\'. These two might meet under unfavorable circumstances, but this event will change their lives forever!';
        historysynopsis4.innerText = 'Everyone is afraid of pirates except for Luffy, who dreams of becoming one! The unpredictable teenager even has grand ambitions: he wants to become the strongest of them all, the Pirate King. To achieve this, he must find a legendary treasure, the One Piece. But what if it\'s just a legend?';
        historysynopsis5.innerText = `The wild story begins as a group of six adventurers face off against a dragon in a dungeon. The battle turns into a rout, and Farin (a human magician) uses a spell to save the rest of the team as she gets swallowed by the dragon. Laios (her brother, a knight) decides with three other team members to quickly return to the dungeon to rescue Farin from the dragon's stomach. Unfortunately, they find themselves without provisions and decide to eat whatever they find as they descend further into the dungeon. Along the way, they meet Senshi, a self-sufficient dwarf who teaches them in each chapter how to cook different monsters.`;
    }
    let categories = ['action', 'aventure', 'comedie', 'drama', 'fantasy', 'horreur', 'meca', 'psychologie', 'science-fiction', 'slice_of_life', 'romance']
    let categoriesEN = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mecha', 'Psychology', 'Science Fiction', 'Slice of Life', 'Romance'];
    let categoriesRU = ['боевик', 'приключения', 'комедия', 'драма', 'фэнтези', 'ужасы', 'меха', 'психология', 'научная фантастика', 'повседневность', 'романтика'];

    if (document.location.href.includes("categorie.html")) {
        let cate;
        nomcategorie
        for (const categorie of categories) {
            if (document.location.href.includes(categorie)) {
                cate = categorie;
            }
        }
        switch (cate) {
            case 'action':
                let actionsynopsis0 = document.getElementById('categorysynopsis0');
                let actionsynopsis1 = document.getElementById('categorysynopsis1');
                let actionsynopsis2 = document.getElementById('categorysynopsis2');
                let actionsynopsis3 = document.getElementById('categorysynopsis3');
                let actionsynopsis4 = document.getElementById('categorysynopsis4');
                let actionsynopsis5 = document.getElementById('categorysynopsis5');
                let actionsynopsis6 = document.getElementById('categorysynopsis6');
                let actionsynopsis7 = document.getElementById('categorysynopsis7');
                let actionsynopsis8 = document.getElementById('categorysynopsis8');
                let actionsynopsis9 = document.getElementById('categorysynopsis9');
                let actionsynopsis10 = document.getElementById('categorysynopsis10');
                let actionsynopsis11 = document.getElementById('categorysynopsis11');
                let actionsynopsis12 = document.getElementById('categorysynopsis12');
                let actionsynopsis13 = document.getElementById('categorysynopsis13');
                let actionsynopsis14 = document.getElementById('categorysynopsis14');
                let actionsynopsis15 = document.getElementById('categorysynopsis15');
                let actionsynopsis16 = document.getElementById('categorysynopsis16');
                let actionsynopsis17 = document.getElementById('categorysynopsis17');
                let actionsynopsis18 = document.getElementById('categorysynopsis18');
                let actionsynopsis19 = document.getElementById('categorysynopsis19');
                let actionsynopsis20 = document.getElementById('categorysynopsis20');
                actionsynopsis0.innerText = tableauMangasEN[0].synopsis
                actionsynopsis1.innerText = tableauMangasEN[2].synopsis
                actionsynopsis2.innerText = tableauMangasEN[4].synopsis
                actionsynopsis3.innerText = tableauMangasEN[5].synopsis
                actionsynopsis4.innerText = tableauMangasEN[6].synopsis
                actionsynopsis5.innerText = tableauMangasEN[9].synopsis
                actionsynopsis6.innerText = tableauMangasEN[10].synopsis
                actionsynopsis7.innerText = tableauMangasEN[12].synopsis
                actionsynopsis8.innerText = tableauMangasEN[14].synopsis
                actionsynopsis9.innerText = tableauMangasEN[16].synopsis
                actionsynopsis10.innerText = tableauMangasEN[17].synopsis
                actionsynopsis11.innerText = tableauMangasEN[18].synopsis
                actionsynopsis12.innerText = tableauMangasEN[19].synopsis
                actionsynopsis13.innerText = tableauMangasEN[21].synopsis
                actionsynopsis14.innerText = tableauMangasEN[22].synopsis
                actionsynopsis15.innerText = tableauMangasEN[24].synopsis
                actionsynopsis16.innerText = tableauMangasEN[25].synopsis
                actionsynopsis17.innerText = tableauMangasEN[26].synopsis
                actionsynopsis18.innerText = tableauMangasEN[27].synopsis
                actionsynopsis19.innerText = tableauMangasEN[28].synopsis
                actionsynopsis20.innerText = tableauMangasEN[29].synopsis
                nomcategorie.innerText = categoriesEN[0];
                break;
                case 'aventure':
                    let aventuresynopsis0 = document.getElementById('categorysynopsis0');
                    let aventuresynopsis1 = document.getElementById('categorysynopsis1');
                    let aventuresynopsis2 = document.getElementById('categorysynopsis2');
                    let aventuresynopsis3 = document.getElementById('categorysynopsis3');
                    let aventuresynopsis4 = document.getElementById('categorysynopsis4');
                    let aventuresynopsis5 = document.getElementById('categorysynopsis5');
                    let aventuresynopsis6 = document.getElementById('categorysynopsis6');
                    let aventuresynopsis7 = document.getElementById('categorysynopsis7');
                    let aventuresynopsis8 = document.getElementById('categorysynopsis8');
                    let aventuresynopsis9 = document.getElementById('categorysynopsis9');
                    let aventuresynopsis10 = document.getElementById('categorysynopsis10');
                    let aventuresynopsis11 = document.getElementById('categorysynopsis11');
                    let aventuresynopsis12 = document.getElementById('categorysynopsis12');
                    let aventuresynopsis13 = document.getElementById('categorysynopsis13');
                    aventuresynopsis0.innerText = tableauMangasEN[0].synopsis
                    aventuresynopsis1.innerText = tableauMangasEN[2].synopsis
                    aventuresynopsis2.innerText = tableauMangasEN[4].synopsis
                    aventuresynopsis3.innerText = tableauMangasEN[6].synopsis
                    aventuresynopsis4.innerText = tableauMangasEN[10].synopsis
                    aventuresynopsis5.innerText = tableauMangasEN[12].synopsis
                    aventuresynopsis6.innerText = tableauMangasEN[15].synopsis
                    aventuresynopsis7.innerText = tableauMangasEN[16].synopsis
                    aventuresynopsis8.innerText = tableauMangasEN[17].synopsis
                    aventuresynopsis9.innerText = tableauMangasEN[19].synopsis
                    aventuresynopsis10.innerText = tableauMangasEN[25].synopsis
                    aventuresynopsis11.innerText = tableauMangasEN[26].synopsis
                    aventuresynopsis12.innerText = tableauMangasEN[27].synopsis
                    aventuresynopsis13.innerText = tableauMangasEN[28].synopsis
                    nomcategorie.innerText = categoriesEN[1];
                    break;
            case 'comedie':
                let comediesynopsis0 = document.getElementById('categorysynopsis0');
                let comediesynopsis1 = document.getElementById('categorysynopsis1');
                let comediesynopsis2 = document.getElementById('categorysynopsis2');
                let comediesynopsis3 = document.getElementById('categorysynopsis3');
                let comediesynopsis4 = document.getElementById('categorysynopsis4');
                let comediesynopsis5 = document.getElementById('categorysynopsis5');
                let comediesynopsis6 = document.getElementById('categorysynopsis6');
                let comediesynopsis7 = document.getElementById('categorysynopsis7');
                let comediesynopsis8 = document.getElementById('categorysynopsis8');
                let comediesynopsis9 = document.getElementById('categorysynopsis9');
                let comediesynopsis10 = document.getElementById('categorysynopsis10');
                let comediesynopsis11 = document.getElementById('categorysynopsis11');
                let comediesynopsis12 = document.getElementById('categorysynopsis12');
                let comediesynopsis13 = document.getElementById('categorysynopsis13');
                let comediesynopsis14 = document.getElementById('categorysynopsis14');
                let comediesynopsis15 = document.getElementById('categorysynopsis15');
                let comediesynopsis16 = document.getElementById('categorysynopsis16');
                let comediesynopsis17 = document.getElementById('categorysynopsis17');
                comediesynopsis0.innerText = tableauMangasEN[2].synopsis
                comediesynopsis1.innerText = tableauMangasEN[3].synopsis
                comediesynopsis2.innerText = tableauMangasEN[7].synopsis
                comediesynopsis3.innerText = tableauMangasEN[8].synopsis
                comediesynopsis4.innerText = tableauMangasEN[10].synopsis
                comediesynopsis5.innerText = tableauMangasEN[11].synopsis
                comediesynopsis6.innerText = tableauMangasEN[12].synopsis
                comediesynopsis7.innerText = tableauMangasEN[13].synopsis
                comediesynopsis8.innerText = tableauMangasEN[15].synopsis
                comediesynopsis9.innerText = tableauMangasEN[16].synopsis
                comediesynopsis10.innerText = tableauMangasEN[18].synopsis
                comediesynopsis11.innerText = tableauMangasEN[19].synopsis
                comediesynopsis12.innerText = tableauMangasEN[20].synopsis
                comediesynopsis13.innerText = tableauMangasEN[22].synopsis
                comediesynopsis14.innerText = tableauMangasEN[24].synopsis
                comediesynopsis15.innerText = tableauMangasEN[25].synopsis
                comediesynopsis16.innerText = tableauMangasEN[26].synopsis
                comediesynopsis17.innerText = tableauMangasEN[28].synopsis
                nomcategorie.innerText = categoriesEN[2];
                break;
            case 'drama':
                let dramasynopsis0 = document.getElementById('categorysynopsis0');
                let dramasynopsis1 = document.getElementById('categorysynopsis1');
                let dramasynopsis2 = document.getElementById('categorysynopsis2');
                let dramasynopsis3 = document.getElementById('categorysynopsis3');
                let dramasynopsis4 = document.getElementById('categorysynopsis4');
                let dramasynopsis5 = document.getElementById('categorysynopsis5');
                let dramasynopsis6 = document.getElementById('categorysynopsis6');
                let dramasynopsis7 = document.getElementById('categorysynopsis7');
                let dramasynopsis8 = document.getElementById('categorysynopsis8');
                let dramasynopsis9 = document.getElementById('categorysynopsis9');
                let dramasynopsis10 = document.getElementById('categorysynopsis10');
                let dramasynopsis11 = document.getElementById('categorysynopsis11');
                let dramasynopsis12 = document.getElementById('categorysynopsis12');
                let dramasynopsis13 = document.getElementById('categorysynopsis13');
                let dramasynopsis14 = document.getElementById('categorysynopsis14');
                let dramasynopsis15 = document.getElementById('categorysynopsis15');
                dramasynopsis0.innerText = tableauMangasEN[1].synopsis;
                dramasynopsis1.innerText = tableauMangasEN[2].synopsis
                dramasynopsis2.innerText = tableauMangasEN[4].synopsis
                dramasynopsis3.innerText = tableauMangasEN[5].synopsis
                dramasynopsis4.innerText = tableauMangasEN[6].synopsis
                dramasynopsis5.innerText = tableauMangasEN[9].synopsis
                dramasynopsis6.innerText = tableauMangasEN[15].synopsis
                dramasynopsis7.innerText = tableauMangasEN[16].synopsis
                dramasynopsis8.innerText = tableauMangasEN[18].synopsis
                dramasynopsis9.innerText = tableauMangasEN[19].synopsis
                dramasynopsis10.innerText = tableauMangasEN[21].synopsis
                dramasynopsis11.innerText = tableauMangasEN[22].synopsis
                dramasynopsis12.innerText = tableauMangasEN[23].synopsis
                dramasynopsis13.innerText = tableauMangasEN[26].synopsis
                dramasynopsis14.innerText = tableauMangasEN[28].synopsis
                dramasynopsis15.innerText = tableauMangasEN[29].synopsis
                nomcategorie.innerText = categoriesEN[3];
                break;
            case 'fantasy':
                let fantasysynopsis0 = document.getElementById('categorysynopsis0');
                let fantasysynopsis1 = document.getElementById('categorysynopsis1');
                let fantasysynopsis2 = document.getElementById('categorysynopsis2');
                let fantasysynopsis3 = document.getElementById('categorysynopsis3');
                let fantasysynopsis4 = document.getElementById('categorysynopsis4');
                let fantasysynopsis5 = document.getElementById('categorysynopsis5');
                let fantasysynopsis6 = document.getElementById('categorysynopsis6');
                let fantasysynopsis7 = document.getElementById('categorysynopsis7');
                let fantasysynopsis8 = document.getElementById('categorysynopsis8');
                let fantasysynopsis9 = document.getElementById('categorysynopsis9');
                let fantasysynopsis10 = document.getElementById('categorysynopsis10');
                let fantasysynopsis11 = document.getElementById('categorysynopsis11');
                let fantasysynopsis12 = document.getElementById('categorysynopsis12');
                let fantasysynopsis13 = document.getElementById('categorysynopsis13');
                let fantasysynopsis14 = document.getElementById('categorysynopsis14');
                let fantasysynopsis15 = document.getElementById('categorysynopsis15');
                let fantasysynopsis16 = document.getElementById('categorysynopsis16');
                fantasysynopsis0.innerText = tableauMangasEN[0].synopsis
                fantasysynopsis1.innerText = tableauMangasEN[2].synopsis
                fantasysynopsis2.innerText = tableauMangasEN[3].synopsis
                fantasysynopsis3.innerText = tableauMangasEN[5].synopsis
                fantasysynopsis4.innerText = tableauMangasEN[6].synopsis
                fantasysynopsis5.innerText = tableauMangasEN[10].synopsis
                fantasysynopsis6.innerText = tableauMangasEN[12].synopsis
                fantasysynopsis7.innerText = tableauMangasEN[14].synopsis
                fantasysynopsis8.innerText = tableauMangasEN[15].synopsis
                fantasysynopsis9.innerText = tableauMangasEN[16].synopsis
                fantasysynopsis10.innerText = tableauMangasEN[17].synopsis
                fantasysynopsis11.innerText = tableauMangasEN[18].synopsis
                fantasysynopsis12.innerText = tableauMangasEN[23].synopsis
                fantasysynopsis13.innerText = tableauMangasEN[26].synopsis
                fantasysynopsis14.innerText = tableauMangasEN[27].synopsis
                fantasysynopsis15.innerText = tableauMangasEN[28].synopsis
                fantasysynopsis16.innerText = tableauMangasEN[29].synopsis
                nomcategorie.innerText = categoriesEN[4];
                break;
            case 'horreur':
                let horreursynopsis0 = document.getElementById('categorysynopsis0');
                horreursynopsis0.innerText = tableauMangasEN[1].synopsis
                nomcategorie.innerText = categoriesEN[5];
                break;
            case 'psychologique':
                let psychologiquesynopsis0 = document.getElementById('categorysynopsis0');
                let psychologiquesynopsis1 = document.getElementById('categorysynopsis1');
                let psychologiquesynopsis2 = document.getElementById('categorysynopsis2');
                let psychologiquesynopsis3 = document.getElementById('categorysynopsis3');
                psychologiquesynopsis0.innerText = tableauMangasEN[1].synopsis
                psychologiquesynopsis1.innerText = tableauMangasEN[21].synopsis
                psychologiquesynopsis2.innerText = tableauMangasEN[28].synopsis
                psychologiquesynopsis3.innerText = tableauMangasEN[29].synopsis
                nomcategorie.innerText = categoriesEN[6];
                break;
            case 'science-fiction':
                let scienceficsynopsis0 = document.getElementById('categorysynopsis0');
                let scienceficsynopsis1 = document.getElementById('categorysynopsis1');
                let scienceficsynopsis2 = document.getElementById('categorysynopsis2');
                scienceficsynopsis0.innerText = tableauMangasEN[7].synopsis
                scienceficsynopsis1.innerText = tableauMangasEN[10].synopsis
                scienceficsynopsis2.innerText = tableauMangasEN[26].synopsis
                nomcategorie.innerText = categoriesEN[7];
                break;
            case 'slice_of_life':
                let sliceoflifesynopsis0 = document.getElementById('categorysynopsis0');
                let sliceoflifesynopsis1 = document.getElementById('categorysynopsis1');
                let sliceoflifesynopsis2 = document.getElementById('categorysynopsis2');
                let sliceoflifesynopsis3 = document.getElementById('categorysynopsis3');
                let sliceoflifesynopsis4 = document.getElementById('categorysynopsis4');
                let sliceoflifesynopsis5 = document.getElementById('categorysynopsis5');
                let sliceoflifesynopsis6 = document.getElementById('categorysynopsis6');
                sliceoflifesynopsis0.innerText = tableauMangasEN[1].synopsis
                sliceoflifesynopsis1.innerText = tableauMangasEN[7].synopsis
                sliceoflifesynopsis2.innerText = tableauMangasEN[8].synopsis
                sliceoflifesynopsis3.innerText = tableauMangasEN[11].synopsis
                sliceoflifesynopsis4.innerText = tableauMangasEN[13].synopsis
                sliceoflifesynopsis5.innerText = tableauMangasEN[20].synopsis
                sliceoflifesynopsis6.innerText = tableauMangasEN[23].synopsis  
                nomcategorie.innerText = categoriesEN[8];
                break;
            case 'romance':
                let romancesynopsis0 = document.getElementById('categorysynopsis0');
                let romancesynopsis1 = document.getElementById('categorysynopsis1');
                let romancesynopsis2 = document.getElementById('categorysynopsis2');
                let romancesynopsis3 = document.getElementById('categorysynopsis3');
                let romancesynopsis4 = document.getElementById('categorysynopsis4');
                let romancesynopsis5 = document.getElementById('categorysynopsis5');
                romancesynopsis0.innerText = tableauMangasEN[3].synopsis
                romancesynopsis1.innerText = tableauMangasEN[7].synopsis
                romancesynopsis2.innerText = tableauMangasEN[8].synopsis
                romancesynopsis3.innerText = tableauMangasEN[11].synopsis
                romancesynopsis4.innerText = tableauMangasEN[13].synopsis
                romancesynopsis5.innerText = tableauMangasEN[20].synopsis
                nomcategorie.innerText = categoriesEN[9];
                break;
            default:
                break;
        }
    }
    if (document.location.href.includes("connexion.html")) {
        connexion.innerText = 'Connection';
        username.placeholder = 'username';
        password.placeholder = 'password';
        seco.innerText = 'Log in'
        mdpoublie.innerText = 'Forgot password'
        forgotpasswordtitle.innerText = 'Forgot password'
        labelmail.innerText = 'E-mail';
        recupmail.placeholder = 'E-mail';
        recupmdp.innerText = 'Recover password';
    }
    if (document.location.href.includes("enregistrer.html")) {
        createaccount.innerText = 'Create account';
        enregistrerusername.innerText = 'Username';
        enregistreremail.innerText = 'E-mail';
        enregistrerpassword.innerText = 'Password';
        enregistrerconfirmpassword.innerText = 'Confirm password';
        submitbutton.value = 'Create account'
    }
    if (document.location.href.includes("FAQ.html")) {
        question1.innerText = 'What is Anime?';
        question2.innerText = 'How to watch anime on this site?';
        question3.innerText = 'Are the videos available in high quality?';
        question4.innerText = 'Is the content subtitled or dubbed in French?';
        question5.innerText = 'How do I contact support in the event of a problem?';
        answer1.innerText = 'Anime is a Japanese term that refers to animated series or animated films.';
        answer2.innerText = 'On our site you can watch anime streaming. Just search for the anime you want to watch and then click on the episode or movie link to watch it online.';
        answer3.innerText = 'Yes, we offer anime videos in high quality. Most of our videos are available in HD resolution for better viewing experience.';
        answer4.innerText = 'We offer both subtitled and French dubbed anime. You can choose the version that suits you best.';
        answer5.innerText = 'If you encounter a problem or have any questions, you can contact us using the contact form available on our site. We will do our best to respond to you as soon as possible.';
    }
    if (document.location.href.includes("Mentionlegal.html")) {
        legaltitle.innerText = 'Legal notice';
        informationleg.innerText = 'Legal information';
        entreprisename.innerText = 'Company name: Crunchytroll';
        formejuridique.innerText = 'Legal status: On est la';
        siegesocial.innerText = 'Head office: 2 Rue Paul Vaillant Couturier, 92300 Levallois-Perret';
        nutel.innerText = '0781323625';
        emailml.innerText = 'E-mail:  i-love-alderiate@gmail.com';
        idfiscale.innerText = 'Tax Identification Number:  0€ sur le compte ça sert a rien';
        nuimatriculation.innerText = 'Registration number: 123456789101112131415161718192021222324252627282930';
        directeur.innerText = 'Publication Director';
        directeur2.innerText = 'The director of publication is: Un des mecs de la salle';
        directeurmail.innerText = 'E-mail: demande lui, il est a ta gauche';
        hebergement.innerText = 'Accommodation';
        nomherbergeur.innerText = 'Name of the host: Nurserie';
        adressehebergement.innerText = 'Adress: Bah... t\'es dans le batiment';
        numhebergement.innerText = 'Phone Number: 06.22.23.46.08';
        proprieteintelect.innerText = 'Intellectual property';
        contenuwebsite.innerText = 'The content of the website (texts, images, videos, etc.) is the property of me and is protected by the laws relating to intellectual property. Any reproduction, distribution or use of the content without prior authorization is strictly prohibited.';
        collectedonne.innerText = 'Collection and use of personal data';
        collectvosdonne.innerText = 'We collect and use your personal data in accordance with our privacy policy, which you can consult at the following address: 2 Rue Paul Vaillant Couturier, 92300 Levallois-Perret';
        cookie.innerText = 'Cookies';
        cookies.innerText = 'Our website uses cookies to improve your user experience. You can consult our cookies policy for more information on their use and how to manage them.';
        lien.innerText = 'External links';
        lienexterne.innerText = 'Our website may contain links to external sites. We assume no responsibility for the content or the privacy policies of these sites.';
        limitationresp.innerText = 'Limitation of Liability';
        informresp.innerText = 'We strive to provide accurate information on our website, but we cannot guarantee its completeness or accuracy. In no event shall we be liable for any direct, indirect, special or consequential damages resulting from the use of our website.';
        droitjuridique.innerText = 'Applicable law and competent jurisdiction';
        droitmentionlegal.innerText = 'These legal notices are governed by the law applicable in your country. In the event of a dispute, the competent courts will be those of the jurisdiction of Jovany (the boss) and Romain le Crack.';
        buttonaccepte.innerText = 'I agree';
    }
}
if (localStorage.getItem('lang') == 'ru') {
    bouttonaccueil1.innerText = 'Добро пожаловать';
    buttoncategoriebutton1.innerText = 'Категория';
    categorieaction.innerText = 'Экшн';
    categorieaventure.innerText = 'Приключения';
    categoriecomedie.innerText = 'Комедия';
    categoriedrama.innerText = 'Драма';
    categoriefantaisie.innerText = 'Фэнтези';
    categoriehorreur.innerText = 'Ужасы';
    categoriepsy.innerText = 'Психология';
    buttonnouscontacterbutton1.innerText = 'Свяжитесь с нами';
    destinataire.innerText = 'Получатель';
    subject.innerText = 'Тема';
    contactmessage.innerText = 'Сообщение';
    submitmsgcontact.innerText = 'Отправить';
    buttonmentionlegale.innerText = 'Юридическое уведомление';
    search.placeholder = 'Поиск манги...';
    if (localStorage.getItem('login') == 'true') {
        monprofilbtn.innerText = 'Мой профиль';
        favorisbtn.innerText = 'Избранное';
        parametrebtn.innerText = 'Настройки';
        decobtn.innerText = 'Отключиться';


    }
    if (localStorage.getItem('login') == null) {
        secobutton.innerText = 'Вход';
        sinscrire.innerText = 'Регистрация';

    }
    if (document.location.href.includes("accueil.html")) {
        accueiltendance1b.innerText = 'Тенденции';
        accueilnouveauté1b.innerText = 'Новости';

    }
    if (document.location.href.includes("profil.html")) {
        profilfavoris.innerText = 'Избранное';
        profilhistorique.innerText = 'История';
        voirplus1.innerText = 'Показать больше';
        voirplus2.innerText = 'Показать больше';
        btnMonCompte.innerText = 'Мой аккаунт';
        btnParametre.innerText = 'Настройки';
        changemail.innerText = 'Изменить адрес электронной почты';
        newmail.placeholder = 'Новый адрес электронной почты';
        mdpactuel.placeholder = 'Текущий пароль';
        changemdp.innerText = 'Изменить пароль';
        changepassword.placeholder = 'Текущий пароль';
        newpassword.placeholder = 'Новый пароль';
        confirmnewpassword.placeholder = 'Подтвердите новый пароль';
        suppaccount.innerText = 'Удалить аккаунт';
        langue.innerText = 'Язык';
        btnfrLangue.innerText = 'Французский';
        btnenLangue.innerText = 'Английский';
        btnruLangue.innerText = 'Русский';
        Notif.innerText = 'Уведомления';

    }
    if (document.location.href.includes("manga.html")) {
        for (let mangaRU of tableauMangasRU) {
            for (const manga of tableauMangas) {
                if (manga.titre == mangaRU.titre) {
                    mangasynopsis.innerText = mangaRU.synopsis
                }
            }
        }
        vidtrad.innerText = 'Нажмите здесь, чтобы посмотреть';
        writecomment.innerText = 'Напишите свой комментарий здесь';
        addcomment.innerText = 'Добавить комментарий';

    }
    if (document.location.href.includes("favoris.html")) {
        favoritetitle.innerText = 'Ваши избранные';
        favoritesynopsis1.innerText = 'Япония, в начале XX века. Маленький угольный торговец по имени Танджиро живет мирной жизнью в горах. Пока не наступает трагический день, когда после короткого отсутствия он обнаруживает свою деревню и семью, истребленными демоном! Единственным выжившим в этой трагедии является его молодая сестра Незуко. К сожалению, она тоже превратилась в монстра после контакта с демоном... Чтобы изменить процесс и отомстить своей семье, Танджиро решает отправиться в путь в поисках истины. Для молодого героя и его сестры это начало долгого приключения крови и стали!';
        favoritesynopsis2.innerText = 'С тех пор, как Аскелад, коварный и бесчестный военачальник, убил его отца, когда тот был ребенком, Торфинн следует за ним повсюду, чтобы отомстить отцу. Но даже став потрясающим воином, он все еще не может победить своего врага. С годами, совершая опасные миссии и сражаясь в поединках с тем, кого он ненавидит больше всего, добрый сердцем Торфинн стал холодным и уединенным, запутанным в прошлом и неспособным идти вперед. Пока жизнь не заставляет его по-другому взглянуть на мир...';
        favoritesynopsis3.innerText = 'Доктор Горо - акушер в сельской больнице. Он далек от мира блеска и гламура, в котором живет Аи Хошино, восходящая певица, и он ее «абсолютный фанат». Эти двое могут встретиться в неблагоприятных обстоятельствах, но это событие изменит их жизни навсегда!';
        favoritesynopsis4.innerText = 'Все боятся пиратов, кроме Луффи, который мечтает стать одним из них! Непредсказуемый подросток даже имеет великие амбиции: он хочет стать самым сильным из всех, Пиратским Королем. Для достижения этой цели ему необходимо найти легендарное сокровище, Единую Часть. Но что, если это всего лишь легенда?';
        favoritesynopsis5.innerText = 'Дикая история начинается, когда группа из шести искателей приключений сталкивается с драконом в подземелье. Битва превращается в бегство, и Фарин (человек-маг) использует заклинание, чтобы спасти остальную команду, пока она не попадает в желудок дракона. Лайос (ее брат, рыцарь) решает вернуться в подземелье с троими другими членами команды, чтобы спасти Фарин из желудка дракона. К сожалению, они оказываются без провизии и решают есть все, что найдут, погружаясь еще глубже в подземелье. По пути они встречают Сэнши, самодостаточного гнома, который в каждой главе учит их готовить разных монстров.';

    }
    if (document.location.href.includes("historique.html")) {
        historytitle.innerText = 'Ваша история';
        historysynopsis1.innerText = 'Япония, в начале XX века. Маленький угольный торговец по имени Танджиро живет мирной жизнью в горах. Пока не наступает трагический день, когда после короткого отсутствия он обнаруживает свою деревню и семью, истребленными демоном! Единственным выжившим в этой трагедии является его молодая сестра Незуко. К сожалению, она тоже превратилась в монстра после контакта с демоном... Чтобы изменить процесс и отомстить своей семье, Танджиро решает отправиться в путь в поисках истины. Для молодого героя и его сестры это начало долгого приключения крови и стали!';
        historysynopsis2.innerText = 'С тех пор, как Аскелад, коварный и бесчестный военачальник, убил его отца, когда тот был ребенком, Торфинн следует за ним повсюду, чтобы отомстить отцу. Но даже став потрясающим воином, он все еще не может победить своего врага. С годами, совершая опасные миссии и сражаясь в поединках с тем, кого он ненавидит больше всего, добрый сердцем Торфинн стал холодным и уединенным, запутанным в прошлом и неспособным идти вперед. Пока жизнь не заставляет его по-другому взглянуть на мир...';
        historysynopsis3.innerText = 'Доктор Горо - акушер в сельской больнице. Он далек от мира блеска и гламура, в котором живет Аи Хошино, восходящая певица, и он ее «абсолютный фанат». Эти двое могут встретиться в неблагоприятных обстоятельствах, но это событие изменит их жизни навсегда!';
        historysynopsis4.innerText = 'Все боятся пиратов, кроме Луффи, который мечтает стать одним из них! Непредсказуемый подросток даже имеет великие амбиции: он хочет стать самым сильным из всех, Пиратским Королем. Для достижения этой цели ему необходимо найти легендарное сокровище, Единую Часть. Но что, если это всего лишь легенда?';
        historysynopsis5.innerText = 'Дикая история начинается, когда группа из шести искателей приключений сталкивается с драконом в подземелье. Битва превращается в бегство, и Фарин (человек-маг) использует заклинание, чтобы спасти остальную команду, пока она не попадает в желудок дракона. Лайос (ее брат, рыцарь) решает вернуться в подземелье с троими другими членами команды, чтобы спасти Фарин из желудка дракона. К сожалению, они оказываются без провизии и решают есть все, что найдут, погружаясь еще глубже в подземелье. По пути они встречают Сэнши, самодостаточного гнома, который в каждой главе учит их готовить разных монстров.';
    }
    if (document.location.href.includes("categorie.html")) {
        for (let mangaRU of tableauMangasRU) {
            for (const manga of tableauCategorie) {
                if (manga.titre == mangaRU.titre) {
                    categorysynopsis.innerText = mangaRU.synopsis
                }
            }
        }
    }
    if (document.location.href.includes("connexion.html")) {
        connexion.innerText = 'Соединение';
        username.placeholder = 'имя пользователя';
        password.placeholder = 'пароль';
        seco.innerText = 'Войти';
        mdpoublie.innerText = 'Забыли пароль';
        forgotpasswordtitle.innerText = 'Забыли пароль';
        labelmail.innerText = 'E-mail';
        recupmail.placeholder = 'E-mail';
        recupmdp.innerText = 'Восстановить пароль';

    }
    if (document.location.href.includes("enregistrer.html")) {
        createaccount.innerText = 'Создать аккаунт';
        enregistrerusername.innerText = 'Имя пользователя';
        enregistreremail.innerText = 'E-mail';
        enregistrerpassword.innerText = 'Пароль';
        enregistrerconfirmpassword.innerText = 'Подтвердите пароль';
        submitbutton.value = 'Создать аккаунт';

    }
    if (document.location.href.includes("FAQ.html")) {
        question1.innerText = 'Что такое аниме?';
        question2.innerText = 'Как смотреть аниме на этом сайте?';
        question3.innerText = 'Доступно ли видео высокого качества?';
        question4.innerText = 'Фильмы с субтитрами или озвучкой на французском языке?';
        question5.innerText = 'Как связаться с поддержкой в случае проблемы?';
        answer1.innerText = 'Аниме - это японский термин, который относится к анимационным сериалам или анимационным фильмам.';
        answer2.innerText = 'На нашем сайте вы можете смотреть аниме онлайн. Просто найдите аниме, которое вы хотите посмотреть, а затем нажмите на ссылку эпизода или фильма, чтобы посмотреть его онлайн.';
        answer3.innerText = 'Да, мы предлагаем аниме-видео высокого качества. Большинство наших видео доступны в HD-разрешении для лучшего просмотра.';
        answer4.innerText = 'Мы предлагаем аниме как с субтитрами, так и озвучкой на французском языке. Вы можете выбрать ту версию, которая вам больше нравится.';
        answer5.innerText = 'Если у вас возникла проблема или у вас есть вопросы, вы можете связаться с нами, используя контактную форму, доступную на нашем сайте. Мы сделаем все возможное, чтобы ответить вам как можно скорее.';
    }
    if (document.location.href.includes("Mentionlegal.html")) {
        legaltitle.innerText = 'Юридическая информация';
        informationleg.innerText = 'Юридическая информация';
        entreprisename.innerText = 'Название компании: Crunchytroll';
        formejuridique.innerText = 'Правовой статус: Мы здесь';
        siegesocial.innerText = 'Юридический адрес: 2 Rue Paul Vaillant Couturier, 92300 Levallois-Perret';
        nutel.innerText = 'Телефон: 0781323625';
        emailml.innerText = 'E-mail: i-love-alderiate@gmail.com';
        idfiscale.innerText = 'Идентификационный номер налогоплательщика: 0€ на счете ничего не значит';
        nuimatriculation.innerText = 'Регистрационный номер: 123456789101112131415161718192021222324252627282930';
        directeur.innerText = 'Директор публикации';
        directeur2.innerText = 'Директор публикации: Один из ребят в зале';
        directeurmail.innerText = 'E-mail: спросите его, он слева от вас';
        hebergement.innerText = 'Размещение';
        nomherbergeur.innerText = 'Name of the host: Nurserie';
        adressehebergement.innerText = 'Адрес: Ну... ты в здании';
        numhebergement.innerText = 'Телефон: 06.22.23.46.08';
        proprieteintelect.innerText = 'Интеллектуальная собственность';
        contenuwebsite.innerText = 'Содержимое веб-сайта (тексты, изображения, видео и т. д.) является моей собственностью и защищено законами об интеллектуальной собственности. Любое воспроизведение, распространение или использование контента без предварительного разрешения строго запрещено.';
        collectedonne.innerText = 'Сбор и использование персональных данных';
        collectvosdonne.innerText = 'Мы собираем и используем ваши персональные данные в соответствии с нашей политикой конфиденциальности, которую вы можете прочитать по следующему адресу: 2 Rue Paul Vaillant Couturier, 92300 Levallois-Perret';
        cookie.innerText = 'Cookies';
        cookies.innerText = 'Наш веб-сайт использует файлы cookie для улучшения вашего пользовательского опыта. Вы можете прочитать нашу политику файлов cookie для получения дополнительной информации об их использовании и способах управления ими.';
        lien.innerText = 'Внешние ссылки';
        lienexterne.innerText = 'Наш веб-сайт может содержать ссылки на внешние сайты. Мы не несем ответственности за содержимое или политику конфиденциальности этих сайтов.';
        limitationresp.innerText = 'Ограничение ответственности';
        informresp.innerText = 'Мы стремимся предоставить точную информацию на нашем веб-сайте, но не можем гарантировать ее полноту или точность. В никаком случае мы не несем ответственности за прямые, косвенные, особые или последующие убытки, возникшие в результате использования нашего веб-сайта.';
        droitjuridique.innerText = 'Применимое право и компетентная юрисдикция';
        droitmentionlegal.innerText = 'Эти юридические уведомления регулируются применимым правом в вашей стране. В случае спора компетентными судами будут суды юрисдикции Jovany (босс) и Romain le Crack.';
        buttonaccepte.innerText = 'Я согласен';

    }
}
