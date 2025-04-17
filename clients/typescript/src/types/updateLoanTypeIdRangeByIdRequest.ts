import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanTypeIdRangeFields_2 } from "./loanTypeIdRangeFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanTypeIdRangeByIdRequest {
    loanTypeIdRangeIdRange: number | null;
    loanTypeIdRangeLoanType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanTypeIdRangeFields: LoanTypeIdRangeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}