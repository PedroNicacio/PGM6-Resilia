import styles from './Menu.module.css'
import './Navbar.css'
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import icone from '../assets/icone_perfil.png'
import iconMenu from '../assets/menu.png';

function Menu() {
    const [isTransparent, setTransparent] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const {logado, isLogado} = useContext(Context);
    

    //Scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    function handleScroll() {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 0) {
            setTransparent(true);
        } else if (scrollTop === 0) {
            setTransparent(false);
        }
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }


    return (

        <>
            <nav className={isTransparent ? "transparencia" : "color"}>
                <div>
                    <Link to="/"><img className={styles.img_logo} src={logo} width='50%' /></Link>
                </div>
                <ul className={`ul ${isTransparent ? "teste" : ""}`}>

                    <Link to="/home" style={{ textDecoration: 'none' }}><li>Página Inicial</li></Link>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Pontos de coleta</li>
                    {logado ? <Link to="/perfil"><li className={styles.img_perfil}><img width='100%' src={icone} /></li></Link> : ''}
                    
                    <Link style={{ textDecoration: 'none' }} to="/login"><li>Login / Cadastro</li></Link>
                </ul>
            </nav>

            <nav className={styles.menuDrop}>
                <div>
                    <Link to="/"><img className={styles.img_drop} src={logo} width='50%' /></Link>
                </div>
                <div>
                    <img onClick={toggleMenu} className={styles.img_menu} src={iconMenu} width='60px' />
                </div>
                
            </nav>
            {showMenu && (
                <>
                    <div className={styles.dropdown}>
                        <div className={styles.dropdownMenu}>
                            <Link to="/home" className={styles.link} onClick={toggleMenu}><li>Página Inicial</li></Link>
                            <Link to="/" className={styles.link} onClick={toggleMenu}><li>Sobre</li></Link>
                            <Link to="/" className={styles.link} onClick={toggleMenu}><li>Contato</li></Link>
                            <Link to="/" className={styles.link} onClick={toggleMenu}><li>Pontos de coleta</li></Link>
                            <Link to="/perfil" className={styles.link} onClick={toggleMenu}><li>Perfil</li></Link>
                            <Link className={styles.link} to="/login" onClick={toggleMenu}><li>Login / Cadastro</li></Link>
                        </div>
                    </div>
                </>
            )}
            <div className={styles.glass}></div>

        </>
    )
}

export default Menu