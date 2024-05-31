import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SingleProgress = (props) => {
    const { itemClass, Title, Progress } = props;
    const [width, setWidth] = useState(0);
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setWidth(Progress);
        }, 1500);
    }, [location]);

    useEffect(() => {
        setTimeout(() => {
            setWidth(Progress);
        }, 1500);
    }, []);

    const style = {
        width: `${width}%`,
        transition: 'width ease-in-out 1.5s',
    };

	return(
        <div className={itemClass ? itemClass : 'tpdrive-bar-item'}>
            <h4 className="tpdrive-bar-title">{Title ? Title : 'HTML'}</h4>
            <div className="tpdrive-bar-progress">
                <div className="progress">
                    <div className="progress-bar wow animate__slideInLeft" data-wow-duration="1.2s"  style={style}>
                        <span>{Progress ? Progress : '98'}</span>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default SingleProgress