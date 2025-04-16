import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctRelCodeDescFields {
    relationshipCode: number[];
    relationshipCodeSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
