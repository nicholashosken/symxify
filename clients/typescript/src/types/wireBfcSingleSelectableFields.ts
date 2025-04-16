import { WireBfcFields } from "./wireBfcFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBfcSingleSelectableFields {
    includeAllWireBfcFieldsValue: boolean;
    includeAllWireBfcFieldsValueSpecified: boolean;
    includeAllWireBfcFields: boolean | null;
    wireBfcFields: WireBfcFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}