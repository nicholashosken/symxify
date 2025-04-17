import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { HouseholdFields_2 } from "./householdFields_2";
import { VersionType } from "./versionType";
export interface CreateHouseholdRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    householdFields: HouseholdFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
