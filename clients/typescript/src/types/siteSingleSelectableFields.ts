import { SiteFields } from "./siteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SiteSingleSelectableFields {
    includeAllSiteFieldsValue: boolean;
    includeAllSiteFieldsValueSpecified: boolean;
    includeAllSiteFields: boolean | null;
    siteFields: SiteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}