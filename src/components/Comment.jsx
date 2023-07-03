import styles from './Comment.module.css'

import { Avatar } from './Avatar.jsx'
import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){
    const [likeCount, useLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        useLikeCount(likeCount + 1)
    }

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

                    <button onClick={handleDeleteComment} title="Deletar Comentário">
                        <Trash size={20}/>
                    </button>
                </header>
                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>




        </div>
    )
}