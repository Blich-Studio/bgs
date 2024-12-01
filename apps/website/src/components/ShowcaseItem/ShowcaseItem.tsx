import Image from "next/image";
import styles from './ShowcaseItem.module.scss';
import { Text } from "../Text/Text";


export const ShowcaseItem = ({ 
    title, 
    description, 
    imageUrl = "https://placehold.co/400x300.png"
}: { title: string, description: string, imageUrl?: string }) => {
    return (
        <div className={styles.showcase_item}>
            <Image
                className={styles.showcase_item_image}
                src={imageUrl}
                alt={title}
                width={400}
                height={300}
                priority
            />
            <div className={styles.showcase_item_content}>
                <Text size='title' font="tiny5" as='h3' align="center" padding="pd-24" className={styles.showcase_item_title}>{title}</Text>
                <Text size='caption' as='p'align="center" padding="pd-0" className={styles.showcase_item_description}>{description}</Text>
            </div>
        </div>
    )
}
