import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { IrsNameSingleSelectableFields } from "./irsNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface IrsNamePagedListSelectFieldsRequest {
    accountNumber: string;
    irsLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: IrsNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
