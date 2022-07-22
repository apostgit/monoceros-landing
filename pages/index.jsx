import styles from '../components/Index/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.bg}>
        <div className={styles.blur}></div>
      </div>

      <div className={styles.buttons}>
        <button className={`${styles.btn} ${styles.primary}`} onClick={() => window.open('https://project.monoceros.art/', '_self')}>
          PROJECT
        </button>
        <button className={`${styles.btn} ${styles.secondary}`} onClick={() => window.open('https://platform.monoceros.art/', '_self')}>
          PLATFORM
        </button>
      </div>
    </div>
  )
}
