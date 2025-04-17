import { CredRepItemFields } from "./credRepItemFields";
import { VersionType } from "./versionType";
export interface CredRepItemSingleSelectableFields {
    includeAllCredRepItemFields: boolean | null;
    credRepItemFields: CredRepItemFields;
    version1: VersionType;
}
