import { Site } from "./site";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SiteSearchPagedSelectFieldsResponse {
    site: Site[];
    siteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}