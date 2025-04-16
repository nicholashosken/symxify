import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PartTrackingTypeSingleSelectableFields } from "./partTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PartTrackingTypeSelectFieldsRequest {
    partTrackingTypeRecordSelectionValue: number;
    partTrackingTypeRecordSelectionValueSpecified: boolean;
    partTrackingTypeRecordSelection: number | null;
    partTrackingTypeTrackingTypeValue: number;
    partTrackingTypeTrackingTypeValueSpecified: boolean;
    partTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PartTrackingTypeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}