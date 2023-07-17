
window.signupInfo = {
    email: `cvz${emailNumber}@metagon.online`,
    // email: `dvz${emailNumber}@valv.sbs`,
    password: "qweQWE123!@#`",
    category: "basic",
    emailUsername: "admin@metagon.online",
    // emailUsername: "valloonupwork@valv.sbs",
    emailPassword: "qweQWE123!@#`",
    firstName: "Valentyn",
    lastName: "Boiko",
    country: "Czech",
    photoFiilename: "Z-basic.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
    t.profileTitle = "Basic Expert | C#/.NET | Python | Java | Auto | Linux | DB | Assembly";
    t.address = {
        "street": "Sokolska 16113",
        "state": "Central Bohemia",
        "city": "Kounice",
        "zip": "28915",
        "additionalInfo": null,
        "country": "Czech Republic",
        "address": null
    };
    t.phoneNumber = "607######".replace(/#/g, () => Math.floor(Math.random() * 10));
    t.rate = 25;
    t.englishLevel = "natl";
    t.employmentHistory = [
        {
            "companyName": "SentinelOne",
            "jobTitle": "Tech Lead",
            "role": null,
            "city": null,
            "startMonth": "09",
            "endMonth": "04",
            "isCurrentPosition": false,
            "country": "CZE",
            "startYear": "2019",
            "endYear": "2022",
            "description": "‒ Core project refactoring (by C ++ 11, C ++ 14, Boost)\n‒ Refactoring of the code base associated with pipe, winAPI\n‒ Making changes to the crypto transaction processing module using WinAPI, OpenSSL, etc.\n- Developed an installer for Windows 7, 8, 10 using WIX\n‒ Manual testing of executable files under the Windows platform (7, 8, 10)",
            "index": -1
        },
        {
            "companyName": "DAYTRIP EUROPE Ltd",
            "jobTitle": "Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "09",
            "endMonth": "02",
            "isCurrentPosition": false,
            "country": "CZE",
            "startYear": "2015",
            "endYear": "2019",
            "description": "‒ MVP development - backend and front by Python 3.7, Django 2, js\n‒ Data visualization in UI using (D3, google visualization)\n‒ Currency data scrapers developing",
            "index": 1
        },
        {
            "companyName": "SingleCase s.r.o.",
            "jobTitle": "Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "07",
            "endMonth": "06",
            "isCurrentPosition": false,
            "country": "CZE",
            "startYear": "2012",
            "endYear": "2015",
            "description": "‒ Automation of some processes using Python scripts\n‒ UML architecture design\n‒ Embedding numerical methods and algorithms in some applications\n‒ DXL modules development (IBM Doors)",
            "index": -1
        },
        {
            "companyName": "Greenlight s.r.o.",
            "jobTitle": "Systems Software Engineer",
            "role": null,
            "city": null,
            "startMonth": "06",
            "endMonth": "07",
            "isCurrentPosition": false,
            "country": "CZE",
            "startYear": "2010",
            "endYear": "2012",
            "description": "‒ Updating the statics of the company's website on MODX, css, html, php\n‒ Testing data display in various web browsers on stands\n‒ Convert raster and vector images, design drawings\n‒ Interaction with designers, engineers, tasks delegation",
            "index": -1
        }
    ];
    t.educations = [
        {
            "uid": "1669659092390543360",
            "personUid": "1669642238191939584",
            "institutionName": "Moscow University Touro",
            "standardizedInstitutionUid": "480116276226588787",
            "areaOfStudy": "Computer science",
            "standardizedAreaOfStudyUid": "482305184288899086",
            "degree": "Master of Information Technology (MIT)",
            "standardizedDegreeUid": "1156532281762140160",
            "dateStarted": "2013-01-01",
            "dateEnded": "2016-01-01",
            "comment": null,
            "dateStartedYear": {
                "name": "2006",
                "uid": "2006",
                "value": "2006"
            },
            "dateEndedYear": {
                "name": "2009",
                "uid": "2009",
                "value": "2009"
            },
            "index": 0
        },
        {
            "uid": "1669659092158013440",
            "personUid": "1669642238191939584",
            "institutionName": "Masaryk University Brno",
            "standardizedInstitutionUid": "480116276008484923",
            "areaOfStudy": "Computer science",
            "standardizedAreaOfStudyUid": "482305184288899086",
            "degree": "Bachelor of Computer Science (BCompSc)",
            "standardizedDegreeUid": "1156532285526163456",
            "dateStarted": "2009-01-01",
            "dateEnded": "2012-01-01",
            "comment": null,
            "dateStartedYear": {
                "name": "2003",
                "uid": "2003",
                "value": "2003"
            },
            "dateEndedYear": {
                "name": "2006",
                "uid": "2006",
                "value": "2006"
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
            "uid": "996364628025274382",
            "skill": "java",
            "prettyName": "Java",
            "prefLabel": "Java",
            "label": "Java"
        },
        {
            "uid": "996364628012691471",
            "skill": "amazon-web-services",
            "prettyName": "Amazon Web Services",
            "prefLabel": "Amazon Web Services",
            "label": "Amazon Web Services"
        },
        {
            "uid": "996364628025274381",
            "ontologyId": "upwork:cplusplus",
            "prefLabel": "C++",
            "parentSkillUid": null
        },
        {
            "uid": "996364628025274380",
            "skill": "c#",
            "prettyName": "C#",
            "prefLabel": "C#",
            "label": "C#"
        },
        {
            "uid": "1031626732825198592",
            "skill": ".net-framework",
            "prettyName": ".NET Framework",
            "prefLabel": ".NET Framework",
            "label": ".NET Framework"
        },
        {
            "uid": "996364628025274386",
            "skill": "python",
            "prettyName": "Python",
            "prefLabel": "Python",
            "label": "Python"
        },
        {
            "uid": "1031626775099588608",
            "skill": "reverse-engineering",
            "prettyName": "Reverse Engineering",
            "prefLabel": "Reverse Engineering",
            "label": "Reverse Engineering"
        },
        {
            "uid": "1031626716630990848",
            "skill": "assembly-language",
            "prettyName": "Assembly Language",
            "prefLabel": "Assembly Language",
            "label": "Assembly Language"
        },
        {
            "uid": "1031626717876699136",
            "skill": "automation",
            "prettyName": "Automation",
            "prefLabel": "Automation",
            "label": "Automation"
        },
        {
            "uid": "1504884906003529729",
            "skill": "web-scraping-1",
            "prettyName": "Web Scraping",
            "prefLabel": "Web Scraping",
            "label": "Web Scraping"
        },
        {
            "uid": "1031626721534132224",
            "skill": "browser-automation",
            "prettyName": "Browser Automation",
            "prefLabel": "Browser Automation",
            "label": "Browser Automation"
        },
        {
            "uid": "1031626721043398656",
            "skill": "bot-development",
            "prettyName": "Bot Development",
            "prefLabel": "Bot Development",
            "label": "Bot Development"
        },
        {
            "uid": "1031626754568470528",
            "skill": "linux",
            "prettyName": "Linux",
            "prefLabel": "Linux",
            "label": "Linux"
        },
        {
            "uid": "1031626791662895104",
            "skill": "ubuntu",
            "prettyName": "Ubuntu",
            "prefLabel": "Ubuntu",
            "label": "Ubuntu"
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

    t.profileOverview = `10+ years of Consulting/Developing experience in multiple fields. Including Web, Desktop, System, Linux, Network.

BMSTU - B. D., Technical Physics department.

Main fields:
- backend
- desktop development
- data mining, scraping, analysis
- automation

C#
.NET, Entity Framework, ZExtensions, Windows Forms

Python
Django, XPath, Numpy, PyQt, Pyqtgraph, Matplotlib, Pyinstaller, Py2exe,
Cx_Freeze

Databases
Microsoft SQL Server, PostgreSQL, Oracle Database, MySQL, MariaDB, MongoDB, SQLite

Desktop installers:
Wix, NSIS

network programming
TCP, UDP sockets, WebSockets), have a clear understanding of multithreading, memory management, stack analysis.

Linux command line tools, Bash scripts

server load optimization, network security, etc.

Network protocols parsing and implementation

Linux kernel modules

Desktop Automation

Web development, Web Scraping, Web Automation

#` + (Math.floor(Math.random() * 90000000) + 10000000);
    return t;
}
