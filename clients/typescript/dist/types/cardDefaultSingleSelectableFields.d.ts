import { CardDefaultFields } from "./cardDefaultFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CardDefaultSingleSelectableFields {
    includeAllCardDefaultFieldsValue: boolean;
    includeAllCardDefaultFieldsValueSpecified: boolean;
    includeAllCardDefaultFields: boolean | null;
    cardDefaultFields: CardDefaultFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
