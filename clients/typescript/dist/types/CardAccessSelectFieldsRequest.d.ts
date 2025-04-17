import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardAccessSingleSelectableFields } from "./cardAccessSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CardAccessSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    cardAccessLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CardAccessSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
