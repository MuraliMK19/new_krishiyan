import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import './Card.css'

interface CardProps {
    image: string;
    title: string;
    description: string;
    author: string;
    role: string;
}

const cardsData: CardProps[] = [
    {
        image: "/Images/car1.jpg",
        title: "KrishiYan at Mehsana Startup Mahotsav.",
        description:
            "Interaction with Input Dealers for illustrating our model and getting reviews, so far we have interacted with more than 75+ in Gujarat, Tamil Nadu and received positive response for our software service.",
        author: "David Miller",
        role: "Content Writer",
    },
    {
        image: "/Images/car2.jpg",
        title: "KrishiYan at Mehsana Startup Mahotsav.",
        description:
            "Interaction with Input Dealers for illustrating our model and getting reviews, so far we have interacted with more than 75+ in Gujarat, Tamil Nadu and received positive response for our software service.",
        author: "David Miller",
        role: "Content Writer",
    },
    {
        image: "/Images/car3.jpg",
        title: "KrishiYan at Mehsana Startup Mahotsav.",
        description:
            "Interaction with Input Dealers for illustrating our model and getting reviews, so far we have interacted with more than 75+ in Gujarat, Tamil Nadu and received positive response for our software service.",
        author: "David Miller",
        role: "Content Writer",
    },
];

const CardCarousel: React.FC = () => {
    return (
        <section id="blog" className="pt-10">
            <h1 className="text-3xl p-5 xl:mt-7">Blog</h1>
            <div className="h-1 w-20 bg-[#3FC041] mx-auto"></div>
            <div className="flex cardss">
                {cardsData.map((card, index) => (
                    <div key={index} className="legend">
                        <img src={card.image} alt={card.title} className="m-auto" />
                        <p className="titlee">{card.title}</p>
                        <p>{card.description}</p>
                        <button>Read more</button>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default CardCarousel;
