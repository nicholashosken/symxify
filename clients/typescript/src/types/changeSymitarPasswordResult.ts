import { VersionType } from "./versionType";
import { CommonResult } from "./commonResult";

export interface ChangeSymitarPasswordResult extends CommonResult {
    samlAssertion: string;
    version1: VersionType;
}