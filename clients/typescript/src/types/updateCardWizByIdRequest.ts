import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardWizFields_2 } from "./cardWizFields_2";
import { VersionType } from "./versionType";

export interface UpdateCardWizByIdRequest {
    cardWizCardType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    cardWizFields: CardWizFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}