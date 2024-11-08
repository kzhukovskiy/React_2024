import React from 'react';
import './NavigationBar.css';

interface NavigationBarProperties {
    sidebar: () => void;
    isSidebarOpen: boolean;
  }

const NavigationBar: React.FC<NavigationBarProperties> = ({sidebar, isSidebarOpen}) => (
    <nav className="navigationBar">
        <button onClick={sidebar}>
            {isSidebarOpen ? <span>X</span> : <span>☰</span>}
        </button>
        <ul>
            <li className="navigationBarItem">Товары</li>
            <li className="navigationBarItem">Склады</li>
            <li className="navigationBarItem">О системе</li>
            <li className="navigationBarItem">Личная страница пользователя</li>
        </ul>
    </nav>
);

export default NavigationBar;