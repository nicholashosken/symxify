import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareSingleSelectableFields } from "./shareSingleSelectableFields";
import { VersionType } from "./versionType";
export interface SharePagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
