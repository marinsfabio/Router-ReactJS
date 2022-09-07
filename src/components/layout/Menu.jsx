import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

export const Menu = props => (
    <aside className="Menu"> 
        <nav>
            <ul>
                <li>
                    <Link to ='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='about'>Sobre</Link>
                </li>
                <li>
                    <Link to='/param'>param</Link>
                </li>
                <li>
                    <Link to='/notFound'>não existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)