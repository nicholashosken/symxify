import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceAccessSingleSelectableFields } from "./preferenceAccessSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PreferenceAccessSelectFieldsRequest {
    accountNumber: string;
    preferenceLocator: number | null;
    preferenceAccessLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PreferenceAccessSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}