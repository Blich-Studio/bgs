import clsx from 'clsx';
import styles from './Heading.module.scss';
import { Tiny5 } from 'next/font/google';

interface Props<C extends React.ElementType> {
    as?: C

    children: React.ReactNode
    color: string | 'black'
    align: 'left' | 'center' | 'right'
    size: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'logo'

}

type HeadingProps<C extends React.ElementType> = Props<C> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

const tiny = Tiny5({ weight: '400', display: 'swap', subsets: ['latin'] });

export const Heading = <C extends React.ElementType>({
    as,
    children,
    color,
    align,
    size,
}: HeadingProps<C>) => {
    const Component = as || 'h1'

    return (
        <Component className={clsx(styles[color], styles[size],styles[align], tiny.className)}>
            {children}
        </Component>
    )

}