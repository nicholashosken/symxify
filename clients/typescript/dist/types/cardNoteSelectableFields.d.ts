import { CardNoteFields } from "./cardNoteFields";
import { VersionType } from "./versionType";
export interface CardNoteSelectableFields {
    includeAllCardNoteFields: boolean | null;
    cardNoteFields: CardNoteFields;
    version1: VersionType;
}
