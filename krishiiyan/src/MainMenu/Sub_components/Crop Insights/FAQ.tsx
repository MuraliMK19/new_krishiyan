import React, { useEffect, useState } from "react";
import { baseURL } from "../../../Services/Api";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CircularProgress } from "@mui/material";

interface FAQProps {
    selectedCrop: string;
}

function FAQ({ selectedCrop }: FAQProps) {
    const [faqData, setFaqData] = useState<{ question: string; answer: string }[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/crops/${selectedCrop}`);
                const data = await response.json();
                console.log("Fetched API Data:", data);

                if (data?.data?.faq && Array.isArray(data.data.faq)) {
                    setFaqData(data.data.faq);
                } else {
                    console.warn("FAQ data is null or not an array");
                    setFaqData([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setFaqData([]);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [selectedCrop]);

    return (
        <div className=" mx-auto p-4">
            <h1 className="text-left text-2xl font-semibold my-4">Frequently Asked Questions</h1>
            {loading ? (
                <div>
                    <CircularProgress color="success" />
                    <p>Loading...</p>
                </div>
            ) : faqData.length > 0 ? (
                <div>
                    {faqData.map((faq, index) => (
                        <Accordion key={index} defaultExpanded={index === 0} className="my-2 ">
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography component="span">Q{index + 1}.{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="text-left">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            ) : (
                <p>No FAQs available for this crop.</p>
            )}
        </div>
    );
}

export default FAQ;
