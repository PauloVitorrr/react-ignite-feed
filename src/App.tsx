import { Post } from './components/Post.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

import './global.css'

import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/PauloVitorrr.png',
      name: 'Paulo Vitor',
      role: 'CTO @Rocketseat'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare',},
    ],
    publishedAt: new Date ('2023-06-25 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/ryanalencar.png',
      name: 'Ryan Alencar',
      role: 'Educator @Rocketseat'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare',},
    ],
    publishedAt: new Date ('2023-06-24 20:00:00'),
  },
]

export default function App() {

  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}