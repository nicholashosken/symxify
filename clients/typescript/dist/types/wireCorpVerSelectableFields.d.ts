import { WireCorpVerFields } from "./wireCorpVerFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireCorpVerSelectableFields {
    includeAllWireCorpVerFieldsValue: boolean;
    includeAllWireCorpVerFieldsValueSpecified: boolean;
    includeAllWireCorpVerFields: boolean | null;
    wireCorpVerFields: WireCorpVerFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
