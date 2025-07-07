import Tableau from '../components/Tableau/Tableau'
import styles from './page.module.css'

type Props = {}

const favs = [
  {
    title: 'Saint-Rémy-de-Provence',
    src: 'https://static01.nyt.com/images/2019/03/27/arts/26VANGOGH-BRITAIN-1/merlin_152403333_3552f80f-9675-4951-bc32-0b8cbdbfa090-superJumbo.jpg',
    artist: 'Vincent Van Gogh',
    location: 'Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)',
    madeIn: 'February 1890',
  },
  {
    title: 'Saint-Rémy-de-Provence',
    src: 'https://fs.artdevivre.com/storage/articles/events-article/a-monet/cc2ddc71a29480e80f2d4e86d19f1190.jpg',
    artist: 'Claude Monet',
    location: 'Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)',
    madeIn: 'February 1890',
  },
  {
    title: 'Saint-Rémy-de-Provence',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Vincent_van_Gogh_-_National_Gallery_of_Art.JPG/1566px-Vincent_van_Gogh_-_National_Gallery_of_Art.JPG',
    artist: 'Claude Monet',
    location: 'Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)',
    madeIn: 'February 1890',
  },
]
export default function Favourites({}: Props) {
  return (
    <>
      <div className={styles.favs}>
        {favs.map((artwork) => (
          <Tableau artwork={artwork} key={artwork.src} />
        ))}
      </div>
      <div className={styles.favs2}>
        {favs.map((artwork) => (
          <Tableau artwork={artwork} key={artwork.src} />
        ))}
      </div>
    </>
  )
}
