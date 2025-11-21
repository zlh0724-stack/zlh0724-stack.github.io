import DiaryCard from '../DiaryCard'
import landscapeImage from '@assets/generated_images/Anime_landscape_artwork_1_b0658bd3.png'

export default function DiaryCardExample() {
  return (
    <div className="p-4 max-w-2xl">
      <DiaryCard
        id="1"
        title="今天打了一整天的遊戲"
        date="2024-11-07"
        excerpt="今天嘗試了一款新的 RPG 遊戲，畫面超級精美！故事劇情也很吸引人，讓我一口氣玩了五個小時..."
        image={landscapeImage}
        tags={["遊戲", "RPG", "日常"]}
      />
    </div>
  )
}
