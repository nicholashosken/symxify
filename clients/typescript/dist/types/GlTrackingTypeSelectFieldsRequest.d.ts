import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlTrackingTypeSingleSelectableFields } from "./glTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlTrackingTypeSelectFieldsRequest {
    glTrackingTypeRecordSelectionValue: number;
    glTrackingTypeRecordSelectionValueSpecified: boolean;
    glTrackingTypeRecordSelection: number | null;
    glTrackingTypeTrackingTypeValue: number;
    glTrackingTypeTrackingTypeValueSpecified: boolean;
    glTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlTrackingTypeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
