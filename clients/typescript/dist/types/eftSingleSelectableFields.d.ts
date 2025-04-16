import { EftFields } from "./eftFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftSingleSelectableFields {
    includeAllEftFieldsValue: boolean;
    includeAllEftFieldsValueSpecified: boolean;
    includeAllEftFields: boolean | null;
    eftFields: EftFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
