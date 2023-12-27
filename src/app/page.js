
import styles from './page.module.css'
import Header from '@/components/Header'
import HomePage from '@/components/HomePage'

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <HomePage />
    </div>

  )
}