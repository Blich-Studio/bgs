import clsx from 'clsx';
import styles from './Text.module.scss';
import {Tiny5, Roboto_Mono} from 'next/font/google';

interface Props<C extends React.ElementType> {
    as?: C

    children: React.ReactNode
    color?: string | 'black'
    align?: 'left' | 'center' | 'right' | 'block'
    size?: 'caption' | 'paragraph' | 'perex' | 'title' | 'subheading' | 'heading' | 'hero'
    style?: 'bold' | 'italic' | 'underline' | 'strikethrough' | 'normal' | 'oblique'
    font? : 'tiny5' | 'robotoMono'
    padding?: 'pd-0' | 'pd-12' | 'pd-24'
    width?: 'w40' | 'w50' | 'w60' | 'w70' | 'w80' | 'w90' | 'w100'

}

type TextProps<C extends React.ElementType> = Props<C> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

const tiny5 = Tiny5({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
})

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
})

export const Text = <C extends React.ElementType>({
    as,
    children,
    color = 'black',
    align = 'left',
    size = 'paragraph',
    style = 'normal',
    font = 'robotoMono',
    padding = 'pd-0',
    width = 'w60'
}: TextProps<C>) => {
    const Component = as || 'p'

    const usedFont = font === 'tiny5'? tiny5.className : roboto_mono.className

    return (
        <Component className={clsx(styles[color], styles[align], styles[size], styles[style], usedFont, styles[padding], styles[width], styles.wrapper)}>
            {children}
        </Component>
    )

}