import { Text } from '../Text/Text';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Text align='center' as='p'>© 2024 Blich Game Studio. All rights blablabla reserved.</Text>
    </div>
  )
}