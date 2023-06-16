import { Post } from './Post.jsx'

export default function App() {

  return (
    <div>
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