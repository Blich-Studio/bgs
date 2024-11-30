import Link from 'next/link'
import styles from './NavbarItem.module.scss'

export const NavbarItem: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => {
    return (
        <Link className={styles.navbar_item} href={href}>{children}</Link>
        
    )
}