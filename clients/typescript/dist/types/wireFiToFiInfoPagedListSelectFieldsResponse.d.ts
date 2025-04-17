import { WireFiToFiInfo } from "./wireFiToFiInfo";
import { VersionType } from "./versionType";
export interface WireFiToFiInfoPagedListSelectFieldsResponse {
    wireFiToFiInfo: WireFiToFiInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}
