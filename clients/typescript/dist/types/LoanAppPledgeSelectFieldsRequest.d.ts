import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPledgeSingleSelectableFields } from "./loanAppPledgeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppPledgeSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppPledgeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
