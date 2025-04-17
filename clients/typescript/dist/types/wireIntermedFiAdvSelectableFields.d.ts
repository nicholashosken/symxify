import { WireIntermedFiAdvFields } from "./wireIntermedFiAdvFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireIntermedFiAdvSelectableFields {
    includeAllWireIntermedFiAdvFieldsValue: boolean;
    includeAllWireIntermedFiAdvFieldsValueSpecified: boolean;
    includeAllWireIntermedFiAdvFields: boolean | null;
    wireIntermedFiAdvFields: WireIntermedFiAdvFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
