import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrAccountFields_2 } from "./ctrAccountFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateCtrAccountByIdRequest {
    ctrNumber: string;
    ctrAccountLocatorValue: number;
    ctrAccountLocatorValueSpecified: boolean;
    ctrAccountLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrAccountFields: CtrAccountFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
