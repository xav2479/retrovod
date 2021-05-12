import React from 'react'
import { Header, Profiles } from '../components'
import * as ROUTES from '../constants/routes'
import Logo from '../logo.png'
import Footer from '../components/footer';

export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={true}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={Logo} alt="RetroVod" />
                </Header.Frame>
            <Profiles>
                <Profiles.Title>Qui regarde ?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => 
                            setProfile({ 
                                displayName: user.displayName, 
                                photoURL: user.photoURL 
                            })
                        }
                    >
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
            </Header>
            <Footer />
        </>
    )
        
}