import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

const comments = [
    1,
    2,
]

export function Post({ author, publishedAt }){
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt)

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="19 de Junho ás 08:15h" dateTime="2023-06-19">
                    {publishedDateFormatted}
                </time>
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
                {comments.map(comment =>{
                    return <Comment />
                })}
            </div>
        </article>
    )
}