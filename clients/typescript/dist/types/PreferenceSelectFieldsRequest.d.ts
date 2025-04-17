import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceSingleSelectableFields } from "./preferenceSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PreferenceSelectFieldsRequest {
    accountNumber: string;
    preferenceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PreferenceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
