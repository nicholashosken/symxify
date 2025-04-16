import { CardWizFields } from "./cardWizFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardWizSelectableFields {
    includeAllCardWizFieldsValue: boolean;
    includeAllCardWizFieldsValueSpecified: boolean;
    includeAllCardWizFields: boolean | null;
    cardWizFields: CardWizFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}