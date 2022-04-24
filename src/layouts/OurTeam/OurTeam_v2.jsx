import React from 'react';
import erosPortrait from '../../assets/images/erosPortrait.jpg';
import denisPortrait from '../../assets/images/denisPortrait.jpg';
import melindaDavid from '../../assets/images/person_3.jpg';
import Broker from './Broker';
import './OurTeam.scss';
import { brokers } from './brokerList';

console.log('brokers in OurTeam= ', brokers);
const OurTeam = () => {
    return (
        <section className="site-section">
            <div className="container justify-content-center">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 text-center">
                        <h3 className="heading-29201 text-center">Our Team</h3>
                        
                        <p className="mb-5">Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.</p>
                    </div>
                </div>
                <div className="row mb-5">
                    {    
                        brokers.map((person, index) => {
                            console.log('person = ', person);
                            console.log('index = ', index);
                            console.log('index modulo 3 = ', index % 3);
                            if (index % 3 === 0) {
                                console.log('Start a new row with persons =', person);
                            }
                            return <Broker broker={person} key={index} />
                         })
                    }
                </div>


            </div>
        </section>

    );
}
export default OurTeam;