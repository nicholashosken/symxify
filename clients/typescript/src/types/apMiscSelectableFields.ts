import { ApMiscFields } from "./apMiscFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApMiscSelectableFields {
    includeAllApMiscFieldsValue: boolean;
    includeAllApMiscFieldsValueSpecified: boolean;
    includeAllApMiscFields: boolean | null;
    apMiscFields: ApMiscFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}