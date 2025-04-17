import { VersionType } from "./versionType";
import { CommonResult } from "./commonResult";
export interface ConvertToJwtResult extends CommonResult {
    jwtToken: string;
    version1: VersionType;
}
