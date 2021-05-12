import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { Payment } from '../components'
import Footer from '../components/footer';
import * as ROUTES from '../constants/routes';


export default function Signup() {

   
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();
    
        return firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password)
          .then((result) =>
            result.user
              .updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
              })
              .then(() => {
                history.push(ROUTES.BROWSE);
              })
          )
          .catch((error) => {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
          });
      };
    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Inscription</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method="POST">
                <Form.Input
                    placeholder="Nom"
                    value={firstName}
                    onChange={({ target }) => setFirstName(target.value)}
                />
                <Form.Input
                    placeholder="Email"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Form.Input
                    type="password"
                    value={password}
                    autoComplete="off"
                    placeholder="Mot de passe"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <Payment />
                <Form.Submit disabled={isInvalid} type="submit">
                    S'inscrire
                </Form.Submit>
                </Form.Base>
                <Form.Text>
                    Déjà utilisateur? <Form.Link to="/signin">Connexion</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                Cette page est protégée par Google reCAPTCHA pour vous assurer que vous n'êtes pas un robot.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <Footer />
        </>
    )
}