import { ShareNoteFields_2 } from "./shareNoteFields_2";
export interface ShareNoteUpdateRequest {
    shareNoteLocatorValue: number;
    shareNoteLocatorValueSpecified: boolean;
    shareNoteLocator: number | null;
    shareNoteFields: ShareNoteFields_2;
}
