import React from 'react'
import { Accordion } from '../components'
import OptForm from '../components/opt-form'
import faqsData from '../fixtures/faq.json'
import { Link } from 'react-router-dom'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Questions fréquemment posées</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />
            <OptForm>    
                <Link style={{textDecoration: 'none'}} exact to = '/signup'>
                    <OptForm.Button >Inscription</OptForm.Button>
                </Link>
                <OptForm.Break />
                <OptForm.Text>
                    Prêt à regarder ? Appuyer sur inscription pour créer ou connexion pour redémarrer votre abonnement.
                </OptForm.Text>
            </OptForm>

        </Accordion>
    )
}



