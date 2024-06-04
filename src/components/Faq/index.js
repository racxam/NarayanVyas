import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const Faq = (props) => {
    const { itemClass } = props;
    return (
        <div className={itemClass ? itemClass : 'it-custom-accordion'}>
            <Accordion className="accordion" preExpanded={'a'}>
                <AccordionItem className="accordion-items" uuid="a">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> How do your services work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Our services typically begin with an initial consultation to understand your needs and objectives. We then create a customized plan tailored to your specific requirements, whether it's mobile app development, IoT solutions, project consultancy, publication assistance, research and development, or training and workshops. We ensure continuous support throughout the project lifecycle to ensure your success.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="b">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> What industries do you specialize in?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>We specialize in a wide range of industries including technology, healthcare, education, finance, and more. Our expertise in mobile app development, IoT, project consultancy, research, and training allows us to deliver tailored solutions that meet the unique needs of various sectors.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="c">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> How do you ensure the quality of your services?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Quality is our top priority. We follow industry best practices and utilize the latest technologies and methodologies to ensure that our services meet the highest standards. Our team of experts conducts thorough testing, reviews, and continuous monitoring to deliver high-quality results that exceed your expectations.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="d">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> Can you customize your services to fit our needs?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Absolutely. We understand that every project is unique and requires a customized approach. We take the time to understand your specific goals and tailor our services to meet your individual needs. Whether it's developing a custom mobile app, creating a tailored IoT solution, or providing personalized training, we ensure our services align with your vision and objectives.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="e">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> What kind of support do you offer after the project is completed?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>We believe in providing continuous support even after the project is completed. Our post-project support includes maintenance, updates, troubleshooting, and addressing any issues that may arise. We are committed to ensuring the long-term success of your project and are always available to provide the assistance you need.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="f">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> How do I get started with your services?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Getting started is easy. Simply contact us through our website, email, or phone to schedule an initial consultation. We will discuss your needs, goals, and how our services can help you achieve success. From there, we will create a customized plan and begin the project, providing regular updates and support throughout the process.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Faq;
