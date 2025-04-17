import { CardNoteFields } from "./cardNoteFields";
import { VersionType } from "./versionType";

export interface CardNoteSingleSelectableFields {
    includeAllCardNoteFields: boolean | null;
    cardNoteFields: CardNoteFields;
    version1: VersionType;
}