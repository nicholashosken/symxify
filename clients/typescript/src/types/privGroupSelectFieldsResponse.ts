import { PrivGroup } from "./privGroup";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PrivGroupSelectFieldsResponse {
    privGroup: PrivGroup;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}