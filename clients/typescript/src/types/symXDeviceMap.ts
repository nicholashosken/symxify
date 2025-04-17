import { VersionType } from "./versionType";

export interface SymXDeviceMap {
    balanceRecordNumber: number | null;
    clientNumber: number | null;
    description: string;
    deviceId: number | null;
    deviceNumber: number | null;
    deviceType: string;
    instanceId: number | null;
    version1: VersionType;
}