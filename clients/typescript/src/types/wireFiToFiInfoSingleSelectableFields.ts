import { WireFiToFiInfoFields } from "./wireFiToFiInfoFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireFiToFiInfoSingleSelectableFields {
    includeAllWireFiToFiInfoFieldsValue: boolean;
    includeAllWireFiToFiInfoFieldsValueSpecified: boolean;
    includeAllWireFiToFiInfoFields: boolean | null;
    wireFiToFiInfoFields: WireFiToFiInfoFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}