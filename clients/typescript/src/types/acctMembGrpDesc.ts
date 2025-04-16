import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctMembGrpDesc {
    description: string;
    memberGroupValue: number;
    memberGroupValueSpecified: boolean;
    memberGroup: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}