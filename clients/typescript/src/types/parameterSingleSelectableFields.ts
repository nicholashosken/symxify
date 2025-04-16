import { ParameterFields } from "./parameterFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParameterSingleSelectableFields {
    includeAllParameterFieldsValue: boolean;
    includeAllParameterFieldsValueSpecified: boolean;
    includeAllParameterFields: boolean | null;
    parameterFields: ParameterFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}