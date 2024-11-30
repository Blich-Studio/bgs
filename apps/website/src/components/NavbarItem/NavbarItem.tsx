import Link from 'next/link'

export const NavbarItem: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => {
    return (
        <Link href={href}>{children}</Link>
    )
}