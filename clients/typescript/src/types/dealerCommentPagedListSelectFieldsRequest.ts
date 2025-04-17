import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DealerCommentSingleSelectableFields } from "./dealerCommentSingleSelectableFields";
import { VersionType } from "./versionType";

export interface DealerCommentPagedListSelectFieldsRequest {
    dealerNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DealerCommentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}