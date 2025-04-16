import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PartTrackingTypeFields_2 } from "./partTrackingTypeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdatePartTrackingTypeByIdRequest {
    partTrackingTypeRecordSelectionValue: number;
    partTrackingTypeRecordSelectionValueSpecified: boolean;
    partTrackingTypeRecordSelection: number | null;
    partTrackingTypeTrackingTypeValue: number;
    partTrackingTypeTrackingTypeValueSpecified: boolean;
    partTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    partTrackingTypeFields: PartTrackingTypeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
