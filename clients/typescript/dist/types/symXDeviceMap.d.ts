import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXDeviceMap {
    balanceRecordNumberValue: number;
    balanceRecordNumberValueSpecified: boolean;
    balanceRecordNumber: number | null;
    clientNumberValue: number;
    clientNumberValueSpecified: boolean;
    clientNumber: number | null;
    description: string;
    deviceIdValue: number;
    deviceIdValueSpecified: boolean;
    deviceId: number | null;
    deviceNumberValue: number;
    deviceNumberValueSpecified: boolean;
    deviceNumber: number | null;
    deviceType: string;
    instanceIdValue: number;
    instanceIdValueSpecified: boolean;
    instanceId: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
