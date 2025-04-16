import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollatrlTrackingTypeFields_2 } from "./collatrlTrackingTypeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateCollatrlTrackingTypeByIdRequest {
    collatrlTrackingTypeRecordSelectionValue: number;
    collatrlTrackingTypeRecordSelectionValueSpecified: boolean;
    collatrlTrackingTypeRecordSelection: number | null;
    collatrlTrackingTypeTrackingTypeValue: number;
    collatrlTrackingTypeTrackingTypeValueSpecified: boolean;
    collatrlTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    collatrlTrackingTypeFields: CollatrlTrackingTypeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
