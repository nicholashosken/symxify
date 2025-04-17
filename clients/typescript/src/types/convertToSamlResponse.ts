import { ConvertToSamlResult } from "./convertToSamlResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface ConvertToSamlResponse extends EcaaBaseResponse {
    convertToSamlResult: ConvertToSamlResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}