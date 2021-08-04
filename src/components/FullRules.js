
const FullRules = ({ textArray, filter }) => {

    const rulesWithoutToC = textArray.slice(textArray.indexOf("Credits") + 1, textArray.length)
    const onlyRules = rulesWithoutToC.slice(0, rulesWithoutToC.indexOf("Glossary")) //same as rulesWithoutToC but also Glossary removed
    /*const glossary = rulesWithoutToC.slice(rulesWithoutToC.indexOf("Glossary"), rulesWithoutToC.length)
        .map(line => <p key={'rule' + rulesWithoutToC.indexOf(line)}>{line}</p>)*/
    const rulesToShow = filter === "" ? onlyRules : onlyRules.filter(line => line.toLowerCase().includes(filter))

    const generateKey = () => {
        const min = 0
        const max = 9999999
        return Math.random() * (max - min) + min
    }
    const formatted = rulesToShow.map(line => {
        if (!isNaN(line[0]) && line[1] === '.' && isNaN(line[4])) {
            return <h2 key={'rule' + generateKey()}>{line}</h2>
        } else if (!isNaN(line[0]) && line[3] === '.' && line[4] === " ") {
            return <h3 key={'rule' + generateKey()}>{line}</h3>
        } else {
            return <p key={'rule' + generateKey()}>{line}</p>
        }
    })

    return (
        <div>
            {formatted}
        </div>
    )
}

export default FullRules