import { ShareHoldFields } from "./shareHoldFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareHoldSelectableFields {
    includeAllShareHoldFieldsValue: boolean;
    includeAllShareHoldFieldsValueSpecified: boolean;
    includeAllShareHoldFields: boolean | null;
    shareHoldFields: ShareHoldFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}