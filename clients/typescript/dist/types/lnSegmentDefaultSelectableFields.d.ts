import { LnSegmentDefaultFields } from "./lnSegmentDefaultFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LnSegmentDefaultSelectableFields {
    includeAllLnSegmentDefaultFieldsValue: boolean;
    includeAllLnSegmentDefaultFieldsValueSpecified: boolean;
    includeAllLnSegmentDefaultFields: boolean | null;
    lnSegmentDefaultFields: LnSegmentDefaultFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
