import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlxLateSingleSelectableFields } from "./glxLateSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlxLateSelectFieldsRequest {
    glxLateGlCodeValue: number;
    glxLateGlCodeValueSpecified: boolean;
    glxLateGlCode: number | null;
    glxLateTypeListValue: number;
    glxLateTypeListValueSpecified: boolean;
    glxLateTypeList: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlxLateSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}