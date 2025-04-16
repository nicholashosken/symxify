import { CpWorkCardFields } from "./cpWorkCardFields";
import { CpWorkCardNoteSelectableFields } from "./cpWorkCardNoteSelectableFields";
import { CpWorkCardTrackingSelectableFields } from "./cpWorkCardTrackingSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CpWorkCardSelectableFields {
    includeAllCpWorkCardFieldsValue: boolean;
    includeAllCpWorkCardFieldsValueSpecified: boolean;
    includeAllCpWorkCardFields: boolean | null;
    cpWorkCardFields: CpWorkCardFields;
    cpWorkCardNoteSelectableFields: CpWorkCardNoteSelectableFields;
    cpWorkCardTrackingSelectableFields: CpWorkCardTrackingSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}