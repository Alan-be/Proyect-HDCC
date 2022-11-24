import React from 'react'
import "./Footer.scss";

export const Footer = () => {
    return (
        <div className='FooterMainContainer'>
            <div className='LeftFooterContainer'>
                <h2>Members Team</h2>
                <p>Alan Arevalo</p>
                <p>Oscar Perez</p>

            </div>
            <div className='CenterFooterContainer'>
                <h2>Social Media</h2>
                <a href='https://www.instagram.com/alan.av07/'>@alan.av07</a>
                <a href='https://www.instagram.com/oscar.2901/'>@oscar.2901</a>

            </div>
            <div className='RightFooterContainer'>
                <h2>GitHub</h2>
                <a href="https://github.com/Alan-be">Alan-be</a>
                <a href='https://github.com/oscar2901-UNIVA'>Oscar2901-UNIVA</a>

            </div>

        </div>
    )
}
