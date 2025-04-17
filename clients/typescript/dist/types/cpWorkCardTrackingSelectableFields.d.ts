import { CpWorkCardTrackingFields } from "./cpWorkCardTrackingFields";
import { VersionType } from "./versionType";
export interface CpWorkCardTrackingSelectableFields {
    includeAllCpWorkCardTrackingFields: boolean | null;
    cpWorkCardTrackingFields: CpWorkCardTrackingFields;
    version1: VersionType;
}
