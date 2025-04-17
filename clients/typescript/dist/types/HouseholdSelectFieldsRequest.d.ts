import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { HouseholdSingleSelectableFields } from "./householdSingleSelectableFields";
import { VersionType } from "./versionType";
export interface HouseholdSelectFieldsRequest {
    accountNumber: string;
    householdLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: HouseholdSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
