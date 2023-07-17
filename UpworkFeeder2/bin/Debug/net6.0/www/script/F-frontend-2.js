
window.signupInfo = {
	email: `cvf${emailNumber}@metagon.online`,
	// email: `dvf${emailNumber}@valv.sbs`,
	password: "qweQWE123!@#`",
	category: "frontend-2",
    emailUsername: "admin@metagon.online",
	// emailUsername: "valloonupwork@valv.sbs",
	emailPassword: "qweQWE123!@#`",
	firstName: "Paulo",
	lastName: "Jimenez",
	country: "Colombia",
	photoFiilename: "F-frontend-2.jpg",
};

// setProfile(window.$nuxt.$store._vm.$data.$$state['mini-profile']);
function setProfile(t) {
    t ??= {};
	t.profileTitle = "Frontend Developer | Responsive Design | HTML/CSS | Javascript | WebGL";
	t.address = {
		"street": "Cr 29 No. 27-15, C.P 76534",
		"state": "VAC",
		"city": "Palmira",
		"zip": "",
		"additionalInfo": null,
		"country": "Colombia",
		"address": null
	};
	t.phoneNumber = "22######".replace(/#/g, () => Math.floor(Math.random() * 10));
	t.rate = 25;
	t.englishLevel = "natl";
	t.employmentHistory = [
		{
			"companyName": "ThinkBox",
			"jobTitle": "Frontend Developer(Full time - Remote)",
			"role": null,
			"city": null,
			"startMonth": "03",
			"endMonth": null,
			"isCurrentPosition": true,
			"country": "COL",
			"startYear": "2022",
			"endYear": null,
			"description": "Worked on Frontend Development\n- React.js, Redux, MUI, Customize the components.",
			"index": -1
		},
		{
			"companyName": "tinkko.com",
			"jobTitle": " Frontend Developer",
			"role": null,
			"city": null,
			"startMonth": "02",
			"endMonth": "12",
			"isCurrentPosition": false,
			"country": "COL",
			"startYear": "2019",
			"endYear": "2021",
			"description": "Tinkko is a Colombian e-commerce platform that offers a wide range of products including electronics, home appliances, and fashion items.\n\n• Successfully launched a new rewards program feature that increased customer engagement and retention by 20%.\n• Improved website loading times by 30% through optimizations to image sizes and caching strategies.\n• Impelmented a new checkout flow that reduced cart abandonment rates by 15%\n• Led a redesign of the product detail page that resulted in a 10% increase in conversion rates",
			"index": 1
		},
		{
			"companyName": "LM Estudio de software",
			"jobTitle": "WordPress developer",
			"role": null,
			"city": null,
			"startMonth": "07",
			"endMonth": "06",
			"isCurrentPosition": false,
			"country": "COL",
			"startYear": "2017",
			"endYear": "2019",
			"description": "Assembly and maintenance of web applications\nCSS layout\nDebugging front for code inspection and improvement\nExperience in creating and scaling e-commerce\nManagement of design patterns and web architecture",
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
			"institutionName": "Universidad Santiago de Cali",
			"standardizedInstitutionUid": "480116275995901987",
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
			"uid": "1052162208999198724",
			"skill": "wordpress",
			"prettyName": "WordPress",
			"prefLabel": "WordPress",
			"label": "WordPress"
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
			"uid": "1031626795211276288",
			"skill": "web-programming",
			"prettyName": "Web Development",
			"prefLabel": "Web Development",
			"label": "Web Development"
		},
		{
			"uid": "1031626740031012864",
			"skill": "frontend-development",
			"prettyName": "Front-End Development",
			"prefLabel": "Front-End Development",
			"label": "Front-End Development"
		},
		{
			"uid": "1031626795181916160",
			"skill": "web-design",
			"prettyName": "Web Design",
			"prefLabel": "Web Design",
			"label": "Web Design"
		},
		{
			"uid": "1031626795068669952",
			"skill": "webgl",
			"prettyName": "WebGL",
			"prefLabel": "WebGL",
			"label": "WebGL"
		},
		{
			"uid": "996364628025274389",
			"skill": "typescript",
			"prettyName": "TypeScript",
			"prefLabel": "TypeScript",
			"label": "TypeScript"
		},
		{
			"uid": "996364628025274385",
			"skill": "php",
			"prettyName": "PHP",
			"prefLabel": "PHP",
			"label": "PHP"
		},
		{
			"uid": "1031626753368899584",
			"skill": "laravel-framework",
			"prettyName": "Laravel",
			"prefLabel": "Laravel",
			"label": "Laravel"
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
			"uid": "1517518458442309632",
			"name": "Blockchain, NFT & Cryptocurrency",
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
			"uid": "531770282589057029",
			"name": "Web & Mobile Design",
			"slug": null
		},
		{
			"uid": "531770282589057031",
			"name": "QA Testing",
			"slug": null
		},
		{
			"uid": "531770282589057030",
			"name": "Product Management",
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

	t.profileOverview = `Welcome to my profile!

I am a highly experienced software developer with 8 years of professional experience in web development.
I am dedicated to making the software development process as easy and smooth as driving a car, ensuring efficient and user-friendly solutions.

Here are some key aspects of my expertise:

💻 Software Development: I have a strong command of HTML/CSS, Javascript/Typescript, Node.js, Express.js, Nest.js, React, Angular, Vue.js, Laravel, and PHP.
With proficiency in these technologies, I can develop robust and scalable web applications that meet your specific requirements.

☁️ Cloud: I am well-versed in working with cloud platforms such as AWS, GCP, and Azure.
I can leverage the power of these platforms to deploy and manage applications effectively, ensuring optimal performance and scalability.

🔗 API Development: I have a deep understanding of RESTful architecture, JSON, SOAP, XML, GraphQL and Websocket/Socket.io.
I can design and implement secure and efficient APIs that enable seamless communication between different systems.

🗄️ Database: I have experience working with various databases, including MongoDB, PostgreSQL, MySQL, and more.
I can design efficient database structures and implement data models to ensure reliable data storage and retrieval.

🚀 Agile Methodology: I thrive in an agile development environment, where I can set clear objectives and work towards both short-term and long-term goals.
I believe in effective planning, collaboration, and continuous improvement to deliver successful projects.

I am currently seeking opportunities that will allow me to grow my skills, take on new challenges, and unleash my creativity as a developer.
I am passionate about what I do and eager to contribute to a team that values innovation and excellence.

If you're looking for full-stack services in software development, I would be thrilled to hear from you.
Let's collaborate and create exceptional solutions together.

Thank you for visiting my profile, and I look forward to connecting with you soon!.

#` + (Math.floor(Math.random() * 90000000) + 10000000);
	return t;
}
