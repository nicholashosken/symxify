import { VersionType } from "./versionType";
import { CommonResult } from "./commonResult";
export interface AuthorizeSymResult extends CommonResult {
    samlAssertion: string;
    privilegeNames: string[];
    version1: VersionType;
}
