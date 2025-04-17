import { PrincipalInformation } from "./principalInformation";
import { VersionType } from "./versionType";
import { CommonResult } from "./commonResult";
export interface GetPrincipalsResult extends CommonResult {
    information: PrincipalInformation[];
    version1: VersionType;
}
