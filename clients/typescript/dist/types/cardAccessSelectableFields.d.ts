import { CardAccessFields } from "./cardAccessFields";
import { VersionType } from "./versionType";
export interface CardAccessSelectableFields {
    includeAllCardAccessFields: boolean | null;
    cardAccessFields: CardAccessFields;
    version1: VersionType;
}
