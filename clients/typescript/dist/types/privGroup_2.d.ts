import { PrivGroupSecurityAmount_2 } from "./privGroupSecurityAmount_2";
import { VersionType } from "./versionType";
export interface PrivGroup_2 {
    assignablebyMemberUser: number | null;
    description: string;
    group: number | null;
    securityAmount: PrivGroupSecurityAmount_2[];
    version1: VersionType;
}
