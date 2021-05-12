import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import Footer from '../components/footer';
import * as ROUTES from '../constants/routes';


export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = (event) => {
    event.preventDefault();

     firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>S'identifier</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
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
            <Form.Submit disabled={isInvalid} type="submit">
              Connexion
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Nouveau sur Retrovod? <Form.Link to="/signup">Incription.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            Cette page est protégée par Google reCAPTCHA pour vous assurer que vous n'êtes pas un robot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <Footer />
    </>
  );
}