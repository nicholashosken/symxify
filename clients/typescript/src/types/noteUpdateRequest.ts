import { NoteFields_2 } from "./noteFields_2";

export interface NoteUpdateRequest {
    noteLocatorValue: number;
    noteLocatorValueSpecified: boolean;
    noteLocator: number | null;
    noteFields: NoteFields_2;
}