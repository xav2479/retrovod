import React from 'react' 
import {OptForm} from '../components'
import Footer from '../components/footer';
import JumbotronContainer from '../containers/jumbotron';
import {FaqsContainer} from '../containers/faqs'
import {HeaderContainer} from '../containers/header';
import Feature from '../components/feature'
import { Link } from 'react-router-dom'


export default function Home (){
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Vous trouverez sur cette plateforme unique.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Tous les films & séries cultes de votre enfance
                    </Feature.SubTitle>
                    <OptForm>
                        <Link style={{textDecoration: 'none'}} exact to = '/signup'>
                        <OptForm.Button >Inscription</OptForm.Button>
                        </Link>
                        <OptForm.Break />
                        <OptForm.Text>
                        Prêt à regarder ? Appuyer sur inscription pour créer ou connexion pour redémarrer votre abonnement.
                    </OptForm.Text>
                </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <Footer />
        </>
    )
}