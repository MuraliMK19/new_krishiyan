import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import OurTech from "../pages/OurTech";
import ScrollToTopArrow from "./ScrollToTopArrow";
import Terms from "../pages/Terms";


interface Translations {
  [key: string]: {
    logoAlt: string;
    tagline: string;
    readMore: string;
    quickLinks: string;
    home: string;
    who: string;
    what: string;
    tech: string;
    blog: string;
    contactUs: string;
    getInTouch: string;
    address: string;

    call1: string;
    call2: string;
    ourLocation: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
}

const translations: Translations = {
  en: {
    logoAlt: "Company Logo",
    tagline: "WetAcre Sustainable Solutions",
    readMore: "Read More",
    quickLinks: "Quick Links",
    home: "Home",
    who: "Who are we?",
    what: "What we do?",
    tech: "Our technology",
    blog: "Blog",
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    address:
      "WetAcre Sustainable Solutions Private Limited, CrAdLE, Village Bhat, Gandhinagar, Gujarat, 382428 - India",
    call1: "Call : +91 70667 44494",
    call2: "Call : +91 89030 85981",
    ourLocation: "Our Location",
    copyright: `© ${new Date().getFullYear()} WetAcre Sustainable Solutions Private Limited. All rights reserved`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //assame
  as: {
    logoAlt: "কোম্পানীৰ লোগো",
    tagline: "WetAcre স্থিতিশীল সমাধান",
    readMore: "অধিক পঢ়ক",
    quickLinks: "দ্ৰুত লিংকসমূহ",
    home: "ঘৰ",
    who: "আমরা কোন?",
    what: "আমরা কি কৰোঁ?",
    tech: "আমাৰ প্ৰযুক্তি",
    blog: "ব্লগ",
    contactUs: "যোগাযোগ কৰক",
    getInTouch: "আমাৰ লগত যোগাযোগ কৰক",
    address:
      "WetAcre স্থিতিশীল সমাধান LLP, CrAdLE, ভাট গাঁও, গান্ধীনগৰ, গুজৰাট, 382428 - ভাৰত",
    call1: "ফোন কৰক: +91 70667 44494",
    call2: "ফোন কৰক: +91 80558 50995",
    ourLocation: "আমাৰ অৱস্থান",
    copyright: `© ${new Date().getFullYear()} WetAcre স্থিতিশীল সমাধান LLP. সকলো অধিকার সংৰক্ষিত`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  brx: {
    // Bodo
    logoAlt: "बोदोलोगो",
    tagline: "WetAcre सस्टेनेबल सलूशन्स",
    readMore: "आरै मोर",
    quickLinks: "संपर्क कनेक्शन",
    home: "घ़ोर",
    who: "आमाइ कोनो?",
    what: "आमाइ कीआर?",
    tech: "आमार टेक्नोलजी",
    blog: "ब्लोग",
    contactUs: "आमाइ संपर्गमक",
    getInTouch: "आमार संपर्गमक करी",
    address:
      "WetAcre सस्टेनेबल सलूशन्स LLP, CrAdLE, बट गांव, गांधीनगर, गुजरात, 382428 - भारत",
    call1: "कॉल : +91 70667 44494",
    call2: "कॉल : +91 80558 50995",
    ourLocation: "हमार स्थान",
    copyright: `© ${new Date().getFullYear()} WetAcre सस्टेनेबल सलूशन्स LLP. सर्वाधिकार सुरक्षित`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //hindi
  hi: {
    logoAlt: "कंपनी का लोगो",
    tagline: "WetAcre सतत समाधान",
    readMore: "अधिक पढ़ें",
    quickLinks: "त्वरित लिंक",
    home: "मुख्य पृष्ठ",
    who: "हम कौन हैं?",
    what: "हम क्या करते हैं?",
    tech: "हमारी तकनीक",
    blog: "ब्लॉग",
    contactUs: "हमसे संपर्क करें",
    getInTouch: "हमसे संपर्क करें",
    address:
      "WetAcre सतत समाधान LLP, CrAdLE, भाट गांव, गांधीनगर, गुजरात, 382428 - भारत",
    call1: "कॉल करें: +91 70667 44494",
    call2: "कॉल करें: +91 80558 50995",
    ourLocation: "हमारा स्थान",
    copyright: `© ${new Date().getFullYear()} WetAcre सतत समाधान LLP. सर्वाधिकार सुरक्षित`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //  Maithili
  mai: {
    logoAlt: "कम्पनीक चिन्ह",
    tagline: "WetAcre सस्टेनेबल सलूशन",
    readMore: "ओर पढू",
    quickLinks: "चटपटी कड़ी",
    home: "घर",
    who: "हम कयन छी?",
    what: "हम की करैत छी?",
    tech: "हमर तकनीक",
    blog: "ब्लॉग",
    contactUs: "हमरो संगा संपर्क करू",
    getInTouch: "हमरो संगा संपर्क करू",
    address:
      "WetAcre सस्टेनेबल सलूशन LLP, CrAdLE, भाट गाम, गांधीनगर, गुजरात, 382428 - भारत",
    call1: "कॉल करू : +91 70667 44494",
    call2: "कॉल करू : +91 80558 50995",
    ourLocation: "हमरो स्थान",
    copyright: `© ${new Date().getFullYear()} WetAcre सस्टेनेबल सलूशन LLP. सर्वाधिकार सुरक्षित`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //marathi
  mr: {
    logoAlt: "कंपनी लोगो",
    tagline: "WetAcre शाश्वत उपाय",
    readMore: "अधिक वाचा",
    quickLinks: "जलद दुवे",
    home: "मुख्य पृष्ठ",
    who: "आम्ही कोण?",
    what: "आम्ही काय करतो?",
    tech: "आमची तंत्रज्ञान",
    blog: "ब्लॉग",
    contactUs: "आमच्याशी संपर्क साधा",
    getInTouch: "आमच्याशी संपर्क साधा",
    address:
      "WetAcre शाश्वत उपाय LLP, CrAdLE, भाट गाव, गांधीनगर, गुजरात, 382428 - भारत",
    call1: "कॉल : +91 70667 44494",
    call2: "कॉल : +91 80558 50995",
    ourLocation: "आमचे स्थान",
    copyright: `© ${new Date().getFullYear()} WetAcre शाश्वत उपाय LLP. सर्वाधिकार राखीव`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },

  //tamil
  ta: {
    logoAlt: "நிறுவன லோகோ",
    tagline: "WetAcre நிலைத்தன்மையான தீர்வுகள்",
    readMore: "மேலும் படிக்கவும்",
    quickLinks: "விரைவான இணைப்புகள்",
    home: "முகப்பு",
    who: "நாங்கள் யார்?",
    what: "நாங்கள் என்ன செய்கிறோம்?",
    tech: "எங்கள் தொழில்நுட்பம்",
    blog: "ப்ளாக்",
    contactUs: "எங்களை தொடர்பு கொள்ளவும்",
    getInTouch: "எங்களை தொடர்பு கொள்ளவும்",
    address:
      "WetAcre நிலைத்தன்மையான தீர்வுகள் LLP, CrAdLE, Bhat கிராமம், Gandhinagar, Gujarat, 382428 - இந்தியா",
    call1: "அழைக்கவும் : +91 70667 44494",
    call2: "அழைக்கவும் : +91 80558 50995",
    ourLocation: "எங்கள் இடம்",
    copyright: `© ${new Date().getFullYear()} WetAcre நிலைத்தன்மையான தீர்வுகள் LLP. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டன.`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //bengali
  bn: {
    logoAlt: "কোম্পানির লোগো",
    tagline: "WetAcre স্থিতিশীল সমাধান",
    readMore: "আরও পড়ুন",
    quickLinks: "দ্রুত লিংক",
    home: "বাড়ি",
    who: "আমরা কে?",
    what: "আমরা কি করি?",
    tech: "আমাদের প্রযুক্তি",
    blog: "ব্লগ",
    contactUs: "যোগাযোগ করুন",
    getInTouch: "যোগাযোগ করুন",
    address:
      "WetAcre স্থিতিশীল সমাধান LLP, CrAdLE, ভাট গ্রাম, গান্ধীনগর, গুজরাট, 382428 - ভারত",
    call1: "কল করুন : +91 70667 44494",
    call2: "কল করুন : +91 80558 50995",
    ourLocation: "আমাদের অবস্থান",
    copyright: `© ${new Date().getFullYear()} WetAcre স্থিতিশীল সমাধান LLP. সর্বস্বত্ব সংরক্ষিত.`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //gujarati
  gu: {
    logoAlt: "કંપનીનું લોગો",
    tagline: "WetAcre ટકાઉ ઉકેલો",
    readMore: "વધુ વાંચો",
    quickLinks: "ઝડપી લિંક્સ",
    home: "ઘર",
    who: "અમે કોણ?",
    what: "અમે શું કરીએ?",
    tech: "અમારી તકનીક",
    blog: "બ્લોગ",
    contactUs: "અમારો સંપર્ક કરો",
    getInTouch: "અમારો સંપર્ક કરો",
    address:
      "WetAcre ટકાઉ ઉકેલો LLP, CrAdLE, ભટ ગામ, ગાંધીનગર, ગુજરાત, 382428 - ભારત",
    call1: "કૉલ કરો : +91 70667 44494",
    call2: "કૉલ કરો : +91 80558 50995",
    ourLocation: "અમારી જગ્યા",
    copyright: `© ${new Date().getFullYear()} WetAcre ટકાઉ ઉકેલો LLP. બધા હક અન�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },

  //telgu
  te: {
    logoAlt: "కంపెనీ లోగో",
    tagline: "WetAcre స్థిరత పరిష్కారం",
    readMore: "మరిన్ని చదవండి",
    quickLinks: "త్వరిత లింక్‌లు",
    home: "హోమ్",
    who: "మేమెవరం?",
    what: "మేము ఏమి చేస్తాం?",
    tech: "మా సాంకేతికత",
    blog: "బ్లాగ్",
    contactUs: "మమ్మల్ని సంప్రదించండి",
    getInTouch: "మమ్మల్ని సంప్రదించండి",
    address:
      "WetAcre స్థిరత పరిష్కారం LLP, CrAdLE, భట్ గ్రామం, గాంధీనగర్, గుజరాత్, 382428 - భారతదేశం",
    call1: "కాల్ చేయండి : +91 70667 44494",
    call2: "కాల్ చేయండి : +91 80558 50995",
    ourLocation: "మా స్థానం",
    copyright: `© ${new Date().getFullYear()} WetAcre స్థిరత పరిష్కారం LLP. అన్ని హక్కులు రక్షించబడ్డాయి.`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },

  //odia
  or: {
    logoAlt: "କମ୍ପାନୀ ଲୋଗୋ",
    tagline: "WetAcre ନିଶ୍ଚିତ ସମାଧାନ",
    readMore: "ଅଧିକ ପଢନ୍ତୁ",
    quickLinks: "ଦ୍ରୁତ ଲିଙ୍କଗୁଡ଼ିକ",
    home: "ମୂଳ",
    who: "ଆମେ କେହି?",
    what: "ଆମେ କ'ଣ କରୁଛୁ?",
    tech: "ଆମର ପ୍ରଯୁକ୍ତି",
    blog: "ବ୍ଲଗ୍",
    contactUs: "ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ",
    getInTouch: "ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ",
    address:
      "WetAcre ନିଶ୍ଚିତ ସମାଧାନ LLP, CrAdLE, ଭାଟ୍ ଗ୍ରାମ, ଗାନ୍ଧୀନଗର, ଗୁଜରାତ, 382428 - ଭାରତ",
    call1: "କଲ କରନ୍ତୁ : +91 70667 44494",
    call2: "କଲ କରନ୍ତୁ : +91 80558 50995",
    ourLocation: "ଆମର ଅବସ୍ଥାନ",
    copyright: `© ${new Date().getFullYear()} WetAcre ନିଶ୍ଚିତ ସମାଧାନ LLP. ସବୁ ଅଧିକାର ସୁରକ୍ଷିତ।`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //kannada
  kn: {
    logoAlt: "ಕಂಪನಿಯ ಲೋಗೋ",
    tagline: "WetAcre ಸಸ್ಯನಿರ್ವಹಣಾ ಪರಿಹಾರಗಳು",
    readMore: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಓದಿ",
    quickLinks: "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
    home: "ಮನೆಯ",
    who: "ನಾವು ಯಾರು?",
    what: "ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ?",
    tech: "ನಮ್ಮ ತಂತ್ರಜ್ಞಾನ",
    blog: "ಬ್ಲಾಗ್",
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    getInTouch: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    address:
      "WetAcre ಸಸ್ಯನಿರ್ವಹಣಾ ಪರಿಹಾರಗಳು LLP, CrAdLE, ಭಟ್ ಗ್ರಾಮ, ಗಾಂಧೀನಗರ, ಗುಜರಾತ್, 382428 - ಭಾರತ",
    call1: "ಕಾಲ್: +91 70667 44494",
    call2: "ಕಾಲ್: +91 80558 50995",
    ourLocation: "ನಮ್ಮ ಸ್ಥಳ",
    copyright: `© ${new Date().getFullYear()} WetAcre ಸಸ್ಯನಿರ್ವಹಣಾ ಪರಿಹಾರಗಳು LLP. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //konkai
  kok: {
    logoAlt: "कंपनीचे चिन्ह",
    tagline: "WetAcre शाश्वत सोल्यूशन्स",
    readMore: "अधिक वाचाच",
    quickLinks: "जलद दुवे",
    home: "मुख्य पृष्ठ",
    who: "आम्ही कोण?",
    what: "आम्ही काय करतो?",
    tech: "आमची तंत्रज्ञान",
    blog: "ब्लॉग",
    contactUs: "आमच्याशी संपर्क साधा",
    getInTouch: "आमच्याशी संपर्क साधा",
    address:
      "WetAcre शाश्वत सोल्यूशन्स LLP, CrAdLE, भाट गाव, गांधीनगर, गुजरात, 382428 - भारत",
    call1: "कॉल : +91 70667 44494",
    call2: "कॉल : +91 80558 50995",
    ourLocation: "आमचे स्थान",
    copyright: `© ${new Date().getFullYear()} WetAcre शाश्वत सोल्यूशन्स LLP. सर्वाधिकार राखीव.`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //manipuri
  mni: {
    logoAlt: "সংস্থাৰ লোগো",
    tagline: "WetAcre স্থিতিশীল সমাধান",
    readMore: "অধিক পঢ়ক",
    quickLinks: "দ্ৰুত লিংকসমূহ",
    home: "মুখ্য পৃষ্ঠা",
    who: "আমরা কোন?",
    what: "আমরা কি কৰো?",
    tech: "আমাৰ প্ৰযুক্তি",
    blog: "ব্লগ",
    contactUs: "যোগাযোগ কৰক",
    getInTouch: "আমাৰ লগত যোগাযোগ কৰক",
    address:
      "WetAcre স্থিতিশীল সমাধান LLP, CrAdLE, ভাট গাঁও, গান্ধীনগৰ, গুজৰাট, 382428 - ভাৰত",
    call1: "ফোন কৰক : +91 70667 44494",
    call2: "ফোন কৰক : +91 80558 50995",
    ourLocation: "আমাৰ অৱস্থান",
    copyright: `© ${new Date().getFullYear()} WetAcre স্থিতিশীল সমাধান LLP. সকলো অধিকাৰ সংৰক্ষিত`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //malayaalam
  ml: {
    logoAlt: "കമ്പനി ലോഗോ",
    tagline: "WetAcre നിരന്തര പരിഹാരങ്ങൾ",
    readMore: "കൂടുതൽ വായിക്കുക",
    quickLinks: "വേഗത കുറഞ്ഞ കണ്ണികൾ",
    home: "മഴവിൽ",
    who: "ഞങ്ങൾ ആരാണ്?",
    what: "ഞങ്ങൾ എന്താണ് ചെയ്യുന്നത്?",
    tech: "ഞങ്ങളുടെ സാങ്കേതിക വിദ്യ",
    blog: "ബ്ലോഗ്",
    contactUs: "ഞങ്ങളുമായി ബന്ധപ്പെടുക",
    getInTouch: "ഞങ്ങളുമായി ബന്ധപ്പെടുക",
    address:
      "WetAcre നിരന്തര പരിഹാരങ്ങൾ LLP, CrAdLE, ഭട്ട് ഗ്രാമം, ഗാന്ധീനഗർ, ഗുജറാത്ത്, 382428 - ഇന്ത്യ",
    call1: "അവകാശിക്കൂ : +91 70667 44494",
    call2: "അവകാശിക്കൂ : +91 80558 50995",
    ourLocation: "ഞങ്ങളുടെ സ്ഥാനം",
    copyright: `© ${new Date().getFullYear()} WetAcre നിരന്തര പരിഹാരങ്ങൾ LLP. എല്ലാ 
    അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  //punjabi
  pa: {
    logoAlt: "ਕੰਪਨੀ ਲੋਗੋ",
    tagline: "WetAcre ਮਿਟੀਰੀ ਹੱਲ",
    readMore: "ਹੋਰ ਪੜੋ",
    quickLinks: "ਤਾਜ਼ੀ ਲਿੰਕ",
    home: "ਘਰ",
    who: "ਅਸੀਂ ਕੌਣ ਹਾਂ?",
    what: "ਅਸੀਂ ਕੀ ਕਰਦੇ ਹਾਂ?",
    tech: "ਸਾਡੇ ਤਕਨਾਲੋਜੀ",
    blog: "ਬਲਾਗ",
    contactUs: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    getInTouch: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    address:
      "WetAcre ਮਿਟੀਰੀ ਹੱਲ LLP, CrAdLE, ਭੱਟ ਗਾਂਵ, ਗਾਂਧੀਨਗਰ, ਗੁਜਰਾਤ, 382428 - ਭਾਰਤ",
    call1: "ਕਾਲ ਕਰੋ: +91 70667 44494",
    call2: "ਕਾਲ ਕਰੋ: +91 80558 50995",
    ourLocation: "ਸਾਡੇ ਸਥਾਨ",
    copyright: `© ${new Date().getFullYear()} WetAcre ਮਿਟੀਰੀ ਹੱਲ LLP. ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ ਹਨ.`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },

  //nepali
  ne: {
    logoAlt: "कम्पनी लोगो",
    tagline: "WetAcre दिगो समाधान",
    readMore: "थप पढ्नुहोस्",
    quickLinks: "छिटो लिंकहरू",
    home: "गृहपृष्ठ",
    who: "हामी को हौं?",
    what: "हामी के गर्छौं?",
    tech: "हाम्रो प्रविधि",
    blog: "ब्लग",
    contactUs: "हामीलाई सम्पर्क गर्नुहोस्",
    getInTouch: "हामीलाई सम्पर्क गर्नुहोस्",
    address:
      "WetAcre दिगो समाधान LLP, CrAdLE, भाट गाउँ, गान्धीनगर, गुजरात, 382428 - भारत",
    call1: "कॉल गर्नुहोस् : +91 70667 44494",
    call2: "कॉल गर्नुहोस् : +91 80558 50995",
    ourLocation: "हाम्रो स्थान",
    copyright: `© ${new Date().getFullYear()} WetAcre दिगो समाधान LLP. सबै अधिकार सुरक्षित.`,
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
};

const Footer = () => {
  const getInitialLanguage = () => {
    const storedLanguage = localStorage.getItem("preferredLanguage");
    return storedLanguage ? storedLanguage : "en";
  };

  // Set initial state of currentLanguage
  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage());

  const {
    logoAlt,
    tagline,
    readMore,
    quickLinks,
    home,
    who,
    what,
    tech,
    blog,
    contactUs,
    getInTouch,
    address,

    call1,
    call2,
    ourLocation,
    copyright,
    privacy,
    terms
  } = translations[currentLanguage];

  return (
    <footer className="bg-[#C0DDFF] text-[#333333] p-4 sm:p-8">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and tagline */}
        <div>
          <img
            src="Images/logoname.png"
            alt={logoAlt}
            className="w-[150px] sm:w-[200px] h-[62px] sm:h-[82px] mb-4 mt-[-20px] mx-10"
          />
          <p className="mb-4">{tagline}</p>
          <a
            href="#"
            className="text-green-500 font-bold hover:text-blue-500 text-lg"
          >
            {readMore}
          </a>
          <p className="m-5 ml-10 text-left text-green-500">Follow us on</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-8 mr-7">
            {quickLinks}
          </h2>
          <ul className="space-y-4 text-lg text-left mx-20">
            <li>
              <Link to="/" className="hover:underline">
                {home}
              </Link>
            </li>
            <li>
              <Link to="/who" className="hover:underline">
                {who}
              </Link>
            </li>
            <li>
              <Link to="/what" className="hover:underline">
                {what}
              </Link>
            </li>
            <li>
              <Link to="/tech" className="hover:underline">
                {tech}
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                {blog}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                {contactUs}
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-8 mr-24">
            {getInTouch}
          </h2>

          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-4 h-8 w-8 text-green-500" />
            <p className="font-bold text-left mx-3">{address}</p>
          </div>

          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-4 h-6 w-6 text-green-500" />
            <a
              href="mailto:info@krishiyan.com"
              className="hover:underline font-bold"
            >
              info@krishiyan.com
            </a>
          </div>

          <div className="flex items-center ">
            <FaPhone className="mr-4 h-6 w-6 text-green-500" />
            <a
              href="tel:+91 7066744494"
              className="hover:underline mb-4 font-bold"
            >
              {call1}
            </a>
          </div>
          <div className="flex items-center ">
            <FaPhone className="mr-4 h-6 w-6 text-green-500" />
            <a href="tel:+91 8055850995" className="hover:underline  font-bold">
              {call2}
            </a>
          </div>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">{ourLocation}</h2>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28247.726883461957!2d72.628989!3d23.114339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfffee43459262ff%3A0x3b639b2cb36a5284!2sWetAcre%20Sustainable%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1694681667907!5m2!1sen!2sin"></iframe>
        </div>
      </div>

      <ScrollToTopArrow />
      {/* Copyright */}
      <hr className="my-8" />
      <div className="text-center">{copyright}</div>
      {/* <div className="text-center">{privacy}</div> */}
      <Link to="/privacy" className="hover:underline">
        {privacy}
      </Link>
      <span>  |  </span>
      <Link to="/terms" className="hover:underline">
        {terms}
      </Link>
    </footer>
  );
};

export default Footer;
