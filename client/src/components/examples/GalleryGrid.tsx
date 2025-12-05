import GalleryGrid from '../GalleryGrid'
import image1 from '@assets/Anime_landscape_artwork_1_b0658bd3.png'
import image2 from '@assets/Anime_character_artwork_2_162e081b.png'
import image3 from '@assets/Anime_cityscape_artwork_3_2b059dfb.png'

export default function GalleryGridExample() {
  const images = [
    { id: '1', src: image1, title: '夢幻夕陽', description: '我最喜歡的風景畫' },
    { id: '2', src: image2, title: '可愛角色', description: '原創角色設計' },
    { id: '3', src: image3, title: '城市夜景', description: '賽博龐克風格' },
  ]

  return (
    <div className="p-4 max-w-6xl">
      <GalleryGrid images={images} />
    </div>
  )
}
