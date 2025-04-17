import { CpWorkCardTrackingFields } from "./cpWorkCardTrackingFields";
import { VersionType } from "./versionType";

export interface CpWorkCardTrackingSingleSelectableFields {
    includeAllCpWorkCardTrackingFields: boolean | null;
    cpWorkCardTrackingFields: CpWorkCardTrackingFields;
    version1: VersionType;
}