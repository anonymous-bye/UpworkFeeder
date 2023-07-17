
window.signupInfo = {
    email: `cvb${emailNumber}@metagon.online`,
    // email: `dvb${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "blockchain",
    emailUsername: "admin@metagon.online",
    // emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Fresco",
    lastName: "Marcelo",
    country: "Argentina",
    photoFiilename: "B-blockchain.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Blockchain Full-Stack | Web3 | Smart Contract | Solidity | Rust | NFT";
    t.address = {
        "street": "Gaona 18106",
        "state": "B",
        "city": "Lomas de Zamora",
        "zip": "",
        "additionalInfo": null,
        "country": "Argentina",
        "address": null
    };
    t.phoneNumber = "1142######".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 25;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "Upwork",
            "jobTitle": "Freelance",
            "role": null,
            "city": null,
            "startMonth": "05",
            "endMonth": null,
            "isCurrentPosition": true,
            "country": "ARG",
            "startYear": "2022",
            "endYear": null,
            "description": "Blockchain, Solidity, Rust, Smart Contract, NFT, Web3,, React, Vue, Node, Javascript, Typescript",
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
            "startYear": "2019",
            "endYear": "2021",
            "description": "Node, React, Blockchain, Solidity, Smart Contract, GraphQL, Oracle Database, AWS, Docker etc.",
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
            "startYear": "2017",
            "endYear": "2018",
            "description": "Node, Vue.js, Heroku, Microsoft SQL Server etc.",
            "index": -1
        }
    ];
    t.educations = [
        {
            "index": -1,
            "institutionName": "Zaporizhzhya National Technical University",
            "areaOfStudy": "Computer science",
            "degree": "Bachelor of Computer Science (BCompSc)",
            "dateStartedYear": {
                "name": "2009",
                "uid": "2009",
                "value": "2009"
            },
            "standardizedInstitutionUid": "480116276260143122",
            "standardizedDegreeUid": "1156532285526163456",
            "standardizedAreaOfStudyUid": "482305184288899086",
            "dateEndedYear": {
                "name": "2012",
                "uid": "2012",
                "value": "2012"
            }
        },
        {
            "index": -1,
            "institutionName": "Kharkiv National University of Radioelectronics",
            "areaOfStudy": "Computer science",
            "degree": "Master of Information Technology (MIT)",
            "dateStartedYear": {
                "name": "2013",
                "uid": "2013",
                "value": "2013"
            },
            "standardizedInstitutionUid": "480116275920404487",
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
            "uid": "1031626762999021568",
            "ontologyId": "upwork:nodejs",
            "prefLabel": "Node.js",
            "legacySkillNid": null
        },
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
            "uid": "1031626762688643072",
            "skill": "next.js",
            "prettyName": "Next.js",
            "prefLabel": "Next.js",
            "label": "Next.js"
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

    t.profileOverview = `As a software engineer with 4 years of experience, I have had the opportunity to work as both a freelancer and a full-time employee. My primary expertise lies in back-end and cloud development, but I also have a strong foundation in front-end development. I am constantly seeking to expand my skills and knowledge, and I am particularly interested in the emerging field of web3 technology. With a strong work ethic and a passion for problem-solving, I am confident in my ability to deliver high-quality, reliable software solutions to my clients and teams.

Over the years I have worked on multiple platforms and have done over 40 projects related to smart contract, cryptocurrency and blockchain analysis, and digital marketing.


Expertise in Blockchain:
- Web3.js, Bitcoin, Ethereum, Binance Smart Chain, Solana, Smart contracts (Solidity, Rust), NFTs, OpenSea.js, Seaport contract, Tron, trading bots etc.
- Node.js, React/Next/Gatsby, MongoDB, GraphQL, AWS, Firebase etc.
- SEO & Keyword research

Expertise in Web Development:
- DApp development
- CeFi/DeFi Market Place
- NFT Market Place
- Token Development(ERC20,ERC721,ERC1155,BSC,TRC20,Solana,Near,Cosmos)
- Node/React/Web3 development

I value elegant and compelling work and if you are looking for something similar with a fast and efficient delivery rate then you would love working with me.

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
