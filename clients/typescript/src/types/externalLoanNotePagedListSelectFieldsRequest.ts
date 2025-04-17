import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalLoanNoteSingleSelectableFields } from "./externalLoanNoteSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ExternalLoanNotePagedListSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalLoanNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}