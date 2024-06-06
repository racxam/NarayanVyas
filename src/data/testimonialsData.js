// src/data/testimonialsData.js

import hardikDhimanImg from '../assets/img/testimonial/hardik.jpeg';
import abidHussainImg from '../assets/img/testimonial/abid.png';
import chahilChoudharyImg from '../assets/img/testimonial/chahil.jpg';
import emilZajacImg from '../assets/img/testimonial/emil.jpg';

export const images = {
    hardikDhimanImg,
    abidHussainImg,
    chahilChoudharyImg,
    emilZajacImg
};

const testimonialsData = [
    {
        authorImg: hardikDhimanImg,
        Title: "Hardik Dhiman",
        Designation: "Research Consultant",
        Description: "Mr. Narayan Vyas is an exceptional mentor in app development, IoT, and machine learning. His guidance has helped me excel in various projects, including IoT innovations and research papers. His patient and expert approach has greatly shaped my skills as a researcher. I highly recommend him to anyone seeking mentorship in technology. Thank you, Sir, for your invaluable support."
    },
    {
        authorImg: abidHussainImg,
        Title: "Abid Hussain",
        Designation: "Certified Gym Trainer",
        Description: "Every time I need something fixed with my websites, Narayan is my “go to” guy. He does great and gets everything done in a timely manner. Great communication. Thank you Narayan!"
    },
    {
        authorImg: chahilChoudharyImg,
        Title: "Chahil Choudhary",
        Designation: "Student",
        Description: "I highly recommend Narayan Vyas, a cooperative and knowledgeable assistant professor in computer science. His technical expertise, dedication, and ability to explain complex concepts clearly make him an invaluable asset. Narayan sir's willingness to support students and colleagues is commendable, making him an outstanding contributor to any academic institution."
    },
    {
        authorImg: emilZajacImg,
        Title: "Emil Zając",
        Designation: "Mobile App Developer",
        Description: "Narayan has extensive experience in developing mobile applications in Flutter. He always responded quickly and gave a new perspective on how to solve the problem. He knows how to explain even the most difficult issues in a simple and quick way."
    }
];

export default testimonialsData;
