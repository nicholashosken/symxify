import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SymXDeviceMapSingleSelectableFields } from "./symXDeviceMapSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXDeviceMapSelectFieldsRequest {
    symXDeviceMapInstanceIdValue: number;
    symXDeviceMapInstanceIdValueSpecified: boolean;
    symXDeviceMapInstanceId: number | null;
    symXDeviceMapDeviceIdValue: number;
    symXDeviceMapDeviceIdValueSpecified: boolean;
    symXDeviceMapDeviceId: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SymXDeviceMapSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
