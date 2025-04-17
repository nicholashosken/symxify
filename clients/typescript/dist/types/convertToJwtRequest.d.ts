import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseRequest } from "./ecaaBaseRequest";
export interface ConvertToJwtRequest extends EcaaBaseRequest {
    samlAssertion: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
