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
	return(
        <div className={itemClass ? itemClass : 'it-custom-accordion'}>
            <Accordion className="accordion" preExpanded={'a'}>
                <AccordionItem className="accordion-items" uuid="a">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> How does the 30-day work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="b">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> Maecenas facilisis erat id odio
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="c">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> What happens trial?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="d">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> Maecenas facilisis erat id odio
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div> 
	)
}

export default Faq