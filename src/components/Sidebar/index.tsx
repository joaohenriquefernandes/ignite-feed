import { PencilLine } from 'phosphor-react';

import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1719327502828-28c6c154c520?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="http://github.com/joaohenriquefernandes.png"
          alt=""
        />
        <strong>Joao Henrique</strong>
        <span>Wed Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>

      <div />
    </aside>
  );
}
