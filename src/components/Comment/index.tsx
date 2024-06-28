import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/joaohenriquefernandes.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego</strong>

              <time title="11 de Maio às 08:13" dateTime="2024-06-27 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" type="button">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
