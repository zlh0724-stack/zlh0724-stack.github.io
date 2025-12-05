import VideoCard from '../VideoCard'
import thumbnail from '@assets/Anime_cityscape_artwork_3_2b059dfb.png'

export default function VideoCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <VideoCard
        id="1"
        title="遊戲實況：探索新世界"
        thumbnail={thumbnail}
        duration="15:30"
        category="遊戲實況"
        description="今天帶大家一起探索這款開放世界遊戲的隱藏區域"
      />
    </div>
  )
}
