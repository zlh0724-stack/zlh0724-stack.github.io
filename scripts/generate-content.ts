import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  diaries: any[];
  notes: any[];
  drawings: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    diaries: [],
    notes: [],
    drawings: [],
  };

  // Load diaries
  try {
    const diariesDir = resolve(contentPath, "diaries");
    const diaryFiles = await readdir(diariesDir);
    for (const file of diaryFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(diariesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const diary = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          diary.slug = slug;
          // Validate image URL
          if (diary.image && !diary.image.startsWith("/attached_assets/")) {
            console.warn(`Warning: Diary "${diary.title}" image should start with "/attached_assets/": ${diary.image}`);
          }
          // Fix image path if it contains generated_images
          if (diary.image && diary.image.includes("/generated_images/")) {
            diary.image = diary.image.replace("/generated_images/", "/");
          }
          data.diaries.push(diary);
        }
      }
    }
    // Sort by date descending
    data.diaries.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load diaries:", error);
  }

  // Load notes
  try {
    const notesDir = resolve(contentPath, "notes");
    const noteFiles = await readdir(notesDir);
    for (const file of noteFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(notesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const note = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          note.slug = slug;
          data.notes.push(note);
        }
      }
    }
    // Sort by date descending
    data.notes.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load notes:", error);
  }

  // Load drawings
  try {
    const drawingsFile = resolve(contentPath, "drawings", "drawings.yaml");
    const content = await readFile(drawingsFile, "utf-8");
    const drawingsData = yaml.load(content) as any;
    if (drawingsData && drawingsData.drawings) {
      data.drawings = drawingsData.drawings;
      // Validate image URLs
      for (const drawing of data.drawings) {
        if (drawing.src && !drawing.src.startsWith("/attached_assets/")) {
          console.warn(`Warning: Drawing "${drawing.title}" src should start with "/attached_assets/": ${drawing.src}`);
        }
        // Fix image path if it contains generated_images
        if (drawing.src && drawing.src.includes("/generated_images/")) {
          drawing.src = drawing.src.replace("/generated_images/", "/");
        }
      }
    }
  } catch (error) {
    console.warn("Failed to load drawings:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Diaries: ${data.diaries.length}`);
  console.log(`  - Notes: ${data.notes.length}`);
  console.log(`  - Drawings: ${data.drawings.length}`);
}

generateContent().catch(console.error);

