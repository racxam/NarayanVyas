import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import SectionTitle from '../../components/SectionTitle'

import shapeImg1 from '../../assets/img/counter/counter-shape-1.png';
import shapeImg2 from '../../assets/img/counter/counter-shape-1.png';

const Counter = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 8,
            countSubtext: '+',
            countTitle: 'Years of Experience',
            countIcon: 'fal fa-rocket-launch',
            countClass: 'counter__item counter__color-1 text-center',
        },
        {
            countNum: 40,
            countSubtext: '+',
            countTitle: 'Projects completed',
            countIcon: 'fal fa-comments-alt',
            countClass: 'counter__item counter__color-2 text-center',
        },
        {
            countNum: 35,
            countSubtext: '+',
            countTitle: 'Publications',
            countIcon: 'far fa-cogs',
            countClass: 'counter__item counter__color-3 text-center',
        },
        {
            countNum: 10,
            countSubtext: '+',
            countTitle: 'Books',
            countIcon: 'fal fa-regular fa-star size="xl"',
            countClass: 'counter__item counter__color-4 text-center',
        }

    ];

    return (
        <div className="counter__area counter__mlr mb-70 z-index">
            <div className="counter__shape-1">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="counter__shape-2">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="counter__black-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SectionTitle
                                sectionClass="counter__section-box text-center pb-35"
                                subTitleClass="section-subtitle section-white-bg title-anim"
                                titleClass="section-title text-white  title-anim"
                                subTitle="We Best Counter"
                                Title="Counter Industries server"
                            />
                        </div>
                    </div>
                    {counters &&
                        <div className="row">
                            {counters.map((counter, num) => (
                                <div key={num} className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <div className={` ${counter.countClass} ? ${counter.countClass} : 'counter__item counter__color-1 text-center`}>
                                        <div className="counter__text">
                                            <h4 className="counter__title">{counter.countTitle}</h4>
                                        </div>
                                        <div className="counter__icon">
                                            <span><i className={`fal ${counter.countIcon}`}></i></span>
                                        </div>
                                        <div className="counter__text">
                                            <span>
                                                <span className="counter">
                                                    <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd={() => setState(false)} />
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </span>{counter.countSubtext}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>

    );
}
export default Counter;