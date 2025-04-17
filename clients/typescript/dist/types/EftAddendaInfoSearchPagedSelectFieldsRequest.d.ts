import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EftAddendaInfoSingleSelectableFields } from "./eftAddendaInfoSingleSelectableFields";
import { EftAddendaInfoSearchFilter } from "./eftAddendaInfoSearchFilter";
import { VersionType } from "./versionType";
export interface EftAddendaInfoSearchPagedSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EftAddendaInfoSingleSelectableFields;
    searchFilter: EftAddendaInfoSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
