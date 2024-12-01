
import styles from './Showcase.module.scss'
import { ShowcaseItem } from '../ShowcaseItem/ShowcaseItem'
export const Showcase = () => {
    return (
        <div className={styles.showcase}>
            <ShowcaseItem 
                title='The Lone Savior' 
                description='You are alone, but you are the last hope for humanity' 
                imageUrl='https://placehold.co/300x200' />
            <ShowcaseItem 
                title='The Glitch Detective' 
                description='2D Pixel art detective game'
                imageUrl='https://placehold.co/300x200' />
            <ShowcaseItem 
                title='Project Werewolf' 
                description='TBA' 
                imageUrl='https://placehold.co/300x200' />
        </div>
        

    )
}