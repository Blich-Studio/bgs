import { Heading } from '../Heading/Heading';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
        <Heading 
          align={'center'}
          color={'green'} 
          as={'h1'} 
          size={'logo'}
          >
            Blich Game Studio
          </Heading>
    </div>
  );
};