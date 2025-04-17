import { UserFmFields } from "./userFmFields";
import { VersionType } from "./versionType";
export interface UserFmSelectableFields {
    includeAllUserFmFields: boolean | null;
    userFmFields: UserFmFields;
    version1: VersionType;
}
