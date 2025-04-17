import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { IrsNameSingleSelectableFields } from "./irsNameSingleSelectableFields";
import { IrsNameSearchFilter } from "./irsNameSearchFilter";
import { VersionType } from "./versionType";
export interface IrsNameSearchPagedSelectFieldsRequest {
    accountNumber: string;
    irsLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: IrsNameSingleSelectableFields;
    searchFilter: IrsNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
