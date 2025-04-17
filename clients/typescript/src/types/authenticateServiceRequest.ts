import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseRequest } from "./ecaaBaseRequest";

export interface AuthenticateServiceRequest extends EcaaBaseRequest {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}