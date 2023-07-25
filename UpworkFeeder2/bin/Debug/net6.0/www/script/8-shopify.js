
window.signupInfo = {
    email: `dv${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "shopify",
    emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Gerardo",
    lastName: "Gonzalez",
    country: "Colombia",
    photoFiilename: "8-shopify.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Shopify Certified | Ecommerce | WordPress | Node/React | Wix | SEO";
    t.address = {
        "street": "Aut SUR No. 66-78 L B 280",
        "state": "DC",
        "city": "Bogota",
        "zip": "",
        "additionalInfo": null,
        "country": "Colombia",
        "address": null
    };
    t.phoneNumber = "17######".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 25;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "LoloCar",
            "jobTitle": "Full Stack Principal Developer",
            "role": null,
            "city": null,
            "startMonth": "01",
            "endMonth": null,
            "isCurrentPosition": true,
            "country": "COL",
            "startYear": "2022",
            "endYear": null,
            "description": "Shopify and Ecommerce Website Full-Stack Engineer\nWebapp modification Desing and Flows.\nRefactor front end and Implement UX/UI designs for MVP.\nModify mainly user flows.\nAPI integrations with 3rd party libraries and internal backend.",
            "index": -1
        },
        {
            "companyName": "CyprisAI",
            "jobTitle": "Software Developer Consultant",
            "role": null,
            "city": null,
            "startMonth": "01",
            "endMonth": "12",
            "isCurrentPosition": false,
            "country": "COL",
            "startYear": "2019",
            "endYear": "2021",
            "description": "SaaS company working with developer team.\nMeasuring customer interaction with Mixpanel on Angular and Vue web applications",
            "index": 1
        },
        {
            "companyName": "Mystery Minds",
            "jobTitle": "Senior Developer Mentorship",
            "role": null,
            "city": null,
            "startMonth": "04",
            "endMonth": "08",
            "isCurrentPosition": false,
            "country": "COL",
            "startYear": "2017",
            "endYear": "2019",
            "description": "Working directly with the lead developer on new Vue/Nuxt frontend.\nReviewing, refactor and mentor internal team how to optimize source code using best practices and design patterns.",
            "index": -1
        }
    ];
    t.educations = [
        {
            "institutionName": "Columbia University",
            "standardizedInstitutionUid": null,
            "areaOfStudy": "Computer engineering",
            "standardizedAreaOfStudyUid": "482305184288899085",
            "degree": "Bachelor of Science in Information Technology",
            "standardizedDegreeUid": "1156532270391382016",
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
            "index": 0
        },
        {
            "institutionName": "University of Missouri, Columbia",
            "standardizedInstitutionUid": "480116275828129794",
            "areaOfStudy": "Computer science",
            "standardizedAreaOfStudyUid": "482305184288899086",
            "degree": "Master of Science in Information Technology (MSc(IT))",
            "standardizedDegreeUid": "1156532279863853056",
            "dateStartedYear": {
                "name": "2013",
                "uid": "2013",
                "value": "2013"
            },
            "dateEndedYear": {
                "name": "2016",
                "uid": "2016",
                "value": "2016"
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
            "uid": "1031626779570716672",
            "skill": "shopify",
            "prettyName": "Shopify",
            "prefLabel": "Shopify",
            "label": "Shopify"
        },
        {
            "uid": "1484275077077454848",
            "skill": "ecommerce",
            "prettyName": "Ecommerce",
            "prefLabel": "Ecommerce",
            "label": "Ecommerce"
        },
        {
            "uid": "1110580555693936640",
            "ontologyId": "upwork:ecommercewebsite",
            "prefLabel": "Ecommerce Website",
            "parentSkillUid": null
        },
        {
            "uid": "1052162209007587329",
            "skill": "responsive-design",
            "prettyName": "Responsive Design",
            "prefLabel": "Responsive Design",
            "label": "Responsive Design"
        },
        {
            "uid": "1031626794477273088",
            "skill": "vue.js",
            "prettyName": "Vue.js",
            "prefLabel": "Vue.js",
            "label": "Vue.js"
        },
        {
            "uid": "1192876991606964224",
            "skill": "shopify-theme",
            "prettyName": "Shopify Theme",
            "prefLabel": "Shopify Theme",
            "label": "Shopify Theme"
        },
        {
            "uid": "1052162208999198724",
            "skill": "wordpress",
            "prettyName": "WordPress",
            "prefLabel": "WordPress",
            "label": "WordPress"
        },
        {
            "uid": "1052162208999198725",
            "skill": "wix",
            "prettyName": "Wix",
            "prefLabel": "Wix",
            "label": "Wix"
        },
        {
            "uid": "1204836464339304448",
            "skill": "liquid",
            "prettyName": "Liquid",
            "prefLabel": "Liquid",
            "label": "Liquid"
        },
        {
            "uid": "1192876991552438272",
            "skill": "shopify-apps",
            "prettyName": "Shopify Apps",
            "prefLabel": "Shopify Apps",
            "label": "Shopify Apps"
        },
        {
            "uid": "1192876991577604096",
            "skill": "shopify-plus",
            "prettyName": "Shopify Plus",
            "prefLabel": "Shopify Plus",
            "label": "Shopify Plus"
        },
        {
            "uid": "1031626733781499904",
            "skill": "ecommerce-consulting",
            "prettyName": "Ecommerce Platform Development",
            "prefLabel": "Ecommerce Platform Development",
            "label": "Ecommerce Platform Development"
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

    t.profileOverview = `Thank you for taking the time to visit my profile.
I'd like to introduce a little about myself.

I am a senior web developer with good experience and skills in Ecommerce and website development. Over the last 4 years of experience in web development with my primary focus being Ecommerce platforms. I am well versed in all stages of advanced Shopify and bringing forth experience in design, installation, testing and maintenance of Shopify systems. I offer experience, professionalism, attention to detail, creativity and excellent communication in addition to my technical skills.

I recognize that your success is my success and pride myself on making my clients happy! I take the time to understand your goals, to better focus the services I can offer you.

My expertise includes the followings:

🟐 Shopify Account Setup and Configuration
🟐 Shopify website development
🟐 Shopify theme development and customization
🟐 Shopify Apps configuration and API integration
🟐 Shopify template and landing page development
🟐 Shopify speed optimization (Performance and Speed)
🟐 Shopify consultation on the best practices managing your site
🟐 React, Node/Express, Web3 ...

I'm ready to take part in your project from idea up to production and providing high-level support and maintenance. So even if you just want my idea, suggestion and recommendation, I would be happy to provide it.

Please reach out to me if you think I am a fit for your project. I am always looking to build strong and lasting business relationships.

Thank you.

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
