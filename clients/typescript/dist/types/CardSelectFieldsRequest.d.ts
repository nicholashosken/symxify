import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardSingleSelectableFields } from "./cardSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CardSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CardSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
