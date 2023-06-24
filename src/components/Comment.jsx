import styles from './Comment.module.css'

import { Avatar } from './Avatar.jsx'
import { ThumbsDown, Trash } from 'phosphor-react'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/PauloVitorrr.png"/>

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Paulo Vitor Sousa</strong>
                        <time title="19 de Junho ás 08:15h" dateTime="2023-06-19">Cerca de 1 hora atrás</time>
                    </div>

                    <button title="Deletar Comentário">
                        <Trash size={20}/>
                    </button>
                </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>

            <footer>
                <button>
                    <ThumbsDown />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>




        </div>
    )
}