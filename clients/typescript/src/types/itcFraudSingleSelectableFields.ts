import { ItcFraudFields } from "./itcFraudFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ItcFraudSingleSelectableFields {
    includeAllItcFraudFieldsValue: boolean;
    includeAllItcFraudFieldsValueSpecified: boolean;
    includeAllItcFraudFields: boolean | null;
    itcFraudFields: ItcFraudFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}