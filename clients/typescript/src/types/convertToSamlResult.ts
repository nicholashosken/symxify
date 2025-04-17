import { VersionType } from "./versionType";
import { CommonResult } from "./commonResult";

export interface ConvertToSamlResult extends CommonResult {
    samlAssertion: string;
    version1: VersionType;
}