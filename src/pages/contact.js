import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import Footer from '../components/footer';
import axios from 'axios'


export default function Contact() {

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [error] = useState('');
    const [status] = useState('envoyer')

    const isInvalid = firstName === '' || message === '' || emailAddress === '';

    const handleContact = (event) => {
        event.preventDefault();

        const field = event.target.id;
            if (field === "name") {
                this.setState({ name: event.target.value });
            } else if (field === "email") {
                this.setState({ email: event.target.value });
            } else if (field === "message") {
                this.setState({ message: event.target.value });
        }
        this.setState({ status: "envoyer" });  
            axios({
            method: "POST",
            url: "http://localhost:3000/contact",
            data: this.state,
        }).then((response) => {
            if (response.data.status === "sent") {
                alert("Message envoyé");
        this.setState({ name: "", email: "", message: "", status: "envoyer" });
        } else if (response.data.status === "failed") {
                alert("Message erreur d'envoi");
      }
    });
    };
    return (
        <>
        <HeaderContainer>
            <Form >
                <Form.Title>Contact</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleContact} method="POST">
                <Form.Input
                    placeholder="Nom"
                    autoComplete='off'
                    value={firstName}
                    onChange={({ target }) => setFirstName(target.value)}
                />
                <Form.Input
                    placeholder="Email"
                    autoComplete='off'
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Form.Textarea
                    type="text"
                    value={message}
                    autoComplete="off"
                    placeholder="Message"
                    onChange={({ target }) => setMessage(target.value)}
                />
                <Form.Submit value={status} disabled={isInvalid} type="submit">
                    Envoyer
                </Form.Submit>
                </Form.Base>
                <Form.TextSmall>
                Cette page est protégée par Google reCAPTCHA pour vous assurer que vous n'êtes pas un robot.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <Footer />
        </>
    )
}