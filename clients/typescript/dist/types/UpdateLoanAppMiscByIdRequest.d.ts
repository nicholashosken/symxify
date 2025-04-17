import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppMiscFields_2 } from "./loanAppMiscFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanAppMiscByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppMiscFields: LoanAppMiscFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
