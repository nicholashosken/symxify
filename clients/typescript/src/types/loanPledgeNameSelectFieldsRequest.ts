import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanPledgeNameSingleSelectableFields } from "./loanPledgeNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanPledgeNameSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocator: number | null;
    loanPledgeNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanPledgeNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}