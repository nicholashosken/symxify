import { AcctRelCodeDescRelationshipCode } from "./acctRelCodeDescRelationshipCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctRelCodeDesc {
    relationshipCode: AcctRelCodeDescRelationshipCode[];
    relationshipCodeSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}