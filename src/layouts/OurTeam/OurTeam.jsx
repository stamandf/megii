import React from 'react';
import Broker from './Broker';
import './OurTeam.scss';
import { brokers } from './brokerList';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useTranslation } from 'react-i18next';



const OurTeam = () => {
    let columns = [];
    let finalResult = [];
    const { t, i18n } = useTranslation();

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
        <section className="site-section" id="brokers">
                <SectionHeader title={t("sectionTeam.ourTeam")} description={t("sectionTeam.ourTeamMsg")}/>
            <div className="container justify-content-center" >
            {
                    renderRows()
            }
            </div>
        </section>

    );
}
export default OurTeam;