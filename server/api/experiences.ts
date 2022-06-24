const experiences = [
	{
		title: "Développeur web Freelance",
		company: "Phatza Création",
		url: "https://phatza-creation.fr",
		date: "Février 2017 - Aujourd’hui",
		description:
			"L’aventure de développeur web indépendant me permet de me challenger sur divers aspect du web comme l’intégration, le développement front/back mais aussi sur des notions de serveurs web ou encore serveurs d’emails.\
				Les rencontres que je fais au travers de différents projets (clients ou collaborateurs), me poussent à parfaire mes connaissances et à aller toujours plus loin.\
				L’indépendance est avant tout une vraie aventure humaine.",
		icon: "job",
	},
	{
		title: "Développeur front-end",
		company: "Purjus",
		url: "https://purjus.fr/",
		date: "Janvier 2016 - Janvier 2017",
		description:
			"J'ai intégré l'agence Purjus en tant qu'alternant pour un rôle de <b>développeur Front-end/Intégrateur</b>.\
				Durant cette période, j'ai pu relevé différents challenges en étroite collaboration avec le chef de projet, le lead développeur et ses équipes (back-end/front-end) pour répondre au mieux aux divers problèmes métiers de nos clients.\
				J'ai essentiellement utilisé des technologies comme <b>HTML5</b> (natif + \"<b>template engine</b>\" comme <b>TWIG</b>), <b>CSS3</b> (natif + <b>préprocesseurs</b> comme <b>LESS</b> ou <b>SASS</b>), <b>Javascript</b> (<b>jQuery</b> et <b>AngularJS</b>) avec des <b>frameworks UI</b> comme <b>Bootstrap 3</b> ou encore <b>Material Design</b>, des outils de collaboration comme <b>Git</b> (avec <b>Gitlab</b>) mais également des <b>CMS</b> (<b>Wordpress</b> et <b>Joomla</b>).\
				",
		icon: "job",
	},
	{
		title: "Formation développeur front-end",
		company: "Infa",
		url: "",
		date: "Janvier 2016 - Janvier 2017",
		description:
			"Formation Développeur Web Front-end en cycle d’alternance.\
				J’ai eu l’occasion de faire mon alternance en agence de communication (Purjus) en tant que Développeur Front-end/Intégrateur.",
		icon: "certificate",
	},
	{
		title: "Formation d'initiation développement web",
		company: "SimplonMARS",
		url: "",
		date: "03 Mars 2015 - 24 Juillet 2015",
		description:
			"Formation intensive et innovante prônant la pédagogie “DO IT YOURSELF” et “LEARNING BY DOING”.\
				J’ai appris à apprendre afin de pouvoir facilement évoluer avec les technologies mais aussi en communauté. Google est devenu un ami très cher 😅 !",
		icon: "certificate",
	},
	{
		title: "D.A.E.U A",
		company: "",
		url: "",
		date: "30 Septembre 2013 - 30 Juin 2014",
		description:
			"Le <b>Diplôme d'Accès aux Études Universitaire</b> représente une équivalence au baccalauréat reconnu dans le monde entier.\
				Le programme est de revoir les 3 années de lycée en une seule.\
				J'ai obtenue le D.A.E.U A (Economique & Social) avec la mention Bien.",
		icon: "certificate",
	},
	{
		title: "Raccordeur fibre optique",
		company: "R.F.O",
		url: "",
		date: "Décembre 2010 - décembre 2012",
		description:
			"En tant que raccordeur, mes tâches étaient :\
				Analyse de sites, création réseaux Internet, gestion d’équipe et maintenance.\
				Pour différents opérateurs tels que : SFR, FREE, ORANGE",
		icon: "job",
	},
	{
		title: "Téléconseiller",
		company: "Etic Alta",
		url: "",
		date: "Juin 2009 - Août 2010",
		description:
			"J’étais en charge du service d’aide aux locataires 13 habitat. La visite des sites d’habitations ainsi que des agences de gestion du patrimoine ont été pour moi une grande expérience humaine.",
		icon: "job",
	},
]

export default defineEventHandler((event) => {
  return experiences;
});
