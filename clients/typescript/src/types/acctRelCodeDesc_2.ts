import { AcctRelCodeDescRelationshipCode_2 } from "./acctRelCodeDescRelationshipCode_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctRelCodeDesc_2 {
    relationshipCode: AcctRelCodeDescRelationshipCode_2[];
    relationshipCodeSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}