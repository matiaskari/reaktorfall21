//Table of Contents, Chapters (100. General)
//Display the selected chapter beside the Table of Contents, containing all rules in that chapter (100.2a)
//Filter text field

import React, { useState, useEffect } from 'react'
import rulesService from './services/rules'
import textFile from './MagicCompRules20210419.txt'
import TableOfContents from './components/TableOfContents'
import FullRules from './components/FullRules'

const App = () => {
    const [rules, setRules] = useState([])
    //const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        /*console.log('effect')
        rulesService.getRules()
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
                //console.log(formattedText)
            })
    }, [])

    console.log('render', rules.length, 'lines of rules')
    const styles = {
        container: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start' // if you want to fill rows left to right
        },
        item: {
            width: '50%' // is 50% of container width
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.item}><TableOfContents textArray={rules} /></div>
            <div style={styles.item}><FullRules textArray={rules} /></div>
        </div>
    )
}

export default App