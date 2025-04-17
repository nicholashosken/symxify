import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseRequest } from "./ecaaBaseRequest";

export interface InitKerberosAuthenticationRequest extends EcaaBaseRequest {
    domain: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}