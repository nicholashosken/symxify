import { CardFields } from "./cardFields";
import { CardAccessSelectableFields } from "./cardAccessSelectableFields";
import { CardNameSelectableFields } from "./cardNameSelectableFields";
import { CardNoteSelectableFields } from "./cardNoteSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CardSelectableFields {
    includeAllCardFieldsValue: boolean;
    includeAllCardFieldsValueSpecified: boolean;
    includeAllCardFields: boolean | null;
    cardFields: CardFields;
    cardAccessSelectableFields: CardAccessSelectableFields;
    cardNameSelectableFields: CardNameSelectableFields;
    cardNoteSelectableFields: CardNoteSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
