import { MiscFields } from "./miscFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface MiscSingleSelectableFields {
    includeAllMiscFieldsValue: boolean;
    includeAllMiscFieldsValueSpecified: boolean;
    includeAllMiscFields: boolean | null;
    miscFields: MiscFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}