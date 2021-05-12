import React from 'react'
import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'


export default function Browse() {

    //serie & films
    const { series } = useContent ('series')
    const { films } = useContent ('films')

    //slides

    const slides = selectionFilter({ series, films })

    //container browser

    return <BrowseContainer slides={slides} />
}