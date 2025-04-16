import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserTrackingTypeSingleSelectableFields } from "./userTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserTrackingTypeSelectFieldsRequest {
    userTrackingTypeRecordSelectionValue: number;
    userTrackingTypeRecordSelectionValueSpecified: boolean;
    userTrackingTypeRecordSelection: number | null;
    userTrackingTypeTrackingTypeValue: number;
    userTrackingTypeTrackingTypeValueSpecified: boolean;
    userTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: UserTrackingTypeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
