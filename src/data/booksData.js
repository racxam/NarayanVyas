import images from '../assets/images';

const booksData = [
    {
        id: 'ai-driven-alzheimer-disease-detection',
        title: {
            text: "AI-Driven Alzheimer's Disease Detection and Prediction",
            image: images.books.aiDrivenAlzheimerImg
        },
        price: '$425.00',
        publisher: 'IGI Global',
        publisherLink: 'https://www.igi-global.com/book/driven-alzheimer-disease-detection-prediction/336533',
        isPublished: false,
        releaseDate: 'June 2024',
        copyright: '© 2024',
        language: 'English',
        categories: ['Healthcare', 'Technology', 'AI'],
        doi: '10.4018/979-8-3693-3605-2',
        isbn: '978-8-3693-3605-2',
        indexIn: [],
        descriptionParagraphs: [
            "Alzheimer's disease (AD) poses a significant global health challenge, with an estimated 50 million people affected worldwide and no known cure. Traditional methods of diagnosis and prediction often rely on subjective assessments. They are limited in detecting the disease early, leading to delayed intervention and poorer patient outcomes. Additionally, the complexity of AD, with its multifactorial etiology and diverse clinical manifestations, requires a multidisciplinary approach for effective management.",
            "AI-Driven Alzheimer's Disease Detection and Prediction offers a groundbreaking solution by leveraging advanced artificial intelligence (AI) techniques to enhance early diagnosis and prediction of AD. This edited book provides a comprehensive overview of state-of-the-art research, methodologies, and applications at the intersection of AI and AD detection. By bridging the gap between traditional diagnostic methods and cutting-edge technology, this book facilitates knowledge exchange, fosters interdisciplinary collaboration, and contributes to innovative solutions for AD management.",
            "It also benefits data scientists, engineers, policymakers, and professionals in the pharmaceutical and biotechnology industries. Graduate students interested in healthcare and technology will find accessible information on the latest developments in AI-driven approaches to AD detection and prediction."
        ],
        chapters: [
            { index: 1, title: "Introduction to Alzheimer’s Disease, Biomarkers, and the AI Revolution", authors: ["Bancha Yingngam"], link: '' },
            { index: 2, title: "Neuroimaging and Biomarkers in AD Detection", authors: ["Komal Thapa", "Neha Kanojia", "Ameya Sharma", "Lata Rani Rani", "Vivek Puri"], link: '' },
            { index: 3, title: "Integrating AI in Alzheimer's Disease Management - A Strategic Approach for Healthcare Administrators", authors: ["Mazharunnisa Md", "Prem Chowary V", "Sai B.V.", "Anuradha T.", "Indhu Sri"], link: '' },
            { index: 4, title: "Advanced Deep Learning Approaches for Alzheimer's Disease: Enhancing Diagnostic Classification and Prognostic Prediction", authors: ["RAMAKRISHNA KUMAR", "Yogesh Kumar Sharma", "Monika Dhananjay Rokade", "Hidayath Ali Baig"], link: '' },
            { index: 5, title: "Advancements in Alzheimer's Diagnosis - A Comprehensive Exploration of AI-Powered Diagnostic Tools and Software", authors: ["Vatsala Tomar", "Arvind Kumar", "Vandana Kate", "Sandeep Kumar", "Prasanthi Gottumukkala"], link: '' },
            { index: 6, title: "AI-Powered Paradigm Shift: Non-Invasive Biomarkers for Early Detection of Alzheimer’s Disease", authors: ["Yogesh Kumar Sharma", "RAMAKRISHNA KUMAR", "Hidayath Baig", "Sunil Sudam Khatal"], link: '' },
            { index: 7, title: "AI-Enhanced Drug Discovery for Alzheimer's", authors: ["D.R. Denslin Brabin", "Muralidharan J", "Sharath Kumar Jagannathan", "Ruth Ramya Kalangi"], link: '' },
            { index: 8, title: "AI in Neurodegeneration Prediction - Exploring Advanced Approaches for Alzheimer's Disease Progression", authors: ["Neelima Priyanka Nutulapati", "Naresh Babu Karunakaran", "Banupriya V", "Malatthi Sivasundaram", "Venkata Ramana Kaveripakam"], link: '' },
            { index: 9, title: "Strategic Management of AI-Enhanced Alzheimer's Disease Prediction Models - Navigating Ethical and Regulatory Frontiers", authors: ["Brindha Devi", "Thaiyalnayaki M.", "Vasantha S"], link: '' },
            { index: 10, title: "Unravelling AI and Machine Learning Essentials in Alzheimer's Research", authors: ["Saravanan V", "Ruth Ramya Kalangi", "Saravanan Thangavel", "Venkata Ramana K"], link: '' },
            { index: 11, title: "Revolutionizing Alzheimer's Diagnosis- Navigating the Challenges and Embracing Opportunities in the Clinical Integration of AI-Powered Tools", authors: ["Ananda Kumar K S", "Senthil Kumar A", "Gireesh H R", "Shashidhar V"], link: '' },
            { index: 12, title: "Unravelling Alzheimer's-The AI Revolution in Diagnosis and Prediction", authors: ["Suja G P"], link: '' },
            { index: 13, title: "Role of Artificial Intelligence in Cognitive Assessment & Early Detection of Alzheimer’s Disease: Cognitive Assessment & AI", authors: ["Deepak Panwar", "Parul Sharma", "Shweta Sharma", "Manu Goyal", "Kanu Goyal"], link: '' },
            { index: 14, title: "Unravelling Data Challenges in AI-Driven Alzheimer's Research", authors: ["Arunadevi B", "Vidyabharathi Dakshinamurthi", "Bennilo Fernandes J", "Sharmiladevi D."], link: '' },
            { index: 15, title: "Revolutionizing Alzheimer's Diagnosis- Navigating the Challenges and Embracing Opportunities in the Clinical Integration of AI-Powered Tools", authors: ["Ananda Kumar K S"], link: '' },
            { index: 16, title: "Unveiling Alzheimer's Early Signs - AI-driven Insights through Neuroimaging and Biomarkers", authors: ["Ramani S", "Madiajagan M", "Shikha Maheshwari", "Utpal Saikia"], link: '' },
            { index: 17, title: "Real-World Impact - Case Studies and Success Stories in AI-driven Alzheimer's Disease Research and Care", authors: ["Kireet Muppavaram", "Amit Gangopadhyay", "Sudhir Ramadass", "Prakash N", "Siva Shankar S"], link: '' },
            { index: 18, title: "Patient-Centered AI Solutions for Managing Alzheimer's Disease", authors: ["Sheerin Banu M", "D Sugumar", "Sujatha S", "Veeramakali T"], link: '' },
            { index: 19, title: "Navigating the Administrative Landscape of AI in Alzheimer's Disease Detection - A Comprehensive Management Studies Perspective", authors: ["Mohana Krishna I", "Lingamsetty Dhanush", "Chinni Tejasri", "A Hari Teja", "K S N L Trisha", "NEHA IRRINKI"], link: '' },
            { index: 20, title: "Machine Learning Models for Alzheimer's disease Detection - An In-Depth Exploration, Including Deep Learning Approaches", authors: ["Indira Bharathi", "Swarnasudha M", "Manjula S", "Gethzi Ahila Poornima I"], link: '' },
            { index: 21, title: "Intelligent Techniques for Detection and Diagnosis of Neurodegenerative Diseases", authors: ["DEEPAK VARADAM", "Sahana Shankar", "Pranathi Hegde", "Shobitha V", "Sunidhi M", "Sanjana N"], link: '' },
            { index: 22, title: "Integrating Genomic Data and Genetic Risk Factors with AI for Predicting Susceptibility to Alzheimer's Disease", authors: ["Nikhat Parveen", "Vidyabharathi D", "Nazeer Shaik", "Ram Nivas D"], link: '' },
            { index: 23, title: "Global Initiatives and Collaborations in AI for Alzheimer's Disease", authors: ["A Chandrashekhar", "Nikhat Parveen", "Muthumari A.", "Menaga D."], link: '' },
            { index: 24, title: "Challenges and Future Directions in AI-driven Alzheimer's Disease Research and Care", authors: ["Balachandra Pattanaik", "Rambabu Nalagandla", "Varagantham Anitha Avula", "Kumarasamy M.", "Ojasvi Pattanaik"], link: '' },
            { index: 25, title: "Educating Health Care Professional on AI in Alzheimer Disease Strategies and Programmes for Educating Health Care Professional on the Use of AI in Alzheimer's", authors: ["Shweta Sharma", "Shavez Mansoori", "Manu Goyal", "Kanu Goyal", "Parul Sharma"], link: '' },
            { index: 26, title: "Cognitive Assessment and Early Detection of Alzheimer's disease - Harnessing AI through Tasks and Games", authors: ["Deena G", "Naresh Babu Karunakaran", "Saumya Sharma", "Vivekanand Pandey", "Neerav Nishant"], link: '' },
            { index: 27, title: "Ethical and Privacy Considerations in AI-Driven AD Research", authors: ["Mohammed Abdul Matheen", "Zainulabedin Hasan", "Amairullah Khan Lodhi", "Shaikh Abdul Waheed", "Altaf C"], link: '' },
            { index: 28, title: "Exploring The Role of Natural Learning Processing in Alzheimer’s Disease Research and Prediction: NLP in AD Research", authors: ["Ruchi Jakhmola Mani", "Yusra Ashfaque Ali", "Deepshikha Pande Katare", "Snigdha Debashis Bhattacharjee", "Prathum Pathak"], link: '' },
        ],
        editorOrder: [
            'umesh-kumar-lilhore',
            'abhineet-anand',
            'abhishek-kumar',
            'satya-prakash-yadav',
            'narayan-vyas'
        ]
    },
    {
        id: 'applying-ml-techniques-in-bioinformatics',
        title: {
            text: "Applying Machine Learning Techniques to Bioinformatics",
            image: images.books.applyingMLInBioinformaticsImg
        },
        price: '$340.00',
        publisher: 'IGI Global',
        publisherLink: 'https://www.igi-global.com/book/applying-machine-learning-techniques-bioinformatics/330199',
        isPublished: true,
        releaseDate: 'March 2024',
        copyright: '© 2024',
        language: 'English',
        categories: ['Healthcare', 'Technology', 'AI'],
        doi: '10.4018/979-8-3693-1822-5',
        isbn: '978-8-3693-1822-5',
        indexIn: ['Google Scholar', 'Scopus'],
        descriptionParagraphs: [
            "Why are cutting-edge data science techniques such as bioinformatics, few-shot learning, and zero-shot learning underutilized in the world of biological sciences?. In a rapidly advancing field, the failure to harness the full potential of these disciplines limits scientists’ ability to unlock critical insights into biological systems, personalized medicine, and biomarker identification. This untapped potential hinders progress and limits our capacity to tackle complex biological challenges.",
            "The solution to this issue lies within the pages of Applying Machine Learning Techniques to Bioinformatics. This book serves as a powerful resource, offering a comprehensive analysis of how these emerging disciplines can be effectively applied to the realm of biological research. By addressing these challenges and providing in-depth case studies and practical implementations, the book equips researchers, scientists, and curious minds with the knowledge and techniques needed to navigate the ever-changing landscape of bioinformatics and machine learning within the biological sciences.",
            "Designed for academic scholars and practitioners, as well as upper-level undergraduates and graduates seeking to expand their knowledge, this book is a must-read for anyone passionate about the intersection of data science and human biology. Healthcare professionals, biotechnologists, and academics alike will find this resource invaluable for advancing their understanding and capabilities in the dynamic field of bioinformatics."
        ],
        chapters: [
            { index: 1, title: "Advancing Zero-Shot Learning With Fully Connected Weighted Bipartite Graphs in Machine Learning", authors: ["V. Dankan Gowda", "Rama Chaithanya Tanguturi", "Neha Patwari", "S. B. Sridhara", "Sampada Abhijit Dhole"], link: '' },
            { index: 2, title: "Bioinformatics in Agriculture and Ecology Using Few-Shots Learning From Field to Conservation", authors: ["Jayashri Prashant Shinde", "Smitha Nayak", "Deepika Amol Ajalkar", "Yogesh Kumar Sharma"], link: '' },
            { index: 3, title: "An Overview and Analysis of Machine Learning Classification Algorithms in Healthcare", authors: ["Soumitra Saha"], link: '' },
            { index: 4, title: "Ethical and Legal Considerations in Machine Learning: Promoting Responsible Data Use in Bioinformatics", authors: ["Deepika Amol Ajalkar", "Yogesh Kumar Sharma", "Jayashri Prashant Shinde", "Smitha Nayak"], link: '' },
            { index: 5, title: "A Comprehensive Analysis of the Health Effects of 5G Radiation", authors: ["Soumitra Saha", "Shubh Kumar"], link: '' },
            { index: 6, title: "Bridging Bytes and Biology-Advanced Learning and Bioinformatics in Innovative Drug Discovery", authors: ["Dwijendra Nath Dwivedi", "Ghanashyama Mahanty", "Varunendra Nath Dwivedi"], link: '' },
            { index: 7, title: "Challenges and Limitations of Few-Shot and Zero-Shot Learning", authors: ["V. Dankan Gowda", "Sajja Suneel", "P. Ramesh Naidu", "S. V. Ramanan", "Sampathirao Suneetha"], link: '' },
            { index: 8, title: "Unveiling the Potential: A Comprehensive Exploration of Deep Learning and Transfer Learning Techniques in Bioinformatics", authors: ["Umesh Kumar Lilhore", "Sarita Simaiya"], link: '' },
            { index: 9, title: "Unlocking the Future of Healthcare: Biomarkers and Personalized Medicine", authors: ["Samiksha Garse", "Divya Dalal", "Sneha Dokhale", "Shine Devarajan"], link: '' },
            { index: 10, title: "Unveiling the World of Bioinformatics", authors: ["Khushboo Dhiman", "Hardik Dhiman"], link: '' },
            { index: 11, title: "Ethical Considerations in Sharing Patient Data: A Systematic Review", authors: ["Santhoshkumar", "K. Susithra"], link: '' },
            { index: 12, title: "Exploration of Deep Learning and Transfer Learning in Bioinformatics", authors: ["Yash Mahajan", "Muskan Sharma"], link: '' },
            { index: 13, title: "Exploration of Deep Learning and Transfer Learning Techniques in Bioinformatics", authors: ["Sumit Bansal", "Vandana Sindhi", "Bhim Sain Singla"], link: '' },
            { index: 14, title: "Unlocking the Future of Healthcare: Biomarkers and Personalized Medicine", authors: ["Baiju B. V.", "P. Suresh", "G. Subathra", "P. Keerthika", "Kishor Kumar Sadasivuni", "K. Logeswaran"], link: '' },
            { index: 15, title: "Machine Learning's Potential in Shaping the Future of Bioinformatics Research", authors: ["V. Dankan Gowda", "Saptarshi Mukherjee", "Sajja Suneel", "Dinesh Arora", "Ujjwal Kumar Kamila"], link: '' },
            { index: 16, title: "Exploring Few-Shot Learning Approaches for Bioinformatics Advancements", authors: ["Neha Bhati", "Ronak Duggar", "Abdullah Alzahrani"], link: '' },
            { index: 17, title: "Introduction to Bioinformatics and Machine Learning", authors: ["Rakhi Chauhan"], link: '' },
            { index: 18, title: "Learning From Scarcity: Unlocking Healthcare Insights With Few-Shot Machine Learning", authors: ["Pooja Dixit", "Advait Vihan Kommula", "Pramod Sing Rathore"], link: '' },
        ],
        editorOrder: [
            'umesh-kumar-lilhore',
            'abhishek-kumar',
            'sarita-simaiya',
            'narayan-vyas',
            'vishal-dutt',
        ]
    },
    {
        id: 'innovations-in-ml-iot-for-water-management',
        title: {
            text: "Innovations in Machine Learning and IoT for Water Management",
            image: images.books.innovationsInMLIoTWaterManagementImg
        },
        price: '$300.00',
        publisher: 'IGI Global',
        publisherLink: 'https://www.igi-global.com/book/innovations-machine-learning-iot-water/326935',
        isPublished: true,
        releaseDate: 'November 2023',
        copyright: '© 2024',
        language: 'English',
        categories: ['Technology', 'IoT'],
        doi: '10.4018/979-8-3693-1194-3',
        isbn: '978-8-3693-1194-3',
        indexIn: ['Google Scholar', 'Scopus'],
        descriptionParagraphs: [
            "Water, our planet's life force, faces multiple challenges in the 21st century, including surging global demand, shifting climate patterns, and the urgent need for sustainable management. Guidance, knowledge, and hope are sharply needed in academia and technology industries, and Innovations in Machine Learning and IoT for Water Management is a formidable resource to provide these necessities. This book delves into the dynamic synergy of Artificial Intelligence (AI), Machine Learning (ML), and the Internet of Things (IoT), ushering in a new era of water resource stewardship.",
            "This book embarks on a journey through the frontiers of AI and IoT, unveiling their transformative impact on water management. From the vantage point of satellite imagery analysis, it scrutinizes the Earth's vital signs, unlocking crucial insights into water resources. It chronicles the rise of AI-powered predictive analytics, a revolutionary force propelling precision water usage and conservation.",
            "This book explains how IoT can be an effective tool to increase the intelligence of our water systems. The book meticulously navigates through domains as diverse as aquifer monitoring, hydropower generation optimization, and predictive analytics for water consumption. At its core, it reveals how IoT underpins more intelligent decision-making, rendering water systems more efficient and resilient.",
            "Discover how AI and IoT technologies metamorphose water management practices, from enhancing water quality monitoring to predicting microclimates. The digital revolution demystifies and invigorates weather forecasting, leak detection, wastewater treatment optimization, smart irrigation, and demand response systems. This book caters to a diverse audience, from water management experts and environmental scientists to data science aficionados and IoT enthusiasts. Engineers seeking to reimagine the future of water systems, technology enthusiasts eager to delve into AI's potential, and individuals impassioned by preserving water will all find a well-needed resource in these pages."
        ],
        chapters: [
            { index: 1, title: "Introduction to ML and IoT for Water Management", authors: ["Nalluri Poojitha", "B. Ramya Kuber", "Ambati Vanshika"], link: '' },
            { index: 2, title: "A Comprehensive Exploration of Machine Learning and IoT Applications for Transforming Water Management", authors: ["Mandeep Kaur", "Rajni Aron", "Heena Wadhwa", "Righa Tandon", "Htet Ne Oo", "Ramandeep Sandhu"], link: '' },
            { index: 3, title: "Artificial Intelligence for Water Resource Planning and Management", authors: ["Richa Saxena", "Vaishnavi Srivastava", "Dipti Bharti", "Rahul Singh", "Amit Kumar", "Abhilekha Sharma"], link: '' },
            { index: 4, title: "Forecasting Weather and Water Management Through Machine Learning", authors: ["Inzimam Ul Hassan", "Zeeshan Ahmad Lone", "Swati Swati", "Aya Gamal"], link: '' },
            { index: 5, title: "Optimizing Water Resources With IoT and ML: A Water Management System", authors: ["Rakhi Chauhan", "Neera Batra", "Sonali Goyal", "Amandeep Kaur"], link: '' },
            { index: 6, title: "Utilizing Machine Learning for Enhanced Weather Forecasting and Sustainable Water Resource Management", authors: ["Risha Dhargalkar", "Viosha Cruz", "Abdullah Alzahrani"], link: '' },
            { index: 7, title: "AI-Based Smart Water Quality Monitoring and Wastewater Management: An Integrated Bio-Computational Approach", authors: ["Dipankar Ghosh", "Sayan Adhikary", "Srijaa Sau"], link: '' },
            { index: 8, title: "Revolutionizing Water Quality Monitoring: The Smart Tech Frontier", authors: ["Ambati Vanshika", "B. Ramya Kuber", "Nalluri Poojitha"], link: '' },
            { index: 9, title: "Data-Driven Aquatics: The Future of Water Management With IoT and Machine Learning", authors: ["V. Dankan Gowda", "Anil Sharma", "Rama Chaithanya Tanguturi", "K. D. V. Prasad", "Vasifa Sameer Kotwal"], link: '' },
            { index: 10, title: "Detection of Ephemeral Sand River Flow Using Hybrid Sandpiper Optimization-Based CNN Model", authors: ["Arunadevi Thirumalraj", "V. S. Anusuya", "B. Manjunatha"], link: '' },
            { index: 11, title: "Design of IoT-Based Automatic Rain-Gauge Radar System for Rainfall Intensity Monitoring", authors: ["Ahmad Budi Setiawan", "Danny Ismarianto Ruhiyat", "Aries Syamsuddin", "Djoko Waluyo", "Ardison Ardison"], link: '' },
            { index: 12, title: "Empowering Safety by Embracing IoT for Leak Detection Excellence", authors: ["Neha Bhati", "Ronak Duggar", "Abeer Saber"], link: '' },
            { index: 13, title: "Using Augmented Reality (AR) and the Internet of Things (IoT) to Improve Water Management Maintenance and Training", authors: ["Muskan Sharma", "Yash Mahajan", "Abeer Saber"], link: '' },
        ],
        editorOrder: [
            'abhishek-kumar',
            'arun-lal-srivastav',
            'ashutosh-kumar-dubey',
            'vishal-dutt',
            'narayan-vyas',
        ]
    },
    {
        id: 'quantum-machine-learning-quantum-algorithms-neural-networks',
        title: {
            text: "Quantum Machine Learning: Quantum Algorithms and Neural Networks",
            image: images.books.quantumMachineLearningDeGruyterImg
        },
        price: '144,95 €',
        publisher: 'De Gruyter',
        publisherLink: 'https://www.degruyter.com/document/isbn/9783111342276/html',
        isPublished: false,
        releaseDate: 'August 2024',
        copyright: '© 2024',
        language: 'English',
        categories: ['Technology', 'AI'],
        doi: '9783111342092',
        isbn: '978-3111342092',
        indexIn: ['Google Scholar', 'Scopus'],
        descriptionParagraphs: [
            "Quantum computing has shown a potential to tackle specific types of problems, especially those involving a daunting number of variables, at an exponentially faster rate compared to classical computers. This volume focuses on quantum variants of machine learning algorithms, such as quantum neural networks, quantum reinforcement learning, quantum principal component analysis, quantum support vectors, quantum Boltzmann machines, and many more.",
            "Provides an overview of the basic concepts, preliminaries, and principles of quantum computing and machine learning. Presents the most advanced and well-known quantum machine learning and optimization algorithms."
        ],
        chapters: [],
        editorOrder: [
            'pethuru-raj',
            'houbing-herbert-song',
            'dac-nhuong-le',
            'narayan-vyas',
        ]
    },
    {
        id: 'quantum-innovations-nexus-biomedical-intelligence',
        title: {
            text: "Quantum Innovations at the Nexus of Biomedical Intelligence",
            image: images.books.quantumInBiomedicalIGIImg
        },
        price: '$330.00',
        publisher: 'IGI Global',
        publisherLink: 'https://www.igi-global.com/book/quantum-innovations-nexus-biomedical-intelligence/328543',
        isPublished: true,
        releaseDate: 'December 2023',
        copyright: '© 2024',
        language: 'English',
        categories: ['Technology', 'AI'],
        doi: '10.4018/979-8-3693-1479-1',
        isbn: '978-8-3693-1479-1',
        indexIn: ['Google Scholar', 'Scopus'],
        descriptionParagraphs: [
            "The convergence of quantum technologies and biomedical intelligence is a frontier of boundless potential. The quantum advancements revolutionize disease detection, personalized medicine, and health monitoring frameworks while confronting the pressing challenge of accountability in machine learning systems within the biomedical domain. How do quantum innovations at the nexus of biomedical intelligence redefine biomedical research and healthcare, addressing critical inquiries such as the transformative potential of quantum computing, machine learning, and sensing technologies?",
            "Quantum Innovations at the Nexus of Biomedical Intelligence explores the intricate synergy between quantum mechanics and the biomedical domain. This book elucidates the profound implications and applications arising from the fusion of quantum computing, artificial intelligence, and biomedical sciences.",
            "This book introduces biomedical engineering, setting the stage for a deep dive into the transformative role of quantum computing and artificial intelligence. As the narrative unfolds, the text navigates the reader through the uncharted territories of quantum-enhanced machine learning, quantum sensing and their profound impact on diagnostics, personalized medicine, and health monitoring frameworks. The intersection of quantum computing and AI in medical advancements and cybersecurity is illuminated, offering a comprehensive understanding of the multifaceted applications of these cutting-edge technologies.",
            "The book is a collaborative effort, allowing luminaries from quantum computing, artificial intelligence, biomedicine, bioengineering, molecular biology, and healthcare to share their expertise. Readers will find in-depth discussions on topics ranging from the detection of cardiomegaly using quantum-enhanced deep convolutional neural networks to applying quantum machine learning algorithms in predicting outbreaks of diseases such as dengue fever. The challenges of accountability in machine learning systems are explored beyond mere technical obstacles, establishing a critical dialogue on responsible innovation in this burgeoning field.",
            "This book is ideal for researchers, scientists, academics, and professionals across diverse disciplines in quantum innovations within biomedical intelligence. Graduate students and postdoctoral researchers will discover a valuable resource that expands their knowledge and unveils new avenues for research and future investigations."
        ],
        chapters: [
            { index: 1, title: "AI-Driven Plant Leaf Disease Detection for Modern Agriculture", authors: ["M. Suchetha", "Jaya Sai Kotamsetti", "Dasapalli Sasidhar Reddy", "S. Preethi", "D. Edwin Dhas"], link: '' },
            { index: 2, title: "Enhancing Elderly Health Monitoring Framework With Quantum-Assisted Machine Learning Models as Micro Services", authors: ["A. Bhuvaneswari", "R. Srivel", "N. Elamathi", "S. Shitharth", "K. Sangeetha"], link: '' },
            { index: 3, title: "Explaining the Challenges of Accountability in Machine Learning Systems Beyond Technical Obstacles", authors: ["Srinivas Kumar Palvadi"], link: '' },
            { index: 4, title: "Exploring the Potential of Quantum Computing in AI, Medical Advancements, and Cyber Security", authors: ["Srinivas Kumar Palvadi"], link: '' },
            { index: 5, title: "Hybrid Algorithms for Medical Insights Using Quantum Computing", authors: ["Nitika Kapoor", "Parminder Singh", "Kusrini M. Kom", "Vishal Bharti"], link: '' },
            { index: 6, title: "Impact of Pairwise Electrode Features in the Classification of Emotions for EEG Signal Analysis", authors: ["M. Suchetha", "V. V. Rama Raghavan", "Shaik Fardeen", "P. V. S. Nithish", "S. Preethi", "D. Edwin Dhas"], link: '' },
            { index: 7, title: "Infected Plant Leaves Detection Using Multilayered Convolutional Neural Network and Quantum Classifier", authors: ["Damandeep Kaur", "Shamandeep Singh", "Simarjeet Kaur", "Gurpreet Singh", "Rani Kumari"], link: '' },
            { index: 8, title: "Machine Learning and Quantum Computing in Biomedical Intelligence", authors: ["Pradeepta Kumar Sarangi", "Shreya Kumari", "Mani Sawhney", "Amit Vajpayee", "Mukesh Rohra", "Srikanta Mallik"], link: '' },
            { index: 9, title: "Personalized Medicine Through Quantum Computing: Tailoring Treatments in Healthcare", authors: ["Muskan Sharma", "Yash Mahajan", "Abdullah Alzahrani"], link: '' },
            { index: 10, title: "Quantum Computing for Dengue Fever Outbreak Prediction: Machine Learning and Genetic Hybrid Algorithms Approach", authors: ["Dhaya Chinnathambi", "Srivel Ravi", "Mohammed Abdul Matheen", "Saravanan Pandiaraj"], link: '' },
            { index: 11, title: "Quantum Machine Learning for Biomedical Data Analysis", authors: ["Dankan Gowda V.", "Harshali Yogesh Patil", "Shafiqul Abidin", "Ribhu Abhusan Panda", "Sampathirao Suneetha"], link: '' },
            { index: 12, title: "Revolutionizing Biomedical Engineering With Quantum Computing and AI", authors: ["Mamta", "Nitin Garla", "Inam Ul Haq", "Hardik Dhiman"], link: '' },
            { index: 13, title: "Smart Detection and Removal of Artifacts in Cognitive Signals Using Biomedical Signal Intelligence Applications", authors: ["R. Kishore Kanna", "K. Yamuna Devi", "R. Gomalavalli", "A. Ambikapathy"], link: '' },
            { index: 14, title: "Understanding Biomedical Engineering for Quantum Computing", authors: ["Rashmi Agrawal", "Vicente Garcia Diaz"], link: '' },
        ],
        editorOrder: [
            'vishal-dutt',
            'abhishek-kumar',
            'sachin-ahuja',
            'anupam-baliyan',
            'narayan-vyas'
        ]
    },
];

export default booksData;
