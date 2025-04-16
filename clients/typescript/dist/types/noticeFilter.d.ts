import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NoticeFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
