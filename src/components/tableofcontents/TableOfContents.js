import React from "react";
import "./TableOfContents.css"

const Headings = ({ headings }) =>{
    return(
        <ul>
            {headings.map((heading) => (
                <li key={heading.id}>
                    <a 
                        href={`#${heading.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(`#${heading.id}`).scrollIntoView({
                                behavior: "smooth"
                            });
                        }}
                        >
                            {heading.title}
                        </a>
                    {heading.items.length > 0 &&(
                        <ul>
                            {heading.items.map((child) => (
                                <li key={child.id}>
                                    <a 
                                        href={`#${child.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(`#${child.id}`).scrollIntoView({
                                                behavior: "smooth"
                                            });
                                        }}
                                    >
                                        {child.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}

const TableOfContents = () => {
    const { nestedHeadings } = useHeadings();

    return(
        <nav aria-label="Table of Contents" className="Table-Of-Contents">
            <div className="TOC-Container">
                <Headings headings={nestedHeadings} />
            </div>
        </nav>
    )
};

const useHeadings = () =>{
    const [nestedHeadings, setNestedHeadigns] = React.useState([]);

    React.useEffect(() =>{
        const headingElements = Array.from(document.querySelectorAll("h2, h3"));
        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadigns(newNestedHeadings);

    }, []);
    return { nestedHeadings };
};

const getNestedHeadings = (headingElements) =>{
    const nestedHeadings = [];

    headingElements.forEach((heading, index) => {
        const { innerText: title, id} = heading;

        if(heading.nodeName === "H2"){
            nestedHeadings.push({id, title, items: []});
        }
        else if(heading.nodeName === "H3" && nestedHeadings.length > 0){
            nestedHeadings[nestedHeadings.length - 1].items.push({
                id,
                title,
            });
        }
    });

    return nestedHeadings;
}

export default TableOfContents;