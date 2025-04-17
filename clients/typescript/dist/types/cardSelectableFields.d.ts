import { CardFields } from "./cardFields";
import { CardAccessSelectableFields } from "./cardAccessSelectableFields";
import { CardNameSelectableFields } from "./cardNameSelectableFields";
import { CardNoteSelectableFields } from "./cardNoteSelectableFields";
import { VersionType } from "./versionType";
export interface CardSelectableFields {
    includeAllCardFields: boolean | null;
    cardFields: CardFields;
    cardAccessSelectableFields: CardAccessSelectableFields;
    cardNameSelectableFields: CardNameSelectableFields;
    cardNoteSelectableFields: CardNoteSelectableFields;
    version1: VersionType;
}
