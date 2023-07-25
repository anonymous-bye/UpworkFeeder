
window.signupInfo = {
    email: `dv${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "ecommerce",
    emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Danyil",
    lastName: "Kovalov",
    country: "Poland",
    photoFiilename: "7-ecommerce.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Ecommerce Full-Stack | Shopify | WordPress | Node | React | Wix | SEO";
    t.address = {
        "street": "ul. Dobra 117",
        "state": "Greater Poland",
        "city": "Poznan",
        "zip": "60595",
        "additionalInfo": null,
        "country": "Poland",
        "address": null
    };
    t.phoneNumber = "665#######".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 15;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "Upwork",
            "jobTitle": "Freelance",
            "role": null,
            "city": null,
            "startMonth": "01",
            "endMonth": null,
            "isCurrentPosition": true,
            "country": "POL",
            "startYear": "2022",
            "endYear": null,
            "description": "Shopify, WordPress, WooCommerce, Node, React, Laravel, Vue",
            "index": -1
        },
        {
            "companyName": "Essentra Components",
            "jobTitle": "Full-stack developer",
            "role": null,
            "city": null,
            "startMonth": "01",
            "endMonth": "12",
            "isCurrentPosition": false,
            "country": "NLD",
            "startYear": "2019",
            "endYear": "2021",
            "description": "Shopify, WordPress, WooCommerce, Magento, PrestaShop, Node, React",
            "index": 1
        },
        {
            "companyName": "LC Waikiki",
            "jobTitle": "Ecommerce Data Scientist",
            "role": null,
            "city": null,
            "startMonth": "04",
            "endMonth": "08",
            "isCurrentPosition": false,
            "country": "POL",
            "startYear": "2017",
            "endYear": "2019",
            "description": "PHP, PrestaShop, Laravel, React, Node",
            "index": -1
        }
    ];
    t.educations = [
        {
            "institutionName": "Warsaw University of Technology",
            "standardizedInstitutionUid": "480116276306280555",
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
            "institutionName": "University of Cambridge",
            "standardizedInstitutionUid": "480116275798769674",
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
            "uid": "1031626753368899584",
            "skill": "laravel-framework",
            "prettyName": "Laravel",
            "prefLabel": "Laravel",
            "label": "Laravel"
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
            "uid": "1031626770490048512",
            "ontologyId": "upwork:prestashop",
            "prefLabel": "PrestaShop",
            "parentSkillUid": null
        },
        {
            "uid": "1110580555693936640",
            "ontologyId": "upwork:ecommercewebsite",
            "prefLabel": "Ecommerce Website",
            "parentSkillUid": null
        },
        {
            "uid": "1052162208999198728",
            "ontologyId": "upwork:magento",
            "prefLabel": "Magento",
            "parentSkillUid": null
        },
        {
            "uid": "1031626755600269312",
            "ontologyId": "upwork:magento2",
            "prefLabel": "Magento 2",
            "parentSkillUid": null
        },
        {
            "uid": "1052162208999198725",
            "ontologyId": "upwork:wix",
            "prefLabel": "Wix",
            "parentSkillUid": null
        },
        {
            "uid": "1052162208999198724",
            "skill": "wordpress",
            "prettyName": "WordPress",
            "prefLabel": "WordPress",
            "label": "WordPress"
        },
        {
            "uid": "1031626796331155456",
            "skill": "woocommerce",
            "prettyName": "WooCommerce",
            "prefLabel": "WooCommerce",
            "label": "WooCommerce"
        },
        {
            "uid": "996364628025274385",
            "skill": "php",
            "prettyName": "PHP",
            "prefLabel": "PHP",
            "label": "PHP"
        },
        {
            "uid": "1031626733781499904",
            "skill": "ecommerce-consulting",
            "prettyName": "Ecommerce Platform Development",
            "prefLabel": "Ecommerce Platform Development",
            "label": "Ecommerce Platform Development"
        },
        {
            "uid": "1204836464339304448",
            "skill": "liquid",
            "prettyName": "Liquid",
            "prefLabel": "Liquid",
            "label": "Liquid"
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

    t.profileOverview = `5 years of experience in Web and eCommerce Technologies. I am a skilled, experienced Web & eCommerce designer and developer. I am looking for a challenging and rewarding opportunities using open-sourced to designed web-based solutions.

I am specialized in - Shopify, Shopify Plus Magento 1.0 - 2., PrestaShop, WP-WooCommerce, Squarespace, WIX, OSCommerce, BigCommerce, OpenCart, Joomla, Volusion, not just with eCommerce CMS but yes well versed with concerning marketing, advertising tools as well.

and

12 years of experience in Digital IT Marketing and Web & eCommerce Technologies. I am a Passionate, Creative, and Internet Search Marketing Leader and Programmer with more than 12 years of PPC, SEO, Local SEO, Google Places, SMM, and SEM experience in Increasing Visibility, Profitability, and Performances for diverse organizations ranging in every Business Enterprises in the Retail eCommerce, Travel, Entertainment, Automotive, and Education sectors.

I have earned a Bachelor of Technology degree in Computer Science and Engineering and into Web and eCommerce Development since 2010.

My project counted well in the 100's and worked for worldwide clients, but I specialize in meeting the needs of US, Canadian, UK, and Australian companies and individuals. My focus is on developing practical business solutions, using a wide array of eCommerce platforms, plugins, apps, third-party solutions, and market them further to help their business to the next level.

Marketing Specialties :
* Market Research Analysis and Competition Analysis
* Google Adwords Setup and Management
* Bing PPC Setup and Management
* Google Adsense, Google AdClick
* Google Analytics, Funnels, and Goals
* Google Display Marketing
* Google Remarketing, Dynamic Remarketing
* Google Tag Manager and FB Pixel Tracking
* Google ShoppingP PLA Ads
* Conversion Rate Optimization
* Reputation Management Expert

Plus, On-Site SEO, Off-Site SEO, WP SEO, Magento SEO, Shopify SEO, and all type of CMS SEO I am a core expert in.

My Key Strengths Includes :
1. Self-motivated, flexible, and can work with minimum supervision.
2. Accurate and quick web research ability with keen attention to detail and passion for quality.
3. Solid communication skills and Team Working capability.

If you want the "Website to be Designed, Develop, Fix or Manage, Update and Customize, and To-Do Marketing and Advertising for," Contact me TODAY..

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
