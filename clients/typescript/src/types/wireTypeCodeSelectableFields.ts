import { WireTypeCodeFields } from "./wireTypeCodeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireTypeCodeSelectableFields {
    includeAllWireTypeCodeFieldsValue: boolean;
    includeAllWireTypeCodeFieldsValueSpecified: boolean;
    includeAllWireTypeCodeFields: boolean | null;
    wireTypeCodeFields: WireTypeCodeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}