import React, { useRef, useState } from "react";
import './Card.css';

interface CardProps {
    image: string;
    title: string;
    description: string;
    author: string;
    role: string;
}

const cardsData: CardProps[] = [
    {
        image: "/Images/blog1-image.jpeg",
        title: "Empowering Agriculture: Connect with 100+ FPOs and FPCs!",
        description:
            "Unique opportunity to connect with our extensive network of 100 Farmer Producer Organizations (FPOs) and Farmer Producer Companies (FPCs) recent post",
        author: "David Miller",
        role: "Content Writer",
    },
    {
        image: "/Images/blog2-image.jpeg",
        title: " Two-Day Capacity Building Training Program by Dr. Hedgewar Seva Samiti at KVK, Nandurbar.",
        description:
            "Dr. Hedgewar Seva Samiti CBBO – a Two-Day Capacity Building Training Program held on the 19th & 20th of Oct 2024, at KVK, Nandurbar for 17 Farmer Producer Companies (FPCs) from Latur, Jalna, Washim, Nandurbar, Nashik, and Jalgaon in Maharashtra!",
        author: "David Miller",
        role: "Content Writer",
    },
    {
        image: "/Images/blog3-image.jpeg",
        title: "Launch of the KrishiYan App at FPO National Conference",
        description:
            "We’re excited to announce that the KrishiYan APP was launched at the esteemed FPO National Conference organized by Sahakar Bharati on August 24th in Patna, Bihar! This landmark event featured an impressive roster of speakers and leaders who shared their insights and vision for the future of agriculture and cooperative development: Shri Ramnath Thakur, Member of Rajya Sabha Shri Mangal Pandey, Agricultural and Health Minister, Bihar",
        author: "David Miller",
        role: "Content Writer",
    },
    {
        image: "/Images/blog4-image.jpeg",
        title: "Startup-FPO Meet: Bringing Together 100 FPOs Across Gujarat at NABARD-SDAU Rural Business Incubation Center",
        description:
            "Startup- FPO Meet” today. Around 100 participants from different FPO across Gujarat, 11 agricultural- NABARD SDAU Rural Business Incubation Center",
        author: "David Miller",
        role: "Content Writer",
    },
    {
        image: "/Images/blog5-image.jpeg",
        title: "KrishiYan Secures ₹25 Lakh Funding LOI at Mehsana Startup Mahotsav!",
        description:
            "Mehsana Startup Mahotsav! Delighted to share that we've bagged 0.25 Cr Funding LOI from Growth91 and Growth Sense. Big thanks to M Nagarajan, the amazing i-Hub Gujarat team, Sanjay Sarda and Jimish Kapadia for giving us the stage to flaunt our innovation at the Mehsana Startup Mahotsav.",
        author: "David Miller",
        role: "Content Writer",
    },
    {
        image: "/Images/blog6-image.jpg",
        title: "WetAcre Sustainable Solutions Pvt. Ltd. Selected for 2-Month Incubation Under RKVY RAFTAAR’s SABIP Program at CCS-NIAM!",
        description:
            "WetAcre Sustainable Solution Pvt. Ltd. has been selected for 2 months incubation program from CCS-NIAM under RKVY RAFTAAR’s SABIP program. We really had an immense learning got opportunity to work more efficiently on our business module!",
        author: "David Miller",
        role: "Content Writer",
    },
];

const CardCarousel: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(cardsData.length / itemsPerPage);

    // Get current page data
    const currentCards = cardsData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handlers for navigation
    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const scrollToPage = (page: number) => {
        const container = containerRef.current;
        if (container) {
            const scrollWidth = container.scrollWidth / totalPages; // Width for one "page"
            container.scrollTo({
                left: scrollWidth * (page - 1),
                behavior: "smooth", // Smooth scrolling
            });
        }
    };

    return (
        <section id="blog" className="pt-10">
            <h1 className="text-[32px] text-[#3FC041] font-bold p-5 xl:mt-7">Blog</h1>
            <div className="h-1 w-20 bg-[#616161] rounded-lg mx-auto"></div>
            <div className="flex flex-col items-center">
                <div className="flex justify-center gap-4 cardss ">
                    {currentCards.map((card, index) => (
                        <div key={index} className="legend">
                            <img src={card.image} alt={card.title} className="m-auto" />
                            <p className="titlee">{card.title}</p>
                            <p>{card.description}</p>
                            {/* <button>Read more</button> */}
                        </div>
                    ))}
                </div>
                {/* Pagination controls */}
                <div className=" flex gap-3 xl:mt-[-120px] xl:mb-[120px]">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 border ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 border ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Next
                    </button>
                </div>
                {/* <p className="mt-3 text-sm">Page {currentPage} of {totalPages}</p> */}
            </div>
        </section>
    );
};

export default CardCarousel;
