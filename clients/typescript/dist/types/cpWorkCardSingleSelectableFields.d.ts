import { CpWorkCardFields } from "./cpWorkCardFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpWorkCardSingleSelectableFields {
    includeAllCpWorkCardFieldsValue: boolean;
    includeAllCpWorkCardFieldsValueSpecified: boolean;
    includeAllCpWorkCardFields: boolean | null;
    cpWorkCardFields: CpWorkCardFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
