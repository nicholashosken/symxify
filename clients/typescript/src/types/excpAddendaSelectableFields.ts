import { ExcpAddendaFields } from "./excpAddendaFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExcpAddendaSelectableFields {
    includeAllExcpAddendaFieldsValue: boolean;
    includeAllExcpAddendaFieldsValueSpecified: boolean;
    includeAllExcpAddendaFields: boolean | null;
    excpAddendaFields: ExcpAddendaFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}