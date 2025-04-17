import { WireFields } from "./wireFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireSingleSelectableFields {
    includeAllWireFieldsValue: boolean;
    includeAllWireFieldsValueSpecified: boolean;
    includeAllWireFields: boolean | null;
    wireFields: WireFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}