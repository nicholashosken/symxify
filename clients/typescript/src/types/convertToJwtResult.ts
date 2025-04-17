import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { CommonResult } from "./commonResult";

export interface ConvertToJwtResult extends CommonResult {
    jwtToken: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}