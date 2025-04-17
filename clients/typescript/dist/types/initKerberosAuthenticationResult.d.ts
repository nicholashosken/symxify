import { VersionType } from "./versionType";
import { CommonResult } from "./commonResult";
export interface InitKerberosAuthenticationResult extends CommonResult {
    servicePrincipalName: string;
    version1: VersionType;
}
