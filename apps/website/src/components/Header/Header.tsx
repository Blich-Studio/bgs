import { Text } from '../Text/Text';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
        <Text 
          align='center'
          color='green'
          as='h1' 
          size='hero'
          font='tiny5'
          >
            Blich Game Studio
          </Text>
    </div>
  );
};