import { CtrNoteFields } from "./ctrNoteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrNoteSelectableFields {
    includeAllCtrNoteFieldsValue: boolean;
    includeAllCtrNoteFieldsValueSpecified: boolean;
    includeAllCtrNoteFields: boolean | null;
    ctrNoteFields: CtrNoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}