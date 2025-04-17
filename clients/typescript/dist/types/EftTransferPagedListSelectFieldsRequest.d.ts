import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EftTransferSingleSelectableFields } from "./eftTransferSingleSelectableFields";
import { VersionType } from "./versionType";
export interface EftTransferPagedListSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EftTransferSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
