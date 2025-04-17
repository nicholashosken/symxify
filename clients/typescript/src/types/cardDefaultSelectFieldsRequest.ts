import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardDefaultSingleSelectableFields } from "./cardDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CardDefaultSelectFieldsRequest {
    cardDefaultCardType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CardDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}