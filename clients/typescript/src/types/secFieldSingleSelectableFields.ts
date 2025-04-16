import { SecFieldFields } from "./secFieldFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecFieldSingleSelectableFields {
    includeAllSecFieldFieldsValue: boolean;
    includeAllSecFieldFieldsValueSpecified: boolean;
    includeAllSecFieldFields: boolean | null;
    secFieldFields: SecFieldFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}