import React from 'react';

function SectionHeader(props) {

    return (
        <>
            <div className="container justify-content-center">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 text-center">
                        <h3 className={props.textColour === 'white' ?  "heading-29201 text-center text-white" : "heading-29201 text-center"}>{props.title}</h3>
                        <p className={props.textColour === 'white' ? "mb-5 text-white" : "mb-5"}>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
} export default SectionHeader;