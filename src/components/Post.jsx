import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props){
    console.log(props)
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/PauloVitorrr.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Paulo Vitor</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="19 de Junho ás 08:15h" dateTime="2023-06-19">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    <a href="#">#novoprojeto</a> {' '}
                    <a href="#">#nlw</a> {' '}
                    <a href="#">#rocketseat </a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="deixe seu comentário"
                />

            <footer>
                <button type="submit">Comentar</button>
            </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}