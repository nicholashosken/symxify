import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PeriodicMtgFields_2 } from "./periodicMtgFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdatePeriodicMtgByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    periodicMtgFields: PeriodicMtgFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}