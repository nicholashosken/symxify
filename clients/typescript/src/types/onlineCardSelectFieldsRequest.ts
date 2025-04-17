import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineCardSingleSelectableFields } from "./onlineCardSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineCardSelectFieldsRequest {
    onlineCardCardType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineCardSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}