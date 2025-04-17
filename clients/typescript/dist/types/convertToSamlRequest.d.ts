import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseRequest } from "./ecaaBaseRequest";
export interface ConvertToSamlRequest extends EcaaBaseRequest {
    jwtToken: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
