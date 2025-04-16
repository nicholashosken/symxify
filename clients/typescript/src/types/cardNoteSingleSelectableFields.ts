import { CardNoteFields } from "./cardNoteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardNoteSingleSelectableFields {
    includeAllCardNoteFieldsValue: boolean;
    includeAllCardNoteFieldsValueSpecified: boolean;
    includeAllCardNoteFields: boolean | null;
    cardNoteFields: CardNoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}