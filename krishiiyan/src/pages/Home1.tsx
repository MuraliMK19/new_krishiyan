import React, { useEffect } from "react";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Who1Props { }

const Who1: React.FC<Who1Props> = () => {
    const imgStyle: React.CSSProperties = {
        width: "100%",
        height: "auto",
        maxHeight: "550px",
    };

    const overlayStyle: React.CSSProperties = {
        position: "absolute",
        bottom: "20px",
        left: "20%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "15px",
        borderRadius: "5px",
        maxWidth: "80%",
        textAlign: "center",
    };

    return (
        <section id="home">
            <Carousel showThumbs={false} infiniteLoop swipeable>
                <div style={{ position: "relative", overflow: "hidden" }}>
                    <div>
                        <h2 className="text-2xl m-2 pt-5 text-blue-700">Welcome to the World of Agriculture</h2>
                        <p className="mb-2 text-4xl p-5 font-extrabold">Empowering Farmers, Enriching</p>
                        <p className="mb-2 text-4xl font-extrabold">communities: <span className=" bg-gradient-to-r from-[#3FC041] via-[#38A1BB] to-[#3390FF] bg-clip-text text-transparent">The Krishiyan Way</span></p>
                        <button className="bg-[#3FC041] hover:bg-blue-700 rounded-3xl text-white py-2 px-4 m-5">Learn more <span className="font-bold">→</span></button>
                        <div className="flex mt-[-20px]">
                            <img src="/Images/image-3.png" alt="loading" className="h-[250px] p-5 xl:ml-10 " />
                            <img src="/Images/image-2.png" alt="loading" className="h-[250px] p-5 xl:mt-40" />
                            <img src="/Images/image-1.png" alt="loading" className="h-[250px] p-5 xl:mt-72" />
                            <img src="/Images/image-5.png" alt="loading" className="h-[250px] p-5 xl:mt-40" />
                            <img src="/Images/image-4.png" alt="loading" className="h-[250px] p-5 xl:mr-10" />
                        </div>
                    </div>
                </div>
                <div style={{ position: "relative", overflow: "hidden" }}>
                    <img src={"/Images/car2.jpg"} alt="Slide 2 Image" style={imgStyle} />
                    {/* <div style={overlayStyle}>
            <h2 className="text-xl font-bold mb-2">Slide 2 Title</h2>
            <p className="mb-2">Description for slide 2 goes here.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Explore</button>
          </div> */}
                </div>
                <div style={{ position: "relative", overflow: "hidden" }}>
                    <img src={"/Images/car3.jpg"} alt="Slide 3 Image" style={imgStyle} />
                    {/* <div style={overlayStyle}>
            <h2 className="text-xl font-bold mb-2">Slide 3 Title</h2>
            <p className="mb-2">Description for slide 3 goes here.</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Discover More</button>
          </div> */}
                </div>
            </Carousel>
        </section>
    );
};

export default Who1;
