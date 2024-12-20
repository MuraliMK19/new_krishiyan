import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { extractCodeFromDriveLink } from "../../handleImageCode";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [popupData, setPopupData] = useState<any>(null);
  const base64ImageString =
    "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";

  const hasPopupBeenShown = () => {
    return localStorage.getItem("popupShown") === "true";
  };
  const hasButtonBeenClicked = () => {
    return localStorage.getItem("buttonClicked") === "true";
  };

  const setPopupShown = () => {
    localStorage.setItem("popupShown", "true");
  };

  const resetPopupShownOnUnload = () => {
    localStorage.setItem("popupShown", "false");
  };

  function encodeURL(url: string): string {
    return encodeURIComponent(url);
  }

  useEffect(() => {
    if (isOpen && (!hasPopupBeenShown() || hasButtonBeenClicked())) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/popups`)
        .then((response) => {
          if (response.data.success) {
            setPopupData(response.data.popups[0]);
          } else {
            console.log("error while loading pop up data");
          }
          console.log(popupData.image);
        });
    }
  }, [isOpen]);

  useEffect(() => {
    if ((!hasPopupBeenShown() || hasButtonBeenClicked()) && popupData) {
      setPopupShown();
    }
  }, [popupData]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      resetPopupShownOnUnload();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (!isOpen || !popupData) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none mobile:gap-y-4 mobile:pt-[10rem] ">
      <div className="relative w-full max-w-md p-6 my-6 mx-4 bg-[#F3FFF1] rounded-lg shadow-lg border border-black ">
        <button
          className="absolute top-2 right-2 p-2 text-green-700 hover:text-gray-900 rounded-full bg-gray-200 hover:bg-green-200"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4  ">
          <h4 className="text-xl font-medium ">Today's deal</h4>
          <h2 className="text-2xl font-bold mb-4 text-green-700 ">
            {popupData.title}
          </h2>

          <img src={"Images/Soyabean.jpg"}></img>

          <h4 className="text-3xl font-bold text-green-400 underline ">
            {`@${popupData.price}/- per ton`}
          </h4>
          <h2 className="text-2xl font-medium">
            {`Quantity: ${popupData.quantity} `}
          </h2>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-green-700">
            Quality Parameters
          </h2>
          <ul className="list-decimal pl-6 text-start text-2xl">
            <li className="mb-1 text-2xl">{` ${popupData.moisture}`}</li>
            <li className="mb-1 text-2xl">{` ${popupData.foreignMatter}`}</li>
            <li className="mb-1 text-2xl">{` ${popupData.fibre}`}</li>
            <li className="mb-1 text-2xl">{` ${popupData.debris}`}</li>
            <li className="mb-1 text-2xl">{` ${popupData.protein}`}</li>
          </ul>
          <p className="mt-6 text-gray-800">{popupData.description}</p>
          <button
            className=" text-green-700 hover:text-gray-900 rounded-full bg-gray-200 hover:bg-green-200"
            onClick={() => {
              const message = `Hello,we have ${popupData.title} of price ${popupData.price} and quantity is ${popupData.quantity}. `;
              const encodedMessage = encodeURL(message);
              console.log(encodedMessage);

              window.location.href = `https://wa.me/918055850995?text=${encodedMessage}`;
            }}
          >
            <div className="flex flex-row">
              <img
                src="Images\whatsapp.png"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              <p> Contact to supply</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
