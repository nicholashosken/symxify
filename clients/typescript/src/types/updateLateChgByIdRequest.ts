import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LateChgFields_2 } from "./lateChgFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLateChgByIdRequest {
    lateChgLateChargeTypeValue: number;
    lateChgLateChargeTypeValueSpecified: boolean;
    lateChgLateChargeType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    lateChgFields: LateChgFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}