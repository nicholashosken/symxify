import { LnSegmentDefaultFields } from "./lnSegmentDefaultFields";
import { VersionType } from "./versionType";

export interface LnSegmentDefaultSelectableFields {
    includeAllLnSegmentDefaultFields: boolean | null;
    lnSegmentDefaultFields: LnSegmentDefaultFields;
    version1: VersionType;
}