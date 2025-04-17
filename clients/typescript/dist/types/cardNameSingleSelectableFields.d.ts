import { CardNameFields } from "./cardNameFields";
import { VersionType } from "./versionType";
export interface CardNameSingleSelectableFields {
    includeAllCardNameFields: boolean | null;
    cardNameFields: CardNameFields;
    version1: VersionType;
}
