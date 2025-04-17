import { CardDefaultFields } from "./cardDefaultFields";
import { VersionType } from "./versionType";

export interface CardDefaultSelectableFields {
    includeAllCardDefaultFields: boolean | null;
    cardDefaultFields: CardDefaultFields;
    version1: VersionType;
}