import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import Logo from '../logo.png'

export function HeaderContainer({children}){
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt='RetroVod' src={Logo}/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Connexion</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}