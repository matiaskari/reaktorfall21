const TableOfContents = ({ textArray, tocSearch }) => {
    const fullToC = textArray.slice(textArray.indexOf("Contents") + 1, textArray.indexOf("Glossary"))
    const setTocSearch = (line) => {
        tocSearch(line)
    }

    const chapterStyle = {
        margin: '0',
        padding: '5px',
        fontWeight: '600',
        backgroundColor: 'lightblue',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '3px'
    }
    const subChapterStyle = {
        margin: '0',
        marginLeft: '15px',
        padding: '3px',
        fontWeight: '400',
        backgroundColor: 'lightblue',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '3px'
    }
    const listStyle = {
        marginTop: '3px',
        marginLeft: '0',
        marginRight: '0',
        marginBottom: '0',
        padding: '0'
    }

    const formatted = fullToC.map(line => {
        if ((!isNaN(line[0]) && line[1] === '.') || isNaN(line[0])) {
            return <h3 style={listStyle} key={'chapter' + line.split(' ')[0]}><button type='button' style={chapterStyle} onClick={() => setTocSearch(line)}>{line}</button></h3>
        } else {
            return <p style={listStyle} key={'chapter' + line.split(' ')[0]}><button type='button' style={subChapterStyle} onClick={() => setTocSearch(line)}>{line}</button></p>
        }
    })
    return (
        <div>
            <button type='button' style={chapterStyle} onClick={() => setTocSearch('')}>Show all rules</button>
            {formatted}
        </div>
    )
}

export default TableOfContents