import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar/>
                    <div className={styles.authorInfo}>
                        <strong>Paulo Vitor</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="19 de Junho ás 08:15h" dateTime="2023-06-19">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#">👉 jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}