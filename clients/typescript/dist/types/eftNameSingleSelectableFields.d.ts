import { EftNameFields } from "./eftNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftNameSingleSelectableFields {
    includeAllEftNameFieldsValue: boolean;
    includeAllEftNameFieldsValueSpecified: boolean;
    includeAllEftNameFields: boolean | null;
    eftNameFields: EftNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
