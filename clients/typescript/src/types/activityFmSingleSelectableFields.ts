import { ActivityFmFields } from "./activityFmFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ActivityFmSingleSelectableFields {
    includeAllActivityFmFieldsValue: boolean;
    includeAllActivityFmFieldsValueSpecified: boolean;
    includeAllActivityFmFields: boolean | null;
    activityFmFields: ActivityFmFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}