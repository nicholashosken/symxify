import { SymXDeviceMap } from "./symXDeviceMap";
import { VersionType } from "./versionType";

export interface SymXDeviceMapSearchPagedSelectFieldsResponse {
    symXDeviceMap: SymXDeviceMap[];
    token: string;
    version1: VersionType;
    messageId: string;
}