import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppVerFormFields_2 } from "./loanAppVerFormFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanAppVerFormByIdRequest {
    loanAppVerFormVerForm: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppVerFormFields: LoanAppVerFormFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
