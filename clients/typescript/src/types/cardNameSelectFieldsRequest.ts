import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardNameSingleSelectableFields } from "./cardNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CardNameSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    cardNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CardNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}