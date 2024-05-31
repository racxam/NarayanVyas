import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';


const FaqPage = (props) => {
    const { itemClass } = props;
	return(
        <div className={itemClass ? itemClass : 'it-custom-accordion'}>
            <Accordion className="accordion" preExpanded={'a'}>
                <AccordionItem className="accordion-items" uuid="a">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> Quality of an existing solution
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="b">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> Maecenas facilisis erat
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="c">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> We’ll help you to create
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="d">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> Business facilisis erat id odio
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="i">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> We best agency facilisis erat
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="e">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> This busines man facilisis
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="f">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> We best agency facilisis
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="g">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> Business facilisis erat id odio
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-items" uuid="h">
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion-buttons">
                            <span><i className="fal fa-check"></i></span> Maecenas facilisis erat id odio
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.Business tailored it design help ambitious businesses like yours generate more building driving web traffice management & support services profits to be business agency elit, sed do eiusmod tempor.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div> 
	)
}

export default FaqPage