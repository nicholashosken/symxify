import { PrivGroupSecurityAmount } from "./privGroupSecurityAmount";
import { VersionType } from "./versionType";
export interface PrivGroup {
    assignablebyMemberUser: number | null;
    description: string;
    group: number | null;
    securityAmount: PrivGroupSecurityAmount[];
    version1: VersionType;
}
