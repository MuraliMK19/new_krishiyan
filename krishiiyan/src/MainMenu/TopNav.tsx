import React, { useState } from 'react'
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import { Avatar } from '@mui/material';
function TopNav() {

    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <div className={`flex items-center justify-between bg-white shadow-lg rounded-lg z-50 h-20`}>
            <div>
                <img src="Images/logoname.png" alt="Logo" className="h-12 sm:h-16" />
            </div>
            <div className=''>
                <ul className='flex items-center justify-between space-x-20 mr-44'>
                    <li>Point of Sale</li>
                    <li>Crop Advisory</li>
                    <li>FRM</li>
                    <li>Management</li>
                </ul>
            </div>
            <div className='flex justify-end space-x-10 mr-5'>
                <CircleNotificationsRoundedIcon sx={{ fontSize: 40 }} />
                <Avatar />
            </div>
        </div>
    )
}

export default TopNav