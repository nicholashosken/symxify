import { Site } from "./site";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SiteSelectFieldsFilterChildrenResponse {
    site: Site;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}