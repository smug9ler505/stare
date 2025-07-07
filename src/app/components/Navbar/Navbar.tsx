import Link from 'next/link'
import styles from './Navbar.module.css'

const pages = [
  {
    name: 'Discover',
    href: '/discover',
  },
  {
    name: 'Favourites',
    href: '/favourites',
  },
  {
    name: 'Sign In',
    href: '/sign-in',
  },
] as const

const Navbar = ({ routes = pages }) => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href={'/'}>Stare</Link>
      </div>
      <ul className={styles.navLinks}>
        {routes.map((page) => (
          <li key={page.name}>
            <Link href={page.href}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
