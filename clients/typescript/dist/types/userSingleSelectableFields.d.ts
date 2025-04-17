import { UserFields } from "./userFields";
import { VersionType } from "./versionType";
export interface UserSingleSelectableFields {
    includeAllUserFields: boolean | null;
    userFields: UserFields;
    version1: VersionType;
}
