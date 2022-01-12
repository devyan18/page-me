import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles.module.css'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className={styles.navbar}>
      <div className={`${styles.links_container}`}>
        <Link href="/screens">
          <a className={`${styles.link}`+` ${router.pathname === '/screens' ? styles.active : ''}`} >My Screens</a>
        </Link>
        <Link href="/new">
          <a className={`${styles.link}`+` ${router.pathname === '/new' ? styles.active : ''}`}>New Screen</a>
        </Link>
        <Link href="/edit">
          <a className={`${styles.link}`+` ${router.pathname === '/edit' ? styles.active : ''}`}>Edit Screens</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
