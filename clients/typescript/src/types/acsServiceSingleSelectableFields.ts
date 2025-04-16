import { AcsServiceFields } from "./acsServiceFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcsServiceSingleSelectableFields {
    includeAllAcsServiceFieldsValue: boolean;
    includeAllAcsServiceFieldsValueSpecified: boolean;
    includeAllAcsServiceFields: boolean | null;
    acsServiceFields: AcsServiceFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}