import { AuthorizationProfile } from "./authorizationProfile";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { AuthenticateResult } from "./authenticateResult";
export interface AuthenticateWithAuthorizationResult extends AuthenticateResult {
    authorizationProfiles: AuthorizationProfile[];
    authorizationProfilesSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
