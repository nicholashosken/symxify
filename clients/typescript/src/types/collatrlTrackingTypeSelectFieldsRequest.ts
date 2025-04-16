import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollatrlTrackingTypeSingleSelectableFields } from "./collatrlTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollatrlTrackingTypeSelectFieldsRequest {
    collatrlTrackingTypeRecordSelectionValue: number;
    collatrlTrackingTypeRecordSelectionValueSpecified: boolean;
    collatrlTrackingTypeRecordSelection: number | null;
    collatrlTrackingTypeTrackingTypeValue: number;
    collatrlTrackingTypeTrackingTypeValueSpecified: boolean;
    collatrlTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollatrlTrackingTypeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}