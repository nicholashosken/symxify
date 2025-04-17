import { VersionType } from "./versionType";
import { CommonResult } from "./commonResult";
export interface AuthenticateServiceResult extends CommonResult {
    samlAssertion: string;
    version1: VersionType;
}
