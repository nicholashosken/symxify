import { UserFmFields } from "./userFmFields";
import { VersionType } from "./versionType";
export interface UserFmSingleSelectableFields {
    includeAllUserFmFields: boolean | null;
    userFmFields: UserFmFields;
    version1: VersionType;
}
