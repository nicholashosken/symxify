import { AuthenticationCredentials } from "./authenticationCredentials";
import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";

export interface AuthenticateWithAuthorizationRequest extends EcaaBaseRequest {
    namespace: string;
    authenticationCredentials: AuthenticationCredentials;
    version1: VersionType;
}