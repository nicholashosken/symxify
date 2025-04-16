import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { HouseholdFields_2 } from "./householdFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateHouseholdByIdRequest {
    accountNumber: string;
    householdLocatorValue: number;
    householdLocatorValueSpecified: boolean;
    householdLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    householdFields: HouseholdFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}