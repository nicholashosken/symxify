import { MbrAddressFields } from "./mbrAddressFields";
import { MbrAddressFmHistorySelectableFields } from "./mbrAddressFmHistorySelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface MbrAddressSelectableFields {
    includeAllMbrAddressFieldsValue: boolean;
    includeAllMbrAddressFieldsValueSpecified: boolean;
    includeAllMbrAddressFields: boolean | null;
    mbrAddressFields: MbrAddressFields;
    mbrAddressFmHistorySelectableFields: MbrAddressFmHistorySelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}