import { ShareNoteFields } from "./shareNoteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareNoteSelectableFields {
    includeAllShareNoteFieldsValue: boolean;
    includeAllShareNoteFieldsValueSpecified: boolean;
    includeAllShareNoteFields: boolean | null;
    shareNoteFields: ShareNoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
