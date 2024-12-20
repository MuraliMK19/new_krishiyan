import React from "react";
import "./Tech.css";

function Tech() {
    const steps = [
        { id: 1, label: "Clustering Farmers" },
        { id: 2, label: "Varietal Check" },
        { id: 3, label: "Procurement by FPOs" },
        { id: 4, label: "Primary Processing" },
        { id: 5, label: "Quality Check" },
        { id: 6, label: "Market Linkage" },
        { id: 7, label: "Logistics Management" },
        { id: 8, label: "Payment Terms" },
    ];

    return (
        <section id="tech" className="min-h-screen pt-20">
            <h1 className="heading ">How Krishiyan Works</h1>
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
            <h1 className="text-[32px] font-bold text-[#3fc041]">Key Features of KrishiYan Platform</h1>
            <div className="divider2"></div>
            <div className="big_box">
                <div className="box1">
                    <div className="icon-container1">
                        <img src="/Images/healthicons_agriculture.png" alt="loading" className="bg-[#3fc041] rounded-full h-24 w-24 xl:p-2 empower_image1" />
                    </div>
                    <div className="small_box1">
                        <h1 className="text-xl pb-3">FPO Centric Tools</h1>
                        <p className="ml-7 mt-5">Tools tailored to FPOs include support for supply chain logistics, centralized records management, and financial tracking, empowering FPOs to deliver consistent, high-quality support to member farmers.</p>
                    </div>
                </div>
                <div className="box2">
                    <div className="icon-container2">
                        <img src="/Images/mdi_regenerative-agriculture.png" alt="loading" className="bg-[#3fc041] rounded-full h-24 w-24 xl:p-2 empower_image2" />
                    </div>
                    <div className="small_box2">
                        <h1 className="text-xl pb-3">Transparent Market Access</h1>
                        <p className="ml-7 mt-10">By connecting directly with buyers, FPOs can avoid intermediary fees, increasing profitability while ensuring fresh, high-quality produce reaches consumers.</p>
                    </div>
                </div>
                <div className="box3">
                    <div className="icon-container3">
                        <img src="/Images/carbon_agriculture-analytics.png" alt="loading" className="bg-[#3fc041] rounded-full h-24 w-24 xl:p-5 empower_image3" />
                    </div>
                    <div className="small_box3">
                        <h1 className="text-xl pb-3">Hand held device and Seamless Management Dashboard</h1>
                        <p className="ml-7">A user-friendly Mobile app and Webap brings KrishiYan’s resources directly to farmers, enabling on-the-go access to crop support, updates, and advisory services. </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tech;
