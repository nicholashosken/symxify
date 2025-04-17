import { CtrNoteFields_2 } from "./ctrNoteFields_2";

export interface CtrNoteUpdateRequest {
    ctrNoteLocatorValue: number;
    ctrNoteLocatorValueSpecified: boolean;
    ctrNoteLocator: number | null;
    ctrNoteFields: CtrNoteFields_2;
}