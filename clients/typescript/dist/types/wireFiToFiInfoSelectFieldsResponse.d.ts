import { WireFiToFiInfo } from "./wireFiToFiInfo";
import { VersionType } from "./versionType";
export interface WireFiToFiInfoSelectFieldsResponse {
    wireFiToFiInfo: WireFiToFiInfo;
    version1: VersionType;
    messageId: string;
}
