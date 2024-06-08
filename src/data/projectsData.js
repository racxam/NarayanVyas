import images from '../assets/images';

const projects = [
    {
        id: 'track-my-care',
        images: [images.projects.trackMyCareImg1, images.projects.trackMyCareImg2],
        featuredImage: images.projects.trackMyCareImg1,
        title: 'Track My Care',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.dartIcon, name: 'Dart' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.javascriptIcon, name: 'JavaScript' },
            { icon: images.icons.nodeIcon, name: 'NodeJS' },
        ],
        fieldsToShow: ['duration', 'client', 'start_date', 'status', 'budget'],
        projectMetaData: [
            { id: 'location', title: "Location", value: "Remote" },
            { id: 'duration', title: "Duration", value: "6 months" },
            { id: 'start_date', title: "Start Date", value: "2022-05-01" },
            { id: 'completion_date', title: "Completion Date", value: "2022-09-01" },
            { id: 'client', title: "Client", value: "Michel Jordan" },
            { id: 'status', title: "Status", value: "Completed" },
            { id: 'project_manager', title: "Project Manager", value: "Narayan Vyas" },
            { id: 'budget', title: "Budget", value: "$20,000" }
        ],
        researchOutcomeDois: [],
        featuredDescription: 'For Easy Access of Health Record',
        descriptionParagraphs: [
            {
                title: "",
                content: "The patient experience on Track My Care is designed for simplicity and control. Users can access a centralized dashboard showcasing all their medical reports. Secure sharing with doctors is just a few clicks away, eliminating the need for physical copies. Request for new reports from other clinics can be done directly through the platform, streamlining the process and empowering patients to actively manage their healthcare journey."
            },
            {
                title: "Admin Side",
                content: "Track My Care's secure admin interface empowers them to manage clinic connections and user access. This includes adding and configuring clinic APIs, facilitating secure data exchange. The platform provides real-time usage data and insights, enabling Track My Care to understand user trends and optimize the platform for a seamless user experience."
            },
            {
                title: "Outcome",
                content: "Track My Care envisions empowered patients managing their health information seamlessly. Effortless report access, secure sharing, and streamlined requests will improve communication and efficiency across the healthcare ecosystem. Track My Care aims to become a leader in health information management, fostering trust and collaboration for a better healthcare experience for all."
            }
        ],
    },
    {
        id: 'manuka-services',
        images: [images.projects.manukaImg1, images.projects.manukaImg2],
        featuredImage: images.projects.manukaImg1,
        title: 'Manuka Services',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.dartIcon, name: 'Dart' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.nodeIcon, name: 'NodeJS' },
            { icon: images.icons.mySQLIcon, name: 'MySQL' },
        ],
        fieldsToShow: ['duration', 'client', 'start_date', 'status', 'budget'],
        projectMetaData: [
            { id: 'location', title: "Location", value: "Remote" },
            { id: 'duration', title: "Duration", value: "6 months" },
            { id: 'start_date', title: "Start Date", value: "2022-10-01" },
            { id: 'completion_date', title: "Completion Date", value: "2023-04-01" },
            { id: 'client', title: "Client", value: "Rajiv Sharma" },
            { id: 'status', title: "Status", value: "Completed" },
            { id: 'project_manager', title: "Project Manager", value: "Narayan Vyas" },
            { id: 'budget', title: "Budget", value: "$15,000" }
        ],
        researchOutcomeDois: [],
        featuredDescription: 'For Easy Access to Salon Services',
        descriptionParagraphs: [
            {
                title: "",
                content: "Manuka Services, a web and mobile app, simplifies salon appointment booking. Customers browse nearby salons, stylist profiles, and services, booking appointments effortlessly. Salon owners can create detailed profiles showcasing services, pricing, and stunning photos. They can also manage appointments and schedules."
            },
            {
                title: "About the app",
                content: "This user-friendly app features an intuitive interface for both customers and salon owners. Customers can search for salons based on location, services, stylist expertise, and ratings. Salon owners can list services with descriptions, pricing, and photos, and manage appointments"
            },
            {
                title: "",
                content: "Manuka Services highlights the skills in UI/UX design, front-end and back-end development, and responsive design for web and mobile platforms. It represents the commitment to creating user-centric applications that address real-world problems."
            }
        ],
    },
    {
        id: 'worldotutor',
        images: [images.projects.worldOTutorImg1, images.projects.worldOTutorImg2],
        featuredImage: images.projects.worldOTutorImg1,
        title: 'WorldOTutor',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.dartIcon, name: 'Dart' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.nodeIcon, name: 'NodeJS' },
            { icon: images.icons.googleCloudIcon, name: 'Google Cloud' },
        ],
        fieldsToShow: ['duration', 'client', 'start_date', 'status', 'budget'],
        projectMetaData: [
            { id: 'location', title: "Location", value: "Remote" },
            { id: 'duration', title: "Duration", value: "5 months" },
            { id: 'start_date', title: "Start Date", value: "2023-01-01" },
            { id: 'completion_date', title: "Completion Date", value: "2023-06-01" },
            { id: 'client', title: "Client", value: "Emil Williams" },
            { id: 'status', title: "Status", value: "Completed" },
            { id: 'project_manager', title: "Project Manager", value: "Narayan Vyas" },
            { id: 'budget', title: "Budget", value: "$30,000" }
        ],
        researchOutcomeDois: [],
        featuredDescription: 'Explore Inspiring Online Courses',
        descriptionParagraphs: [
            {
                title: "",
                content: "WorldOTutor is a web app that connects students with tutors around the world. Students can find qualified tutors in various subjects, skills and hobbies, all from the comfort of their own homes. The platform offers a user-friendly experience with a focus on flexibility. Students can easily search for tutors, schedule lessons at their convenience, and even reschedule or cancel if needed."
            },
            {
                title: "Initial Challenges",
                content: "Launching WorldOTutor requires establishing trust with both students and tutors.  This includes ensuring robust security measures, verifying tutor qualifications, and fostering a user-friendly platform that prioritizes clear communication and a positive learning experience."
            },
            {
                title: "Strategy",
                content: "WorldOTutor's strategy centers on building a strong user base through targeted marketing for students and aggressive tutor recruitment with a focus on verification and diverse expertise. This two-pronged approach ensures a rich learning environment that caters to a wide range of student needs."
            }
        ],
    },
    {
        id: 'scusi-now',
        images: [images.projects.scusiNowImg1, images.projects.scusiNowImg2],
        featuredImage: images.projects.scusiNowImg1,
        title: 'ScusiNow',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.dartIcon, name: 'Dart' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.javascriptIcon, name: 'JavaScript' },
            { icon: images.icons.mySQLIcon, name: 'MySQL' }
        ],
        fieldsToShow: ['duration', 'client', 'start_date', 'status', 'budget'],
        projectMetaData: [
            { id: 'location', title: "Location", value: "Remote" },
            { id: 'duration', title: "Duration", value: "7 months" },
            { id: 'start_date', title: "Start Date", value: "2023-03-01" },
            { id: 'completion_date', title: "Completion Date", value: "2023-10-01" },
            { id: 'client', title: "Client", value: "Wincent Philips" },
            { id: 'status', title: "Status", value: "Ongoing" },
            { id: 'project_manager', title: "Project Manager", value: "Narayan Vyas" },
            { id: 'budget', title: "Budget", value: "$50,000" }
        ],
        researchOutcomeDois: [],
        featuredDescription: 'A SaaS app with modern technologies',
        descriptionParagraphs: [
            {
                title: "",
                content: "Craving that perfect meal? ScusiNow puts the power of choice at your fingertips. Browse menus from a variety of restaurants, all conveniently located in one place. Order your favorites directly through the platform for dine in or pickup – a few clicks and you're good to go!"
            },
            {
                title: "",
                content: "ScusiNow goes beyond just online ordering. It's a comprehensive POS system designed to streamline your operations. Manage orders, employees, and revenue effortlessly. Gain valuable insights with real-time dashboards and keep your menus updated with ease. Tailor flexible subscription plans to suit each restaurant's needs, ensuring a thriving marketplace for both you and your employees."
            },
            {
                title: "Initial Challenges",
                content: "ScusiNow faces initial hurdles in attracting both diners and restaurants. Encouraging user adoption on both sides requires building trust and brand awareness. Additionally, integrating with diverse restaurant systems and ensuring data security will be crucial for establishing ScusiNow as a reliable and efficient platform."
            },
            {
                title: "Strategy",
                content: "ScusiNow will prioritize attracting restaurants with a strong dine-in and takeout presence.  Offering marketing partnerships and commission-based incentives can encourage restaurant adoption.  The platform will prioritize user-friendliness and focus on features that enhance the dine-in experience, such as table reservations and digital menus. Maintaining robust security features will solidify ScusiNow's value proposition within the competitive dine-in and takeout market."
            }
        ],
    },
];

export default projects;
