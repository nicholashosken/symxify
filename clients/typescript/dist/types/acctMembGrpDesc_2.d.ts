import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctMembGrpDesc_2 {
    description: string;
    memberGroupValue: number;
    memberGroupValueSpecified: boolean;
    memberGroup: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
