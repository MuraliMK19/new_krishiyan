import React from 'react';
import './AppPromo.css';

const AppPromo = () => {
    return (
        <div className="app-promo gradient-border">
            <div className="app-promo-images">
                <img src="/Images/phoneimg.svg" alt="App Screenshot 1" className="phone" />
            </div>
            <div className="app-promo-content">
                <h1>
                    <span className="highlight bg-gradient-to-r from-[#3390FF] via-[#38A1BB] to-[#3FC041] bg-clip-text text-transparent">Krishiyan App</span><br />
                    <span className='highlight1'>Empowering Farmers Anytime, Anywhere</span>
                </h1>
                <p className='text-[#616161] xl:p-5'>Stay informed, connected, and in control with the Krishiyan app.</p>
                <p className="download-text xl:pl-5">Download the App Today</p>
                <div className="store-buttons">
                    <img src="/Images/goimage1.png" alt="Google Play" />
                </div>
            </div>

        </div>
    );
};

export default AppPromo;
