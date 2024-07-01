import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

interface IPost {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaohenriquefernandes.png',
      name: 'João Henrique',
      role: 'Full Stack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no React Ignite, curso da Rocketseat. O nome do projeto é Ignite Feed 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare #novoprojeto #ignite #rocketseat',
      },
      { type: 'link', content: '#novoprojeto #ignite #rocketseat' },
    ],
    publishedAt: new Date('2024-06-28 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ElderCrivelari.png',
      name: 'Elder Crivelari',
      role: 'C# Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no React Ignite, curso da Rocketseat. O nome do projeto é Ignite Feed 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare #novoprojeto #ignite #rocketseat',
      },
      { type: 'link', content: '#novoprojeto #ignite #rocketseat' },
    ],
    publishedAt: new Date('2024-06-25 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
