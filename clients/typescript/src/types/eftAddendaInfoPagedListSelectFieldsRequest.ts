import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EftAddendaInfoSingleSelectableFields } from "./eftAddendaInfoSingleSelectableFields";
import { VersionType } from "./versionType";

export interface EftAddendaInfoPagedListSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EftAddendaInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}