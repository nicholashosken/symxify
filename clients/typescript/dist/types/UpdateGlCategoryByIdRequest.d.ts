import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlCategoryFields_2 } from "./glCategoryFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateGlCategoryByIdRequest {
    glCategoryGlCategoryValue: number;
    glCategoryGlCategoryValueSpecified: boolean;
    glCategoryGlCategory: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glCategoryFields: GlCategoryFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
