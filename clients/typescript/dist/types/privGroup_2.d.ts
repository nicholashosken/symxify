import { PrivGroupSecurityAmount_2 } from "./privGroupSecurityAmount_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PrivGroup_2 {
    assignablebyMemberUserValue: number;
    assignablebyMemberUserValueSpecified: boolean;
    assignablebyMemberUser: number | null;
    description: string;
    groupValue: number;
    groupValueSpecified: boolean;
    group: number | null;
    securityAmount: PrivGroupSecurityAmount_2[];
    securityAmountSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
