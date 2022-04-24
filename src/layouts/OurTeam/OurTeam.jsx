import React from 'react';
import Broker from './Broker';
import './OurTeam.scss';
import { brokers } from './brokerList';


const OurTeam = () => {
    let columns = [];
    let finalResult = [];

    const renderRows = () => {
        brokers.forEach((person, index) => {
            columns.push(<Broker key={index} broker={person} isOne={brokers.length === 1} />);

            if(((index + 1) % 3 === 0) || ((index + 1) === brokers.length)) {
                finalResult.push(
                    <div className="row justify-content-center mb-5" key={index}>{columns}</div>
                );
                columns = [];
            } 
        })
        return finalResult;
    }
    return (
        <section className="site-section">
            <div className="container justify-content-center">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 text-center">
                        <h3 className="heading-29201 text-center">Our Team</h3>
                        
                        <p className="mb-5">Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.</p>
                    </div>
                </div>
                {
                    renderRows()
                }

            </div>
        </section>

    );
}
export default OurTeam;