import igniteFeedLogo from '../../assets/ignite-feed-logo.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteFeedLogo} alt="" />
    </header>
  );
}
