import { PlanDefault } from "./planDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PlanDefaultSelectFieldsResponse {
    planDefault: PlanDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
