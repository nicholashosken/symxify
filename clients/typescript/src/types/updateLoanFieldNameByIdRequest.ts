import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanFieldNameFields_2 } from "./loanFieldNameFields_2";
import { VersionType } from "./versionType";

export interface UpdateLoanFieldNameByIdRequest {
    loanFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanFieldNameFields: LoanFieldNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}