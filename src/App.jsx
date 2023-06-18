import { Post } from './Post.jsx'
import { Header } from './components/Header.jsx'

import './global.css'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar.jsx'

export default function App() {

  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
          author="Diego Fernandes"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quis!"
        />
        <Post
          author="Paulo Vitor"
          content="UM autor muito legal!!!!!"
        />
        </main>
      </div>
    </div>
  )
}