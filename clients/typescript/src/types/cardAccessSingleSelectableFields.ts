import { CardAccessFields } from "./cardAccessFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardAccessSingleSelectableFields {
    includeAllCardAccessFieldsValue: boolean;
    includeAllCardAccessFieldsValueSpecified: boolean;
    includeAllCardAccessFields: boolean | null;
    cardAccessFields: CardAccessFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}