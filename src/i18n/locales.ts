export const locales = {
	fr: {
		common: {
			loading: "Chargement...",
			error: "Erreur",
			download: "Télécharger",
			close: "Fermer",
			view: "Voir",
		},
		pdf: {
			downloadTitle: "Télécharger le PDF",
			loading: "Chargement du document...",
			error: "Erreur lors du chargement du PDF",
			downloadButton: "Télécharger le fichier",
		},
		footer: {
			copyright: "© 2025 Joachim Jasmin.",
		},
		nav: {
			home: "Accueil",
			about: "À propos",
			skills: "Compétences",
			education: "Formation",
			interests: "Passions",
			projects: "Projets & Liens",
			pricing: "Tarifs",
			contact: "Contact",
		},
		hero: {
			title: "Freelance Cloud, DevOps et IA. Formateur basé à Paris.",
			subtitle:
				"Ancien de la finance reconverti dans la tech. J'accompagne les commerces, artisans, associations et PME pour leurs sites, leurs applications et leur infrastructure cloud. Je prends en charge le projet du début à la fin, de la conception jusqu'à la mise en ligne, en passant par la maintenance.",
			ctaPrimary: "Voir mes projets",
			ctaSecondary: "Me contacter",
			downloadCV: "Télécharger mon CV",
		},
		about: {
			title: "À propos de moi",
			description:
				"Un parcours en plusieurs étapes : finance d'entreprise et hôtellerie internationale, puis reconversion vers le développement, le DevOps et l'IA. J'essaie d'appliquer ce que j'ai appris dans chaque domaine aux projets sur lesquels je travaille aujourd'hui.",
			content:
				"Après des études en management hôtelier (Glion) et en finance (SKEMA), je me suis reconverti vers le développement fullstack, puis progressivement vers le DevOps et l'ingénierie IA. J'accompagne aujourd'hui des PME, startups et associations sur la conception d'infrastructures Cloud (Terraform, AWS, Kubernetes), le développement d'applications React/Next.js et Node.js, et l'intégration de solutions IA (LangChain, OpenAI, RAG). J'interviens aussi comme formateur en bootcamp. J'essaie d'aller à l'essentiel : comprendre le besoin, proposer une solution adaptée et éviter de sur-construire.",
		},
		skills: {
			title: "Compétences",
			description: "Un éventail de technologies et de compétences pour des solutions complètes",
			categories: {
				cloud: {
					title: "Cloud & DevOps",
					skills: [
						"AWS",
						"Docker",
						"Kubernetes",
						"Terraform",
						"Ansible",
						"Traefik",
						"CI/CD",
						"Jenkins",
						"GitLab CI",
						"Prometheus",
						"Grafana",
						"SonarQube",
						"Cypress",
						"Playwright",
						"Artillery",
					],
				},
				fullstack: {
					title: "Développement Fullstack",
					skills: [
						"TypeScript",
						"React",
						"Next.js",
						"Tailwind",
						"React Native",
						"Expo",
						"Node.js",
						"Express",
						"NestJS",
						"Flask",
						"MongoDB",
						"PostgreSQL",
					],
				},
				ai: {
					title: "Intelligence Artificielle",
					skills: [
						"Python",
						"NumPy",
						"Scikit-learn",
						"PyTorch",
						"TensorFlow",
						"Keras",
						"ML",
						"FastAPI",
						"OpenAI GPT",
						"LangChain",
						"ChromaDB",
						"Pinecone",
					],
				},
				teaching: {
					title: "Formation & Pédagogie",
					skills: ["Passion", "Bootcamp", "Mentorat", "Management", "Debug", "Veille"],
				},
			},
			techDetails: {
				// About section icons
				"Cloud & DevOps":
					"Le DevOps, c’est pour moi une manière de réduire la friction entre développement et production. Automatiser tôt, surveiller en continu et améliorer sans relâche.",
				"Full-Stack":
					"J’aime concevoir un produit du front au back. Comprendre chaque couche me permet de construire des applications cohérentes et efficaces.",
				AI: "L’IA m’intéresse parce qu’elle transforme les données en actions concrètes. Je l’utilise pour rendre les outils plus intelligents et réactifs.",
				Teaching:
					"Enseigner, c’est partager ce que j’aurais aimé apprendre plus tôt. Aider les autres à devenir autonomes reste l’un de mes plus grands moteurs.",

				// DevOps
				AWS: "Un environnement cloud complet et fiable qui me permet de construire des architectures robustes et scalables. J’apprécie sa flexibilité et son écosystème riche.",
				Terraform:
					"Un outil essentiel pour décrire l’infrastructure comme du code. Il apporte reproductibilité, traçabilité et confiance dans les déploiements.",
				Ansible:
					"Je l’utilise pour automatiser les configurations serveurs et garantir des environnements identiques. Moins d’erreurs, plus de cohérence.",
				Docker: "Les conteneurs simplifient le déploiement et éliminent les problèmes d’environnement. Avec Docker, tout tourne pareil, partout.",
				Traefik:
					"Un reverse proxy moderne et intelligent, parfait pour Docker et Kubernetes. Je m’en sers pour gérer le routage, les certificats SSL et l’équilibrage de charge sans complexité.",
				Kubernetes:
					"Un orchestrateur exigeant mais incontournable. Une fois bien configuré, il gère la scalabilité, la résilience et la disponibilité sans intervention manuelle.",
				"CI/CD": "Automatiser les builds, les tests et les déploiements rend les livraisons plus fiables. Moins d’erreurs, plus de sérénité.",
				Jenkins: "Un outil historique du CI/CD, toujours efficace. Je l’utilise pour les pipelines personnalisés ou hors cloud.",
				"GitLab CI":
					"Une solution intégrée pour coder, tester et déployer au même endroit. Idéale pour les équipes agiles et les projets collaboratifs.",
				Prometheus: "Un outil fiable pour collecter les métriques et détecter les problèmes en amont. La base d’une bonne observabilité.",
				Grafana:
					"Je l’utilise pour visualiser les métriques et identifier les tendances. Des dashboards clairs permettent de prendre de meilleures décisions.",
				SonarQube:
					"Un outil indispensable pour maintenir la qualité du code. Il aide à repérer les vulnérabilités et la dette technique avant qu’elles ne coûtent cher.",
				Cypress: "Un framework de test E2E simple et efficace. Il permet de tester le comportement utilisateur directement dans le navigateur.",
				Playwright:
					"Une solution moderne pour tester sur plusieurs navigateurs. Idéale pour garantir la compatibilité front-end sur tous les environnements.",
				Artillery:
					"Je l’utilise pour simuler de fortes charges et mesurer les performances. Mieux vaut découvrir les limites avant les utilisateurs.",

				// Full-stack
				React: "Une librairie fiable pour créer des interfaces modernes et dynamiques. Les composants rendent le développement clair et modulaire.",
				"Next.js": "Un framework complet qui optimise React pour la production. Rapide, structuré et prêt à l’emploi.",
				TypeScript: "Le typage statique évite les erreurs classiques et renforce la stabilité du code. Un must sur les projets d’envergure.",
				"Node.js":
					"Un environnement rapide et léger pour construire des APIs performantes. Son approche asynchrone convient parfaitement aux applications web modernes.",
				NestJS: "Un framework backend structuré et maintenable. Idéal pour les applications Node.js complexes et durables.",
				MongoDB: "Une base NoSQL flexible, parfaite quand le schéma évolue souvent. Simple à manipuler, elle facilite le prototypage rapide.",
				PostgreSQL: "Une base de données relationnelle robuste et complète. Mon choix quand la fiabilité et la cohérence sont prioritaires.",
				Express: "Un framework minimaliste et direct pour construire des APIs REST. Simple, rapide, efficace.",
				"React Native": "Développer une seule base de code pour iOS et Android. Un gain de temps énorme sans sacrifier les performances.",
				Expo: "Un écosystème React Native qui simplifie le développement mobile. Moins de configuration, plus de résultats.",
				Flask: "Un micro-framework Python idéal pour les APIs légères et les prototypes IA. Sobre, rapide et extensible.",
				Tailwind: "Un framework CSS moderne et pragmatique. Il accélère le design tout en gardant un style cohérent et maintenable.",

				// AI Engineering
				"OpenAI GPT": "Une base solide pour créer des outils de génération de texte ou de conversation. Simple à intégrer, puissante à exploiter.",
				LangChain:
					"Le chaînon manquant entre modèles, données et logique métier. Il rend les LLM réellement utilisables dans des contextes concrets.",
				FastAPI: "Un framework Python rapide et typé, parfait pour les APIs modernes. Sa documentation automatique facilite le travail en équipe.",
				Python: "Mon langage principal pour l’IA et l’automatisation. Lisible, polyvalent et soutenu par un écosystème riche.",
				ML: "Le machine learning consiste à faire apprendre des modèles à partir des données. Je l’utilise pour la prédiction, la classification et l’analyse.",
				PyTorch: "Un framework flexible et intuitif, parfait pour expérimenter et prototyper rapidement des modèles IA.",
				TensorFlow: "Un framework complet et optimisé pour la production. Idéal pour les projets IA à grande échelle.",
				"Scikit-learn":
					"Une bibliothèque simple et fiable pour les algorithmes classiques de machine learning. Parfaite pour tester et itérer rapidement.",
				Keras: "Une interface intuitive au-dessus de TensorFlow qui facilite le prototypage rapide en deep learning.",
				NumPy: "Le socle du calcul scientifique en Python. Je l’utilise pour toutes les manipulations numériques et le traitement de données.",
				ChromaDB: "Une base vectorielle moderne pour la recherche sémantique et la mémoire d’IA. Idéale pour les applications contextuelles.",
				Pinecone: "Une solution cloud rapide et scalable pour gérer les embeddings. Simple à intégrer, parfaite pour la production.",

				// Formation
				Bootcamp: "Une expérience d’apprentissage intense et concrète. On pratique dès le premier jour et on progresse vite.",
				Mentorat: "Écouter, guider, faire grandir. J’aide les profils à trouver leur autonomie plutôt que de leur tracer le chemin.",
				Management: "Manager, c’est donner du cadre sans brider. Clarté, coordination et confiance font la différence.",
				Passion: "Ce qui me pousse à apprendre, créer et transmettre. La curiosité reste mon moteur principal.",
				Debug: "Résoudre un bug, c’est comprendre le système. C’est une démarche logique et méthodique que j’apprécie.",
				Veille: "Rester à jour fait partie du métier. J’observe, je teste et j’intègre ce qui améliore ma pratique.",
			},
		},
		education: {
			title: "Diplômes & Certifications",
			subtitle: "De l'hôtellerie et la finance à l'IA : un parcours de reconversion guidé par la curiosité et l'apprentissage continu",
			badges: {
				degree: "Diplôme",
				certification: "Certification",
			},
			actions: {
				view: "Voir le document",
				download: "Télécharger le PDF",
			},
			stats: {
				degrees: "Diplômes",
				certifications: "Certifications",
				years: "Années d'études",
				domains: "Domaines",
			},
			items: {
				aiEngineer: {
					title: "Certification Ingénieur IA",
					institution: "Ironhack",
					description: "Spécialisation en machine learning, deep learning, NLP et déploiement d'applications IA avec Python, PyTorch et LangChain",
				},
				rncp: {
					title: "RNCP 6 - Concepteur-Développeur d'Appplications Web & Mobiles",
					institution: "La Capsule - Tech Bootcamp",
					description: "Certification professionnelle niveau Bac+3/4 en développement web, mobile et transformation digitale",
				},
				mscSkema: {
					title: "MSc Corporate Financial Management",
					institution: "SKEMA Business School",
					description: "Master spécialisé en finance d'entreprise, analyse financière, stratégie d'investissement et contrôle de gestion",
				},
				desmiSkema: {
					title: "DESMI Management International",
					institution: "SKEMA Business School",
					description: "Diplôme d'études supérieures en management international, stratégie globale et développement commercial",
				},
				bbaGlion: {
					title: "BBA (Hons.) Management Hôtelier International",
					institution: "Glion Institute of Higher Education",
					description: "Bachelor avec mention en management hôtelier, développement immobilier hôtelier et finance hospitality",
				},
			},
		},
		interests: {
			title: "Mes Passions",
			description: "Au-delà du code, ce qui m'anime",
			quote: "De la finance à l'IA, chaque passion nourrit ma vision : comprendre, créer et transmettre avec authenticité.",
			items: {
				kendo: {
					title: "Kendo",
					description: "Art martial traditionnel japonais, discipline et dépassement de soi",
				},
				rugby: {
					title: "Rugby & Équipe de France",
					description: "Passion pour l'ovalie et supporter inconditionnel du XV de France",
				},
				anime: {
					title: "Animes & Mangas",
					description: "Fan de culture japonaise et de storytelling visuel",
				},
				gaming: {
					title: "Jeux Vidéo",
					description: "Aventures narratives et mondes immersifs",
				},
				theater: {
					title: "Théâtre",
					description: "Expression artistique et travail sur la présence scénique",
				},
				food: {
					title: "Gastronomie",
					description: "Découverte culinaire et art de vivre",
				},
			},
			detailedDescriptions: {
				kendo:
					"Pratiquant de kendo depuis plusieurs années, cet art martial japonais m'enseigne bien plus que des techniques de sabre. C'est une école de discipline mentale, de respect et de dépassement de soi. Chaque entraînement est une méditation en mouvement qui forge le caractère et la persévérance - des qualités essentielles dans le développement logiciel et la résolution de problèmes complexes.",
				rugby:
					"Passionné de rugby depuis l'enfance, je suis un supporter fervent de l'équipe de France. Chaque match est un moment d'émotion pure où se mélangent stratégie collective, dépassement individuel et esprit d'équipe. Ce sport m'enseigne des valeurs essentielles : la solidarité, la persévérance face à l'adversité et l'importance de chaque rôle dans la réussite collective - des principes que j'applique naturellement dans mes projets techniques et mes équipes.",
				anime:
					"Grand amateur d'animes et mangas, j'apprécie particulièrement les œuvres qui explorent des thématiques profondes : science-fiction, cyberpunk, développement personnel. Cette passion pour la culture japonaise nourrit ma créativité et ma compréhension de l'esthétique, influençant même mes choix de design d'interfaces et d'expérience utilisateur.",
				gaming:
					"Joueur passionné, je privilégie les aventures narratives riches et les mondes immersifs qui racontent des histoires captivantes. Cette passion développe ma capacité d'analyse, ma patience face aux défis complexes et ma compréhension des mécaniques d'engagement - des compétences directement transférables en développement d'applications et gamification.",
				theater:
					"Le théâtre m'a appris l'importance de la présence, de la communication claire et de la gestion du stress. Ces compétences sont précieuses lors de mes formations en bootcamp, présentations techniques ou démonstrations client. Sur scène comme en présentation, il faut savoir capter l'attention et transmettre son message avec impact.",
				food: "La gastronomie est pour moi un art de vivre qui cultive la patience, la précision et l'attention aux détails. Comme en programmation, cuisiner demande de suivre des processus, d'ajuster selon les résultats et de viser l'excellence. Cette passion développe également ma créativité et mon sens de l'expérimentation, toujours utiles pour innover techniquement.",
			},
		},
		projects: {
			title: "Mes Projets et Liens",
			description: "Quelques plateformes, outils et expériences techniques que j'ai développés.",
			status: {
				active: "Actif",
				paused: "En pause",
				wip: "En cours de dev",
			},
			techStack: "Stack Technique :",
			moreProjects: {
				title: "Plus de projets à venir",
				description:
					"Je travaille constamment sur de nouveaux projets et expérimentations. Restez connecté pour découvrir mes prochaines créations !",
			},
			cta: {
				site: "Voir le site",
				"repo-front": "Front",
				"repo-back": "Back",
				repo: "Microservice",
				repoMono: "Code source",
				// repoInfra: "Infrastructure",
			},
			items: [
				{
					slug: "heirloom",
					name: "Heirloom",
					description:
						"Application open source (AGPL-3.0) et self-hosted de création d'arbres généalogiques. Vos données de famille restent sur votre machine, sans cloud propriétaire. Import/export GEDCOM 5.5.1, rendu d'arbre automatique et assistant IA intégré.",
					stack: ["NestJS", "GraphQL", "Prisma", "PostgreSQL", "React", "Vite", "Astro", "Docker", "Ansible"],
					links: {
						site: "https://heirloom-app.com",
						repoMono: "https://github.com/Jyok1m/heirloom",
					},
					status: "En cours de dev",
				},
				{
					slug: "odyssai",
					name: "Odyssai",
					description:
						"Jeu de rôle narratif propulsé par l’IA où le joueur devient le héros de sa propre histoire. Créez des mondes, façonnez des personnages et faites évoluer le scénario au fil de conversations naturelles.",
					stack: ["NestJS", "React", "LangChain", "MongoDB", "Docker", "Docker Compose", "ChromaDB", "OpenAI"],
					links: {
						// site: "https://odyssai.app/",
						"repo-front": "https://gitlab.com/odyssai/web",
						"repo-back": "https://gitlab.com/odyssai/odyssai-backend",
						// repoInfra: "https://gitlab.com/odyssai/odyssai-infra",
					},
					status: "En cours de dev",
				},
				{
					slug: "neoney",
					name: "Neoney",
					description:
						"Réseau social pensé pour les néo-entrepreneurs, conçu par des entrepreneurs pour des entrepreneurs. Il facilite la mise en relation et la génération de business entre membres.",
					stack: ["Next.js", "Express", "Tailwind", "MongoDB", "Vercel", "Northflank"],
					links: {
						site: "https://www.neoney.co/",
					},
					status: "Actif",
				},
				{
					slug: "ipseis",
					name: "Ipseis",
					description:
						"Plateforme de formations actives, immersives et sur mesure destinées aux professionnels de la santé, du social et du médico-social.",
					stack: ["Next.js", "Express", "Docker", "Tailwind", "Fontawesome", "MongoDB", "Vercel"],
					links: {
						site: "https://www.ipseis.fr",
						"repo-front": "https://github.com/Jyok1m/ipseis",
						"repo-back": "https://github.com/Jyok1m/ipseis-backend",
					},
					status: "Actif",
				},
				{
					slug: "generation_sauveteurs",
					name: "Génération Sauveteur",
					description:
						"Jeu éducatif conçu par des professionnels du sauvetage pour apprendre la sécurité aquatique et le respect de l'environnement tout en s'amusant.",
					stack: ["React", "Symfony", "Nginx", "OVH", "MariaDB"],
					links: {
						site: "https://app.generationsauveteur.fr/",
					},
					status: "Actif",
				},
				{
					slug: "ai-wedder",
					name: "AI Wedder",
					description:
						"Plateforme d'analyse des avis de prestataires de mariage. L'IA évalue la qualité et le sentiment pour aider les couples à choisir en confiance.",
					stack: ["Next.js", "FastAPI", "MongoDB", "HuggingFace", "Playwright", "OpenAI", "CamemBERT"],
					links: {
						site: "https://ai-wedder-frontend.vercel.app/",
						"repo-front": "https://github.com/Jyok1m/ai-wedder-frontend",
						"repo-back": "https://github.com/Jyok1m/ai-wedder-backend",
						repo: "https://github.com/Jyok1m/ai-wedder-microservice",
					},
					status: "En pause",
				},
			],
		},
		pricing: {
			title: "Tarifs & Prestations",
			subtitle: "Quelques repères pour situer un projet, du petit site jusqu'à une architecture plus complète. Les fourchettes sont indicatives, le tarif final dépend du cadrage.",
			tjm: "TJM : 450 à 650 € par jour",
			tjmNote: "Fourchette selon la complexité, la durée et l'urgence",
			cta: "Demander un devis",
			forWhom: {
				title: "Pour qui ?",
				subtitle: "Quelques exemples concrets de projets que j'accompagne au quotidien.",
				items: [
					{
						icon: "bowl-food",
						title: "Restaurants et cafés",
						description:
							"Menu en ligne, prise de réservation et galerie photo. Vos clients trouvent vos horaires et votre carte en deux clics.",
					},
					{
						icon: "scissors",
						title: "Coiffeurs et instituts de beauté",
						description:
							"Prise de rendez-vous en ligne disponible 24 heures sur 24. Moins d'appels, plus de créneaux remplis.",
					},
					{
						icon: "shop",
						title: "Boutiques et commerces",
						description:
							"Petite boutique en ligne avec paiement sécurisé, ou simple vitrine bien soignée pour mettre en avant vos produits.",
					},
					{
						icon: "heart",
						title: "Associations",
						description:
							"Site de présentation, formulaire d'adhésion et page de dons en ligne. Une vraie présence professionnelle sans budget démesuré.",
					},
					{
						icon: "wrench",
						title: "Artisans",
						description:
							"Plombiers, électriciens, jardiniers : un site clair avec vos prestations, votre zone d'intervention et un formulaire de demande de devis.",
					},
					{
						icon: "briefcase",
						title: "Indépendants et professions libérales",
						description:
							"Avocats, consultants, kinésithérapeutes : un site sobre et professionnel qui inspire confiance dès la première visite.",
					},
				],
			},
			plans: {
				essentiel: {
					name: "Essentiel",
					emoji: "🟢",
					price: "3 000 à 5 000 €",
					target: "Commerces, artisans, associations et indépendants",
					features: [
						"Site moderne, rapide et lisible sur mobile, tablette et ordinateur",
						"Hébergement et certificat de sécurité inclus",
						"Nom de domaine offert la première année",
						"Page de contact, prise de rendez-vous en ligne ou catalogue selon vos besoins",
						"Optimisation de base pour être visible sur Google",
					],
					maintenance: "Maintenance optionnelle : 150 € par mois",
					maintenanceDetails: "Mises à jour, sauvegardes hebdomadaires, surveillance technique et réponse par email sous 48 heures",
				},
				professionnel: {
					name: "Professionnel",
					emoji: "🔵",
					price: "8 000 à 15 000 €",
					target: "PME, startups, agences",
					includes: "Tout Essentiel inclus",
					features: [
						"Environnements séparés pour le développement, les tests et la production",
						"Espace d'administration sur mesure",
						"Intégrations avec vos outils existants (Stripe, connexion unique, emailing)",
						"Tests automatisés et déploiements continus",
						"Surveillance des logs, des métriques et des alertes",
					],
					maintenance: "Maintenance recommandée : 300 € par mois",
					maintenanceDetails: "Sauvegardes quotidiennes, surveillance 24h sur 24, support sous 24 heures, mises à jour de sécurité et rapport mensuel",
				},
				surmesure: {
					name: "Sur-mesure / Enterprise",
					emoji: "🟣",
					price: "15 000 à 40 000 € et plus",
					target: "PME établies, scale-ups, entreprises réglementées",
					includes: "Tout Professionnel inclus",
					features: [
						"Hébergement dédié (OVH, AWS, GCP ou Azure au choix)",
						"Architecture en microservices",
						"Audit de sécurité complet selon le référentiel OWASP",
						"DevSecOps, haute disponibilité et scalabilité horizontale",
						"Documentation technique exhaustive",
					],
					maintenance: "Maintenance sur-mesure : à partir de 500 € par mois",
					maintenanceDetails: "Engagement de service négociable selon vos besoins",
				},
			},
			alacarte: {
				title: "Prestations à la carte",
				items: [
					{ name: "Audit de sécurité (OWASP)", price: "1 500 à 3 000 €" },
					{ name: "Audit fonctionnel / technique", price: "1 000 à 2 500 €" },
					{ name: "Conteneurisation d'un existant", price: "1 500 à 4 000 €" },
					{ name: "Migration cloud (AWS / GCP / Azure)", price: "5 000 à 20 000 €" },
					{ name: "Mise en place CI/CD complet", price: "2 000 à 6 000 €" },
					{ name: "Intégration IA / RAG / chatbot", price: "3 000 à 12 000 €" },
					{ name: "Formation / transfert de compétences", price: "500 à 800 € par jour" },
					{ name: "Intervention urgente sous 48 heures", price: "TJM majoré de 50 pour cent" },
				],
			},
			transparency: {
				title: "Transparence",
				text: "Les formules incluent l'hébergement, la gestion du nom de domaine et l'infrastructure. Un rapport mensuel est partagé pour faire le point sur l'état de l'application.",
			},
		},
		contact: {
			title: "Contactez-moi",
			description: "Ouvert aux échanges autour de nouveaux projets ou collaborations",
			connectTitle: "Connectons-nous",
			availability: {
				status: "Disponible pour de nouveaux projets",
				description: "Ouvert aux opportunités en Cloud/DevOps, Fullstack, IA et formations.",
			},
			formTitle: "Envoyez-moi un message",
			contactMethods: {
				email: {
					label: "Email",
					description: "joachim.jasmin-dev@proton.me",
				},
				linkedin: {
					label: "LinkedIn",
					description: "Réseau Professionnel",
				},
				github: {
					label: "GitHub",
					description: "Dépôt de Code",
				},
				gitlab: {
					label: "GitLab",
					description: "Dépôt Git",
				},
			},
		},
	},
	en: {
		common: {
			loading: "Loading...",
			error: "Error",
			download: "Download",
			close: "Close",
			view: "View",
		},
		pdf: {
			downloadTitle: "Download PDF",
			loading: "Loading document...",
			error: "Error loading PDF",
			downloadButton: "Download file",
		},
		footer: {
			copyright: "© 2025 Joachim Jasmin.",
		},
		nav: {
			home: "Home",
			about: "About",
			skills: "Skills",
			education: "Education",
			interests: "Interests",
			projects: "Projects & Links",
			pricing: "Pricing",
			contact: "Contact",
		},
		hero: {
			title: "Cloud, DevOps and AI freelancer. Tech teacher based in Paris.",
			subtitle:
				"Former finance professional who moved into tech. I help shops, craftspeople, nonprofits and small businesses with their websites, applications and cloud infrastructure. I take care of the full project, from design and development to deployment and maintenance.",
			ctaPrimary: "View my projects",
			ctaSecondary: "Contact me",
			downloadCV: "Download CV",
		},
		about: {
			title: "About me",
			description:
				"A multi-step journey: corporate finance and international hospitality, then a shift into development, DevOps and AI. I try to bring something useful from each of these worlds to the projects I work on today.",
			content:
				"After studying hospitality management (Glion) and finance (SKEMA), I moved into fullstack development, then gradually toward DevOps and AI engineering. I now work with SMBs, startups and nonprofits on Cloud infrastructure (Terraform, AWS, Kubernetes), React/Next.js and Node.js applications, and AI integrations (LangChain, OpenAI, RAG). I also teach in bootcamps. I try to keep things simple: understand the need, propose a suitable solution, and avoid over-building.",
		},
		skills: {
			title: "Skills",
			description: "A range of technologies and skills for complete solutions",
			categories: {
				cloud: {
					title: "Cloud & DevOps",
					skills: [
						"AWS",
						"Docker",
						"Kubernetes",
						"Terraform",
						"Ansible",
						"Traefik",
						"CI/CD",
						"Jenkins",
						"GitLab CI",
						"Prometheus",
						"Grafana",
						"SonarQube",
						"Cypress",
						"Playwright",
						"Artillery",
					],
				},
				fullstack: {
					title: "Fullstack Development",
					skills: [
						"TypeScript",
						"React",
						"Next.js",
						"Tailwind",
						"React Native",
						"Expo",
						"Node.js",
						"Express",
						"NestJS",
						"Flask",
						"MongoDB",
						"PostgreSQL",
					],
				},
				ai: {
					title: "Artificial Intelligence",
					skills: [
						"Python",
						"NumPy",
						"Scikit-learn",
						"PyTorch",
						"TensorFlow",
						"Keras",
						"ML",
						"FastAPI",
						"OpenAI GPT",
						"LangChain",
						"ChromaDB",
						"Pinecone",
					],
				},
				teaching: {
					title: "Teaching & Pedagogy",
					skills: ["Passion", "Bootcamp", "Mentoring", "Management", "Debug", "Tech watch"],
				},
			},
			techDetails: {
				// About section icons
				"Cloud & DevOps":
					"For me, DevOps is about reducing friction between teams and systems. Automate early, monitor constantly, and improve continuously.",
				"Full-Stack":
					"I like building products end-to-end, from design to data. Understanding the full stack makes everything more coherent and purposeful.",
				AI: "AI fascinates me because it turns raw data into smart, actionable systems. I use it to make tools that think and adapt faster.",
				Teaching: "Teaching is about sharing what I once had to figure out myself. Helping others gain autonomy is what keeps me motivated.",

				// DevOps
				AWS: "A mature and reliable cloud environment that lets me build scalable systems. I appreciate its flexibility and ecosystem depth.",
				Terraform: "Infrastructure as code done right. It brings reproducibility, traceability, and confidence to every deployment.",
				Ansible: "A simple, powerful way to automate server configuration. One command, consistent environments, no surprises.",
				Docker: "Containers make deployment predictable and portable. No more 'it works on my machine' excuses.",
				Traefik:
					"A modern reverse proxy and load balancer that fits perfectly with Docker and Kubernetes. I use it to simplify routing, handle HTTPS, and centralize access control.",
				Kubernetes: "A demanding but essential orchestrator. Once mastered, it handles scaling, recovery, and balancing with precision.",
				"CI/CD": "Automating build, test, and deploy pipelines saves time and reduces stress. Consistency is the real productivity boost.",
				Jenkins: "Old-school but still solid. Reliable when I need a fully customizable automation pipeline.",
				"GitLab CI": "An all-in-one solution for code, CI/CD, and deployment. Simple, integrated, and great for small teams.",
				Prometheus: "My go-to for collecting metrics and detecting issues early. Observability starts here.",
				Grafana: "Visualizing data brings clarity. Dashboards turn metrics into decisions instead of guesswork.",
				SonarQube: "The guardian of clean code. It spots vulnerabilities and technical debt before they become costly.",
				Cypress: "End-to-end testing that feels natural. Fast, visual, and easy to maintain for front-end work.",
				Playwright: "A modern, multi-browser testing tool. Reliable for ensuring consistent UX across all environments.",
				Artillery: "I use it for load and stress testing. Better to break things myself than let users do it first.",

				// Full-stack
				React: "A reliable way to build fast, modular UIs. Components make complex interfaces manageable.",
				"Next.js": "A complete framework that takes React to production level. Great balance between speed, SEO, and structure.",
				TypeScript: "Static typing that prevents simple mistakes. It adds structure and peace of mind to JavaScript projects.",
				"Node.js": "Fast, lightweight, and perfect for responsive APIs. Event-driven design just makes sense for the web.",
				NestJS: "A structured and maintainable backend framework for Node.js. Ideal for long-term projects that need clarity.",
				MongoDB: "A flexible NoSQL database for fast iteration. Perfect when the data model evolves frequently.",
				PostgreSQL: "A solid, reliable relational database. My go-to when data integrity and scalability matter.",
				Express: "Minimal, fast, and to the point. Great for quick APIs without unnecessary layers.",
				"React Native": "Build once, deploy everywhere. I like how it bridges web and mobile without duplication.",
				Expo: "A smooth developer experience for mobile apps. It simplifies builds, testing, and deployment.",
				Flask: "A lightweight Python framework for APIs and prototypes. Simple, fast, and extendable when needed.",
				Tailwind: "A clean, utility-first approach to styling. It keeps design consistent and fast to implement.",

				// AI Engineering
				"OpenAI GPT": "A strong base for text generation, summarization, and conversational tools. Practical and easy to integrate.",
				LangChain: "The missing layer between LLMs, data, and logic. It makes AI actually usable in real workflows.",
				FastAPI: "A fast and type-safe Python framework for APIs. The built-in docs are a huge productivity gain.",
				Python: "My main language for AI and automation. Clear syntax, rich ecosystem, and fast to prototype with.",
				ML: "Teaching systems to recognize patterns and make predictions. A perfect mix of math and experimentation.",
				PyTorch: "Flexible and intuitive for research and prototyping. Great for experimenting quickly with ideas.",
				TensorFlow: "Built for production-scale ML. Stable, optimized, and ready for deployment at scale.",
				"Scikit-learn": "Clean, consistent, and well-documented. My go-to for classical ML algorithms and quick testing.",
				Keras: "A clear and intuitive API for deep learning. Great for fast iteration and experimentation.",
				NumPy: "The foundation of scientific computing in Python. I use it everywhere, from preprocessing to AI.",
				ChromaDB: "A modern vector database for semantic search and memory. Excellent for context-aware AI apps.",
				Pinecone: "A fast and scalable vector database in the cloud. Perfect for production-ready embeddings.",

				// Training & Mentoring
				Bootcamp: "An intense, hands-on learning experience. Real projects, real challenges, real progress.",
				Mentorat: "Mentoring is about listening first. I help others find their path rather than giving them mine.",
				Management: "Good management is about clarity and alignment. Give people context and trust, and they’ll deliver.",
				Passion: "The drive to keep learning and building. Curiosity keeps everything moving forward.",
				Debug: "Solving bugs is understanding systems deeply. It’s part logic, part patience, part satisfaction.",
				Veille: "Staying up to date isn’t optional. Continuous learning keeps my methods sharp and relevant.",
			},
		},
		education: {
			title: "Degrees & Certificates",
			subtitle: "From hospitality and finance to AI: a career transformation journey driven by curiosity and continuous learning",
			badges: {
				degree: "Degree",
				certification: "Certification",
			},
			actions: {
				view: "View document",
				download: "Download PDF",
			},
			stats: {
				degrees: "Degrees",
				certifications: "Certifications",
				years: "Study years",
				domains: "Domains",
			},
			items: {
				aiEngineer: {
					title: "AI Engineer Certification",
					institution: "Ironhack Paris",
					description: "Specialized in machine learning, deep learning, NLP and AI application deployment with Python, PyTorch and LangChain",
				},
				rncp: {
					title: "RNCP 6 - Web & Mobile Developer",
					institution: "La Capsule - Tech Bootcamp",
					description: "Professional certification level Bachelor+3/4 in web, mobile developement and digital transformation",
				},
				mscSkema: {
					title: "MSc Corporate Financial Management",
					institution: "SKEMA Business School",
					description: "Master's degree in corporate finance, financial analysis, investment strategy and management control",
				},
				desmiSkema: {
					title: "DESMI International Management",
					institution: "SKEMA Business School",
					description: "Higher education diploma in international management, global strategy and business development",
				},
				bbaGlion: {
					title: "BBA (Hons.) International Hospitality Management",
					institution: "Glion Institute of Higher Education",
					description: "Bachelor's degree with honors in hospitality management, hotel real estate development and hospitality finance",
				},
			},
		},
		interests: {
			title: "My Interests",
			description: "Beyond code, what drives me",
			quote: "From finance to AI, every passion feeds my vision: understand, create and share with authenticity.",
			items: {
				kendo: {
					title: "Kendo",
					description: "Traditional Japanese martial art, discipline and self-improvement",
				},
				rugby: {
					title: "Rugby & French Team",
					description: "Passion for rugby and unconditional supporter of the French national team",
				},
				anime: {
					title: "Anime & Manga",
					description: "Fan of Japanese culture and visual storytelling",
				},
				gaming: {
					title: "Gaming",
					description: "Narrative adventures and immersive worlds",
				},
				theater: {
					title: "Theater",
					description: "Artistic expression and stage presence work",
				},
				food: {
					title: "Gastronomy",
					description: "Culinary discovery and art of living",
				},
			},
			detailedDescriptions: {
				kendo:
					"Practicing kendo for several years, this Japanese martial art teaches me much more than sword techniques. It's a school of mental discipline, respect and self-improvement. Each training session is a meditation in movement that forges character and perseverance - essential qualities in software development and complex problem solving.",
				rugby:
					"Passionate about rugby since childhood, I'm a fervent supporter of the French national team. Every match is a moment of pure emotion where collective strategy, individual excellence and team spirit merge. This sport teaches me essential values: solidarity, perseverance in the face of adversity and the importance of every role in collective success - principles I naturally apply in my technical projects and teams.",
				anime:
					"Great fan of anime and manga, I particularly appreciate works that explore deep themes: science fiction, cyberpunk, personal development. This passion for Japanese culture nourishes my creativity and understanding of aesthetics, even influencing my interface design and user experience choices.",
				gaming:
					"Passionate gamer, I favor rich narrative adventures and immersive worlds that tell captivating stories. This passion develops my analytical ability, patience with complex challenges and understanding of engagement mechanics - skills directly transferable to application development and gamification.",
				theater:
					"Theater taught me the importance of presence, clear communication and stress management. These skills are valuable during my bootcamp training, technical presentations or client demonstrations. On stage as in presentation, you must know how to capture attention and convey your message with impact.",
				food: "Gastronomy is for me an art of living that cultivates patience, precision and attention to detail. Like in programming, cooking requires following processes, adjusting according to results and aiming for excellence. This passion also develops my creativity and sense of experimentation, always useful for technical innovation.",
			},
		},
		projects: {
			title: "My Projects & Links",
			description: "A few platforms, tools, and technical experiences I've developed.",
			status: {
				active: "Active",
				paused: "Paused",
				wip: "Work in Progress",
			},
			techStack: "Tech Stack:",
			moreProjects: {
				title: "More Projects Coming Soon",
				description: "I'm constantly working on new projects and experiments. Stay tuned to discover what's next!",
			},
			cta: {
				site: "Visit site",
				"repo-front": "Frontend",
				"repo-back": "Backend",
				repo: "Microservice",
				repoMono: "Source code",
				repoInfra: "Infrastructure",
			},
			items: [
				{
					slug: "heirloom",
					name: "Heirloom",
					description:
						"Open-source (AGPL-3.0), self-hosted family tree builder. Your family data stays on your own machine, with no proprietary cloud. GEDCOM 5.5.1 import/export, automatic tree rendering and a built-in AI assistant.",
					stack: ["NestJS", "GraphQL", "Prisma", "PostgreSQL", "React", "Vite", "Astro", "Docker", "Ansible"],
					links: {
						site: "https://heirloom-app.com",
						repoMono: "https://github.com/Jyok1m/heirloom",
					},
					status: "Work in progress",
				},
				{
					slug: "odyssai",
					name: "Odyssai",
					description:
						"AI-powered narrative role-playing game where the player becomes the hero of their own story. Create worlds, shape characters and steer the plot through natural conversations.",
					stack: ["Flask", "Expo", "LangChain", "MongoDB", "Docker", "Docker Compose", "ChromaDB", "OpenAI"],
					links: {
						"repo-front": "https://github.com/Jyok1m/odyssai-app",
						"repo-back": "https://github.com/Jyok1m/odyssai-core",
						// repoInfra: "https://gitlab.com/odyssai/odyssai-infra",
					},
					status: "Work in progress",
				},
				{
					slug: "neoney",
					name: "Neoney",
					description:
						"A social network built for neo-entrepreneurs, made by entrepreneurs for entrepreneurs. It streamlines networking and business generation between members.",
					stack: ["Next.js", "Express", "Tailwind", "MongoDB", "Vercel", "Northflank"],
					links: {
						site: "https://www.neoney.co/",
					},
					status: "Active",
				},
				{
					slug: "ipseis",
					name: "Ipseis",
					description:
						"A platform of active, immersive and tailor-made training programs for professionals in the healthcare, social and medical-social sectors.",
					stack: ["Next.js", "Express", "Docker", "Tailwind", "Fontawesome", "MongoDB", "Vercel"],
					links: {
						site: "https://www.ipseis.fr",
						"repo-front": "https://github.com/Jyok1m/ipseis",
						"repo-back": "https://github.com/Jyok1m/ipseis-backend",
					},
					status: "Active",
				},
				{
					slug: "generation_sauveteurs",
					name: "Génération Sauveteur",
					description:
						"An educational game built by professional rescuers to teach water safety and environmental awareness while having fun.",
					stack: ["React", "Symfony", "Nginx", "OVH", "MariaDB"],
					links: {
						site: "https://app.generationsauveteur.fr/",
					},
					status: "Active",
				},
				{
					slug: "ai-wedder",
					name: "AI Wedder",
					description:
						"A platform that analyzes wedding vendor reviews, using AI to assess quality and sentiment so couples can choose with confidence.",
					stack: ["Next.js", "FastAPI", "MongoDB", "HuggingFace", "Playwright", "OpenAI", "CamemBERT"],
					links: {
						site: "https://ai-wedder-frontend.vercel.app/",
						"repo-front": "https://github.com/Jyok1m/ai-wedder-frontend",
						"repo-back": "https://github.com/Jyok1m/ai-wedder-backend",
						repo: "https://github.com/Jyok1m/ai-wedder-microservice",
					},
					status: "Paused",
				},
			],
		},

		pricing: {
			title: "Pricing & Services",
			subtitle: "A few reference points to help size a project, from small sites to more complete architectures. Ranges are indicative and the final quote always depends on the scope.",
			tjm: "Daily rate: €450 to €650 per day",
			tjmNote: "Range depends on complexity, duration and urgency",
			cta: "Request a quote",
			forWhom: {
				title: "Who is this for?",
				subtitle: "A few real examples of projects I love working on.",
				items: [
					{
						icon: "bowl-food",
						title: "Restaurants and cafés",
						description:
							"Online menu, table booking and photo gallery. Your customers find your opening hours and menu in just two clicks.",
					},
					{
						icon: "scissors",
						title: "Hair salons and beauty studios",
						description:
							"Online booking available 24 hours a day. Fewer phone calls, more filled appointment slots.",
					},
					{
						icon: "shop",
						title: "Shops and retail",
						description:
							"A small online store with secure payment, or a polished showcase website to highlight your products.",
					},
					{
						icon: "heart",
						title: "Nonprofits",
						description:
							"Presentation website, membership form and online donation page. A real professional presence without an oversized budget.",
					},
					{
						icon: "wrench",
						title: "Craftspeople",
						description:
							"Plumbers, electricians, gardeners: a clear website with your services, your coverage area and a quote request form.",
					},
					{
						icon: "briefcase",
						title: "Independents and professionals",
						description:
							"Lawyers, consultants, physiotherapists: a clean, professional website that inspires trust from the first visit.",
					},
				],
			},
			plans: {
				essentiel: {
					name: "Essential",
					emoji: "🟢",
					price: "€3,000 to €5,000",
					target: "Shops, craftspeople, nonprofits and independents",
					features: [
						"Modern, fast website that looks great on mobile, tablet and desktop",
						"Hosting and security certificate included",
						"Domain name offered for the first year",
						"Contact page, online booking or product catalog depending on your needs",
						"Basic search engine optimization so your customers can find you on Google",
					],
					maintenance: "Optional maintenance: €150 per month",
					maintenanceDetails: "Updates, weekly backups, technical monitoring and email support within 48 hours",
				},
				professionnel: {
					name: "Professional",
					emoji: "🔵",
					price: "€8,000 to €15,000",
					target: "SMBs, startups, agencies",
					includes: "Everything in Essential included",
					features: [
						"Separate environments for development, testing and production",
						"Custom admin back-office",
						"Integrations with your existing tools (Stripe, single sign-on, mailing)",
						"Automated tests and continuous deployment",
						"Monitoring of logs, metrics and alerts",
					],
					maintenance: "Recommended maintenance: €300 per month",
					maintenanceDetails: "Daily backups, monitoring 24 hours a day, support within 24 hours, security updates and monthly report",
				},
				surmesure: {
					name: "Custom / Enterprise",
					emoji: "🟣",
					price: "€15,000 to €40,000 and above",
					target: "Established SMBs, scale-ups, regulated companies",
					includes: "Everything in Professional included",
					features: [
						"Dedicated hosting (OVH, AWS, GCP or Azure of your choice)",
						"Microservices architecture",
						"Full security audit based on the OWASP framework",
						"DevSecOps, high availability and horizontal scalability",
						"Comprehensive technical documentation",
					],
					maintenance: "Custom maintenance: from €500 per month",
					maintenanceDetails: "Service level agreement negotiable based on your needs",
				},
			},
			alacarte: {
				title: "À la carte services",
				items: [
					{ name: "Security audit (OWASP)", price: "€1,500 to €3,000" },
					{ name: "Functional / technical audit", price: "€1,000 to €2,500" },
					{ name: "Containerization of existing app", price: "€1,500 to €4,000" },
					{ name: "Cloud migration (AWS / GCP / Azure)", price: "€5,000 to €20,000" },
					{ name: "Full CI/CD setup", price: "€2,000 to €6,000" },
					{ name: "AI / RAG / chatbot integration", price: "€3,000 to €12,000" },
					{ name: "Training / knowledge transfer", price: "€500 to €800 per day" },
					{ name: "Emergency intervention within 48 hours", price: "Daily rate plus 50 percent" },
				],
			},
			transparency: {
				title: "Transparency",
				text: "Packages include hosting, domain name management and infrastructure. A monthly report is shared to give visibility on the application's status.",
			},
		},
		contact: {
			title: "Contact me",
			description: "Open to conversations around new projects or collaborations",
			connectTitle: "Let's connect",
			availability: {
				status: "Available for new projects",
				description: "Open to opportunities in Cloud/DevOps, Fullstack, AI and training.",
			},
			formTitle: "Send me a message",
			contactMethods: {
				email: {
					label: "Email",
					description: "joachim.jasmin-dev@proton.me",
				},
				linkedin: {
					label: "LinkedIn",
					description: "Professional Network",
				},
				github: {
					label: "GitHub",
					description: "Code Repository",
				},
				gitlab: {
					label: "GitLab",
					description: "Git Repository",
				},
			},
		},
	},
};

export type LocaleKey = keyof typeof locales;
export type LocaleContent = typeof locales.fr;
