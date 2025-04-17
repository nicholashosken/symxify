import { AccountDefaultFields } from "./accountDefaultFields";
import { VersionType } from "./versionType";

export interface AccountDefaultSelectableFields {
    includeAllAccountDefaultFields: boolean | null;
    accountDefaultFields: AccountDefaultFields;
    version1: VersionType;
}