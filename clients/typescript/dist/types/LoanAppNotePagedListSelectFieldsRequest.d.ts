import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppNoteSingleSelectableFields } from "./loanAppNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppNotePagedListSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
