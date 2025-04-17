import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFinanceSingleSelectableFields } from "./loanAppFinanceSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppFinanceSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppFinanceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppFinanceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}