import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IntTypeFields_2 } from "./intTypeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateIntTypeByIdRequest {
    intTypeInterestTypeValue: number;
    intTypeInterestTypeValueSpecified: boolean;
    intTypeInterestType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    intTypeFields: IntTypeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
