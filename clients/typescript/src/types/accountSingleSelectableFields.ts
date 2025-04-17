import { AccountFields } from "./accountFields";
import { VersionType } from "./versionType";

export interface AccountSingleSelectableFields {
    includeAllAccountFields: boolean | null;
    accountFields: AccountFields;
    version1: VersionType;
}