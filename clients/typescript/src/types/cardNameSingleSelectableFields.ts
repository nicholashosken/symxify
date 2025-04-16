import { CardNameFields } from "./cardNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardNameSingleSelectableFields {
    includeAllCardNameFieldsValue: boolean;
    includeAllCardNameFieldsValueSpecified: boolean;
    includeAllCardNameFields: boolean | null;
    cardNameFields: CardNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}