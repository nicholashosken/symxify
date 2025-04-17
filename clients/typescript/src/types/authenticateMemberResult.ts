import { VersionType } from "./versionType";
import { CommonResult } from "./commonResult";

export interface AuthenticateMemberResult extends CommonResult {
    samlAssertion: string;
    version1: VersionType;
}