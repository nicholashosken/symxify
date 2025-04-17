import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { NameSingleSelectableFields } from "./nameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface NamePagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: NameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
