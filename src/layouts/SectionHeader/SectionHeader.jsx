import React from 'react';

function SectionHeader(props) {

    return (
        <>
            <div className="container justify-content-center">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 text-center">
                        <h3 className="heading-29201 text-center">{props.title}</h3>
                        <p className="mb-5">{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
} export default SectionHeader;