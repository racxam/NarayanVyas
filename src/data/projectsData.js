// projectsData.js
import images from '../assets/images';

const projects = [
    {
        id: '1',
        images: [images.projects.projectImg1, images.projects.projectImg2, images.projects.projectImg3],
        featuredImage: images.projects.projectImg1,
        title: 'Kwizzle',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.javascriptIcon, name: 'JavaScript' }
        ],
        location: 'Remote',
        duration: '4 months',
        startDate: '2022-05-01',
        completionDate: '2022-09-01',
        client: 'Client A',
        researchOutcomeDois: [],
        featuredDescription: 'Kwizzle is a quiz app that uses API, Flutter, and Firebase for backend services.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Completed',
        projectManager: 'John Doe',
        budget: '$40,000'
    },
    {
        id: '2',
        images: [images.projects.projectImg2, images.projects.projectImg3, images.projects.projectImg4],
        featuredImage: images.projects.projectImg2,
        title: 'TakeMyPark',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.javascriptIcon, name: 'JavaScript' }
        ],
        location: 'Remote',
        duration: '6 months',
        startDate: '2022-10-01',
        completionDate: '2023-04-01',
        client: 'Client B',
        researchOutcomeDois: [],
        featuredDescription: 'TakeMyPark is a parking space sharing app that utilizes Flutter, Firebase, and Firebase Messaging.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Completed',
        projectManager: 'Jane Smith',
        budget: '$60,000'
    },
    {
        id: '3',
        images: [images.projects.projectImg3, images.projects.projectImg4, images.projects.projectImg1],
        featuredImage: images.projects.projectImg3,

        title: 'Project Three',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.javascriptIcon, name: 'JavaScript' }
        ],
        location: 'Remote',
        duration: '5 months',
        startDate: '2023-01-01',
        completionDate: '2023-06-01',
        client: 'Client C',
        researchOutcomeDois: [],
        featuredDescription: 'A comprehensive mobile app development project using Flutter and Firebase.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Completed',
        projectManager: 'Emily Johnson',
        budget: '$50,000'
    },
    {
        id: '4',
        images: [images.projects.projectImg4, images.projects.projectImg1, images.projects.projectImg2],
        featuredImage: images.projects.projectImg4,
        title: 'Project Four',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.javascriptIcon, name: 'JavaScript' }
        ],
        location: 'Remote',
        duration: '7 months',
        startDate: '2023-03-01',
        completionDate: '2023-10-01',
        client: 'Client D',
        researchOutcomeDois: [],
        featuredDescription: 'An extensive project to build a SaaS application using modern web technologies.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Ongoing',
        projectManager: 'David Taylor',
        budget: '$150,000'
    },
    {
        id: '5',
        images: [images.projects.projectImg4, images.projects.projectImg1, images.projects.projectImg2],
        featuredImage: images.projects.projectImg4,
        title: 'Project Five',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.javascriptIcon, name: 'JavaScript' }
        ],
        location: 'Remote',
        duration: '7 months',
        startDate: '2023-03-01',
        completionDate: '2023-10-01',
        client: 'Client D',
        researchOutcomeDois: [],
        featuredDescription: 'An extensive project to build a SaaS application using modern web technologies.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Ongoing',
        projectManager: 'David Taylor',
        budget: '$150,000'
    },
    {
        id: '6',
        images: [images.projects.projectImg4, images.projects.projectImg1, images.projects.projectImg2],
        featuredImage: images.projects.projectImg4,
        title: 'Project six',
        techStack: [
            { icon: images.icons.flutterIcon, name: 'Flutter' },
            { icon: images.icons.firebaseIcon, name: 'Firebase' },
            { icon: images.icons.javascriptIcon, name: 'JavaScript' }
        ],
        location: 'Remote',
        duration: '7 months',
        startDate: '2023-03-01',
        completionDate: '2023-10-01',
        client: 'Client D',
        researchOutcomeDois: [],
        featuredDescription: 'An extensive project to build a SaaS application using modern web technologies.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Ongoing',
        projectManager: 'David Taylor',
        budget: '$150,000'
    }
];

export default projects;
