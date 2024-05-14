export function SipleText (props){
    return(
        <div className="simpleDiv">
            <div className="title2 simpleTitle">
                <h3>{props.title}</h3>
            </div>
            <p className="simpleText">{props.paragraph}</p>
        </div>
    )
}