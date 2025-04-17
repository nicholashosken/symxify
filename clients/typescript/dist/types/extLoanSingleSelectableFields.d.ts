import { ExtLoanFields } from "./extLoanFields";
import { VersionType } from "./versionType";
export interface ExtLoanSingleSelectableFields {
    includeAllExtLoanFields: boolean | null;
    extLoanFields: ExtLoanFields;
    version1: VersionType;
}
