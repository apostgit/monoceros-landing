import styles from '../components/Index/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.bg}>
        <div className={styles.blur}></div>
      </div>

      <div className={styles.buttons}>
        <button className={`${styles.btn} ${styles.primary}`} onClick={() => window.open('/project', '_self')}>
          PROJECT
        </button>
        <button className={`${styles.btn} ${styles.secondary}`} onClick={() => window.open('/', '_self')}>
          MARKETPLACE
        </button>
      </div>
    </div>
  )
}
