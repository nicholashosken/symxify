import { TptFields } from "./tptFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TptSelectableFields {
    includeAllTptFieldsValue: boolean;
    includeAllTptFieldsValueSpecified: boolean;
    includeAllTptFields: boolean | null;
    tptFields: TptFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}