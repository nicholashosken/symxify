import { NoteFields_2 } from "./noteFields_2";

export interface NoteUpdateRequest {
    noteLocator: number | null;
    noteFields: NoteFields_2;
}