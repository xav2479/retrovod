import React from 'react'
import { Container } from './styles/footer'
import {Link} from 'react-router-dom'



export default function Footer ({children, ...restProps}) {
    return (
        <Container { ...restProps}>{children}
            <div id="footer">
                <div id="footer-columns">
                <ul>
                    <li  id="li">
                        <Link to="/contact" style={{color: "#999"}}>Contact</Link>
                    </li>
                    <li id="li">
                        <Link to="/conditions" style={{color: "#999"}}>Conditions d'utilisation &amp; Politique de confidentialité</Link>
                    </li>
                    <p>
                        Copyright &copy; Retrovod 2021 All rights reserved
                    </p>
                </ul>
                </div>
            </div>
        </Container>
    ) 
}