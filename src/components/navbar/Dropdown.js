const Dropdown = ({submenus, dropdown}) => {
    return(
        <ul className = {`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="navbaritems">
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;