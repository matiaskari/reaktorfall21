//Table of Contents, Chapters (100. General)
//Display the selected chapter beside the Table of Contents, containing all rules in that chapter (100.2a)
//Filter text field

import React, { useState, useEffect } from 'react'
import rulesService from './services/rules'
import textFile from './MagicCompRules20210419.txt'

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
                console.log(formattedText)
            })
    }, [])

    console.log('render', rules.length, 'rules')

    return (
        <div>
            {rules}
        </div>
    )
}

export default App