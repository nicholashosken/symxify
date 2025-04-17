import { ApMiscFields } from "./apMiscFields";
import { VersionType } from "./versionType";

export interface ApMiscSelectableFields {
    includeAllApMiscFields: boolean | null;
    apMiscFields: ApMiscFields;
    version1: VersionType;
}