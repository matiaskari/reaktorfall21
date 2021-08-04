
import React, { useState, useEffect } from 'react'
//import rulesService from './services/rules'
import textFile from './MagicCompRules20210419.txt'
import TableOfContents from './components/TableOfContents'
import FullRules from './components/FullRules'
/*import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom"*/


const App = () => {
    const [rules, setRules] = useState([])
    const [filter, setFilter] = useState([])
    //const [tocChapter, setTocChapter] = useState([])
    let tocChapter = ''

    useEffect(() => {
        /*rulesService.getRules()
            .then(response => response.text())
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                setRules(response.data)
            })*/
        fetch(textFile)
            .then((r) => r.text())
            .then(text => {
                const formattedText = text.split('\r\n').filter(line => line !== "")
                setRules(formattedText)
            })
    }, [])
    const changeFilter = (event) => {
        console.log('Filter: ', event.target.value)
        setFilter(event.target.value)
    }
    const setTocSearch = (chapter) => {
        console.log('chapter: ', chapter)
        tocChapter = chapter
        //setTocChapter(chapter)
    }

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'Arial, Helvetica, sans-serif'
        },
        styleToC: {
            flex: '1',
            width: '20%',
            padding: '20px',
            margin: '5px',

            borderStyle: 'solid',
            borderRadius: '10px',
            borderWidth: '2px'
        },
        styleRules: {
            flex: '3',
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
        <div style={styles.container}>
            <div style={styles.styleToC}><TableOfContents textArray={rules} tocSearch={setTocSearch} /></div>
            <div style={styles.styleRules}>
                <form style={styles.filterField}>Search for rules: <input value={filter} onChange={changeFilter} /></form>
                <FullRules textArray={rules} filter={filter} tocChapter={tocChapter} />
            </div>
        </div >
    )
}

export default App