import { CpWorkCardNoteFields_2 } from "./cpWorkCardNoteFields_2";

export interface CpWorkCardNoteUpdateRequest {
    cpWorkCardNoteLocatorValue: number;
    cpWorkCardNoteLocatorValueSpecified: boolean;
    cpWorkCardNoteLocator: number | null;
    cpWorkCardNoteFields: CpWorkCardNoteFields_2;
}