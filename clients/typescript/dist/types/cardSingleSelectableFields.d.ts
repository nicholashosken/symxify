import { CardFields } from "./cardFields";
import { VersionType } from "./versionType";
export interface CardSingleSelectableFields {
    includeAllCardFields: boolean | null;
    cardFields: CardFields;
    version1: VersionType;
}
