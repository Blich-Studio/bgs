import { Color } from "@bgs-website/types/colors"
import clsx from "clsx"

interface Props<C extends React.ElementType> {
    as?: C

    children: React.ReactNode
    color?: Color
    font?: 'thin' | 'regular' | 'heavy'
    size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'

}

type HeadingProps<C extends React.ElementType> = Props<C> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

export const Heading = <C extends React.ElementType>({
    as,
    children,
    color,
    font,
    size,
}: HeadingProps<C>) => {
    const Component = as || 'h1'

    return (
        <Component className={clsx(color, size, font)}>
            {children}
        </Component>
    )

}