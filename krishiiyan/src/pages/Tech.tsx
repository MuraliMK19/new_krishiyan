import React from "react";
import "./Tech.css";

function Tech() {
    const steps = [
        { id: 1, label: "Clustering Farmers" },
        { id: 2, label: "Variety & Quality" },
        { id: 3, label: "Procurement by FPOs" },
        { id: 4, label: "Primary Processing" },
        { id: 5, label: "Quality Check" },
        { id: 6, label: "Marketability" },
        { id: 7, label: "Logistics" },
        { id: 8, label: "Payment Terms" },
    ];

    return (
        <section id="tech" className="min-h-screen pt-20">
            <h1 className="heading ">Our Technology</h1>
            <div className="divider"></div>
            <div className="timeline-container">
                {steps.map((step, index) => (
                    <div key={step.id} className="timeline-step">
                        <div className="circle">{step.id}</div>
                        <div className="vertical_line"></div>
                        <div className="label">{step.label}</div>
                        {index < steps.length - 1 && <div className="line"></div>}
                    </div>
                ))}
            </div>
            <h1 className="text-3xl font-extrabold">Empowering Agriculture Through Innovation </h1>
            <div className="divider2"></div>
            <div className="big_box">
                <div className="box1">
                    <div className="icon-container1">
                        <img src="/Images/healthicons_agriculture.png" alt="loading" className="bg-green-500 rounded-full h-24 w-24 xl:p-2 empower_image1" />
                    </div>
                    <div className="small_box1">
                        <h1 className="text-xl pb-3">Smart Agriculture Management</h1>
                        <p className="ml-7">Krishiyan's Farmer Member Management System utilizes cloud-based infrastructure, advanced data analytics, secure authentication, and mobile optimization to ensure seamless and efficient management of farmer members.</p>
                    </div>
                </div>
                <div className="box2">
                    <div className="icon-container2">
                        <img src="/Images/mdi_regenerative-agriculture.png" alt="loading" className="bg-green-500 rounded-full h-24 w-24 xl:p-2 empower_image2" />
                    </div>
                    <div className="small_box2">
                        <h1 className="text-xl pb-3">Cultivation Intelligence</h1>
                        <p className="ml-7">Krishiyan's Farmer Member Management System utilizes cloud-based infrastructure, advanced data analytics, secure authentication, and mobile optimization to ensure seamless and efficient management of farmer members.</p>
                    </div>
                </div>
                <div className="box3">
                    <div className="icon-container3">
                        <img src="/Images/carbon_agriculture-analytics.png" alt="loading" className="bg-green-500 rounded-full h-24 w-24 xl:p-5 empower_image3" />
                    </div>
                    <div className="small_box3">
                        <h1 className="text-xl pb-3">Agri Connect Hub</h1>
                        <p className="ml-7">Krishiyan's Farmer Member Management System utilizes cloud-based infrastructure, advanced data analytics, secure authentication, and mobile optimization to ensure seamless and efficient management of farmer members.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tech;
