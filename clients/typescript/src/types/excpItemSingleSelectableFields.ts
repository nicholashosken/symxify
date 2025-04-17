import { ExcpItemFields } from "./excpItemFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExcpItemSingleSelectableFields {
    includeAllExcpItemFieldsValue: boolean;
    includeAllExcpItemFieldsValueSpecified: boolean;
    includeAllExcpItemFields: boolean | null;
    excpItemFields: ExcpItemFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}