import { WireIdCodeFields } from "./wireIdCodeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireIdCodeSingleSelectableFields {
    includeAllWireIdCodeFieldsValue: boolean;
    includeAllWireIdCodeFieldsValueSpecified: boolean;
    includeAllWireIdCodeFields: boolean | null;
    wireIdCodeFields: WireIdCodeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
