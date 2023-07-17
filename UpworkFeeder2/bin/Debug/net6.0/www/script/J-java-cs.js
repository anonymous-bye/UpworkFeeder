
window.signupInfo = {
    email: `cvj${emailNumber}@metagon.online`,
    // email: `dvj${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "java-cs",
    emailUsername: "admin@metagon.online",
    // emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Tomi",
    lastName: "Pielinen",
    country: "Estonia",
    photoFiilename: "J-java-cs.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Full-Stack | Java/Spring Boot | C#/ASP.NET | Python | Node/React/Web3";
    t.address = {
        "street": "Põllu 30",
        "state": "Valgamaa",
        "city": "Koorkuela",
        "zip": "68508",
        "additionalInfo": null,
        "country": "Estonia",
        "address": null
    };
    t.phoneNumber = "76#####".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 25;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "Concise System",
            "jobTitle": "Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "02",
            "endMonth": "04",
            "isCurrentPosition": false,
            "country": "EST",
            "startYear": "2021",
            "endYear": "2023",
            "description": "- backend development activities (Java, Spring Boot, Gradle, Microservice, Kubernetes, Docker, Solidity, Python, Node, GraphQL, WebSocket, PostgresSQL)\n- frontend development activities (Javascript, Typescript, React, Vue, Svelte, Tailwind CSS)\n- System integration (Jira REST APIs)\n- Agile development (Jira, Kanban)\n- Involved in planning, dallies, and general software engineering practices with important stakeholders.\n- Teamwork and collaboration (Git Work Flow)\n- DevOps (Bitbucket pipelines, GCP environment, Docker, Kubernetes)",
            "index": -1
        },
        {
            "companyName": "Yumuuv",
            "jobTitle": "Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "09",
            "endMonth": "02",
            "isCurrentPosition": false,
            "country": "EST",
            "startYear": "2019",
            "endYear": "2021",
            "description": "- backend development activities (Java, Spring MVC, Spring Boot, Hibernate, Maven, RPC, MSSQL)\n- frontend development activities (React, Angular, Javascript, Typescript)\n- System integration\n- Agile development (Jira)\n- Dallies - Teamwork and collaboration (Git Work Flow)\n- DevOps (Bitbucket pipelines, GCP environment, Docker)",
            "index": 1
        },
        {
            "companyName": "ToLet.com.ng",
            "jobTitle": "Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "07",
            "endMonth": "06",
            "isCurrentPosition": false,
            "country": "EST",
            "startYear": "2017",
            "endYear": "2019",
            "description": "1. Tolet.com.ng Developer application/website: A platform where real estate developers like Lekki Gardens showcase, market, and manage their projects.\n\n2. Tolet.com.ng Landlord Activation Application: Helps Tolet Landlord Hero Team to keep track of all processes involved in bringing in a new landlord.\n\n3. Management for tolet CRM application\n\n4. Agent application.",
            "index": -1
        },
        {
            "companyName": "SBTelecoms",
            "jobTitle": "Systems Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "06",
            "endMonth": "07",
            "isCurrentPosition": false,
            "country": "EST",
            "startYear": "2015",
            "endYear": "2017",
            "description": "Developed some key features of TAMS Enterprise and solely designed and built its license tracking management systems.\n\nTAMS Enterprise is a robust and scalable system with configurable workflows, custom reports and seamless HR Processes.\n\nI also developed an application to convert different file type to XML, for CONSAT TV.",
            "index": -1
        }
    ];
    t.educations = [
        {
            "index": -1,
            "institutionName": "Tartu Ülikool",
            "areaOfStudy": "Computer engineering",
            "degree": "Master of Science in Information Technology (MSc(IT))",
            "dateStartedYear": {
                "name": "2013",
                "uid": "2013",
                "value": "2013"
            },
            "standardizedInstitutionUid": "480116275769409550",
            "standardizedDegreeUid": "1156532279863853056",
            "standardizedAreaOfStudyUid": "482305184288899085",
            "dateEndedYear": {
                "name": "2016",
                "uid": "2016",
                "value": "2016"
            }
        },
        {
            "index": -1,
            "institutionName": "American University of Beirut",
            "areaOfStudy": "Computer engineering",
            "degree": "Bachelor of Science in Information Technology",
            "dateStartedYear": {
                "name": "2010",
                "uid": "2010",
                "value": "2010"
            },
            "standardizedInstitutionUid": "480116276218200078",
            "standardizedDegreeUid": "1156532270391382016",
            "standardizedAreaOfStudyUid": "482305184288899085",
            "dateEndedYear": {
                "name": "2013",
                "uid": "2013",
                "value": "2013"
            }
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
            "uid": "996364628025274382",
            "skill": "java",
            "prettyName": "Java",
            "prefLabel": "Java",
            "label": "Java"
        },
        {
            "uid": "1031626782284431360",
            "skill": "spring-boot",
            "prettyName": "Spring Boot",
            "prefLabel": "Spring Boot",
            "label": "Spring Boot"
        },
        {
            "uid": "1031626762999021568",
            "skill": "node.js",
            "prettyName": "Node.js",
            "prefLabel": "Node.js",
            "label": "Node.js"
        },
        {
            "uid": "1549040137275314176",
            "skill": "web3",
            "prettyName": "Web3",
            "prefLabel": "Web3",
            "label": "Web3"
        },
        {
            "uid": "1031626731499798528",
            "skill": "devops",
            "prettyName": "DevOps",
            "prefLabel": "DevOps",
            "label": "DevOps"
        },
        {
            "uid": "996364628012691471",
            "skill": "amazon-web-services",
            "prettyName": "Amazon Web Services",
            "prefLabel": "Amazon Web Services",
            "label": "Amazon Web Services"
        },
        {
            "uid": "1031626732393185280",
            "skill": "docker",
            "prettyName": "Docker",
            "prefLabel": "Docker",
            "label": "Docker"
        },
        {
            "uid": "1031626773660942336",
            "skill": "react-js",
            "prettyName": "React",
            "prefLabel": "React",
            "label": "React"
        },
        {
            "uid": "996364628025274380",
            "skill": "c#",
            "prettyName": "C#",
            "prefLabel": "C#",
            "label": "C#"
        },
        {
            "uid": "1031626716513550336",
            "skill": "asp.net",
            "prettyName": "ASP.NET",
            "prefLabel": "ASP.NET",
            "label": "ASP.NET"
        },
        {
            "uid": "996364628025274386",
            "skill": "python",
            "prettyName": "Python",
            "prefLabel": "Python",
            "label": "Python"
        },
        {
            "uid": "1031626732309299200",
            "skill": "django-framework",
            "prettyName": "Django",
            "prefLabel": "Django",
            "label": "Django"
        },
        {
            "uid": "1031626738982436864",
            "skill": "flask",
            "prettyName": "Flask",
            "prefLabel": "Flask",
            "label": "Flask"
        },
        {
            "uid": "1031626743004774400",
            "skill": "graphql",
            "prettyName": "GraphQL",
            "prefLabel": "GraphQL",
            "label": "GraphQL"
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

    t.profileOverview = `Hi.
I am a passionate Full Stack Developer with 3 years of professional experience in software development. Below are some of the skills I have been able to build on and improve during my career:

✅ Full Stack Development (Java, JSP 2.0, Hibernate 5, Spring 5, Spring Boot, Play Framework, Scala, JSTL, JPA, JavaScript, TypeScript, HTML 5, CSS3, JQuery, Ajax, Python, Flask, and SQL).
✅ Comfortable with front-end languages like React JS.
✅ Experience with NoSQL and Relational Database (Elasticsearch, MySQL, PostgreSQL, H2)
✅ Experiences with the following tools and platforms; Net Beans, Eclipse, IntelliJ, Apache Tomcat, Glassfish Server, JBoss Application Server, Maven, Gradle, and PyCharm.
✅ Analysis and design
✅ Ability to learn new technology
✅ Architectural design and agile software development.
✅ High communication skills
✅ Ability to work comfortably in these server environments (Ubuntu and Windows)
✅ RESTful Web Services and Database Management.
✅ Version Control Systems (GIT).
✅ Black, White box testing, TDD, and acceptance testing (Cucumber).
✅ DevOps
✅ Continuous Integration. (Jenkins and Octopus)
✅ Ability to use Amazon Web Services (AWS) and other cloud services like Azure, GCP, and Heroku.

Please, feel free to meet with me anytime.

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
