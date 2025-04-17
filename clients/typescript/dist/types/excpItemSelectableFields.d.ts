import { ExcpItemFields } from "./excpItemFields";
import { ExcpAddInfoSelectableFields } from "./excpAddInfoSelectableFields";
import { ExcpAddendaSelectableFields } from "./excpAddendaSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpItemSelectableFields {
    includeAllExcpItemFieldsValue: boolean;
    includeAllExcpItemFieldsValueSpecified: boolean;
    includeAllExcpItemFields: boolean | null;
    excpItemFields: ExcpItemFields;
    excpAddInfoSelectableFields: ExcpAddInfoSelectableFields;
    excpAddendaSelectableFields: ExcpAddendaSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
