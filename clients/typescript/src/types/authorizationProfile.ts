import { VersionType } from "./versionType";

export interface AuthorizationProfile {
    namespace: string;
    privilegeNames: string[];
    version1: VersionType;
}