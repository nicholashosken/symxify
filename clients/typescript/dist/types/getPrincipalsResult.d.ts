import { PrincipalInformation } from "./principalInformation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { CommonResult } from "./commonResult";
export interface GetPrincipalsResult extends CommonResult {
    information: PrincipalInformation[];
    informationSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
