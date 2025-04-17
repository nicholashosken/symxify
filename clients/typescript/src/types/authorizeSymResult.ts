import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { CommonResult } from "./commonResult";

export interface AuthorizeSymResult extends CommonResult {
    samlAssertion: string;
    privilegeNames: string[];
    privilegeNamesSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}