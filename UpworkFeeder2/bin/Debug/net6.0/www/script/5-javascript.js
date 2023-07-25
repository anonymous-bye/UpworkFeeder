
window.signupInfo = {
    email: `dv${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "javascript",
    emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Marcos",
    lastName: "Oliveira",
    country: "Brazil",
    photoFiilename: "5-javascript.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Full-Stack | Javascript | Node | React | Angular | Vue | Web3";
    t.address = {
        "street": "Rua Belo Oriente 665",
        "state": "SP",
        "city": "Sao Paulo",
        "zip": "15505",
        "additionalInfo": null,
        "country": "Brazil",
        "address": null
    };
    t.phoneNumber = "113#######".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 15;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "Divisio",
            "jobTitle": "Senior Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "10",
            "endMonth": "12",
            "isCurrentPosition": false,
            "country": "BRA",
            "startYear": "2019",
            "endYear": "2022",
            "description": "As a senior software engineer, I designed solutions with React/Vue/Angular, JavaScript/Typescript, Node, and AWS. Documented applications and created user guides. Led projects globally and collaborated with the CEO to revamp tech stack and boost productivity. As CTO, revolutionized technology, processes, and team management, ensuring exceptional outcomes.",
            "index": 0
        },
        {
            "companyName": "HBSIS",
            "jobTitle": "Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "04",
            "endMonth": "11",
            "isCurrentPosition": false,
            "country": "BRA",
            "startYear": "2016",
            "endYear": "2018",
            "description": "I optimized fleet performance with advanced reporting and coached junior developers. Led front-end guild for knowledge-sharing and organized workshops. Troubleshoot software issues, identified root causes and devised solutions. Developed an intuitive online platform for efficient truck fleet logistics management using C#, JavaScript/Typescript, .Net, React, and Android/Java.",
            "index": 1
        },
        {
            "companyName": "Teclogica",
            "jobTitle": "Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "04",
            "endMonth": "10",
            "isCurrentPosition": false,
            "country": "BRA",
            "startYear": "2013",
            "endYear": "2015",
            "description": "Worked as a software engineer focused on Java Web, with technologies JAVA, JSF, JPA and Hibernate.",
            "index": 2
        }
    ];
    t.educations = [
        {
            "institutionName": "Universidade de São Paulo",
            "standardizedInstitutionUid": "480116275857489921",
            "areaOfStudy": "Computer engineering",
            "standardizedAreaOfStudyUid": "482305184288899085",
            "degree": "Bachelor of Science in Information Technology",
            "standardizedDegreeUid": "1156532270391382016",
            "dateStartedYear": {
                "name": "2005",
                "uid": "2005",
                "value": "2005"
            },
            "dateEndedYear": {
                "name": "2008",
                "uid": "2008",
                "value": "2008"
            },
            "index": 0
        },
        {
            "institutionName": "McMaster University",
            "standardizedInstitutionUid": "480116275781992456",
            "areaOfStudy": "Computer science",
            "standardizedAreaOfStudyUid": "482305184288899086",
            "degree": "Master of Science in Information Technology (MSc(IT))",
            "standardizedDegreeUid": "1156532279863853056",
            "dateStartedYear": {
                "name": "2009",
                "uid": "2009",
                "value": "2009"
            },
            "dateEndedYear": {
                "name": "2012",
                "uid": "2012",
                "value": "2012"
            },
            "index": 1
        }
    ];

    t.generalSkills = [
        {
            "uid": "996364628025274383",
            "skill": "javascript",
            "prettyName": "JavaScript",
            "prefLabel": "JavaScript",
            "label": "JavaScript"
        },
        {
            "uid": "1031626773660942336",
            "skill": "react-js",
            "prettyName": "React",
            "prefLabel": "React",
            "label": "React"
        },
        {
            "uid": "1031626762999021568",
            "skill": "node.js",
            "prettyName": "Node.js",
            "prefLabel": "Node.js",
            "label": "Node.js"
        },
        {
            "uid": "1504884980376928256",
            "skill": "svelte",
            "prettyName": "Svelte",
            "prefLabel": "Svelte",
            "label": "Svelte"
        },
        {
            "uid": "1031626794477273088",
            "skill": "vue.js",
            "prettyName": "Vue.js",
            "prefLabel": "Vue.js",
            "label": "Vue.js"
        },
        {
            "uid": "996364628012691468",
            "skill": "angular",
            "prettyName": "Angular",
            "prefLabel": "Angular",
            "label": "Angular"
        },
        {
            "uid": "1549040137275314176",
            "skill": "web3",
            "prettyName": "Web3",
            "prefLabel": "Web3",
            "label": "Web3"
        },
        {
            "uid": "996364628025274389",
            "skill": "typescript",
            "prettyName": "TypeScript",
            "prefLabel": "TypeScript",
            "label": "TypeScript"
        },
        {
            "uid": "996364628012691471",
            "skill": "amazon-web-services",
            "prettyName": "Amazon Web Services",
            "prefLabel": "Amazon Web Services",
            "label": "Amazon Web Services"
        },
        {
            "uid": "996364628012691465",
            "skill": "firebase",
            "prettyName": "Firebase",
            "prefLabel": "Firebase",
            "label": "Firebase"
        },
        {
            "uid": "1031626743004774400",
            "skill": "graphql",
            "prettyName": "GraphQL",
            "prefLabel": "GraphQL",
            "label": "GraphQL"
        },
        {
            "uid": "1031626762688643072",
            "skill": "next.js",
            "prettyName": "Next.js",
            "prefLabel": "Next.js",
            "label": "Next.js"
        },
        {
            "uid": "1031626740685324288",
            "skill": "gatsby",
            "prettyName": "Gatsby.js",
            "prefLabel": "Gatsby.js",
            "label": "Gatsby.js"
        },
        {
            "uid": "1031626763535892480",
            "skill": "nuxt.js",
            "prettyName": "Nuxt.js",
            "prefLabel": "Nuxt.js",
            "label": "Nuxt.js"
        },
        {
            "uid": "1484275081036877824",
            "skill": "mern-stack",
            "prettyName": "MERN Stack",
            "prefLabel": "MERN Stack",
            "label": "MERN Stack"
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

    t.profileOverview = `My services:
- FullStack Web Development (Node.js, React.js, Next.js, Remix, Gatsby, Angular, Vue.js, Svelte.js, PostgreSQL, MySQL, MongoDB, Redis, GraphQL ...)
- Blockchain & Web3 Development
- Building API
- Digital transformation strategies for enterprises and startups
- Rich and self-service Analytics
- Business Intelligence (BI) and Decision Intelligence
- Real-time analytics
- Predictive analytics
- Data Visualization / Reporting / Dashboards / KPI
- OLTP / OLAP / ROLAP / MOLAP / HOLAP / *OLAP
- Ad-hoc analysis
- Big Data
- AI & ML
- IoT and IIoT
- CMS, low-code / no-code

I’m well-versed in variety of technologies:
- Blockchain / SmartContract / Solidity / Web3 / dApp / DeFi / Token creation / NTF / IPFS / Wallet management / AML & KYC API integration / Cryptocurrency / ICO / IDO / Ethereum / BSC / Solana / Polygon / Polkadot / Hyperledger / ERC-20 / BEP-20 / metaverse / Hardhat / Truffle / Metaplex / Pinata / Arweave / Minting / Staking / Breeding
- D3 / WebGL / Three.js / Chart.js / amCharts / Plotly / Qlik / Tableau / PowerBI
- React / Next.js / Gatsby / React-Native / Redux / MobX / Hasura
- Angular 1,2+ / Ionic
- Vue / Veux / Vuetify
- Tailwind / Bootstrap / Material Design / SemanticUI
- Typescript / Javascript / Python / Rust / Go
- Node / Flask
- Pandas, Scikit Learn, Scipy, NumPy, TensorFlow
- BigData / AI / ML
- MongoDB / PostgreSQL / MySQL / Clickhouse / Redis / Neo4j / Kafka / ElasticSearch
- Kibana / Grafana / Airflow
- GraphQL / REST API / Websockets / RPC
- DevOps / DataOps / MLOps / Docker / Kubernetes / Helm / Bash / Ansible / Puppet / Terraform / OpenStack
- AWS (S3, EC2, Lambda, …) / Azure / GCP / Heroku
- Linux / Unix / MacOS / Nginx / Apache / Windows / IIS administration
- Twilio, SMS, Message automation, WebRTC, Chatbots
- Queryable / Strapi / Airbyte / Airtable / Bubble / Shopify / Wordpress

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
