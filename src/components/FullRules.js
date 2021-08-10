
const FullRules = ({ textArray, filter, tocChapter }) => {
    const rulesWithoutToC = textArray.slice(textArray.indexOf("Credits") + 1, textArray.length)
    const onlyRules = rulesWithoutToC.slice(0, rulesWithoutToC.indexOf("Glossary")) //same as rulesWithoutToC but also Glossary removed
    let wantedRules = ''
    let noRulesText = ''

    if (tocChapter.length === 0) {
        wantedRules = onlyRules
    } else if (tocChapter.split(' ')[0].length === 2) {
        wantedRules = onlyRules.filter(line => line[0] === tocChapter[0])
    } else {
        wantedRules = onlyRules.filter(line => line.slice(0, 4).includes(tocChapter.split(' ')[0]))
    }

    const rulesToShow = filter === '' ? wantedRules : wantedRules.filter(line => line.toLowerCase().includes(filter.toString().toLowerCase()))

    if (textArray.length === 0) {
        noRulesText = 'Loading rules...'
    } else if (textArray.length !== 0 && rulesToShow.length === 0) {
        noRulesText = 'Could not find results for "' + filter.toString() + '"'
    }

    const generateKey = () => {
        const min = 0
        const max = 9999999
        return Math.random() * (max - min) + min
    }
    const formatted = rulesToShow.map(line => {
        if (!isNaN(line[0]) && line[1] === '.') {
            return <h2 key={'rule' + generateKey()}>{line}</h2>
        } else if (!isNaN(line[0]) && line[3] === '.' && line[4] === ' ') {
            return <h3 key={'rule' + generateKey()}>{line}</h3>
        } else {
            return <p key={'rule' + generateKey()}>{line}</p>
        }
    })

    return (
        <div>
            {formatted.length === 0 ? noRulesText : formatted}
        </div>
    )
}

export default FullRules