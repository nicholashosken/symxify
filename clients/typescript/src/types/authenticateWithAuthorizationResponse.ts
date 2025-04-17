import { AuthenticateWithAuthorizationResult } from "./authenticateWithAuthorizationResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface AuthenticateWithAuthorizationResponse extends EcaaBaseResponse {
    authenticateWithAuthorizationResult: AuthenticateWithAuthorizationResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}