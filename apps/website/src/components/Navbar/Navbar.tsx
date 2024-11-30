import { NavbarItem } from '../NavbarItem/NavbarItem';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/about">About</NavbarItem>
            <NavbarItem href="/games">Games</NavbarItem>
            <NavbarItem href="/blog">Blog</NavbarItem>
        </nav>
    )
}