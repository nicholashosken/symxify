import { AccountFieldNameFields } from "./accountFieldNameFields";
import { VersionType } from "./versionType";

export interface AccountFieldNameSelectableFields {
    includeAllAccountFieldNameFields: boolean | null;
    accountFieldNameFields: AccountFieldNameFields;
    version1: VersionType;
}