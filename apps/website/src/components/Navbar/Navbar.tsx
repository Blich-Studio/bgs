import { NavbarItem } from '../NavbarItem/NavbarItem';
import { Text } from '../Text/Text';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavbarItem href="/games">
                <Text as='li' padding='pd-12' size='subheading' align='center' font='tiny5' color='green'>Games</Text>
            </NavbarItem>
            <NavbarItem href="/about">
                <Text as='li' padding='pd-12' size='subheading' align='center' font='tiny5' color='green'>About</Text>
            </NavbarItem>
            <NavbarItem href="/blog">
                <Text as='li' padding='pd-12' size='subheading' align='center' font='tiny5' color='green'>Blog</Text>
            </NavbarItem>
            <NavbarItem href="/contact">
                <Text as='li' padding='pd-12' size='subheading' align='center' font='tiny5' color='green'>Contact</Text>
            </NavbarItem>
        </nav>
    )
}