import React from 'react';

const Broker = (props) => {
    const { broker, isOne } = props;
    const colWidth = isOne ? "col-md-8 mb-5 ms-auto mb-md-0":"col-md-4 mb-5 ms-auto mb-md-0";

        return(
            <div className={colWidth}>
                <div className="person-29381">
                    <div className="media-39912">
                        <img src={broker.photo} alt="Image" className="img-fluid"/>
                    </div>
                    <h3><a href="#">{broker.name}</a></h3>
                    <div className='description'>
                        <span className="meta d-block mb-4 text-wrap">{broker.title}</span>
                    </div>
                    <div className="social-32913 d-flex gap-1">
                        <a href={broker.facebook} target="_blank"><span className="icon-facebook"></span></a>
                        <a href={broker.instagram} target="_blank"><span className="icon-instagram"></span></a>
                        <a href={broker.phone} target="_blank"><span className="icon-phone"></span></a>
                    </div>
                </div>
            </div>
        );

}
export default Broker;