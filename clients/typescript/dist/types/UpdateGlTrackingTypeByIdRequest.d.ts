import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlTrackingTypeFields_2 } from "./glTrackingTypeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateGlTrackingTypeByIdRequest {
    glTrackingTypeRecordSelectionValue: number;
    glTrackingTypeRecordSelectionValueSpecified: boolean;
    glTrackingTypeRecordSelection: number | null;
    glTrackingTypeTrackingTypeValue: number;
    glTrackingTypeTrackingTypeValueSpecified: boolean;
    glTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glTrackingTypeFields: GlTrackingTypeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
