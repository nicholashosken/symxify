import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IdentIdTypeDescFields_2 } from "./identIdTypeDescFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateIdentIdTypeDescByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    identIdTypeDescFields: IdentIdTypeDescFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
