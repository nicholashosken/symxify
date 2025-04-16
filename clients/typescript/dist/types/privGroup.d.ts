import { PrivGroupSecurityAmount } from "./privGroupSecurityAmount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PrivGroup {
    assignablebyMemberUserValue: number;
    assignablebyMemberUserValueSpecified: boolean;
    assignablebyMemberUser: number | null;
    description: string;
    groupValue: number;
    groupValueSpecified: boolean;
    group: number | null;
    securityAmount: PrivGroupSecurityAmount[];
    securityAmountSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
