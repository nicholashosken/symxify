import { CpWorkCardTrackingFields } from "./cpWorkCardTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CpWorkCardTrackingSingleSelectableFields {
    includeAllCpWorkCardTrackingFieldsValue: boolean;
    includeAllCpWorkCardTrackingFieldsValueSpecified: boolean;
    includeAllCpWorkCardTrackingFields: boolean | null;
    cpWorkCardTrackingFields: CpWorkCardTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}