import { PlanFieldName } from "./planFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PlanFieldNameSelectFieldsResponse {
    planFieldName: PlanFieldName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}