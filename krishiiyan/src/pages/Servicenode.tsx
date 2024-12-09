import React from 'react'
import './Servicenode.css'
import NodeItem from './Nodeitem';

function Servicenode() {
    const fpoServices = [
        "Cultivation Insights and Data Analytics",
        "Seamless Networking with Industries",
        "Enquiry Posting and Sales Deal Connectivity",
        "Real-time Communication and Negotiation",
        "Transparent Trade Management",
    ];

    const industryServices = [
        "Logistics and supply chain management support",
        "Quality control and assurance",
        "Streamlined procurement process",
        "Market intelligence and trends analysis",
    ];
    return (
        <>
            <div className="service-group fpo-services">
                {fpoServices.map((service, index) => (
                    <NodeItem key={index} text={service} />
                ))}
            </div>
            <div className="service-group industry-services">
                {industryServices.map((service, index) => (
                    <NodeItem key={index} text={service} />
                ))}
            </div>
        </>
    );
}

export default Servicenode