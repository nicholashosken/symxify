import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlTableFields_2 } from "./glTableFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateGlTableByIdRequest {
    glTableGlTableTypeValue: number;
    glTableGlTableTypeValueSpecified: boolean;
    glTableGlTableType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glTableFields: GlTableFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}