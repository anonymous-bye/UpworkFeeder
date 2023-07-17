
window.signupInfo = {
	email: `cvc${emailNumber}@metagon.online`,
	// email: `dvc${emailNumber}@valv.sbs`,
	password: "qweQWE123!@#`",
	category: "blockchain-2",
    emailUsername: "admin@metagon.online",
	// emailUsername: "valloonupwork@valv.sbs",
	emailPassword: "qweQWE123!@#`",
	firstName: "Jukka",
	lastName: "Ristila",
	country: "Finland",
	photoFiilename: "C-blockchain-2.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
	t.profileTitle = "Web & Blockchain Developer | Solidity | Ethereum | Rust | React | Web3";
	t.address = {
		"street": "Koskikatu 30",
		"state": "Uusimaa",
		"city": "Espoo",
		"zip": "",
		"additionalInfo": null,
		"country": "Finland",
		"address": null
	};
	t.phoneNumber = "412######".replace(/#/g, () => Math.floor(Math.random() * 10));
	t.rate = 30;
	t.englishLevel = "natl";
	t.employmentHistory = [
		{
			"companyName": "DDGCorp.ru",
			"jobTitle": "Blockchain Developer",
			"role": null,
			"city": null,
			"startMonth": "01",
			"endMonth": "07",
			"isCurrentPosition": true,
			"country": "ARG",
			"startYear": "2019",
			"endYear": "2022",
			"description": "Developing complex web/mobile solutions. Common stack: Java EE backend (Spring, Hibernate, PostgreSQL) and Angular/Native mobile frontend.\nDeveloping IoT platform for cellar operator. Stack: Java EE backend (Spring, Akka, Kafka, PostgreSQL), Android based IoT devices with ZigBee interface.\nCustom development for Raspberry Pi on Java.\nBlockchain development on MyWish.Io project.",
			"index": -1
		},
		{
			"companyName": "ACOM Digital",
			"jobTitle": "Full-stack developer",
			"role": null,
			"city": null,
			"startMonth": "01",
			"endMonth": "12",
			"isCurrentPosition": false,
			"country": "UKR",
			"startYear": "2016",
			"endYear": "2018",
			"description": "Full Stack development with React, Vue and Node",
			"index": 1
		},
		{
			"companyName": "CodeTiburon",
			"jobTitle": "Full-stack developer",
			"role": null,
			"city": null,
			"startMonth": "04",
			"endMonth": "08",
			"isCurrentPosition": false,
			"country": "UKR",
			"startYear": "2013",
			"endYear": "2015",
			"description": "",
			"index": -1
		}
	];
	t.educations = [
		{
			"index": 0,
			"institutionName": "University of Tampere",
			"areaOfStudy": "Computer science",
			"degree": "Bachelor of Computer Science (BCompSc)",
			"dateStartedYear": {
				"name": "2009",
				"uid": "2009",
				"value": "2009"
			},
			"standardizedInstitutionUid": null,
			"standardizedDegreeUid": "1156532285526163456",
			"standardizedAreaOfStudyUid": "482305184288899086",
			"dateEndedYear": {
				"name": "2012",
				"uid": "2012",
				"value": "2012"
			}
		},
		{
			"index": 1,
			"institutionName": "University of Rostov-on-Don",
			"areaOfStudy": "Computer science",
			"degree": "Master of Information Technology (MIT)",
			"dateStartedYear": {
				"name": "2013",
				"uid": "2013",
				"value": "2013"
			},
			"standardizedInstitutionUid": null,
			"standardizedDegreeUid": "1156532281762140160",
			"standardizedAreaOfStudyUid": "482305184288899086",
			"dateEndedYear": {
				"name": "2016",
				"uid": "2016",
				"value": "2016"
			}
		}
	];

	t.generalSkills = [
		{
			"uid": "1031626773660942336",
			"ontologyId": "upwork:reactjs",
			"prefLabel": "React",
			"legacySkillNid": null
		},
		{
			"uid": "1031626720351338496",
			"ontologyId": "upwork:blockchain",
			"prefLabel": "Blockchain",
			"legacySkillNid": null
		},
		{
			"uid": "996364628025274383",
			"ontologyId": "upwork:javascript",
			"prefLabel": "JavaScript",
			"legacySkillNid": null
		},
		{
			"uid": "1031626781583982592",
			"ontologyId": "upwork:solidity",
			"prefLabel": "Solidity",
			"legacySkillNid": null
		},
		{
			"uid": "1031626780715761664",
			"ontologyId": "upwork:smartcontracts",
			"prefLabel": "Smart Contract",
			"legacySkillNid": null
		},
		{
			"uid": "1031626775997169664",
			"ontologyId": "upwork:rust",
			"prefLabel": "Rust",
			"parentSkillUid": null
		},
		{
			"uid": "1484275235794112512",
			"ontologyId": "kg:50-25679",
			"prefLabel": "NFT",
			"parentSkillUid": null
		},
		{
			"uid": "1504884888488116224",
			"skill": "cryptocurrency-blockchain",
			"prettyName": "Blockchain, NFT & Cryptocurrency",
			"prefLabel": "Blockchain, NFT & Cryptocurrency",
			"label": "Blockchain, NFT & Cryptocurrency"
		},
		{
			"uid": "1225465939899944960",
			"skill": "ethereum-platform",
			"prettyName": "Ethereum",
			"prefLabel": "Ethereum",
			"label": "Ethereum"
		},
		{
			"uid": "1549040137275314176",
			"skill": "web3",
			"prettyName": "Web3",
			"prefLabel": "Web3",
			"label": "Web3"
		},
		{
			"uid": "1549040408458039296",
			"skill": "defi",
			"prettyName": "DeFi",
			"prefLabel": "DeFi",
			"label": "DeFi"
		},
		{
			"uid": "1031626794477273088",
			"skill": "vue.js",
			"prettyName": "Vue.js",
			"prefLabel": "Vue.js",
			"label": "Vue.js"
		},
		{
			"uid": "996364628025274389",
			"skill": "typescript",
			"prettyName": "TypeScript",
			"prefLabel": "TypeScript",
			"label": "TypeScript"
		},
		{
			"uid": "1031626719797690368",
			"skill": "bitcoin",
			"prettyName": "Bitcoin",
			"prefLabel": "Bitcoin",
			"label": "Bitcoin"
		},
		{
			"uid": "1031626794825400320",
			"skill": "web3.js",
			"prettyName": "web3.js",
			"prefLabel": "web3.js",
			"label": "web3.js"
		}
	];
	t.multipleSpecialities = [
		{
			"uid": "531770282584862733",
			"name": "Web Development",
			"slug": null
		},
		{
			"uid": "531770282589057033",
			"name": "Database Management & Administration",
			"slug": null
		},
		{
			"uid": "531770282589057036",
			"name": "Information Security & Compliance",
			"slug": null
		},
		{
			"uid": "531770282589057035",
			"name": "Network & System Administration",
			"slug": null
		},
		{
			"uid": "1517518458442309632",
			"name": "Blockchain, NFT & Cryptocurrency",
			"slug": null
		},
		{
			"uid": "531770282589057025",
			"name": "Desktop Application Development",
			"slug": null
		},
		{
			"uid": "531770282589057026",
			"name": "Ecommerce Development",
			"slug": null
		},
		{
			"uid": "531770282589057032",
			"name": "Other - Software Development",
			"slug": null
		},
		{
			"uid": "531770282589057028",
			"name": "Scripts & Utilities",
			"slug": null
		}
	];

	t.profileOverview = `I'm a Full-Stack developer for building Website & Blockchain.
Over 6 years, I've been working for developing full-stack project.

In recent years, I worked with Blockchain technology.
- Cryptocurrency Smart-Contracts (Solidity, Haskell(Plutus), Rust(Solana), Python(Algorand))
- NFT, defi games, swap, bridge, farms and staking, Web3,
- Crypto Bot (Pancakeswap, Uniswap, Binance, Bybit, etc..)
- Metamask, Sollet, Phantom and so on for Wallet

For front-end UI development, React.js(Next.js)/Vue.js(Nuxt.js)/Angular 2~9 would be great option for its functionalities supported from third party library & node packages.
I'm an expert for HTML, CSS(TailwindCSS, PostCSS, Bootstrap) and Javascript.
For back-end development, Node.js/Express or Java Spring Boot, PHP(Laravel, Codeigniter), AWS(S3, Amplify, Lambda), Google firebase would be used to create Restful API service and DB management with MySQL or NoSQL MongoDB.
I can integrate necessary services for building website through back-end development in the type of Restful API.

Following techniques I own for building website & mobile applications:
- React.js(Next.js), Vue.js(Nuxt.js), Angular 2~10, involving PWA & SPA &
SSR
- Node.js/Express , Socket.io, Restful API
- DB management with MySQL & MongoDB
- Real Time Chat integration, WebRTC, Socket.IO,
- AWS Amplify, S3, Lambda, Cognito, Graphql, Dynamodb, Google firebase

Please feel free to contact me, it will be my pleasure to help you.
Best regards.

#` + (Math.floor(Math.random() * 90000000) + 10000000);
	return t;
}
