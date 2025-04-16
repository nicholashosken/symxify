import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctTrackingTypeFields_2 } from "./acctTrackingTypeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateAcctTrackingTypeByIdRequest {
    acctTrackingTypeRecordSelectionValue: number;
    acctTrackingTypeRecordSelectionValueSpecified: boolean;
    acctTrackingTypeRecordSelection: number | null;
    acctTrackingTypeTrackingTypeValue: number;
    acctTrackingTypeTrackingTypeValueSpecified: boolean;
    acctTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctTrackingTypeFields: AcctTrackingTypeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
