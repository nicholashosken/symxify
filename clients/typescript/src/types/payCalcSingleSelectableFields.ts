import { PayCalcFields } from "./payCalcFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PayCalcSingleSelectableFields {
    includeAllPayCalcFieldsValue: boolean;
    includeAllPayCalcFieldsValueSpecified: boolean;
    includeAllPayCalcFields: boolean | null;
    payCalcFields: PayCalcFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}