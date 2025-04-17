import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppScheduleSingleSelectableFields } from "./loanAppScheduleSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppScheduleSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppScheduleId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppScheduleSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}