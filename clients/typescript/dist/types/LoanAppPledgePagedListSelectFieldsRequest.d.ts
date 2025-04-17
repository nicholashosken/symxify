import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppPledgeSingleSelectableFields } from "./loanAppPledgeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppPledgePagedListSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppPledgeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
