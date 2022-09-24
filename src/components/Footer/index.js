import React from 'react';


function Footer() {
    return (
        <div className='footer myt-5 py-2' >
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='https://github.com/Caleeeb' target='_blank' rel='noopener noreferrer'>
                        GitHub
                    </a>
                </li>
                <li className='mx-2'>
                    <a href='https://www.linkedin.com/in/caleb-j-day/' target='_blank' rel='noopener noreferrer'>
                        LinkedIn
                    </a>
                </li>
                <li className='mx-2'>
                    <a href='https://stackoverflow.com/users/19589970/caleeb' target='_blank' rel='noopener noreferrer'>
                        Stacked Overflow
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;