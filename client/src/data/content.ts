import type { Diary, Note, Drawing } from "@/types/content";
import contentData from "./content.json";

interface ContentData {
  diaries: Diary[];
  notes: Note[];
  drawings: Drawing[];
}

const content = contentData as ContentData;

export const diaries: Diary[] = content.diaries;
export const notes: Note[] = content.notes;
export const drawings: Drawing[] = content.drawings;

