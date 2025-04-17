import { SymXDeviceMap } from "./symXDeviceMap";
import { VersionType } from "./versionType";
export interface SymXDeviceMapSelectFieldsResponse {
    symXDeviceMap: SymXDeviceMap;
    version1: VersionType;
    messageId: string;
}
