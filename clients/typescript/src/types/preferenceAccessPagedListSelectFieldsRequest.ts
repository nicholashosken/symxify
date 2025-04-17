import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PreferenceAccessSingleSelectableFields } from "./preferenceAccessSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PreferenceAccessPagedListSelectFieldsRequest {
    accountNumber: string;
    preferenceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PreferenceAccessSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}