class MangaApi{
    constructor(titre, image, note, synopsis){
        this.titre = titre;
        this.image = image;
        this.note = note;
        this.synopsis = synopsis;
    }
}

let tableauMangas = [
    new MangaApi("Demon Slayer", "../img/afficheManga/demonslayer.png",4.8, `Le Japon, au début du XXe siecle. Un petit marchand de charbon nommé Tanjiro vit une vie sans histoire dans les montagnes. Jusqu’au jour tragique où, après une courte absence, il retrouve son village et sa famille massacrés par un ogre ! La seule survivante de cette tragédie est sa jeune sœur Nezuko. Hélas, au contact de la bête, celle-ci s’est à son tour métamorphosée en monstre...Afin de renverser le processus et de venger sa famille, Tanjiro décide de partir en quête de vérité. Pour le jeune héros et sa sœur, c’est une longue aventure de sang et d’acier qui commence !`),
    new MangaApi("Oshi no Ko", "../img/afficheManga/oshinoko.png", 4.2, `Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Ai Hoshino, une chanteuse au succès grandissant dont il est “un fan absolu”. Ces deux-là vont peut-être se rencontrer dans des circonstances peu favorables, mais cet évènement changera leur vie à jamais !`),
    new MangaApi("One Piece", "../img/afficheManga/Onepiece.png", 5, `Tout le monde a peur des pirates sauf Luffy, qui rêve d’en devenir un ! L’adolescent imprévisible voit même les choses en grand : il veut devenir le plus fort de tous, le seigneur des pirates. Pour y arriver, il lui doit trouver un trésor légendaire, le One Piece. Mais si ce n’était qu’une légende ?`),
    new MangaApi("Kono Subarashii Sekai ni Bakuen wo!", "../img/afficheManga/Kono.png", 3, `Megumin avait tout pour devenir la meilleure du clan Crimson Magic, mais elle a choisi une autre voie : celle de la magie de l’explosion. Ce puissant pouvoir offensif est utilisé par son mystérieux sauveur. Un jour, sa petite sœur a trouvé un chaton noir dans les bois. Il s’avère qu’il est la clé permettant le réveil d'un Dieu des Ténèbres…`),
    new MangaApi("Vinland Saga", "../img/afficheManga/vinlandsaga.png", 4.8, `Depuis qu'Askeladd, un chef de guerre fourbe et sans honneur, a tué son père lorsqu'il était enfant, Thorfinn le suit partout dans le but de se venger. Mais bien qu'il soit devenu un guerrier redoutable, il ne parvient toujours pas à vaincre son ennemi. Au fil des ans, enchaînant missions périlleuses et combats afin d'obtenir des duels contre l'homme qu'il hait plus que tout, le gentil Thorfinn est devenu froid et solitaire, prisonnier de son passé et incapable d'aller de l'avant. Jusqu'à ce que la vie le force à regarder le monde différemment…`),
    new MangaApi("Jigokuraku", "../img/afficheManga/Jigokuraku.png", 0.7, `L’histoire se déroule au XIe siècle, au Japon. Gabimaru, « Le Néant », le plus célèbre et puissant des ninjas-assassins a été capturé et croupit en prison. Affirmant n’avoir plus aucune raison de vivre, il attend désespérément qu’un bourreau parvienne à lui ôter la vie car son entraînement surhumain lui permet de résister aux pires des châtiments. C’est alors qu’il reçoit la visite d’un exécuteur pas comme les autres : une puissante manieuse de sabre et trancheuse de tête. Après un âpre combat dont il réchappe de peu, celle-ci le pousse dans ses retranchements. En échange de la vie sauve, elle lui propose un marché : il devra se rendre sur une île mystérieuse afin de récupérer un élixir d’immortalité. Seul problème : tous ceux qui se sont rendus sur cette île sont revenus découpés en morceaux...` ),
    new MangaApi("Dr. STONE", "../img/afficheManga/drstone.png", 0.7, `Taiju, un lycéen tokyoïte, est un jour victime d’un phénomène mystérieux : en une fraction de seconde, l’humanité entière est transformée en pierre ! Des milliers d’années plus tard, à son réveil, il décide de rebâtir la civilisation à partir de zéro avec son ami Senku !` ),
    new MangaApi("Skip to Loafer", "../img/afficheManga/Skiptoloafer.png", 2.9, `Mitsumi est une jeune campagnarde qui s'apprête à se rendre au lycée de Tokyo. Elle est très intelligente mais elle est sur le point de découvrir qu'elle n'est pas du tout préparée aux normes sociales des lycéens des grandes villes.`),
    new MangaApi("Kubo-san wa Mob wo Yurusanai","../img/afficheManga/Kubo-san wa Mob wo Yurusanai.png", 4.2, `Shiraishi est un garçon ordinaire qui est à deux doigts d'être invisible auprès de ses camarades de classe et de ses pairs. Nagisa Kubo, sa voisine de table qui le remarque toujours, effectue des expériences de manière ludique pour jauger à quel point il est invisible. C'est ainsi que cette dernière se déclare comme étant l'héroïne de Shiraishi.`),
    new MangaApi("Tengoku Daimakyou", "../img/afficheManga/Tengoku Daimakyou", 4.2, `Dans un Japon dévasté par un mystérieux cataclysme, Maru et Kiruko, deux adolescents de la génération post-catastrophe, tentent de survivre. Malgré la menace de monstres dévoreurs d'humains qui plane, ils ont un objectif : atteindre le "paradis"...Dans un immense jardin coupé du monde, un groupe d’enfants jouit d’une vie douce, protégé par des scientifiques. Le monde extérieur leur est inconnu mais certains d’entre eux se questionnent : qu’y a-t-il au-delà des murs de leur paradis ?`),
    new MangaApi("Dungeon Meshi", "../img/afficheManga/Dungeon Meshi.png", 1.3, `L'histoire, rocambolesque, commence alors qu'un groupe de six aventuriers affronte un dragon dans un donjon. Le combat tournant à la déroute, Farin (magicienne humaine) utilise un sort pour sauver le reste de l'équipe alors qu'elle se fait avaler par le Dragon. Laios (son frère, chevalier) décide avec trois autres membres de l'équipe de retourner au plus vite dans le donjon pour sortir Farin de l'estomac du dragon. Malheureusement ils se retrouvent sans provision, et décident de se nourrir de ce qu'ils trouveront au fur et à mesure de leur descente dans le donjon. Ils vont faire la rencontre de Senshi, un nain qui vit en autarcie et leur apprendra à chaque chapitre comment cuisiner tel ou tel monstre.` ),
    new MangaApi("Yamada-kun to Lv999 no Koi wo Suru", "../img/afficheManga/Yamada-kun to Lv999 no Koi wo Suru.png", 0.2, `Akane s'est fait larguer par son petit ami qui aime une autre fille. Triste, elle se connecte à un jeu et fait la connaissance en ligne d'un certain Yamada. Un jour, alors qu'elle croise son ex petit-ami, elle rencontre, en vrai, par hasard Yamada.`),
    new MangaApi("MASHLE", "../img/afficheManga/MASHLE.png", 1.1, `Mash Burnedead est né sans pouvoirs magiques mais a survécu caché dans une épaisse forêt. Le jour où son secret est découvert, il se voit proposer un marché : intégrer Easton, la prestigieuse académie de magie, et y obtenir le titre d'élu divin. Pour retrouver sa vie tranquille, Mash accepte.`),
    new MangaApi("Kimi wa Houkago Insomnia", "../img/afficheManga/Kimi wa Houkago Insomnia.png", 0, `Ganta Nakami est insomniaque. À l'école, il semble donc fatigué, voire associable. Un jour, dans la salle d'astronomie, il découvre Isaki Magari, endormie dans un coin. Insomniaque comme lui, mais bien plus sociable, elle lui propose de partager l'endroit pour y dormir en cachette. Leur rapprochement semble les aider à retrouver le sommeil, chacun étant sensible aux battements de cœur de l'autre...`),
    new MangaApi("Dead Mount Death Play", "../img/afficheManga/Dead Mount Death Play.png", 3.4, `Le sort du monde se joue lorsque s'affrontent le Maître des corps, un démon nécromancien ayant accumulé une puissance incommensurable, et un légendaire chevalier sacré. Mais, au dernier moment, le monstre use d'un mystérieux arcane magique qui enveloppe le héros d'une étrange lumière. À travers l'espace et le temps, un garçon nommé Polka Shinoyama se réveille en ne se sentant pas tout à fait lui-même... Qui pouvait s'attendre à ce que l'issue de la confrontation se déroule de cette façon ?`),
    new MangaApi("HUNTERxHUNTER", "../img/afficheManga/HUNTERxHUNTER.png", 4.0, `Le jeune Gon vit sur une petite île avec sa tante. Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d'autres prétendants au titre de Hunter. Il sera aidé par de nouvelles connaissances qui aspirent au même but que lui, telles que Kurapika, Leorio et Killua.`),
    new MangaApi("NARUTO", "../img/afficheManga/NARUTO.png", 4.5, `Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois du fait qu'il détienne en lui Kyuubi (démon renard à neuf queues) d'une incroyable force, qui a tué un grand nombre de personnes. Le ninja le plus puissant de Konoha à l'époque, le quatrième Hokage, Minato Namikaze, réussit à sceller ce démon dans le corps de Naruto. Malheureusement il y laissa la vie. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur. Mais la route pour devenir Hokage est très longue et Naruto sera confronté à un bon nombre d'épreuves et devra affronter de nombreux ennemis pour atteindre son but !`),
    new MangaApi("Black Clover", "../img/afficheManga/Black Clover.png", 4.2, `Asta et Yuno sont deux adolescents de 15 ans qui ont grandi ensemble dans un petit village du royaume de Clover. Leur but ultime à tous les deux est de devenir le prochain empereur-mage ! Étrangement, dans ce royaume, Asta est le seul qui soit incapable de produire la moindre étincelle magique. Loin d'être découragé, il participe tout de même avec son ami (et rival) Yuno à la cérémonie annuelle de remise des grimoires qui rassemble les jeunes de 15 ans dans tout le royaume de Clover. Lors de cette cérémonie, Yuno recevra un grimoire légendaire. Ce qui n'est pas le cas d'Asta car malheureusement pour lui, aucun grimoire ne lui sera attribué ce jour là. Mais Asta ne se laissera pas abattre, peut importe les efforts qu'il aura à fournir, il compte bien rivaliser avec Yuno pour aller au bout de son rêve....`),
    new MangaApi("Chainsaw Man", "../img/afficheManga/Chainsaw Man.png", 4.6, `Pour rembourser ses dettes, Denji, jeune homme dans la dèche la plus totale, est exploité en tant que Devil Hunter avec son chien-démon-tronçonneuse, "Pochita". Mais suite à une cruelle trahison, il voit enfin une possibilité de se tirer des bas-fonds où il croupit ! Devenu surpuissant après sa fusion avec Pochita, Denji est recruté par une organisation et part à la chasse aux démons...`),
    new MangaApi("BLEACH", "../img/afficheManga/BLEACH.png", 4.1, `Kurosaki Ichigo, un étudiant de quinze ans aux cheveux orange qui aime la bagarre (comme son père) a la particularité de voir les fantômes ainsi que de pouvoir les toucher. Cela l'amène à rencontrer Kuchiki Rukia, un Shinigami (dieu de la mort) qui combat un Hollow. Le déroulement du combat amène Kuchiki à donner ses pouvoirs à Ichigo qui deviens alors lui même un Shinigami. C'est maintenant à son tour de protéger la ville des Hollows.`),
    new MangaApi("Bocchi the Rock!", "../img/afficheManga/Bocchi the Rock!.png", 3, `L'histoire suit le quotidien de Gotou Hitori, une lycéenne qui a commencé à apprendre à jouer de la guitare pour réaliser son rêve : faire partie d'un groupe. Malheureusement, la jeune musicienne est bien trop timide et n'a donc pas réussi à se faire un seul ami. Cependant, sa rencontre avec Ijichi Nijika pourrait bien tout changer. En effet, cette dernière est une batteuse et elle est à la recherche d'une guitariste pour son groupe.`),
    new MangaApi("Blue Lock", "../img/afficheManga/Blue Lock.png", 4.3, `Coupe du monde 2018, l'équipe de football du Japon est éliminée en huitièmes de finale... Ce nouvel échec incite l'Union japonaise de football à fonder le "Blue Lock" : un centre de formation révolutionnaire rassemblant les 300 meilleurs attaquants lycéens du pays. L'objectif du coach du Blue Lock, Jinpachi Ego, est clair : détecter l'unique attaquant qui écrasera tous ses rivaux par son talent et son hyper-individualisme ! Pour Yoichi Isagi, joueur bouillonnant encore inconnu, il n'y a pas d'alternative... S'il veut survivre au programme hautement sélectif qui l'attend, il devra abandonner le jeu collectif et se transcender pour devenir l'attaquant ultime !`),
    new MangaApi("FULLMETAL ALCHEMIST", "../img/afficheManga/FULLMETAL ALCHEMIST.png", 3.9, `À Amestris, un immense pays, l'armée tient une place très importante puisque son dirigeant, King Bradley, est également le président du pays. Cette armée est soutenue par des alchimistes, les Alchimistes d'État dont le plus jeune, Edward Elric, a pour spécialité le métal. On le surnomme le Fullmetal Alchemist. Edward a tout juste 15 ans, et parcourt le pays en compagnie de son frère, Alphonse, à la recherche de la Pierre Philosophale. Il a pour but de rendre son corps à son frère, car Alphonse n'est qu'une âme rattaché à une armure par un sceau de sang. Étant plus jeunes, ils ont essayé de redonner vie à leur mère grâce à l'alchimie, mais la tentative fut un échec cuisant, et Alphonse perdit son corps.Edward garde lui aussi des séquelles de leur tentative, puisqu'il a le bras droit et la jambe gauche en métal. Mais la quête des deux frères risque de les mener vers une vérité plus terrible qu'ils ne l'imaginaient.`),
    new MangaApi("Mahoutsukai no Yome", "../img/afficheManga/Mahoutsukai no Yome.png", 0.7, `Chise Hatori est une esclave jusqu'au jour où sa route croise celle du Magus Elias Ainsworth. Ce dernier décèle en elle un don certain pour la magie et décide de l'acheter pour faire d'elle son apprentie. Elle devra également l'épouser dans le futur.`),
    new MangaApi("Boku no Hero Academia", "../img/afficheManga/Boku no Hero Academia.png", 4.2, `Dans un futur proche suite à une mutation génétique, 80% de la population mondiale possède des super-pouvoirs appelés "Alters". Les super-héros protègent la population mondiale face aux super-vilains qui utilisent leur Alter à des fins maléfiques. Le plus célèbre des super-héro se nomme All Might. Izuku Midoriya en est fan, et rêve d'intégrer la filière super-héroïque du lycée Yuei pour suivre les traces de son idole ainsi devenir le plus grand des super-héros. Malheureusement, Izuku ne possède pas de pouvoir.`),
    new MangaApi("SPYxFAMILY", "../img/afficheManga/SPYxFAMILY.png", 4, `Twilight, le plus grand espion du monde, doit pour sa nouvelle mission créer une famille de toutes pièces afin de pouvoir s'introduire dans la plus prestigieuse école de l'aristocratie. Totalement dépourvu d'expérience familiale, il va adopter une petite fille en ignorant qu'elle est télépathe, et s'associer à une jeune femme timide, sans se douter qu'elle est une redoutable tueuse à gages. Ce trio atypique va devoir composer pour passer inaperçu, tout en découvrant les vraies valeurs d'une famille unie et aimante.`),
    new MangaApi("Gintama", "../img/afficheManga/Gintama.png", 3.7, `A l'époque Edo, les samurai étaient respectés de tous, mais la venue des Amanto (aliens) a entraîné la déchéance des samurai avec l'interdiction du port de l'épée. Mais un jeune garçon du nom de Sataka Gintoki décide de vivre à sa manière en devenant un free-lancer (personne qui accepte des petits boulots pour rendre service). Accompagné de ses deux amis Kagura et Shinpachi, ils vivent et se battent en tant que hors-la-loi.`),
    new MangaApi("Jojo's Bizarre Adventure", "../img/afficheManga/jjba.png", 10, `Tout commence avec Jonathan Joestar, fils d'un aristocrate anglais, qui vit une existence bien ordinaire. Tout change lorsque Lord Joestar prend sous son aile Dio Brando, jeune homme égocentrique et vaniteux, dont le père vient de décéder. Une rivalité entre les deux garçon s'installe alors, et Dio décide de tout faire pour mettre Jonathan plus bas que terre et s'emparer de l'héritage de Lord Joestar. La lutte entre les deux jeunes hommes atteint son paroxysme lorsque Dio enfile un mystérieux masque de pierre Aztèque le changeant en une créature sanguinaire et invincible. Pour Jonathan, il ne fait aucun doute qu'il doit se débarrasser de ce redoutable adversaire, et la bataille qui commence s'étendra jusqu'aux générations futures de la famille Joestar...`),
    new MangaApi("Jujutsu Kaisen", "../img/afficheManga/Jujutsu Kaisen.png", 3, `Dans la majorité des cas, ce sont les sentiments négatifs des êtres humains qui sont en cause. Souffrance, regrets, humiliation : leur accumulation dans un même endroit provoque des malédictions souvent fatales... C'est ce que va découvrir à ses dépens Yuji Itadori, lycéen et membre du club de spiritisme. Il ne croit pas aux fantômes, mais sa force physique hors du commun est un précieux atout pour les missions du groupe... jusqu'à ce que l'une d'elles tourne mal. La relique qu'ils dénichent, le doigt sectionné d'une créature millénaire, attire les monstres ! Le jeune homme n'hésite pas une seconde : il avale la relique pour conjurer le mauvais sort !`),
    new MangaApi("Shingeki no Kyojin", "../img/afficheManga/Shingeki no Kyojin.png", 4, `Il y a 107 ans, les Titans ont presque exterminé la race humaine. Ces Titans mesurent principalement une dizaine de mètres et ils se nourrissent d'humains. Les humains ayant survécus à cette extermination ont construit une cité fortifiée avec des murs d'enceinte de 50 mètres de haut pour pouvoir se protéger des Titans. Pendant 100 ans les humains ont connu la paix. Eren est un jeune garçon qui rêve de sortir de la ville pour explorer le monde extérieur. Il mène une vie paisible avec ses parents et sa sœur Mikasa dans le district de Shiganshina.`),
] 


let search = document.getElementById("search");
search.addEventListener("keydown", function (event) {
    let recherche = document.getElementById("search").value.replaceAll(" ","_").toLowerCase();
    let reponse = false;
    
    if (event.key == 'Enter') {
        for (let manga of tableauMangas) {
             mangaTitre = manga.titre.replaceAll(" ","_").toLowerCase();
             if(recherche == mangaTitre){
                document.location.assign(`manga.html#${mangaTitre}`);
                reponse = true;
                break;
            }
        }
        if (reponse == false) {
            document.location.assign('404.html');
        }
    }
})

let titremanga = document.getElementById("mangatitre")
let imagemanga = document.getElementById("mangaimageaffiche")
let notemanga = document.getElementById("manganote")
let synopsismanga = document.getElementById("mangasynopsis")


let awnser = false
if (document.location.href.includes('manga.html#')) {
    for (let manga of tableauMangas) {
        mangaTitre = manga.titre.replaceAll(" ","_").toLowerCase();
        if (document.location.href.includes(mangaTitre)) {
            titremanga.innerText = manga.titre;
            imagemanga.setAttribute("src", manga.image);
            notemanga.innerText = manga.note;
            synopsismanga.innerText = manga.synopsis;
            awnser = true;
            break;
        }
    }
    if (awnser == false) {
        document.location.assign('404.html');
    }
} else {
    document.location.assign('404.html');
}