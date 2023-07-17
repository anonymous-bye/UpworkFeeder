
window.signupInfo = {
    email: `cvq${emailNumber}@metagon.online`,
    // email: `dvq${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "webflow",
    emailUsername: "admin@metagon.online",
    // emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Xavier",
    lastName: "Jodion",
    country: "Belgium",
    photoFiilename: "Q-webflow.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Webflow Expert Certified | Responsive Design | Figma | SEO | HTML/CSS";
    t.address = {
        "street": "Place Léopold 62",
        "state": "WAL",
        "city": "Limbourg",
        "zip": "3540",
        "additionalInfo": null,
        "country": "Belgium",
        "address": null
    };
    t.phoneNumber = "4976######".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 25;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "tok-tak espo",
            "jobTitle": "Chief of web development",
            "role": null,
            "city": null,
            "startMonth": "02",
            "endMonth": null,
            "isCurrentPosition": true,
            "country": "BEL",
            "startYear": "2021",
            "endYear": null,
            "description": "Improving the quality of front-end code while creating a more efficient and sustainable workflow in Agile methodology. My assignments were following coding standards, creating documentation and style guides, dependency management, building systems, performance optimization, research and design of solutions.",
            "index": -1
        },
        {
            "companyName": "Kodius",
            "jobTitle": "Frontend Developer",
            "role": null,
            "city": null,
            "startMonth": "12",
            "endMonth": "11",
            "isCurrentPosition": false,
            "country": "BEL",
            "startYear": "2017",
            "endYear": "2020",
            "description": "HTML, CSS, Responsive Design, Heroku",
            "index": 2
        },
        {
            "companyName": "Aleba",
            "jobTitle": "Web-designer",
            "role": null,
            "city": null,
            "startMonth": "11",
            "endMonth": "8",
            "isCurrentPosition": false,
            "country": "BEL",
            "startYear": "2015",
            "endYear": "2017",
            "description": "Frontend Development on Angular, React, MaterialUI project",
            "index": 1
        }, {
            "companyName": "Coria Inc.",
            "jobTitle": "Lead Frontend Developer & User Interface Designer",
            "role": null,
            "city": null,
            "startMonth": "05",
            "endMonth": "10",
            "isCurrentPosition": false,
            "country": "BEL",
            "startYear": "2013",
            "endYear": "2015",
            "description": "User Interface & Interaction Designer\n- Webflow, Wix\n- Tailwind CSS, React, Vue, Svelte, Javascript, Typescript\n- Digital design (User interface design (UI))\n- Information architecture of new products & websites\n- Creation of concepts, Wireframes and Prototypes\n- Frontend development ( HTML, CSS, JavaScript )\n- Illustration / Infographics",
            "index": 0
        }
    ];
    t.educations = [
        {
            "institutionName": "Sveucilište u Dubrovniku",
            "standardizedInstitutionUid": "480116275995901998",
            "areaOfStudy": "Computer engineering",
            "standardizedAreaOfStudyUid": "482305184288899085",
            "degree": "Bachelor of Science in Information Technology",
            "standardizedDegreeUid": "1156532270391382016",
            "dateStartedYear": {
                "name": "2007",
                "uid": "2007",
                "value": "2007"
            },
            "dateEndedYear": {
                "name": "2009",
                "uid": "2009",
                "value": "2009"
            },
            "index": 0
        },
        {
            "institutionName": "Universiteit Hasselt",
            "standardizedInstitutionUid": "480116275899432978",
            "areaOfStudy": "Computer engineering",
            "standardizedAreaOfStudyUid": "482305184288899085",
            "degree": "Master of Science in Information Technology (MSc(IT))",
            "standardizedDegreeUid": "1156532279863853056",
            "dateStartedYear": {
                "name": "2010",
                "uid": "2010",
                "value": "2010"
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
            "uid": "1031626740031012864",
            "ontologyId": "upwork:frontenddevelopment",
            "prefLabel": "Front-End Development",
            "parentSkillUid": null
        },
        {
            "uid": "1052162209007587329",
            "ontologyId": "upwork:responsivedesign",
            "prefLabel": "Responsive Design",
            "parentSkillUid": null
        },
        {
            "uid": "1052162208982421516",
            "skill": "webflow",
            "prettyName": "Webflow",
            "prefLabel": "Webflow",
            "label": "Webflow"
        },
        {
            "uid": "1052162208999198725",
            "skill": "wix",
            "prettyName": "Wix",
            "prefLabel": "Wix",
            "label": "Wix"
        },
        {
            "uid": "1031626745110315008",
            "skill": "html",
            "prettyName": "HTML",
            "prefLabel": "HTML",
            "label": "HTML"
        },
        {
            "uid": "1031626728794472448",
            "skill": "css",
            "prettyName": "CSS",
            "prefLabel": "CSS",
            "label": "CSS"
        },
        {
            "uid": "1313512603317481472",
            "skill": "tailwind-css-framework",
            "prettyName": "Tailwind CSS",
            "prefLabel": "Tailwind CSS",
            "label": "Tailwind CSS"
        },
        {
            "uid": "1052162208781094930",
            "skill": "figma",
            "prettyName": "Figma",
            "prefLabel": "Figma",
            "label": "Figma"
        },
        {
            "uid": "1031626795181916160",
            "skill": "web-design",
            "prettyName": "Web Design",
            "prefLabel": "Web Design",
            "label": "Web Design"
        },
        {
            "uid": "1031626773660942336",
            "skill": "react-js",
            "prettyName": "React",
            "prefLabel": "React",
            "label": "React"
        },
        {
            "uid": "1031626795211276288",
            "skill": "web-programming",
            "prettyName": "Web Development",
            "prefLabel": "Web Development",
            "label": "Web Development"
        },
        {
            "uid": "1031626753276624896",
            "skill": "landing-pages",
            "prettyName": "Landing Page",
            "prefLabel": "Landing Page",
            "label": "Landing Page"
        },
        {
            "uid": "1484275077077454848",
            "skill": "ecommerce",
            "prettyName": "Ecommerce",
            "prefLabel": "Ecommerce",
            "label": "Ecommerce"
        },
        {
            "uid": "1052162208999198724",
            "skill": "wordpress",
            "prettyName": "WordPress",
            "prefLabel": "WordPress",
            "label": "WordPress"
        }
    ];
    t.multipleSpecialities = [
        {
            "uid": "531770282584862733",
            "name": "Web Development",
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
        },
        {
            "uid": "531770282589057029",
            "name": "Web & Mobile Design",
            "slug": null
        },
        {
            "uid": "531770282589057027",
            "name": "Game Design & Development",
            "slug": null
        },
        {
            "uid": "531770282589057034",
            "name": "ERP/CRM Software",
            "slug": null
        }
    ];

    t.profileOverview = `⭐ novalmuhammad.webflow.io
Are you looking for a help to build website on WEBFLOW or WORDPRESS or UX/UI on FIGMA to make Mobile App Design, Website Design and DESIGN SYSTEM for your CRM, ERP or SAAS product?
Do you want your project to reach its business goals and have an outstanding look?
If yes, message me.

🏆 Webflow Expert Certified
🏆 Fast Timeline Project

For the past 3 years, I have been helping clients from all over the world solve their problems, and designed multiple great-looking solutions for startups, as well as big and small established businesses, such as accounting, e-commerce, cybersecurity, fundraising, real estate, education, tourism, sport, medicine, law and many more.

My Workflow:
1. Understanding your business and customers needs
2. UX research (user persona, competitive analysis)
3. Creating information architecture
4. Designing wireframes
5. Designing user interface
6. Prototyping
7. Creating UI animation
8. Preparing assets and collaborating with developers
9. Support Want a different workflow? We can work in many ways.

My Skillset:
✅ 3+ Years Experiences
✅ Webflow Development
✅ Wix Development
✅ Dashboard UI/UX Design
✅ Website UI/UX Design
✅ Android UI/UX Design
✅ iOS UI/UX Design
✅ Responsive website design
✅ User Flow
✅ Wireframes
✅ Prototyping
✅ UX Research

My Tools:
🎨 WEBFLOW
🎨 WIX
🎨 FIGMA

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
