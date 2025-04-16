import { PlanFieldName } from "./planFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PlanFieldNamePagedListSelectFieldsResponse {
    planFieldName: PlanFieldName[];
    planFieldNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}