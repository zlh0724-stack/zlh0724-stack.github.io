import NoteCard from '../NoteCard'

const note1 = {
  id: "1",
  slug: "JavaScript-異步編程",
  title: "JavaScript 異步編程",
  subject: "程式設計",
  date: "2024-11-05",
  preview: "學習了 Promise、async/await 的使用方法，以及如何處理異步操作中的錯誤...",
  color: "primary",
  content: "# JavaScript 異步編程\n\n學習了 Promise、async/await 的使用方法..."
}

const note2 = {
  id: "2",
  slug: "遊戲設計原理",
  title: "遊戲設計原理",
  subject: "遊戲開發",
  date: "2024-11-03",
  preview: "探討了遊戲的核心機制、玩家動機和獎勵系統的設計...",
  color: "accent",
  content: "# 遊戲設計原理\n\n探討了遊戲的核心機制、玩家動機和獎勵系統的設計..."
}

export default function NoteCardExample() {
  return (
    <div className="p-4 max-w-2xl space-y-4">
      <NoteCard note={note1} />
      <NoteCard note={note2} />
    </div>
  )
}
