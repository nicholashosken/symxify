import { MoProductFields } from "./moProductFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface MoProductSelectableFields {
    includeAllMoProductFieldsValue: boolean;
    includeAllMoProductFieldsValueSpecified: boolean;
    includeAllMoProductFields: boolean | null;
    moProductFields: MoProductFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}