import images from '../assets/images';

const callForChapterBooksData = [
    {
        id: 'iom-smart-healthcare-wiley',
        title: {
            text: "Internet of Medicine (IoM) For Smart Healthcare",
            image: images.cfc.productImgIoMSmartHealthcareWiley
        },
        publisher: 'Wiley',
        publisherLink: 'https://www.scrivenerpublishing.com/',
        projectedReleaseDate: 'December 2024',
        abstractSubmissionDeadline: '2 January 2024',
        abstractAcceptanceNotification: 'February 2024',
        categories: ['Healthcare', 'Technology', 'AI'],
        fullChapterSubmissionDeadline: '2 March 2024',
        chapterAcceptanceNotification: 'May 2024',
        descriptionParagraphs: ["This comprehensive book examines the internet of Medicine (IM), discussing its impact on healthcare delivery, patient outcomes, and chronic disease management. It addresses IoM's technological, ethical, and regulatory aspects, including AI and blockchain integration, while exploring its role in improving healthcare accessibility, education, and emergency response."],
        editors: [
            'abhishek-kumar',
            'narayan-vyas',
            'pramod-singh-rathore',
            'abhineet-anand',
            'pooja-dixit'
        ],
        chapters: [
            { index: 1, title: "The Impact of IoM on Healthcare Delivery and Patient Outcomes" },
            { index: 2, title: "Interoperability Standards and Protocols for IoM Devices and Systems" },
            { index: 3, title: "IoM-enabled Remote Patient Monitoring and Telemedicine" },
            { index: 4, title: "Personalized Medicine through IoM: Benefits and Challenges" },
            { index: 5, title: "IoM Applications in Chronic Disease Management" },
            { index: 6, title: "Ethics and Governance in the Age of IoM" },
            { index: 7, title: "Data Privacy and Security in IoM: Challenges and Solutions" },
            { index: 8, title: "Emerging Technologies in IoM: AI, Blockchain, and Beyond" },
            { index: 9, title: "The Role of IoM in Improving Healthcare Accessibility and Equity" },
            { index: 10, title: "IoM-enabled Precision Diagnostics and Treatment" },
            { index: 11, title: "IoM and the Future of Medical Education and Training" },
            { index: 12, title: "IoM and Public Health: Opportunities and Challenges" },
            { index: 13, title: "IoM in Emergency Medicine: Enhancing Response and Care" },
            { index: 14, title: "IoM-enabled Drug Development and Clinical Trials" },
            { index: 15, title: "IoM and the Evolving Regulatory Landscape: Balancing Innovation and Safety" }
        ],
        guidelines: [
            { title: "Citation Style", guideline: "APA (7th Edition)" },
            { title: "Formatting", guideline: "11 pt Times Roman, 1.5 line spacing" },
            {
                title: "Originality", guideline: "Plagiarism Under 10%, 0% AI Generated Content"
            },
            {
                title: "Headings",
                guideline: [
                    { heading: "Heading 1", details: "ALL BOLD CAPS" },
                    { heading: "Heading 2", details: "Bold Title Case" },
                    { heading: "Heading 3", details: "Bold Italic Title Case" },
                    { heading: "Heading 4", details: "Bold Italic Sentence case" },
                    { heading: "Heading 5", details: "Light Italic Sentence case" },
                    { heading: "Paragraphs", details: "Should be Numbered (1.1, 1.1.1, etc.)" }
                ]
            }
        ],
        isConsentFormRequired: true,
        consentFormLink: 'https://example.com/path_to_consent_form.pdf',
        consentFormName: 'Author\'s Agreement Form',
        consentFormMessage: 'This book requires a consent form. Please download it from the link below and upload it along with your final chapter. Upload a Word file of the consent form only; do not upload a scanned copy.',
        isAbstractSubmissionClosed: false,
        isFullChapterSubmissionClosed: false,
        submissionEmails: ['narayanvyas87@gmail.com']

    },
    {
        id: 'multimodal-data-fusion-wiley',
        title: {
            text: "Multimodal Data Fusion for Bioinformatics AI",
            image: images.cfc.productImgMultimodalDataFusionWiley
        },
        publisher: 'Wiley',
        publisherLink: 'https://www.scrivenerpublishing.com/',
        projectedReleaseDate: 'August 2024',
        abstractSubmissionDeadline: '2 January 2024',
        categories: ['Healthcare', 'Technology', 'AI'],
        abstractAcceptanceNotification: 'February 2024',
        fullChapterSubmissionDeadline: '2 March 2024',
        chapterAcceptanceNotification: 'May 2024',
        descriptionParagraphs: ["This book is an indispensable resource for anyone interested in how cutting-edge data fusion methods and the rapidly developing area of bioinformatics interact. Starting with the basics of integrating different data types, this book goes into the use of AI for processing and understanding complex 'omics' data, ranging from genomics to metabolomics. The revolutionary potential of AI techniques in bioinformatics is thoroughly addressed, including using neural networks, graph-based algorithms, single-cell RNA sequencing, and other cutting-edge issues."],
        editors: [
            'umesh-kumar-lilhore',
            'abhishek-kumar',
            'narayan-vyas',
            'sarita-simaiya',
            'vishal-dutt'
        ],
        chapters: [
            { index: 1, title: "Foundations of Multimodal Data Fusion" },
            { index: 2, title: "Omics Data Integration in AI Systems" },
            { index: 3, title: "Neural Networks in Genomic Data Fusion" },
            { index: 4, title: "Graph-based Methods for Biological Networks" },
            { index: 5, title: "Single-cell RNA Sequencing and AI" },
            { index: 6, title: "Phenotypic Data Fusion in Precision Medicine" },
            { index: 7, title: "Microbiome Data Fusion and Analysis" },
            { index: 8, title: "Evolutionary Computation in Bioinformatics" },
            { index: 9, title: "AI-driven Drug Discovery and Repurposing" },
            { index: 10, title: "Natural Language Processing in Biomedical Literature" },
            { index: 11, title: "Ethical Considerations in Bioinformatic AI" },
            { index: 12, title: "Time-series Analysis in Functional Genomics" },
            { index: 13, title: "Spatial Transcriptomics and Multimodal Fusion" },
            { index: 14, title: "Automated Machine Learning in Bioinformatics" },
            { index: 15, title: "Future Trends in Bioinformatics AI Integration" }
        ],
        guidelines: [
            { title: "Citation Style", guideline: "APA (7th Edition)" },
            { title: "Formatting", guideline: "11 pt Times Roman, 1.5 line spacing" },
            {
                title: "Originality", guideline: "Plagiarism Under 10%, 0% AI Generated Content"
            },
            {
                title: "Headings",
                guideline: [
                    { heading: "Heading 1", details: "ALL BOLD CAPS" },
                    { heading: "Heading 2", details: "Bold Title Case" },
                    { heading: "Heading 3", details: "Bold Italic Title Case" },
                    { heading: "Heading 4", details: "Bold Italic Sentence case" },
                    { heading: "Heading 5", details: "Light Italic Sentence case" },
                    { heading: "Paragraphs", details: "Should be Numbered (1.1, 1.1.1, etc.)" }
                ]
            }
        ],
        isConsentFormRequired: true,
        consentFormLink: 'https://example.com/path_to_consent_form.pdf',
        consentFormName: 'Author\'s Agreement Form',
        consentFormMessage: 'This book requires a consent form. Please download it from the link below and upload it along with your final chapter. Upload a Word file of the consent form only; do not upload a scanned copy.',
        isAbstractSubmissionClosed: false,
        isFullChapterSubmissionClosed: false,
        submissionEmails: ['narayanvyas87@gmail.com']
    },
    {
        id: 'secure-energy-wiley',
        title: {
            text: "Secure Energy Optimization: Leveraging IoT And AI For Enhanced Efficiency",
            image: images.cfc.productImgSecureEnergyWiley
        },
        publisher: 'Wiley',
        publisherLink: 'https://www.scrivenerpublishing.com/',
        projectedReleaseDate: 'August 2024',
        abstractSubmissionDeadline: '2 January 2024',
        categories: ['Healthcare', 'Technology', 'AI'],
        abstractAcceptanceNotification: 'February 2024',
        fullChapterSubmissionDeadline: '2 March 2024',
        chapterAcceptanceNotification: 'May 2024',
        descriptionParagraphs: ["Explore the synergy of IoT and AI in revolutionizing energy management and security. This comprehensive guide unveils the principles, applications, and challenges of integrating these technologies for efficient energy use. Discover real-world case studies, cybersecurity insights, and practical solutions to enhance energy efficiency and sustainability while ensuring a secure energy future."],
        editors: [
            'abhishek-kumar',
            'surbhi-bhatia-khan',
            'narayan-vyas',
            'vishal-dutt',
            'shakila-basheer'
        ],
        chapters: [
            { index: 1, title: "Introduction to Secure Energy Optimization" },
            { index: 2, title: "The Role of IoT and AI in Energy Efficiency" },
            { index: 3, title: "Understanding Energy Security Challenges" },
            { index: 4, title: "IoT and AI-Based Monitoring and Control Systems for Energy Optimization" },
            { index: 5, title: "Data Collection & Analysis for Secure Energy Optimization" },
            { index: 6, title: "Machine Learning Algorithms for Energy Efficiency Enhancement" },
            { index: 7, title: "Cybersecurity Measures for IoT-Enabled Energy Systems" },
            { index: 8, title: "Securing Communication Networks in Smart Grids" },
            { index: 9, title: "Privacy Protection in IoT-Based Energy Management" },
            { index: 10, title: "Predictive Analytics for Demand Response and Load Management" },
            { index: 11, title: "Dynamic Pricing and Energy Optimization Strategies" },
            { index: 12, title: "Real-Time Monitoring & Fault Detection in Energy Infrastructure" },
            { index: 13, title: "Energy Storage and Optimization Techniques" },
            { index: 14, title: "Integrating Renewable Energy Sources with IoT and AI" },
            { index: 15, title: "Case Studies: Successful Implementations of Secure Energy Optimization using IoT and AI" }
        ],
        guidelines: [
            { title: "Citation Style", guideline: "APA (7th Edition)" },
            { title: "Formatting", guideline: "11 pt Times Roman, 1.5 line spacing" },
            {
                title: "Originality", guideline: "Plagiarism Under 10%, 0% AI Generated Content"
            },
            {
                title: "Headings",
                guideline: [
                    { heading: "Heading 1", details: "ALL BOLD CAPS" },
                    { heading: "Heading 2", details: "Bold Title Case" },
                    { heading: "Heading 3", details: "Bold Italic Title Case" },
                    { heading: "Heading 4", details: "Bold Italic Sentence case" },
                    { heading: "Heading 5", details: "Light Italic Sentence case" },
                    { heading: "Paragraphs", details: "Should be Numbered (1.1, 1.1.1, etc.)" }
                ]
            }
        ],
        isConsentFormRequired: true,
        consentFormLink: 'https://example.com/path_to_consent_form.pdf',
        consentFormName: 'Consent Form',
        consentFormMessage: 'This book requires a consent form. Please download it from the link below and upload it along with your final chapter. Upload a Word file of the consent form only; do not upload a scanned copy.',
        isAbstractSubmissionClosed: true,
        isFullChapterSubmissionClosed: true,
        submissionEmails: ['narayanvyas87@gmail.com']
    },
    {
        id: 'iot-remote-sensing-precision-agriculture',
        title: {
            text: "IoT and Remote Sensing Technologies for Precision Agriculture",
            image: images.cfc.productImgIoTRadarAAP
        },
        publisher: 'Apple Academic Press',
        publisherLink: 'https://www.appleacademicpress.com/',
        projectedReleaseDate: 'May 2025',
        abstractSubmissionDeadline: '30 July 2024',
        categories: ['Agriculture', 'Technology', 'IoT'],
        abstractAcceptanceNotification: '30 August 2024',
        fullChapterSubmissionDeadline: '30 September 2024',
        chapterAcceptanceNotification: 'December 2024',
        descriptionParagraphs: [
            "IoT and Remote Sensing Technologies for Precision Agriculture offers a thorough exploration of how advanced technologies are transforming modern agriculture. This book covers the integration of Internet of Things (IoT) and remote sensing technologies, focusing on their applications and benefits for crop monitoring and yield prediction. The chapters build a solid foundation, beginning with an introduction to the basics of IoT and remote sensing, and then delve into core principles of crop monitoring and yield prediction within precision agriculture."
        ],
        editors: [
            'sartajvir-singh',
            'narayan-vyas',
            'dankan-gowda-v'
        ],
        chapters: [
            { index: 1, title: "Introduction to IoT and Remote Sensing in Agriculture" },
            { index: 2, title: "Fundamentals of Crop Monitoring and Yield Prediction for Precision Agriculture" },
            { index: 3, title: "Integrating IoT Solutions for Smart Farming" },
            { index: 4, title: "Remote Sensing Technologies for Precision Agriculture and Crop Yield Estimation" },
            { index: 5, title: "Optical and Microwave Remote Sensing Applications in Crop Yield Prediction" },
            { index: 6, title: "Detection of Soil Moisture Changes using Remote Sensing Dataset" },
            { index: 7, title: "Multi-Spectral and Hyper-Spectral Imaging for Precise Change Detection" },
            { index: 8, title: "Soil Health Monitoring Solutions using IoT, Remote Sensing, and Artificial Intelligence" },
            { index: 9, title: "Harnessing the Potential of Drones in Agriculture: Enhancing Crop Surveillance" },
            { index: 10, title: "Real-time Crop Monitoring Solutions with Advanced IoT Networks" },
            { index: 11, title: "Pest and Disease Detection using Remote Sensing and IoT" },
            { index: 12, title: "Climate and Weather Monitoring Systems for Agricultural Applications" },
            { index: 13, title: "AI and Blockchain-Powered Smart Solutions for Precision Agriculture" },
            { index: 14, title: "Challenges and Solutions for Sustainable Agriculture with Remote Sensing and IoT" },
            { index: 15, title: "Future Trends in IoT and Remote Sensing Integration for Precision Agriculture" }
        ],
        guidelines: [
            { title: "Citation Style", guideline: "APA (7th Edition)" },
            { title: "Formatting", guideline: "11 pt Times Roman, 1.5 line spacing" },
            {
                title: "Originality", guideline: "Plagiarism Under 10%, 0% AI Generated Content"
            },
            {
                title: "Headings",
                guideline: [
                    { heading: "Heading 1", details: "ALL BOLD CAPS" },
                    { heading: "Heading 2", details: "Bold Title Case" },
                    { heading: "Heading 3", details: "Bold Italic Title Case" },
                    { heading: "Heading 4", details: "Bold Italic Sentence case" },
                    { heading: "Heading 5", details: "Light Italic Sentence case" },
                    { heading: "Paragraphs", details: "Should be Numbered (1.1, 1.1.1, etc.)" }
                ]
            }
        ],
        isConsentFormRequired: true,
        consentFormLink: 'https://example.com/path_to_consent_form.pdf',
        consentFormName: 'Author\'s Agreement Form',
        consentFormMessage: 'This book requires a consent form. Please download it from the link below and upload it along with your final chapter. Upload a Word file of the consent form only; do not upload a scanned copy.',
        isAbstractSubmissionClosed: false,
        isFullChapterSubmissionClosed: false,
        submissionEmails: ['narayanvyas87@gmail.com']
    },
    {
        id: 'radar-ai-remote-sensing',
        title: {
            text: "RADAR Remote Sensing Data Analysis with Artificial Intelligence",
            image: images.cfc.productImgRadarAiDegruyter
        },
        publisher: 'De Gruyter',
        publisherLink: 'https://www.degruyter.com/',
        projectedReleaseDate: '2025',
        abstractSubmissionDeadline: '5 August 2024',
        categories: ['Remote Sensing', 'AI', 'Technology'],
        abstractAcceptanceNotification: '15 September 2024',
        fullChapterSubmissionDeadline: '15 November 2024',
        chapterAcceptanceNotification: 'May 2025',
        descriptionParagraphs: [
            "RADAR Remote Sensing Data Analysis with Artificial Intelligence offers a comprehensive exploration into the innovative integration of RADAR technology with Artificial Intelligence. This pivotal resource dives into the essentials of RADAR remote sensing, highlighting how AI is reshaping data interpretation and application across various sectors."
        ],
        editors: [
            'alessandro-vinciarelli',
            'sartajvir-singh',
            'narayan-vyas',
            'mona-as-ali'
        ],
        chapters: [
            { index: 1, title: "Introduction to RADAR Remote Sensing and AI" },
            { index: 2, title: "Evolution of various RADAR missions and sensors" },
            { index: 3, title: "Fundamentals of active and passive microwave remote sensing" },
            { index: 4, title: "Potential applications of RADAR remote sensing with AI" },
            { index: 5, title: "Big data analysis of RADAR remote sensing: Challenges and Solutions" },
            { index: 6, title: "Advanced Machine/Deep Learning algorithms for RADAR remote sensing" },
            { index: 7, title: "Fusion of SAR/Scatterometer and Optical Remote Sensing: Enhanced Classification and Change Detection" },
            { index: 8, title: "Role of emerging tool and technologies like IoT in enhancing RADAR capabilities" },
            { index: 9, title: "Deep Learning in SAR: Enhancing Image Interpretation" },
            { index: 10, title: "Emerging Trends in AI for RADAR remote sensing" },
            { index: 11, title: "Urban Infrastructure Monitoring with AI and RADAR-based Remote Sensing" },
            { index: 12, title: "Agricultural Insights: SAR for Crop Yield Estimation and Soil Monitoring" },
            { index: 13, title: "Disaster Management: Leveraging SAR for Environmental Sustainability" },
            { index: 14, title: "Emerging AI-enabled RADAR Applications in real-time scenarios" },
            { index: 15, title: "Future Scope of RADAR Remote Sensing with AI" }
        ],
        guidelines: [
            { title: "Citation Style", guideline: "APA (7th Edition)" },
            { title: "Formatting", guideline: "11 pt Times Roman, 1.5 line spacing" },
            {
                title: "Originality", guideline: "Plagiarism Under 10%, 0% AI Generated Content"
            },
            {
                title: "Headings",
                guideline: [
                    { heading: "Heading 1", details: "ALL BOLD CAPS" },
                    { heading: "Heading 2", details: "Bold Title Case" },
                    { heading: "Heading 3", details: "Bold Italic Title Case" },
                    { heading: "Heading 4", details: "Bold Italic Sentence case" },
                    { heading: "Heading 5", details: "Light Italic Sentence case" },
                    { heading: "Paragraphs", details: "Should be Numbered (1.1, 1.1.1, etc.)" }
                ]
            }
        ],
        isConsentFormRequired: false,
        consentFormLink: 'https://example.com/path_to_consent_form.pdf',
        consentFormName: 'Author\'s Agreement Form',
        consentFormMessage: 'This book requires a consent form. Please download it from the link below and upload it along with your final chapter. Upload a Word file of the consent form only; do not upload a scanned copy.',
        isAbstractSubmissionClosed: false,
        isFullChapterSubmissionClosed: false,
        submissionEmails: ['narayanvyas87@gmail.com']
    },

];

export default callForChapterBooksData;
