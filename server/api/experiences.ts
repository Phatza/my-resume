const experiences = [
  {
    title: "Développeur Full-stack",
    company: "Proxilivraison",
    url: "https://proxilivraison.fr",
    date: "Octobre 2019 - Mars 2021",
    description:
      "Proxilivraison est une place de marché permettant aux restaurateurs/commerces locaux (<u>basée sur Cavaillon et ses alentours</u>) de bénéficier d'une visibilité augmentée ainsi qu'un service de livraison à domicile.\
			Seul technicien sur le projet, j'ai dû répondre à tous les besoins pour la conception de la plateforme: <b>UX/UI, développement Front/Back, déploiement, surveillance/maintenance</b>.\
			Concernant les technologies utilisées: <b>Vue 2/Nuxt/Vuetify</b> (front) + <b>Strapi avec mongoDB</b> (back) en utilisant des services tel que <b>S3</b> pour le storage (<b>AWS</b>), <b>Stripe Connect</b> pour rediriger les paiements vers le bon partenaire.\
			Pour le déploiement, j'ai utilisé <b>Jelastic</b> (PaaS) qui m'a permis de créer visuellement les environnements pour les différentes applications (client/server/base de donnée).",
    icon: "job",
  },
  {
    title: "Développeur web Freelance",
    company: "Phatza Création",
    url: "https://phatza-creation.fr",
    date: "Février 2017 - Aujourd’hui",
    description:
      "L’aventure de <b>développeur web freelance</b> me permet de me challenger sur divers aspect du web comme l’<b>intégration</b>, le développement <b>front/back</b> mais aussi sur des notions de <b>serveurs web/emails</b>.\
			Les rencontres que je fais au travers de différents projets (clients et collaborateurs), me poussent à parfaire mes connaissances et à aller toujours plus loin.\
			L’indépendance est avant tout une vraie <b>aventure humaine</b>.",
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
				J'ai essentiellement utilisé des technologies comme <b>HTML5</b> (natif + “<b>template engine</b>” comme <b>TWIG</b>), <b>CSS3</b> (natif + <b>préprocesseurs</b> comme <b>LESS</b> ou <b>SASS</b>), <b>Javascript</b> (<b>jQuery</b> et <b>AngularJS</b>) avec des <b>frameworks UI</b> comme <b>Bootstrap 3</b> ou encore <b>Material Design</b>, des outils de collaboration comme <b>Git</b> (avec <b>Gitlab</b>) mais également des <b>CMS</b> (<b>Wordpress</b> et <b>Joomla</b>).\
				",
    icon: "job",
  },
  {
    title: "Formation développeur front-end",
    company: "Infa",
    url: "https://old-bhpc-porfolio.netlify.app/",
    date: "Janvier 2016 - Janvier 2017",
    description:
      "Formation Développeur Web Front-end en cycle d’alternance (entreprise: Purjus communication).\
			En fin d'année j'ai été évalué par un jury de professionnels pour valider les compétences suivantes: <b>conception et réalisation de projets web</b>, <b>qualité, lisibilité et maintenabilité du code</b>.\
			Découvrez mon projet de formation (portfolio) basé sur <b>Vue 2</b>, <b>SASS</b> avec <b>Bower</b> comme <b>gestionnaire de paquets</b>.",
    icon: "certificate",
  },
  {
    title: "Formation d'initiation développement web",
    company: "SimplonMARS",
    url: "",
    date: "03 Mars 2015 - 24 Juillet 2015",
    description:
      "Formation intensive et innovante prônant la pédagogie “<b>DO IT YOURSELF</b>” et “<b>LEARNING BY DOING</b>”.\
				J’ai appris à apprendre afin de pouvoir facilement évoluer avec les technologies mais aussi en communauté. <b>Google est devenu un ami très cher</b> 😅 !",
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
				J'ai obtenue le <b>D.A.E.U A</b> (Economique & Social) avec la <b>mention Bien</b>.",
    icon: "certificate",
  },
  {
    title: "Raccordeur fibre optique",
    company: "R.F.O",
    url: "",
    date: "Décembre 2010 - décembre 2012",
    description:
      "En tant que raccordeur, mes tâches étaient:\
				<b>Analyse de sites, création réseaux Internet, gestion d’équipe et maintenance</b>.\
				Pour différents opérateurs tels que: <b>SFR, FREE, ORANGE</b>",
    icon: "job",
  },
  {
    title: "Téléconseiller",
    company: "Etic Alta",
    url: "",
    date: "Juin 2009 - Août 2010",
    description:
      "J’étais en charge du <b>service d’aide aux locataires</b> du bailleur social <b>13 habitat</b>. La visite des sites d’habitations ainsi que des agences de gestion du patrimoine ont été pour moi une grande <b>expérience humaine</b>.",
    icon: "job",
  },
];

export default defineEventHandler((event) => {
  return experiences;
});
