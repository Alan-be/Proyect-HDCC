import styles from './style.module.css'
import style from './footer.scss'
import { HashLink as Link } from 'react-router-hash-link';
 
//import Icon from '@mui/material/Icon';

export default function Footer(props) {
  return (
    <footer className="footerMain" >
        {
            !props.simple &&
            <div className="footerSocialMedia">


                    <div className="footerBanner">

                        <div className='socialMedia'>
                            {
                            [{href: 'https://www.facebook.com/entrypay/',icon:"fa-facebook"},
                            {href: ' https://instagram.com/entrypay?r=nametag',icon:"fa-instagram"},
                            {href: 'https://youtube.com/channel/UCCQnrtdBy5GWimdh9X-Q6nA',icon:"fa-youtube"},                   
                            {href: 'https://www.tiktok.com/@entrypay',icon:"fa-tiktok"},
                            {href: 'https://twitter.com/entrypay?s=11&t=yNDVycmWuE3-FDakUI187A',icon:"fa-twitter"},
                            
                            ].map((s,i) => 
                            <a key = {i} href={s.href}>
                            
                            </a>
                            
                            )
                            }
                        </div>

                        {/* <div className='links'>
                            {[
                                {text: "Nosotros", route:'about'},
                                {text: "Beneficios", route:'beneficios'},
                                {text: "Soluciones", route: 'solutions'},
                                {text: "Cotizar", route:'cotizar'},
                                {text: "Club de Negocios", route:'club-negocios'},
                            ].map((l,i) =>
                                <Link key = {i} to = {`./#${l.route}`}>{l.text}</Link>
                            )}
                        </div> */}

                        <div className='TerminosCondiciones'>
                            <a className='terminosCondicionesText' target="_blank">Terminos y Condiciones</a> 
                            <a className='avisoPrivacidadText'  target="_blank">Aviso de Privacidad</a> 
                        </div>
                        
                    </div>
                
                <div className='logoEntry'>
                    <img alt="image" className="logo" src="./inverse-logo.svg"/>
                </div>
            </div>
        }
        
        <div className="copyright">
           <p className="copytext" >
           © EntryPay 2022 - Todos los derechos reservados{' '}
           </p> 
        </div>
    </footer>
  )
}
