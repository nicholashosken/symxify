import { CredRepFields } from "./credRepFields";
import { VersionType } from "./versionType";

export interface CredRepSingleSelectableFields {
    includeAllCredRepFields: boolean | null;
    credRepFields: CredRepFields;
    version1: VersionType;
}