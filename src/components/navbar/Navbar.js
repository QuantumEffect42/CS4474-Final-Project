import React from 'react';
import { MenuItems } from './MenuItems';
import MenuElements from './MenuElements';

const Navbar = () => {
    return(
        <nav>
            <ul className='navbar'>
                {MenuItems.map((menu, index) => {
                    return(
                        <MenuElements items={menu} key={index} />
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;