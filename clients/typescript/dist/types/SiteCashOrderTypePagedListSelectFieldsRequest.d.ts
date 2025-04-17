import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SiteCashOrderTypeSingleSelectableFields } from "./siteCashOrderTypeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface SiteCashOrderTypePagedListSelectFieldsRequest {
    accountNumber: string;
    siteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SiteCashOrderTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
