import { Heading } from '../Heading/Heading';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
        <Heading as={'h1'}>Blich Game Studio</Heading>
    </div>
  );
};