import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlCodeFields_2 } from "./glCodeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateGlCodeByIdRequest {
    glCodePrimaryGlCodeValue: number;
    glCodePrimaryGlCodeValueSpecified: boolean;
    glCodePrimaryGlCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glCodeFields: GlCodeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
