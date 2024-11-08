import React from 'react';
import './Sidebar.css';

interface SidebarProperties {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProperties> = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <aside className="sidebar">
            <input type="text" placeholder="Поиск" className="search" />
            <div className="filter">
                <input type="checkbox" id="nonZeroQuantity" />
                <label htmlFor="nonZeroQuantity">Только в наличии</label>
            </div>
            <select className="category">
                <option value="">Все категории</option>
            </select>
        </aside>
    );
};

export default Sidebar;