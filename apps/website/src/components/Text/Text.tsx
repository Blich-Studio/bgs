import clsx from 'clsx';
import styles from './Text.module.scss';

interface Props<C extends React.ElementType> {
    as?: C

    children: React.ReactNode
    color: string | 'black'
    align: 'left' | 'center' | 'right'
    size: 'caption' | 'paragraph' | 'perex' | 'title' | 'subheading' | 'heading' | 'hero'
    style?: 'bold' | 'italic' | 'underline' | 'strikethrough' | 'normal' | 'oblique'
    font? : 'tiny5' | 'robotoMono'

}

type TextProps<C extends React.ElementType> = Props<C> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

export const Text = <C extends React.ElementType>({
    as,
    children,
    color,
    align,
    size,
    style = 'normal',
    font = 'robotoMono'
}: TextProps<C>) => {
    const Component = as || 'p'

    return (
        <Component className={clsx(styles[color], styles[align], styles[size], styles[style] , styles[font])}>
            {children}
        </Component>
    )

}