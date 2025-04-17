import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardDefaultFields_2 } from "./cardDefaultFields_2";
import { VersionType } from "./versionType";

export interface UpdateCardDefaultByIdRequest {
    cardDefaultCardType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    cardDefaultFields: CardDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}