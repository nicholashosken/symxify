import { MbrAddressFields } from "./mbrAddressFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface MbrAddressSingleSelectableFields {
    includeAllMbrAddressFieldsValue: boolean;
    includeAllMbrAddressFieldsValueSpecified: boolean;
    includeAllMbrAddressFields: boolean | null;
    mbrAddressFields: MbrAddressFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}