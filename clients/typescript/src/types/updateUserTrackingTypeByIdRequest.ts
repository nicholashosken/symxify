import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserTrackingTypeFields_2 } from "./userTrackingTypeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateUserTrackingTypeByIdRequest {
    userTrackingTypeRecordSelectionValue: number;
    userTrackingTypeRecordSelectionValueSpecified: boolean;
    userTrackingTypeRecordSelection: number | null;
    userTrackingTypeTrackingTypeValue: number;
    userTrackingTypeTrackingTypeValueSpecified: boolean;
    userTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    userTrackingTypeFields: UserTrackingTypeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}