import { VersionType } from "./versionType";

export interface PrivGroupFields {
    assignablebyMemberUser: boolean | null;
    description: boolean | null;
    group: boolean | null;
    securityAmount: number[];
    version1: VersionType;
}