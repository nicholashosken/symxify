import { CredRepFields } from "./credRepFields";
import { CredRepItemSelectableFields } from "./credRepItemSelectableFields";
import { VersionType } from "./versionType";

export interface CredRepSelectableFields {
    includeAllCredRepFields: boolean | null;
    credRepFields: CredRepFields;
    credRepItemSelectableFields: CredRepItemSelectableFields;
    version1: VersionType;
}