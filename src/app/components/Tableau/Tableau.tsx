import styles from './Tableau.module.css'

type Props = {
  artwork: {
    title: string
    src: string
    artist: string
    location: string
    madeIn: string
  }
}

export default function Tableau({
  artwork = {
    title: 'Saint-Rémy-de-Provence',
    src: 'https://static01.nyt.com/images/2019/03/27/arts/26VANGOGH-BRITAIN-1/merlin_152403333_3552f80f-9675-4951-bc32-0b8cbdbfa090-superJumbo.jpg',
    artist: 'Vincent Van Gogh',
    location: 'Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)',
    madeIn: 'February 1890',
  },
}: Props) {
  return (
    <div className={styles.poster}>
      <div className={styles.header}>
        <p className={styles.firstName}>
          {artwork.artist.split(' ')[0].toUpperCase()}
        </p>
        <p className={styles.lastName}>
          {artwork.artist.split(' ').slice(1).join(' ').toUpperCase()}
        </p>
      </div>
      <picture className={styles.picture}>
        <img src={artwork.src} alt="Flowers" className={styles.img} />
      </picture>
      <div className={styles.footer}>
        <span>{artwork.location}</span>
        <span>
          {artwork.title}
          {', '}
          {artwork.madeIn}
        </span>
      </div>
    </div>
  )
}
