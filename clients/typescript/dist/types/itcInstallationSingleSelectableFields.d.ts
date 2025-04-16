import { ItcInstallationFields } from "./itcInstallationFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ItcInstallationSingleSelectableFields {
    includeAllItcInstallationFieldsValue: boolean;
    includeAllItcInstallationFieldsValueSpecified: boolean;
    includeAllItcInstallationFields: boolean | null;
    itcInstallationFields: ItcInstallationFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
