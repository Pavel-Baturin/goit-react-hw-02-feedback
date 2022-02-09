

function Section({title, children}) { 
    return (
        <div className="">
            <h2>{title}</h2>
            { children }
        </div>
    )
}

export default Section;