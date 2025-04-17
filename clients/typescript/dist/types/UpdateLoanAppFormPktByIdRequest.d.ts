import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFormPktFields_2 } from "./loanAppFormPktFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanAppFormPktByIdRequest {
    loanAppFormPktFormPacketType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppFormPktFields: LoanAppFormPktFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
