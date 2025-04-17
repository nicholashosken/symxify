import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardWizSingleSelectableFields } from "./cardWizSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CardWizSelectFieldsRequest {
    cardWizCardType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CardWizSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
