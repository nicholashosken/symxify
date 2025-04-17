import { VersionType } from "./versionType";
import { CommonResult } from "./commonResult";

export interface ChangeMemberHbPasswordResult extends CommonResult {
    samlAssertion: string;
    version1: VersionType;
}