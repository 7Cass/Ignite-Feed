import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/7cass.png',
      name: 'JoÃ£o Pedro',
      role: 'Fullstack Developer @ CIPA' 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ð'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
      { type: 'link', content: 'ð jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-07 20:30:21')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat' 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ð'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
      { type: 'link', content: 'ð jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-10-07 14:25:23')
  }
];

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
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

export default App
