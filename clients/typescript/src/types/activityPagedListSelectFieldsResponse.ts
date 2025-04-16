import { Activity } from "./activity";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ActivityPagedListSelectFieldsResponse {
    activity: Activity[];
    activitySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}