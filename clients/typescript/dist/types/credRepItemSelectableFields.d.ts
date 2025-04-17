import { CredRepItemFields } from "./credRepItemFields";
import { VersionType } from "./versionType";
export interface CredRepItemSelectableFields {
    includeAllCredRepItemFields: boolean | null;
    credRepItemFields: CredRepItemFields;
    version1: VersionType;
}
