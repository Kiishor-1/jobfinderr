const sampleJobs = [
    {
        "title": "Frontend Developer",
        "skills": ["JavaScript", "React", "HTML", "CSS"],
        "jobType": "Full-Time",
        "site": "Remote",
        "salary": "₹600,000 - ₹900,000",
        "location": "Mumbai, India",
        "vacancies": 2,
        "description": "Build responsive web apps using React and modern JavaScript frameworks.",
        "postedDate": "2024-10-01",
        "duration": "12 months",
        "about": "A fast-growing tech startup focused on delivering high-quality web applications that enhance user experiences. We pride ourselves on our innovative solutions and commitment to excellence in the tech industry.",
        "aboutJob": {
            "description": "As a Frontend Developer, you'll collaborate with a dynamic team to build interactive user interfaces using React and other modern technologies, ensuring a seamless experience for users across various platforms.",
            "responsibility": [
                "Develop new user-facing features using React.js, ensuring they are optimized for performance and usability.",
                "Build reusable components and front-end libraries for future use, following best practices in coding and design.",
                "Ensure the technical feasibility of UI/UX designs by collaborating closely with designers and product managers to create intuitive interfaces.",
                "Optimize applications for maximum speed and scalability while maintaining high standards of code quality and maintainability."
            ]
        },
        "additionalInformation": "Flexible work hours and remote work options.",
        "company": "Tech Startup", // Added company field
        id: 1
    },
    {
        "title": "Backend Developer",
        "skills": ["Node.js", "MongoDB", "Express.js", "API Design"],
        "jobType": "Full-Time",
        "site": "Onsite",
        "salary": "₹800,000 - ₹1,200,000",
        "location": "Bengaluru, India",
        "vacancies": 3,
        "description": "Develop robust backend systems with Node.js and MongoDB, focusing on scalability and performance.",
        "postedDate": "2024-10-05",
        "duration": "12 months",
        "about": "A leading SaaS company providing enterprise-level solutions to a diverse clientele, known for our innovative approaches and commitment to quality in software development. We are dedicated to helping businesses achieve their goals through our powerful backend systems.",
        "aboutJob": {
            "description": "Join the backend team to design scalable APIs and handle large datasets, utilizing your expertise to drive technical solutions that meet client needs.",
            "responsibility": [
                "Design and implement RESTful APIs for internal and external use, ensuring they are robust and secure.",
                "Collaborate with front-end developers on integrating web applications, focusing on creating seamless connections between the backend and user interfaces.",
                "Optimize backend services for performance and scalability by analyzing current systems and making necessary adjustments.",
                "Maintain and troubleshoot backend services and databases, ensuring high availability and performance across all applications."
            ]
        },
        "additionalInformation": "Onsite gym and lunch facilities available.",
        "company": "SaaS Solutions Inc.", // Added company field
        id: 2
    },
    {
        "title": "Data Scientist",
        "skills": ["Python", "Machine Learning", "Data Analysis", "SQL"],
        "jobType": "Part-Time",
        "site": "Remote",
        "salary": "₹500,000 - ₹700,000",
        "location": "Chennai, India",
        "vacancies": 1,
        "description": "Analyze data and apply ML models to gain insights for strategic decision-making.",
        "postedDate": "2024-09-29",
        "duration": "6 months",
        "about": "A data-centric company providing solutions to global clients, specializing in extracting actionable insights from complex datasets. We pride ourselves on delivering data-driven results that help organizations thrive in their respective industries.",
        "aboutJob": {
            "description": "Work with the data science team to solve real-world problems through data analytics, contributing to impactful projects that drive business success.",
            "responsibility": [
                "Analyze large datasets to extract actionable insights that inform strategic business decisions and optimize operations.",
                "Develop predictive models using machine learning algorithms, ensuring they are accurate and effective in real-world scenarios.",
                "Collaborate with engineers to deploy models in production environments, working together to ensure reliability and performance.",
                "Communicate findings to stakeholders and decision-makers through clear and concise presentations, ensuring they understand the implications of the data."
            ]
        },
        "additionalInformation": "Opportunity to work on cutting-edge machine learning projects.",
        "company": "Data Insights Co.", // Added company field
        id: 3
    },
    {
        "title": "UI/UX Designer",
        "skills": ["Adobe XD", "Figma", "User Research", "Prototyping"],
        "jobType": "Full-Time",
        "site": "Onsite",
        "salary": "₹450,000 - ₹750,000",
        "location": "Delhi, India",
        "vacancies": 1,
        "description": "Design intuitive user interfaces and improve user experiences across various platforms.",
        "postedDate": "2024-10-03",
        "duration": "12 months",
        "about": "A design-focused agency helping brands enhance their digital presence through innovative design solutions. We believe in the power of user-centric design to create impactful experiences that resonate with users.",
        "aboutJob": {
            "description": "As a UI/UX Designer, you'll be responsible for creating user-centric designs and prototypes, contributing to projects that prioritize user satisfaction and engagement.",
            "responsibility": [
                "Conduct user research and evaluate user feedback, utilizing insights to inform design decisions and improve usability.",
                "Create wireframes, storyboards, user flows, and process flows, ensuring that all designs are aligned with project goals and user needs.",
                "Collaborate with developers to ensure a smooth user experience, maintaining open lines of communication throughout the design and development processes.",
                "Stay up-to-date with design trends and implement them in projects, continuously seeking ways to enhance our design practices."
            ]
        },
        "additionalInformation": "Work closely with product managers and developers.",
        "company": "Design Agency Ltd.", // Added company field
        id: 4
    },
    {
        "title": "DevOps Engineer",
        "skills": ["AWS", "Docker", "Kubernetes", "CI/CD"],
        "jobType": "Full-Time",
        "site": "Remote",
        "salary": "₹900,000 - ₹1,400,000",
        "location": "Hyderabad, India",
        "vacancies": 2,
        "description": "Manage cloud infrastructure and automate workflows to ensure operational efficiency.",
        "postedDate": "2024-10-07",
        "duration": "12 months",
        "about": "A cloud computing company helping enterprises streamline their IT operations through innovative solutions and expert guidance. We are committed to providing exceptional service and support to our clients as they transition to cloud-based environments.",
        "aboutJob": {
            "description": "Optimize deployment pipelines and manage cloud-based infrastructure, ensuring our systems are reliable, scalable, and secure.",
            "responsibility": [
                "Set up and manage cloud infrastructure on AWS, Azure, or GCP, ensuring best practices for security and performance are followed.",
                "Automate CI/CD pipelines to ensure smooth deployment processes, enhancing efficiency and reducing downtime.",
                "Collaborate with development teams to streamline operations and foster a culture of continuous improvement.",
                "Monitor system performance and ensure high availability, proactively addressing any issues that arise to minimize disruptions."
            ]
        },
        "additionalInformation": "Remote work with occasional travel to client locations.",
        "company": "Cloud Innovations Inc.", // Added company field
        id: 5
    },
    {
        "title": "Full Stack Developer",
        "skills": ["JavaScript", "React", "Node.js", "SQL", "REST APIs"],
        "jobType": "Full-Time",
        "site": "Onsite",
        "salary": "₹700,000 - ₹1,100,000",
        "location": "Pune, India",
        "vacancies": 3,
        "description": "Build full stack web applications using React and Node.js with a focus on performance and user experience.",
        "postedDate": "2024-09-28",
        "duration": "12 months",
        "about": "An innovative software solutions provider working with global clients to create tailored applications that meet their unique needs. We emphasize collaboration and creativity in our development process to deliver high-quality solutions.",
        "aboutJob": {
            "description": "Join the team to build end-to-end web solutions using cutting-edge technologies, taking ownership of projects and contributing to all stages of development.",
            "responsibility": [
                "Develop full stack web applications using React and Node.js, ensuring they are optimized for performance and user engagement.",
                "Build and maintain backend services and databases, following best practices to ensure security and reliability.",
                "Work closely with frontend developers to ensure seamless integration between frontend and backend components.",
                "Optimize applications for maximum speed and scalability, continuously seeking ways to improve performance and reduce latency."
            ]
        },
        "additionalInformation": "Cross-functional team experience with ample growth opportunities.",
        "company": "Solutions Provider Inc.", // Added company field
        id: 6
    },
    {
        "title": "Digital Marketing Specialist",
        "skills": ["SEO", "Content Marketing", "Social Media", "PPC"],
        "jobType": "Part-Time",
        "site": "Remote",
        "salary": "₹300,000 - ₹500,000",
        "location": "Kolkata, India",
        "vacancies": 2,
        "description": "Develop and execute online marketing strategies to enhance brand visibility and drive traffic.",
        "postedDate": "2024-10-10",
        "duration": "6 months",
        "about": "A leading marketing agency providing comprehensive digital marketing services to small and medium enterprises. Our team is passionate about delivering results-driven solutions that help our clients grow their online presence and achieve their business goals.",
        "aboutJob": {
            "description": "Work with the marketing team to strategize and implement campaigns that drive engagement and conversions, utilizing various online channels.",
            "responsibility": [
                "Manage SEO efforts, including keyword research, on-page optimization, and link building to improve search rankings.",
                "Create and manage content marketing initiatives, producing high-quality content that resonates with target audiences.",
                "Oversee social media channels, crafting engaging posts and managing online communities to enhance brand presence.",
                "Analyze campaign performance metrics and adjust strategies accordingly to optimize results and ensure maximum ROI."
            ]
        },
        "additionalInformation": "Opportunity to work on diverse projects with creative freedom.",
        "company": "Marketing Agency Group", // Added company field
        id: 7
    },
    {
        "title": "Mobile App Developer",
        "skills": ["Flutter", "Dart", "iOS", "Android"],
        "jobType": "Full-Time",
        "site": "Remote",
        "salary": "₹600,000 - ₹1,000,000",
        "location": "Ahmedabad, India",
        "vacancies": 2,
        "description": "Design and develop cross-platform mobile applications using Flutter.",
        "postedDate": "2024-10-12",
        "duration": "12 months",
        "about": "A leading tech company focused on mobile innovation, helping businesses build outstanding applications that engage users and drive success. We are committed to creating impactful mobile solutions that meet the needs of our clients.",
        "aboutJob": {
            "description": "Join the mobile development team to create user-friendly applications that perform well across various devices, ensuring a high-quality user experience.",
            "responsibility": [
                "Develop and maintain mobile applications using Flutter, ensuring they meet performance and usability standards.",
                "Collaborate with designers and product managers to define and implement app features that delight users.",
                "Troubleshoot and debug applications, addressing performance issues and enhancing app functionality.",
                "Stay updated on the latest mobile development trends and technologies to continuously improve our applications."
            ]
        },
        "additionalInformation": "Work in a collaborative and innovative environment with flexible schedules.",
        "company": "Mobile Solutions Ltd.", // Added company field
        id: 8
    },
];

export default sampleJobs;