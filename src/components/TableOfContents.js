const TableOfContents = ({ textArray }) => {
    const fullToC = textArray.slice(textArray.indexOf("Contents"), textArray.indexOf("Credits") + 1)
    const chapters = fullToC.filter(line => !isNaN(line[0]) && (line[3] === '.' || line[1] === '.') && isNaN(line[4]))
    //console.log(fullToC)
    return (
        <div>
            {chapters.map(line => <p key={'chapter' + chapters.indexOf(line)}>{line}</p>)}
        </div>
    )
}

export default TableOfContents