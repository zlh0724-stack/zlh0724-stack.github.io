# 內容管理說明

本專案使用 YAML 檔案來管理日記、筆記和圖畫內容。

## 資料夾結構

```
content/
  diaries/      # 日記資料夾
    *.yaml      # 每個 YAML 檔案對應一篇日記
  notes/        # 筆記資料夾
    *.yaml      # 每個 YAML 檔案對應一篇筆記
  drawings/     # 圖畫資料夾
    drawings.yaml  # 單一 YAML 檔案包含所有圖畫的相對路徑
```

## 日記格式

在 `content/diaries/` 資料夾中，每個 YAML 檔案對應一篇日記。檔案名稱（不含副檔名）會自動成為該日記的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "今天打了一整天的遊戲"
date: "2024-11-07"
excerpt: "今天嘗試了一款新的 RPG 遊戲，畫面超級精美！故事劇情也很吸引人..."
image: "/attached_assets/generated_images/Anime_landscape_artwork_1_b0658bd3.png"
tags:
  - "遊戲"
  - "RPG"
  - "日常"
content: |
  # 今天打了一整天的遊戲

  今天嘗試了一款新的 RPG 遊戲，畫面超級精美！故事劇情也很吸引人...
```

### 欄位說明

- `id`: 日記的唯一識別碼（字串）
- `title`: 日記標題
- `date`: 日期（格式：YYYY-MM-DD）
- `excerpt`: 摘要（用於列表頁面顯示）
- `image`: 圖片路徑（必須以 `/attached_assets/` 開頭，可選）
- `tags`: 標籤列表（陣列，可選）
- `content`: 日記內容（支援 Markdown 語法）

## 筆記格式

在 `content/notes/` 資料夾中，每個 YAML 檔案對應一篇筆記。檔案名稱（不含副檔名）會自動成為該筆記的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "JavaScript 異步編程"
subject: "程式設計"
date: "2024-11-05"
preview: "學習了 Promise、async/await 的使用方法..."
color: "primary"
content: |
  # JavaScript 異步編程

  學習了 Promise、async/await 的使用方法...
```

### 欄位說明

- `id`: 筆記的唯一識別碼（字串）
- `title`: 筆記標題
- `subject`: 分類（例如：程式設計、遊戲開發等）
- `date`: 日期（格式：YYYY-MM-DD）
- `preview`: 預覽文字（用於列表頁面顯示）
- `color`: 顏色主題（可選：primary、accent、chart1、chart2、chart3）
- `content`: 筆記內容（支援 Markdown 語法）

## 圖畫格式

在 `content/drawings/` 資料夾中，有一個 `drawings.yaml` 檔案，包含所有圖畫的相對路徑。

### YAML 檔案範例

```yaml
drawings:
  - id: "1"
    src: "/attached_assets/generated_images/Anime_landscape_artwork_1_b0658bd3.png"
    title: "夢幻夕陽"
    description: "我最喜歡的風景畫作品"
  - id: "2"
    src: "/attached_assets/generated_images/Anime_character_artwork_2_162e081b.png"
    title: "原創角色設計"
    description: "為遊戲設計的主角形象"
```

### 欄位說明

- `id`: 圖畫的唯一識別碼（字串）
- `src`: 圖片路徑（必須以 `/attached_assets/` 開頭）
- `title`: 圖畫標題
- `description`: 圖畫描述（可選）

## 重要注意事項

1. **檔案名稱 = URL slug**：YAML 檔案的名稱（不含 `.yaml` 或 `.yml`）會自動成為該內容的 URL slug。例如：`今天打了一整天的遊戲.yaml` 的 URL 會是 `/diary/今天打了一整天的遊戲`。

2. **Markdown 支援**：`content` 欄位支援完整的 Markdown 語法，包括：
   - 標題（#、##、###）
   - 列表（有序和無序）
   - 程式碼區塊（```）
   - 粗體、斜體
   - 連結
   - 等等

3. **圖片路徑**：所有圖片路徑必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中。

4. **日期格式**：日記和筆記的 `date` 欄位必須使用 `YYYY-MM-DD` 格式（例如：`2024-11-07`）。

## 生成內容

在開發或建置前，需要先執行內容生成腳本：

```bash
npm run content:generate
```

這個腳本會：
1. 讀取 `content/diaries/` 資料夾中的所有 YAML 檔案
2. 讀取 `content/notes/` 資料夾中的所有 YAML 檔案
3. 讀取 `content/drawings/drawings.yaml` 檔案
4. 為每個日記和筆記自動生成 `slug`（基於檔案名稱）
5. 驗證圖片路徑是否正確
6. 將所有內容合併成一個 JSON 檔案（`client/src/data/content.json`）
7. 按日期排序日記和筆記（最新的在前）

## 開發流程

1. 在對應的資料夾中新增或編輯 YAML 檔案
2. 執行 `npm run content:generate` 生成內容
3. 執行 `npm run dev` 啟動開發伺服器
4. 在瀏覽器中查看日記、筆記和圖畫

## 建置流程

執行 `npm run build` 時會自動執行內容生成，無需手動執行。

