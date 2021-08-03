const FullRules = ({ textArray }) => {
    const rulesWithoutToC = textArray.slice(textArray.indexOf("Credits") + 1, textArray.length)
    const onlyRules = rulesWithoutToC.slice(0, rulesWithoutToC.indexOf("Glossary")) //same as rulesWithoutToC but also Glossary removed
    /*const glossary = rulesWithoutToC.slice(rulesWithoutToC.indexOf("Glossary"), rulesWithoutToC.length)
        .map(line => <p key={'rule' + rulesWithoutToC.indexOf(line)}>{line}</p>)*/
    const formatted = onlyRules.map(line => {
        if (!isNaN(line[0]) && line[1] === '.' && isNaN(line[4])) {
            return <h2 key={'rule' + onlyRules.indexOf(line)}>{line}</h2>
        } else if (!isNaN(line[0]) && line[3] === '.' && line[4] === " ") {
            return <h3 key={'rule' + onlyRules.indexOf(line)}>{line}</h3>
        } else {
            return <p key={'rule' + onlyRules.indexOf(line)}>{line}</p>
        }
    })

    //const chapterOne = onlyRules.slice(0,)

    return (
        <div>
            {formatted}
        </div>
    )
}

export default FullRules