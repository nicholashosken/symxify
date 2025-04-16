import { ShareNoteFields } from "./shareNoteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareNoteSingleSelectableFields {
    includeAllShareNoteFieldsValue: boolean;
    includeAllShareNoteFieldsValueSpecified: boolean;
    includeAllShareNoteFields: boolean | null;
    shareNoteFields: ShareNoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}