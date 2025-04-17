import { AuthenticateServiceResult } from "./authenticateServiceResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface AuthenticateServiceResponse extends EcaaBaseResponse {
    authenticateServiceResult: AuthenticateServiceResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}