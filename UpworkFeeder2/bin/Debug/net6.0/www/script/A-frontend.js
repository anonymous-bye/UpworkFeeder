
window.signupInfo = {
    email: `cva${emailNumber}@metagon.online`,
    // email: `dva${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "frontend",
    emailUsername: "admin@metagon.online",
    // emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Eduard",
    lastName: "Ljubanovic",
    country: "Croatia",
    photoFiilename: "A-frontend.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Frontend Developer | HTML | CSS | Webflow | Responsive Design | Canvas";
    t.address = {
        "street": "Zagrebacka 21",
        "state": "Zadarska",
        "city": "Biograd na Moru",
        "zip": "23210",
        "additionalInfo": null,
        "country": "Croatia",
        "address": null
    };
    t.phoneNumber = "233######".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 15;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "U-2-Me",
            "jobTitle": "Lead Frontend Developer & User Interface Designer",
            "role": null,
            "city": null,
            "startMonth": "02",
            "endMonth": "04",
            "isCurrentPosition": true,
            "country": "HRV",
            "startYear": "2021",
            "endYear": "2023",
            "description": "Improving the quality of front-end code while creating a more efficient and sustainable workflow in Agile methodology. My assignments were following coding standards, creating documentation and style guides, dependency management, building systems, performance optimization, research and design of solutions.",
            "index": -1
        },
        {
            "companyName": "Kodius",
            "jobTitle": "Frontend Developer & User Interface Designer",
            "role": null,
            "city": null,
            "startMonth": "12",
            "endMonth": "11",
            "isCurrentPosition": false,
            "country": "HRV",
            "startYear": "2017",
            "endYear": "2020",
            "description": "- HTML, CSS, Responsive Design, Heroku\n- Tailwind CSS, React, Vue, Javascript, Typescript\n- Digital design (User interface design (UI))\n- Information architecture of new products & websites\n- Creation of concepts, Wireframes and Prototypes",
            "index": 2
        },
        {
            "companyName": "Philip Morris International",
            "jobTitle": "Frontend Developer",
            "role": null,
            "city": null,
            "startMonth": "11",
            "endMonth": "8",
            "isCurrentPosition": false,
            "country": "HRV",
            "startYear": "2015",
            "endYear": "2017",
            "description": "Frontend Development on Angular, React, MaterialUI project",
            "index": 1
        }, {
            "companyName": "Coria Inc.",
            "jobTitle": "Frontend Developer",
            "role": null,
            "city": null,
            "startMonth": "05",
            "endMonth": "10",
            "isCurrentPosition": false,
            "country": "HRV",
            "startYear": "2013",
            "endYear": "2015",
            "description": "User Interface & Interaction Designer",
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
            "uid": "1031626794477273088",
            "skill": "vue.js",
            "prettyName": "Vue.js",
            "prefLabel": "Vue.js",
            "label": "Vue.js"
        },
        {
            "uid": "1504884980376928256",
            "ontologyId": "kg:54-00201",
            "prefLabel": "Svelte",
            "parentSkillUid": null
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
            "uid": "996364628025274389",
            "skill": "typescript",
            "prettyName": "TypeScript",
            "prefLabel": "TypeScript",
            "label": "TypeScript"
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

    t.profileOverview = `Welcome! I am a dedicated front-end developer with a strong background in frontend development. With years of experience under my belt, I am confident in my ability to deliver a high-quality product that meets your needs.

My technical expertise includes proficiency in HTML/CSS, JavaScript, TypeScript, React.js (with Hooks, Redux, and Sagas), and MaterialUI. Additionally, I have experience with backend development using Node.js and Express.js, which allows me to understand the full stack and contribute effectively to your project.

In addition to my technical skills, I possess a range of soft skills that make me a valuable team member. I excel in collaborative environments, am highly adaptable, and am a quick learner. My creativity, time management skills, and problem-solving abilities are all assets that I bring to the table.

If you're looking for someone who is passionate about delivering exceptional work, I am the developer for you.

My solid skills
✔ Webflow, Wix
✔ HTML/CSS
✔ Javascript/Typescript
✔ React.js, Redux, Next, Gatsby, MaterialUI
✔ Vue.js, Vuex, Nuxt
✔ Svelte.js, SvelteKit
✔ Tailwind CSS
✔ Responsive Design

Also, I have some backend experience using Node.js and Express.js

If we talk about my soft skills, I’m
● Excellent team player
● Really adaptable
● Fast learner
● Creative
● Good time management skills
● Good problem-solving skills

Let's connect and start working together to bring your project to life!

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
