import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsContriLimitFields_2 } from "./irsContriLimitFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateIrsContriLimitByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    irsContriLimitFields: IrsContriLimitFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
