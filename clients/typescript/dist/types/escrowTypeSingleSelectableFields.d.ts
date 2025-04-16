import { EscrowTypeFields } from "./escrowTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EscrowTypeSingleSelectableFields {
    includeAllEscrowTypeFieldsValue: boolean;
    includeAllEscrowTypeFieldsValueSpecified: boolean;
    includeAllEscrowTypeFields: boolean | null;
    escrowTypeFields: EscrowTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
