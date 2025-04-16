import { EftAddendaInfoFields } from "./eftAddendaInfoFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EftAddendaInfoSingleSelectableFields {
    includeAllEftAddendaInfoFieldsValue: boolean;
    includeAllEftAddendaInfoFieldsValueSpecified: boolean;
    includeAllEftAddendaInfoFields: boolean | null;
    eftAddendaInfoFields: EftAddendaInfoFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}