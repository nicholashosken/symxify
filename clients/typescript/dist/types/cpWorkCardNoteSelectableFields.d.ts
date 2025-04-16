import { CpWorkCardNoteFields } from "./cpWorkCardNoteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpWorkCardNoteSelectableFields {
    includeAllCpWorkCardNoteFieldsValue: boolean;
    includeAllCpWorkCardNoteFieldsValueSpecified: boolean;
    includeAllCpWorkCardNoteFields: boolean | null;
    cpWorkCardNoteFields: CpWorkCardNoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
