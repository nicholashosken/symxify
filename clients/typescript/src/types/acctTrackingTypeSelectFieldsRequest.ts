import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctTrackingTypeSingleSelectableFields } from "./acctTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctTrackingTypeSelectFieldsRequest {
    acctTrackingTypeRecordSelectionValue: number;
    acctTrackingTypeRecordSelectionValueSpecified: boolean;
    acctTrackingTypeRecordSelection: number | null;
    acctTrackingTypeTrackingTypeValue: number;
    acctTrackingTypeTrackingTypeValueSpecified: boolean;
    acctTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AcctTrackingTypeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}