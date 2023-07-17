
window.signupInfo = {
    email: `cvw${emailNumber}@metagon.online`,
    // email: `dvw${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "webflow-2",
    emailUsername: "admin@metagon.online",
    // emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Daniel",
    lastName: "Cardoso",
    country: "Brazil",
    photoFiilename: "W-webflow-2.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Webflow Specialist | Frontend Developer | Responsive Design | Figma";
    t.address = {
        "street": "Praça Joaquim Pinto de Almeida 183",
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
            "companyName": "Agência e-Plus",
            "jobTitle": "Web & Mobile Designer",
            "role": null,
            "city": null,
            "startMonth": "02",
            "endMonth": null,
            "isCurrentPosition": true,
            "country": "BRA",
            "startYear": "2021",
            "endYear": null,
            "description": "- Provided web solutions and develop web sites and web applications based on specific business needs for promotions, presentations, customer service and online services.\n- Designed wireframes and mockups of mobile apps.\n- Designed and developed several websites in different web design platforms such as Webflow, WordPress, Shopify, Wix, etc.",
            "index": -1
        },
        {
            "companyName": "Noble Digital",
            "jobTitle": "UX/UI Designer",
            "role": null,
            "city": null,
            "startMonth": "12",
            "endMonth": "11",
            "isCurrentPosition": false,
            "country": "BRA",
            "startYear": "2018",
            "endYear": "2020",
            "description": "- Played a key role in establishing and leading the UX/UI design function within a fast-paced startup environment.\n- Designed and optimized the user experience for a mobile-first platform, resulting in a significant increase in user engagement and retention.\n- Conducted user interviews, created personas, and iteratively refined designs based on user feedback to drive continuous improvement.",
            "index": 2
        },
        {
            "companyName": "Elias Group",
            "jobTitle": "Frontend Developer",
            "role": null,
            "city": null,
            "startMonth": "11",
            "endMonth": "8",
            "isCurrentPosition": false,
            "country": "BRA",
            "startYear": "2016",
            "endYear": "2018",
            "description": "- Worked closely and collaborated with UX researchers, UX designers, UI designers, content designers, and accessibility architects to brainstorm and iterate designs for the Agent OS application\n- Created and maintained design components in UX library\n- Designed high-fidelity mockups and prototypes in Figma",
            "index": 1
        }, {
            "companyName": "ZANOMA",
            "jobTitle": "Lead Frontend Developer & User Interface Designer",
            "role": null,
            "city": null,
            "startMonth": "05",
            "endMonth": "10",
            "isCurrentPosition": false,
            "country": "BRA",
            "startYear": "2014",
            "endYear": "2016",
            "description": "- Worked with small local business helped create WordPress and Shopify websites.\n- Converted mockups in PSD into pixel-perfect, responsive, and cross browser compatible websites sing HTML5, CSS3, JavaScript, jQuery, etc.",
            "index": 0
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
            "institutionName": "University of Ottawa",
            "standardizedInstitutionUid": "480116275744243725",
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
                "name": "2013",
                "uid": "2013",
                "value": "2013"
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

    t.profileOverview = `Do you need your Webflow websites to represent your brand and increase sales or user engagement?
Are you tired of unreliable freelancers?

Here are some of my clients results on Upwork:
✅ Launched a 20-page enterprise website via Upwork in 30 days.
✅ Decreased loading times by 65% in 1 week.
✅ Rebranded Aris' website, resulting in a 300% increase in services sold in 2 months.
✅ Increased blog viewership by 130% after a website rebuild and technical SEO implementation.

⭐️⭐️⭐️⭐️⭐️ "Exceeded expectations by delivering a visually stunning and highly functional Webflow site with exceptional attention to detail. Communication was excellent and the project was completed efficiently. Highly recommended!"
⭐️⭐️⭐️⭐️⭐️ "Excellent work. He delivered on all our requirements"
⭐️⭐️⭐️⭐️⭐️ "10/10 one of the best freelancer experiences. Hired to make changes to our existing website in addition to creating a few new pages and overdelivered on every single point."

🔎 SEE MORE (20+) testimonials on my profile.

⚡ Custom UX/UI design, Figma to Webflow
⚡ Wordpress / Shopify
⚡ Avanced Webflow CMS Collection Setup
⚡ High Converting Landing Pages
⚡ Membership Website
⚡ Mobile and SEO friendly

Over the last five years of building websites and web applications, I've developed a process to establish clarity for projects and eliminate common issues you may otherwise face relating to specifications and timing. This process will alleviate the need to worry about any problems related to your Webflow project.

If you are spending time on this now, I can give you time back immediately to focus on the other aspects of your business.

As with yourself, my time is limited. Due to this, I only focus on projects with a small set of clients where I know we can get excellent results.

Contact me now to get a consultation.

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
