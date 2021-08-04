const TableOfContents = ({ textArray, tocSearch }) => {
    const fullToC = textArray.slice(textArray.indexOf("Contents") + 1, textArray.indexOf("Glossary"))

    //const chapterNumbers = fullToC.map(line => line.split(' ')[0])
    const setTocSearch = (line) => {
        console.log(line)
        //event.preventDefault()
        tocSearch(line.split(' ')[0])
    }
    //console.log(chapterNumbers)
    const chapterStyle = {
        margin: '0',
        paddingTop: '15px',
        paddingBottom: '5px'
    }
    const subChapterStyle = {
        margin: '0',
        paddingLeft: '15px'
    }
    const formatted = fullToC.map(line => {
        if ((!isNaN(line[0]) && line[1] === '.') || isNaN(line[0])) {
            return <h3 key={'chapter' + line.split(' ')[0]} style={chapterStyle}><button onClick={setTocSearch(line)}>{line}</button></h3>
        } else {
            return <p key={'chapter' + line.split(' ')[0]} style={subChapterStyle}><button onClick={setTocSearch(line)}>{line}</button></p>
        }
    })
    return (
        <div>
            <button>Show all rules</button>
            {formatted}
        </div>
    )
}

export default TableOfContents