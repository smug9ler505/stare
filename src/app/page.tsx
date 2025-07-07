import styles from './page.module.css'
import Paintings from './components/Paintings/Paintings'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Paintings />
      </main>
    </div>
  )
}
