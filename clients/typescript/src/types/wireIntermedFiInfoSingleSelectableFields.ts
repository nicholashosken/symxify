import { WireIntermedFiInfoFields } from "./wireIntermedFiInfoFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireIntermedFiInfoSingleSelectableFields {
    includeAllWireIntermedFiInfoFieldsValue: boolean;
    includeAllWireIntermedFiInfoFieldsValueSpecified: boolean;
    includeAllWireIntermedFiInfoFields: boolean | null;
    wireIntermedFiInfoFields: WireIntermedFiInfoFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}