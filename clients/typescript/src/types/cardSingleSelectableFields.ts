import { CardFields } from "./cardFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardSingleSelectableFields {
    includeAllCardFieldsValue: boolean;
    includeAllCardFieldsValueSpecified: boolean;
    includeAllCardFields: boolean | null;
    cardFields: CardFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}