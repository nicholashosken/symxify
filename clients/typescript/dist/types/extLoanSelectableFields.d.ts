import { ExtLoanFields } from "./extLoanFields";
import { VersionType } from "./versionType";
export interface ExtLoanSelectableFields {
    includeAllExtLoanFields: boolean | null;
    extLoanFields: ExtLoanFields;
    version1: VersionType;
}
