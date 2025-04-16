import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlxLateFields_2 } from "./glxLateFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateGlxLateByIdRequest {
    glxLateGlCodeValue: number;
    glxLateGlCodeValueSpecified: boolean;
    glxLateGlCode: number | null;
    glxLateTypeListValue: number;
    glxLateTypeListValueSpecified: boolean;
    glxLateTypeList: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glxLateFields: GlxLateFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}