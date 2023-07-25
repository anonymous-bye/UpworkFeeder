
window.signupInfo = {
    email: `dv${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "laravel-ruby",
    emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Haris",
    lastName: "Dzafic",
    country: "Bosnia",
    photoFiilename: "1-laravel-ruby.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Full-Stack | Laravel/PHP/WordPress | Vue/React/Node | Ruby on Rails";
    t.address = {
        "street": "409, Vuka Karadžića",
        "state": "BIH",
        "city": "Sarajevo",
        "zip": "71123",
        "additionalInfo": null,
        "country": "Bosnia and Herzegovina",
        "address": null
    };
    t.phoneNumber = "33######".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 25;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "Ziraat Teknoloji",
            "jobTitle": "Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "05",
            "endMonth": "11",
            "isCurrentPosition": false,
            "country": "BIH",
            "startYear": "2014",
            "endYear": "2016",
            "description": "PHP, WordPress, WooCommerce, CodeIgniter, Magento, Ecommerce, MySQL",
            "index": 0
        },
        {
            "companyName": "Digital Panorama",
            "jobTitle": "Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "01",
            "endMonth": "12",
            "isCurrentPosition": false,
            "country": "BIH",
            "startYear": "2016",
            "endYear": "2017",
            "description": "PHP, Laravel, Ruby on Rails, PrestaShop, Magento, WordPress, WooCommerce, MySQL, Python, SEO, cPanel, Ubuntu",
            "index": 1
        },
        {
            "companyName": "Raxar Technology Corporation",
            "jobTitle": "Head of Software Development",
            "role": null,
            "city": null,
            "startMonth": "02",
            "endMonth": "11",
            "isCurrentPosition": false,
            "country": "BIH",
            "startYear": "2018",
            "endYear": "2020",
            "description": "PHP, Laravel, CodeIgniter, Node, Express, React, Redux, Next, Vue, Vuex, Nuxt, Python, Django, Ruby on Rails, WordPress, WooCommerce, ElasticSearch, MySQL, RESTful API, WebSocket, Socket.io, AWS, Firebase, SEO, Heroku, Ubuntu",
            "index": 2
        },
        {
            "companyName": "Retrace Labs Inc.",
            "jobTitle": "Engineering Manager",
            "role": null,
            "city": null,
            "startMonth": "02",
            "endMonth": "01",
            "isCurrentPosition": false,
            "country": "BIH",
            "startYear": "2021",
            "endYear": "2023",
            "description": "PHP, Laravel, Node, Express, Nest, React, Redux, Next, Gatsby, Vue, Vuex, Nuxt, Python, Django, WordPress, WooCommerce, ElasticSearch, PostgreSQL, Web3, RESTful API, WebSocket, Socket.io, GraphQL, AWS, Firebase, Google Cloud",
            "index": 3
        }
    ];
    t.educations = [
        {
            "index": 0,
            "institutionName": "Warsaw University of Technology",
            "areaOfStudy": "Computer science",
            "degree": "Master of Computer Applications (MCA)",
            "dateStartedYear": {
                "name": "2010",
                "uid": "2010",
                "value": "2010"
            },
            "standardizedInstitutionUid": "480116276306280555",
            "standardizedDegreeUid": "482303921736286209",
            "standardizedAreaOfStudyUid": "482305184288899086",
            "dateEndedYear": {
                "name": "2013",
                "uid": "2013",
                "value": "2013"
            }
        },
        {
            "index": 1,
            "institutionName": "Sarajevo School of Science and Technology",
            "areaOfStudy": "Computer engineering",
            "degree": "Bachelor of Computer Science (BCompSc)",
            "dateStartedYear": {
                "name": "2007",
                "uid": "2007",
                "value": "2007"
            },
            "standardizedInstitutionUid": "480116275941376013",
            "standardizedDegreeUid": "1156532285526163456",
            "standardizedAreaOfStudyUid": "482305184288899085",
            "dateEndedYear": {
                "name": "2009",
                "uid": "2009",
                "value": "2009"
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
            "uid": "996364628025274385",
            "ontologyId": "upwork:php",
            "prefLabel": "PHP",
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
            "uid": "1031626794477273088",
            "skill": "vue.js",
            "prettyName": "Vue.js",
            "prefLabel": "Vue.js",
            "label": "Vue.js"
        },
        {
            "uid": "1031626775930060800",
            "skill": "ruby-on-rails",
            "prettyName": "Ruby on Rails",
            "prefLabel": "Ruby on Rails",
            "label": "Ruby on Rails"
        },
        {
            "uid": "1313512603317481472",
            "skill": "tailwind-css-framework",
            "prettyName": "Tailwind CSS",
            "prefLabel": "Tailwind CSS",
            "label": "Tailwind CSS"
        },
        {
            "uid": "1031626728177909760",
            "skill": "cpanel",
            "prettyName": "cPanel",
            "prefLabel": "cPanel",
            "label": "cPanel"
        },
        {
            "uid": "996364628012691471",
            "skill": "amazon-web-services",
            "prettyName": "Amazon Web Services",
            "prefLabel": "Amazon Web Services",
            "label": "Amazon Web Services"
        },
        {
            "uid": "996364628025274386",
            "skill": "python",
            "prettyName": "Python",
            "prefLabel": "Python",
            "label": "Python"
        },
        {
            "uid": "1031626775913283584",
            "skill": "ruby",
            "prettyName": "Ruby",
            "prefLabel": "Ruby",
            "label": "Ruby"
        },
        {
            "uid": "996364627995914247",
            "skill": "mysql",
            "prettyName": "MySQL",
            "prefLabel": "MySQL",
            "label": "MySQL"
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

    t.profileOverview = `I'm an experienced Full Stack (PHP, Laravel, WordPress, Ruby on Rails, Vue, React) developer who has a passion for building reliable and effective web applications. I enjoy finding elegant solutions to challenging problems.

- Proficiency in PHP, Laravel, CodeIgniter, Joomla, CakePHP, Drupal
- WordPress, WooCommerce, Elementor, Divi
- Ruby on Rails
- Python, Django
- React, Redux, Next, Gatsby
- Vue, Vuex, Nuxt
- Svelte, SvelteKit
- Node, Express, Nest
- Javascript, Typescript
- HTML, CSS, Responsive Design
- Model View Controller architecture
- Project management approaches – DevOps, Agile
- API development like REST, SOAP, WebSocket, SocketIO, GraphQL
- Development approaches like Scrum etc.
- Software testing tools like PHPUnit, PHPSpec, etc.
- Version control systems like Git
- Cloud servers like AWS, Azure, Heroku, Google Cloud, Google Firebase, cPanel, Plesk.

To produce top-notch products that surpass the expectations of the clients, I enjoy working with cross-functional teams. Please feel free to reach out to me if you require any additional information or if there are any specific questions you would like me to address. I look forward to the opportunity to discuss my qualifications further.

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
