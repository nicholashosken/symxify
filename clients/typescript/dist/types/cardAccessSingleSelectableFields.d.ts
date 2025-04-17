import { CardAccessFields } from "./cardAccessFields";
import { VersionType } from "./versionType";
export interface CardAccessSingleSelectableFields {
    includeAllCardAccessFields: boolean | null;
    cardAccessFields: CardAccessFields;
    version1: VersionType;
}
