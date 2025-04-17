import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { CommonResult } from "./commonResult";

export interface InitKerberosAuthenticationResult extends CommonResult {
    servicePrincipalName: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}