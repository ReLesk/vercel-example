import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <img src="/indentado.png" alt="logo"/>
    </div>
  )
}
