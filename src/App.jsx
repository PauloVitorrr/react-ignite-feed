import { Post } from './Post.jsx'
import { Header } from './components/Header.jsx'

import './global.css'

export default function App() {

  return (
    <div>
      <Header/>
      <h1>Hello World!</h1>  
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quis!"
      />
      <Post
        author="Paulo Vitor"
        content="UM autor muito legal!!!!!"
      />
    </div>
  )
}