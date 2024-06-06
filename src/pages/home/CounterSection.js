import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import shapeImg1 from '../../assets/img/brand/brand-shape-1.png';

import countImg1 from '../../assets/img/brand/brand-8.png';
import countImg2 from '../../assets/img/brand/verified.png';
import countImg3 from '../../assets/img/brand/chat.png';
import countImg4 from '../../assets/img/brand/five-stars.png';
import Globals from "../../Globals";

const Counter = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: Globals.totalExperience,
            countSubtext: '+',
            countTitle: 'Years of Experience',
            countImg: countImg1,
        },
        {
            countNum: Globals.projectsCount,
            countSubtext: '+',
            countTitle: 'Projects Completed',
            countImg: countImg2,
        },
        {
            countNum: Globals.publicationCount,
            countSubtext: '+',
            countTitle: 'Publications',
            countImg: countImg3,
        },
        {
            countNum: Globals.totalBooksCount,
            countSubtext: '+',
            countTitle: 'Books',
            countImg: countImg4,
        }

    ];



    return (
        <div className="counter-2__area counter-2__plr ">
            <div className="container-fluid">
                <div className="counter-2__black-bg fix">
                    <div className="counter-2__shape">
                        <img src={shapeImg1} alt="" />
                    </div>
                    {counters &&
                        <div className="row">
                            {counters.map((counter, num) => (
                                <div key={num} className="col-xl-3 col-lg-3 col-md- col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <div className="counter-2__item text-center">
                                        <div className="counter-2__content d-flex align-items-center justify-content-center pb-20">
                                            <div className="counter-2__icon">
                                                <img src={counter.countImg} alt="" />
                                            </div>
                                            <div className="counter-2__text pl-20">
                                                <span>
                                                    <i className="counter">
                                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd={() => setState(false)} />
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </i>{counter.countSubtext}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="counter-2__text">
                                            <h4 className="counter-2__title">{counter.countTitle}</h4>
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