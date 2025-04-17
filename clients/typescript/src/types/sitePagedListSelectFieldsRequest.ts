import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SiteSingleSelectableFields } from "./siteSingleSelectableFields";
import { VersionType } from "./versionType";

export interface SitePagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SiteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}