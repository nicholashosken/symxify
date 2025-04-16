import { ShareAnalysisPlanFields } from "./shareAnalysisPlanFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareAnalysisPlanSelectableFields {
    includeAllShareAnalysisPlanFieldsValue: boolean;
    includeAllShareAnalysisPlanFieldsValueSpecified: boolean;
    includeAllShareAnalysisPlanFields: boolean | null;
    shareAnalysisPlanFields: ShareAnalysisPlanFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
