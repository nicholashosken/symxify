import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareHoldSingleSelectableFields } from "./shareHoldSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareHoldPagedListSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareHoldSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}