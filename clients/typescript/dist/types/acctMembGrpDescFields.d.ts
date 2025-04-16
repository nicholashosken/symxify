import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctMembGrpDescFields {
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    memberGroupValue: boolean;
    memberGroupValueSpecified: boolean;
    memberGroup: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
