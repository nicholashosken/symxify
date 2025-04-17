import { AuthorizationProfile } from "./authorizationProfile";
import { VersionType } from "./versionType";
import { AuthenticateResult } from "./authenticateResult";
export interface AuthenticateWithAuthorizationResult extends AuthenticateResult {
    authorizationProfiles: AuthorizationProfile[];
    version1: VersionType;
}
