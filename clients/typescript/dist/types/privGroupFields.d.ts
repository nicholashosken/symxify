import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PrivGroupFields {
    assignablebyMemberUserValue: boolean;
    assignablebyMemberUserValueSpecified: boolean;
    assignablebyMemberUser: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    groupValue: boolean;
    groupValueSpecified: boolean;
    group: boolean | null;
    securityAmount: number[];
    securityAmountSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
