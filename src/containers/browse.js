import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Loading, Header, Card, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import Footer from '../components/footer';

export function BrowseContainer({ slides }) {

// serie & films
    const [category, setCategory] = useState('series')
//recherche
    const [searchTerm, setSearchTerm] = useState('')
//profils
    const [profile, setprofile] = useState({})
//chargement  
    const [loading, setLoading] = useState(true)
//slide
    const [slideRows, setSlideRows] = useState([])
//authentification
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}


//Loading
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])
//Slides
    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])
//rechercher
    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm])

    return profile.displayName ? (
        <>
          {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
    
          <Header src='1' dontShowOnSmallViewPort>
            <Header.Frame>
                <Header.Group>
                    <Header.Logo 
                        to={ROUTES.HOME} 
                        src={logo} 
                        alt="Retrovod" 
                    />
                    <Header.TextLink 
                        active={category === 'series' ? 'true' : 'false'}
                        onClick={() =>setCategory('series')}
                    >
                        Séries
                    </Header.TextLink>
                    <Header.TextLink
                    active={category === 'films' ? 'true' : 'false'}
                    onClick={() =>setCategory('films')}
                    >
                        Films
                    </Header.TextLink>
                </Header.Group>
                <Header.Group>
                    <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Header.Profile>
                        <Header.Picture src={user.photoURL} />
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.TextLink>{user.displayName}</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.TextLink onClick={() => firebase.auth().signOut()}>Déconnexion</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>
            </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>MacGyver - Le Trésor perdu de l'Atlantide</Header.FeatureCallOut>
                        <Header.Text>
                        Après une fouille dans les ruines de Théra en Grèce, MacGyver et le professeur Atticus partent à la recherche du trésor de l’Atlantide. 
                        Rejoint par Kelly Carson, une formidable aventure les attend à la recherche du médaillon, de l'arche, de la torche de vérité et du livre de platine.
                        </Header.Text>
                        <Header.PlayButton>Regarder</Header.PlayButton>
                    </Header.Feature>
        </Header>
            
        <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                    {slideItem.data.map((item) => (
                        <Card.Item key={item.docId} item={item}>
                        <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                        <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
                <Player>
                    <Player.Button />
                    <Player.Video src="/videos/macgyver-the-original-series-1985-1992.mp4" />
                </Player>
            </Card.Feature>

            </Card>
        ))}
        </Card.Group>

        <Footer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setprofile} />
    )
}