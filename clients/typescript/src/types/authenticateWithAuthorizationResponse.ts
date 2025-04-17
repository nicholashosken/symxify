import { AuthenticateWithAuthorizationResult } from "./authenticateWithAuthorizationResult";
import { VersionType } from "./versionType";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface AuthenticateWithAuthorizationResponse extends EcaaBaseResponse {
    authenticateWithAuthorizationResult: AuthenticateWithAuthorizationResult;
    version1: VersionType;
}