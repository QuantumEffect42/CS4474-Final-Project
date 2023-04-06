import { useState } from "react";
import Dropdown from "./Dropdown";

const MenuElements = ({items}) => {

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () =>{
        window.innerWidth > 960 && setDropdown(true);
    }

    const onMouseLeave = () =>{
        window.innerWidth > 960 && setDropdown(false)
    }

    return (
        <li className="navbaritems" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.submenu ? (
                <>
                    <button type="button" 
                        aria-haspopup="menu" 
                        aria-expanded={dropdown ? "true" : "false"}
                    >
                        {items.title}{" "}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    );
};

export default MenuElements