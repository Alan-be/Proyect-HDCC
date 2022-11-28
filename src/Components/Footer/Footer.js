import React from 'react'
import "./footer.scss";

export const Footer = () => {
    return (
        <div className='FooterMainContainer'>
            <div className='LeftFooterContainer'>
                <h2>Team Members</h2>
                <p>Alan Arevalo</p>
                <p>Oscar Perez</p>

            </div>
            <div className='CenterFooterContainer'>
               {/*  <h2>Social Media</h2> */}
                <img src="https://www.pngkit.com/png/full/488-4883158_subscribe-to-our-mailing-list-icono-de-instagram.png" width="100px"/>
                <a href='https://www.instagram.com/alan.av07/'>@alan.av07</a>
                <a href='https://www.instagram.com/oscar.2901/'>@oscar.2901</a>

            </div>
            <div className='RightFooterContainer'>
                {/* <h2>GitHub</h2> */}
                <img src="https://camo.githubusercontent.com/fe3b97974431a5652f0572ef8dd3c46d206d0aeb9658c7dd1f9c766ed89e4215/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067" width="100px" />
                <a href="https://github.com/Alan-be">Alan-be</a>
                <a href='https://github.com/oscar2901-UNIVA'>Oscar2901-UNIVA</a>

            </div>

        </div>
    )
}
