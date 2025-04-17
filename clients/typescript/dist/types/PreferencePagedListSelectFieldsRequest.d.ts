import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PreferenceSingleSelectableFields } from "./preferenceSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PreferencePagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PreferenceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
