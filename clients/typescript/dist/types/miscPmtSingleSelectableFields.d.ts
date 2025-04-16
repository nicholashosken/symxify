import { MiscPmtFields } from "./miscPmtFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MiscPmtSingleSelectableFields {
    includeAllMiscPmtFieldsValue: boolean;
    includeAllMiscPmtFieldsValueSpecified: boolean;
    includeAllMiscPmtFields: boolean | null;
    miscPmtFields: MiscPmtFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
