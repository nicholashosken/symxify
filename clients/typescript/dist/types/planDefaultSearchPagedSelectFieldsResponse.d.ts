import { PlanDefault } from "./planDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PlanDefaultSearchPagedSelectFieldsResponse {
    planDefault: PlanDefault[];
    planDefaultSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
