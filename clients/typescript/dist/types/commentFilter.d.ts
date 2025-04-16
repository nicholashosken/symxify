import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CommentFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
