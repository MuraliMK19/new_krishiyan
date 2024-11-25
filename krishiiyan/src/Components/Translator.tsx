import React, { useState, useEffect } from "react";
import lanimg from '../assets/Images/language.png';

const Translator = () => {
  const languages = [
    { code: "en", name: "English" }, // English
    { code: "as", name: "অসমীয়া" }, // Assamese
    { code: "brx", name: "बर' राय" }, // Bodo
    { code: "hi", name: "हिन्दी" }, // Hindi
    { code: "mai", name: "मैथिली" }, // Maithili
    { code: "mr", name: "मराठी" }, // Marathi

    { code: "ta", name: "தமிழ்" }, // Tamil
    { code: "bn", name: "বাংলা" }, // Bengali
    { code: "gu", name: "ગુજરાતી" }, // Gujarati

    { code: "te", name: "తెలుగు" }, // Telugu
    { code: "or", name: "ଓଡ଼ିଆ" }, // Odia
    { code: "kn", name: "ಕನ್ನಡ" }, // Kannada
    { code: "kok", name: "कोंकणी" }, // Konkani
    { code: "mni", name: "মৈথৈ" }, // Manipuri
    { code: "ml", name: "മലയാളം" }, // Malayalam
    { code: "pa", name: "ਪੰਜਾਬੀ" }, // Punjabi

    { code: "ne", name: "नेपाली" }, // Nepali
  ];

  // State to store the selected language
  const [language, setLanguage] = useState("");

  // Function to handle language change
  const handleLanguageChange = (event: { target: { value: any } }) => {
    console.log("translotir :", event.target.value);
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    // Save the selected language in local storage
    localStorage.setItem("preferredLanguage", selectedLanguage);
    console.log(localStorage.getItem("preferredLanguage"));
    // Reload the current page
    window.location.reload();
  };

  // Function to initialize the language based on local storage or region
  const initializeLanguage = () => {
    // Get the preferred language from local storage
    const storedLanguage = localStorage.getItem("preferredLanguage");
    if (storedLanguage) {
      // Use stored language if it exists
      setLanguage(storedLanguage);
    } else {
      // Otherwise, use the browser's language as default
      const defaultLanguage = navigator.language.slice(0, 2); // e.g. 'en', 'es', 'fr'
      setLanguage(defaultLanguage);
      // Save the default language in local storage
      localStorage.setItem("preferredLanguage", defaultLanguage);
    }
  };

  // Initialize the language when the component mounts
  useEffect(() => {
    initializeLanguage();
  }, []);

  return (
    <div>
      {/* Language selection dropdown */}
      {/* <label
        htmlFor="language-select"
        className=" mb-2   text-green-400 dark:text-white text-lg font-semibold"
      > */}
      {/* Language:{" "} */}
      {/* </label> */}
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
      >
        {/* Render each language option */}
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <img src={lanimg} className="w-8 h-8 inline m-2" />
    </div>
  );
};

export default Translator;
