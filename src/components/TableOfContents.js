const TableOfContents = ({ textArray }) => {
    const fullToC = textArray.slice(textArray.indexOf("Contents"), textArray.indexOf("Credits") + 1)
    //const chapters = fullToC.filter(line => !isNaN(line[0]) && (line[3] === '.' || line[1] === '.') && isNaN(line[4]))
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
            return <h3 key={'chapter' + line.split(' ')[0]} style={chapterStyle}>{line}</h3>
        } else {
            return <p key={'chapter' + line.split(' ')[0]} style={subChapterStyle}>{line}</p>
        }
    })
    return (
        <div>
            {formatted}
        </div>
    )
}

export default TableOfContents