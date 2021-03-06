
import React, { useState, useEffect } from 'react'
import rulesService from './services/rules'
import TableOfContents from './components/TableOfContents'
import FullRules from './components/FullRules'

const App = () => {
    const [rules, setRules] = useState([])
    const [filter, setFilter] = useState([])
    const [tocChapter, setTocChapter] = useState([])

    useEffect(() => {
        rulesService.getRules()
            .then(response => {
                console.log('promise fulfilled')
                const formattedText = response.split('\r\n').filter(line => line !== "")
                setRules(formattedText)
            })
    }, [])
    const changeFilter = (event) => {
        console.log('Current filter:', event.target.value)
        setFilter(event.target.value)
    }
    const setTocSearch = (chapter) => {
        console.log('Viewing chapter:', chapter.length !== 0 ? chapter : 'All')
        setTocChapter(chapter)
    }

    const styles = {
        body: {
            fontFamily: 'Arial, Helvetica, sans-serif'
        },
        title: {
            marginLeft: '15px',
            marginTop: '25px'
        },
        container: { //Creating the 2-column layout
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            width: '100%',
        },
        styleToC: {
            flex: '1', //Table of Contents width
            width: '20%',
            padding: '20px',
            margin: '5px',

            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '2px'
        },
        styleRules: {
            flex: '3', //Rules width
            width: '70%',
            padding: '20px',
            margin: '5px',

            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '2px'
        },
        filterField: {
            paddingBottom: '10px'
        }
    }

    return (
        <div style={styles.body}>
            <h2 style={styles.title}>Matias Kari | Assignment for Reaktor junior developers, fall 2021</h2>
            <div style={styles.container}>
                <div style={styles.styleToC}><TableOfContents textArray={rules} tocSearch={setTocSearch} /></div>
                <div style={styles.styleRules}>
                    <form style={styles.filterField}>Search for rules: <input value={filter} onChange={changeFilter} /></form>
                    <FullRules textArray={rules} filter={filter} tocChapter={tocChapter} />
                </div>
            </div>
        </div>
    )
}

export default App