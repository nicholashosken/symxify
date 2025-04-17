import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EftSingleSelectableFields } from "./eftSingleSelectableFields";
import { VersionType } from "./versionType";
export interface EftPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EftSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
