import { AuthenticationCredentials } from "./authenticationCredentials";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseRequest } from "./ecaaBaseRequest";

export interface AuthenticateWithAuthorizationRequest extends EcaaBaseRequest {
    namespace: string;
    authenticationCredentials: AuthenticationCredentials;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}