import { ActivityFm } from "./activityFm";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ActivityFmSelectFieldsResponse {
    activityFm: ActivityFm;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}