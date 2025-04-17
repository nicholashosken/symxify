import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerCommentSingleSelectableFields } from "./dealerCommentSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DealerCommentSelectFieldsRequest {
    dealerNumber: string;
    dealerCommentLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DealerCommentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
