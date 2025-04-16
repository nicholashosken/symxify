import { CardNoteFields_2 } from "./cardNoteFields_2";
export interface CardNoteUpdateRequest {
    cardNoteLocatorValue: number;
    cardNoteLocatorValueSpecified: boolean;
    cardNoteLocator: number | null;
    cardNoteFields: CardNoteFields_2;
}
