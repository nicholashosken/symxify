import { RemittanceFields } from "./remittanceFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface RemittanceSingleSelectableFields {
    includeAllRemittanceFieldsValue: boolean;
    includeAllRemittanceFieldsValueSpecified: boolean;
    includeAllRemittanceFields: boolean | null;
    remittanceFields: RemittanceFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}