import { ApMiscFields } from "./apMiscFields";
import { VersionType } from "./versionType";

export interface ApMiscSingleSelectableFields {
    includeAllApMiscFields: boolean | null;
    apMiscFields: ApMiscFields;
    version1: VersionType;
}