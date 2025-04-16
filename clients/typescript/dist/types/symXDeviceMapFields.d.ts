import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXDeviceMapFields {
    balanceRecordNumberValue: boolean;
    balanceRecordNumberValueSpecified: boolean;
    balanceRecordNumber: boolean | null;
    clientNumberValue: boolean;
    clientNumberValueSpecified: boolean;
    clientNumber: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    deviceIdValue: boolean;
    deviceIdValueSpecified: boolean;
    deviceId: boolean | null;
    deviceNumberValue: boolean;
    deviceNumberValueSpecified: boolean;
    deviceNumber: boolean | null;
    deviceTypeValue: boolean;
    deviceTypeValueSpecified: boolean;
    deviceType: boolean | null;
    instanceIdValue: boolean;
    instanceIdValueSpecified: boolean;
    instanceId: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
