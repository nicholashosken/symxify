import { CardNameFields } from "./cardNameFields";
import { VersionType } from "./versionType";
export interface CardNameSelectableFields {
    includeAllCardNameFields: boolean | null;
    cardNameFields: CardNameFields;
    version1: VersionType;
}
