
window.signupInfo = {
    email: `dv${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "wp-django",
    emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Pahana",
    lastName: "Choctaw",
    country: "Mexico",
    photoFiilename: "2-wp-django.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Full-Stack | WordPress/PHP/Laravel | Node/React/Vue | Python/Django";
    t.address = {
        "street": "HIDALGO 170-414, SAN MARTIN OBISPO TEPETLIXPA, 54763",
        "state": "CMX",
        "city": "Mexico City",
        "zip": "54763",
        "additionalInfo": null,
        "country": "Mexico",
        "address": null
    };
    t.phoneNumber = "55########".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 15;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "PREDIKAT",
            "jobTitle": "Full-Stack Engineer",
            "role": null,
            "city": null,
            "startMonth": "02",
            "endMonth": "12",
            "isCurrentPosition": false,
            "country": "CAN",
            "startYear": "2019",
            "endYear": "2022",
            "description": "- WordPress, WooCommerce, Elementor, Divi, Laravel, Vue, Nuxt, React, Next, Gatsby, Svelte, SveltKit, Node, Express, Nest, Web3, Solidity, Python, Django, Flask\\n- RESTful API, WebSocket, SocketIO, GraphQL\\n- AWS, Firebase, Google Cloud, cPanel\\n- MySQL, MariaDB, PostgreSQL, MSSQL, MongoDB, Redis\\n- Docker, Microservice, Kubernetes",
            "index": 0
        },
        {
            "companyName": "BOL.COM",
            "jobTitle": "Full-Stack Developer",
            "role": null,
            "city": null,
            "startMonth": "04",
            "endMonth": "11",
            "isCurrentPosition": false,
            "country": "CAN",
            "startYear": "2016",
            "endYear": "2018",
            "description": "- WordPress, WooCommerce, Angular, React, Vue, Node, Express, SocketIO, PHP, Laravel, CodeIgniter, Python, Django, Magento, Magento 2\\n- AWS, Firebase, Heroku, cPanel, Plesk\\n- MySQL, MariaDB, Oracle Database, MSSQL, MongoDB\\n- Elastic Search",
            "index": 1
        },
        {
            "companyName": "Intuit",
            "jobTitle": "Backend Developer",
            "role": null,
            "city": null,
            "startMonth": "04",
            "endMonth": "10",
            "isCurrentPosition": false,
            "country": "CAN",
            "startYear": "2013",
            "endYear": "2015",
            "description": "- PHP, Laravel, CodeIgniter, Joomla, WordPress, Drupal, Ruby on Rails, PrestaShop\\n- MySQL, Oracle Database\\n- Apache Solr",
            "index": 2
        }
    ];
    t.educations = [
        {
            "index": 0,
            "institutionName": "Instituto Tecnológico y de Estudios Superiores de Monterrey",
            "areaOfStudy": "Computer science",
            "degree": "Bachelor of Computer Science (BCompSc)",
            "dateStartedYear": {
                "name": "2006",
                "uid": "2006",
                "value": "2006"
            },
            "standardizedInstitutionUid": "480116276276920369",
            "standardizedDegreeUid": "1156532285526163456",
            "standardizedAreaOfStudyUid": "482305184288899086",
            "dateEndedYear": {
                "name": "2008",
                "uid": "2008",
                "value": "2008"
            }
        },
        {
            "index": 1,
            "institutionName": "McMaster University",
            "areaOfStudy": "Computer science",
            "degree": "Master of Information Technology (MIT)",
            "dateStartedYear": {
                "name": "2009",
                "uid": "2009",
                "value": "2009"
            },
            "standardizedInstitutionUid": "480116275781992456",
            "standardizedDegreeUid": "1156532281762140160",
            "standardizedAreaOfStudyUid": "482305184288899086",
            "dateEndedYear": {
                "name": "2012",
                "uid": "2012",
                "value": "2012"
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
            "uid": "1031626725384503296",
            "ontologyId": "upwork:codeigniter",
            "prefLabel": "CodeIgniter",
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
            "uid": "1031626732309299200",
            "skill": "django-framework",
            "prettyName": "Django",
            "prefLabel": "Django",
            "label": "Django"
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

    t.profileOverview = `Hi, Welcome to visit my profile!
I specialize in providing top-notch custom development services for PHP/Laravel/WordPress and Ruby on Rails driven applications, along with comprehensive online marketing solutions.

With a highly skilled web development team, we excel in the following technologies:

WordPress / WooCommerce / Elementor / Divi / etc
PHP / Laravel / CodeIgniter / Joomla / Durpal
Python / Django / Flask
Ruby on Rails
Vue / Vuex / Nuxt
React / Redux / Next / Gatsby
Svelte / SvelteKit
Node / Express / Nest
HTML / CSS / Responsive Design
PrestaShop / Magento / Magento 2
Ruby on Rails
cPanel / AWS / Heroku / Google Firebase / Google Cloud
MySQL / MariaDB / PostgreSQL / MSSQL / Oracle Database / MongoDB / Redis
REST API / GraphQL / WebSocket

From the initial scoping and planning phase to coding, implementation, promotion, and ongoing support/maintenance, my primary objective is to assist you in launching and operating a successful and profitable digital store.

Passionate about our work, we strive tirelessly to ensure our clients' e-commerce ventures thrive.

Let's collaborate and achieve greatness together!

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
