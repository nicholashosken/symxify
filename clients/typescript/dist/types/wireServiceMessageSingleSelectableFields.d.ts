import { WireServiceMessageFields } from "./wireServiceMessageFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireServiceMessageSingleSelectableFields {
    includeAllWireServiceMessageFieldsValue: boolean;
    includeAllWireServiceMessageFieldsValueSpecified: boolean;
    includeAllWireServiceMessageFields: boolean | null;
    wireServiceMessageFields: WireServiceMessageFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
