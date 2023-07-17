
window.signupInfo = {
	email: `cvv${emailNumber}@metagon.online`,
	// email: `dvv${emailNumber}@valv.sbs`,
	password: "qweQWE123!@#`",
	category: "automation",
    emailUsername: "admin@metagon.online",
	// emailUsername: "valloonupwork@valv.sbs",
	emailPassword: "qweQWE123!@#`",
	firstName: "Toran",
	lastName: "Sancakli",
	country: "Turkey",
	photoFiilename: "V-automation.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
	t.profileTitle = "Automation Specialist | Web & Desktop | Web Scraping | Data Processing";
	t.address = {
		"street": "15, Mudanya Caddesi",
		"state": "Istanbul",
		"city": "Istanbul",
		"zip": "34959",
		"additionalInfo": null,
		"country": "Turkey",
		"address": null
	};
	t.phoneNumber = "2423######".replace(/#/g, () => Math.floor(Math.random() * 10));
	t.rate = 25;
	t.englishLevel = "natl";
	t.employmentHistory = [
		{
			"companyName": "NETAŞ",
			"jobTitle": "Digital Transformation Manager",
			"role": null,
			"city": null,
			"startMonth": "01",
			"endMonth": "12",
			"isCurrentPosition": false,
			"country": "TUR",
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
			"startMonth": "07",
			"endMonth": "12",
			"isCurrentPosition": false,
			"country": "TUR",
			"startYear": "2015",
			"endYear": "2018",
			"description": "• SAP HANA Project Manager\n• NETAŞ SAP HANA Lead Project Manager\n• Business Process Design & Improvement\n• Robotic Process Automation & Artificial Intelligence Applications",
			"index": 1
		},
		{
			"companyName": "BDH",
			"jobTitle": "Process Improvement & Digital Transformation Manager",
			"role": null,
			"city": null,
			"startMonth": "07",
			"endMonth": "06",
			"isCurrentPosition": false,
			"country": "TUR",
			"startYear": "2013",
			"endYear": "2015",
			"description": "• Corporate Change Manager & Digital Transformation Leader\n• Business Process Design & Improvement\n• Project Management of Cutting Edge Technologies:\no Robotic Process Automation : UiPath, Self-Developed RPA Tool in Selenium Platform\no Artificial Intelligence & Machine Learning : Amazon Web Services\n• Corporate Analytic Transformation (PowerBI)",
			"index": -1
		},
		{
			"companyName": "Turcom Technology",
			"jobTitle": "Digital Transformation and Corporate Development Manager",
			"role": null,
			"city": null,
			"startMonth": "02",
			"endMonth": "04",
			"isCurrentPosition": false,
			"country": "TUR",
			"startYear": "2011",
			"endYear": "2013",
			"description": "• Digital Transformation Manager\n• MS CRM Development Unit Manager\n• Human Resources Unit Manager (Deputy)\n\nResponsibilities:\n• Corporate Change Management\n• Digital Transformation Leader\n• Business Process Improvement\n• Organizational Development\n• Service Management Projects (ITIL Based)\n• Optimization & Cost Reduction Projects\n• ERP, CRM, Service Management and Project Management tool projects",
			"index": -1
		}
	];
	t.educations = [
		{
			"institutionName": "Bahçesehir Üniversitesi",
			"standardizedInstitutionUid": "480116276201422848",
			"areaOfStudy": "Computer science",
			"standardizedAreaOfStudyUid": "482305184288899086",
			"degree": "Master of Information Technology (MIT)",
			"standardizedDegreeUid": "1156532281762140160",
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
			"institutionName": "Istanbul Üniversitesi",
			"standardizedInstitutionUid": "480116276360806432",
			"areaOfStudy": "Computer science",
			"standardizedAreaOfStudyUid": "482305184288899086",
			"degree": "Bachelor of Computer Science (BCompSc)",
			"standardizedDegreeUid": "1156532285526163456",
			"dateStartedYear": {
				"name": "2002",
				"uid": "2002",
				"value": "2002"
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
			"uid": "996364628025274380",
			"skill": "c#",
			"prettyName": "C#",
			"prefLabel": "C#",
			"label": "C#"
		},
		{
			"uid": "996364628025274386",
			"skill": "python",
			"prettyName": "Python",
			"prefLabel": "Python",
			"label": "Python"
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
			"uid": "1031626717771841536",
			"skill": "autohotkey",
			"prettyName": "AutoHotKey",
			"prefLabel": "AutoHotKey",
			"label": "AutoHotKey"
		},
		{
			"uid": "1031626791797112832",
			"skill": "uipath",
			"prettyName": "UiPath",
			"prefLabel": "UiPath",
			"label": "UiPath"
		},
		{
			"uid": "1031626758708248576",
			"skill": "microsoft-flow",
			"prettyName": "Microsoft Power Automate",
			"prefLabel": "Microsoft Power Automate",
			"label": "Microsoft Power Automate"
		},
		{
			"uid": "1484275374520717312",
			"skill": "test-automation-1",
			"prettyName": "Test Automation",
			"prefLabel": "Test Automation",
			"label": "Test Automation"
		},
		{
			"uid": "1031626728333099008",
			"skill": "crawlers",
			"prettyName": "Web Crawling",
			"prefLabel": "Web Crawling",
			"label": "Web Crawling"
		},
		{
			"uid": "1031626784557744128",
			"ontologyId": "upwork:systemautomation",
			"prefLabel": "System Automation",
			"parentSkillUid": null
		},
		{
			"uid": "1225465952591908864",
			"ontologyId": "upwork:personalcomputer",
			"prefLabel": "Personal Computer",
			"parentSkillUid": null
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
			"uid": "531770282584862724",
			"name": "Data Entry & Transcription Services",
			"slug": null
		},
		{
			"uid": "531770282584862725",
			"name": "Virtual Assistance",
			"slug": null
		},
		{
			"uid": "531770282593251330",
			"name": "Data Analysis & Testing",
			"slug": null
		},
		{
			"uid": "531770282593251331",
			"name": "Data Extraction/ETL",
			"slug": null
		},
		{
			"uid": "531770282589057038",
			"name": "Data Mining & Management",
			"slug": null
		},
		{
			"uid": "531770282589057031",
			"name": "QA Testing",
			"slug": null
		}
	];

	t.profileOverview = `Over 10 years experience in various programming for smart automation applications.
Please contact if you need:

💻 Programming & Automation
• Languages: Python, JavaScript, C#, Java/Kotlin
• OS Scripting: Bash, Zsh, Powershell, Windows CMD
• AutoIt Desktop Automation
• Microsoft Power Automate
• UiPath Cloud Automation with AI
• No-Code Automation Services: Integromat, Zapier
• Web Automation with Chrome Extension (JavaScript + UserScript)
• Web Automation with Selenium/Puppeteer (JavaScript + Python + C#)
• Telegram bot, Discord bot
• Trading bot

📊 Data Scraping, Crawling, Collecting & Processing
• Data Scraping: Requests, Scrapy, BeautifulSoup, Selenium, Puppeteer, HtmlAgilityPack ScraperAPI
• Data Extraction and Conversion: JSON, XML, CSV, XLS/XLSX, Google Sheet
• API Integration: REST, SOAP, GraphQL, WebSocket/Wocket.IO

💾 Database and Spreadsheet Management
• Databases: SQL, MySQL/MariaDB, PostgreSQL, SQLite, PostgreSQL, Microsoft SQL Server, Oracle Database, Redis
• Spreadsheet Development: Microsoft Excel, Google Sheet, LibreOffice
• Cloud Services: Amazon RDS, Google BigQuery, Google Drive, Firebase Storage, Firebase Realtime Database, Firebase Cloud Firestore

☁️ Deployment & Cloud Services
• App Deployment: Docker, AWS Lambda, AWS Elastic Beanstalk, AWS Amplify, Heroku, Google Cloud Platform
• Cloud Services: DigitalOcean, Vultr, Linode, AWS EC2

Please don't hesitate to contact me with any questions or for a quote! I look forward to working with you to realize your ideas and needs!

#` + (Math.floor(Math.random() * 90000000) + 10000000);
	return t;
}
