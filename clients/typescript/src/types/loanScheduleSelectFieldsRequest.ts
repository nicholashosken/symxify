import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanScheduleSingleSelectableFields } from "./loanScheduleSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanScheduleSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanScheduleId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanScheduleSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}