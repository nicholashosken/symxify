import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanTypeIdRangeSingleSelectableFields } from "./loanTypeIdRangeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanTypeIdRangeSelectFieldsRequest {
    loanTypeIdRangeIdRange: number | null;
    loanTypeIdRangeLoanType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanTypeIdRangeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
