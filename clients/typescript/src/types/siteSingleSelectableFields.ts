import { SiteFields } from "./siteFields";
import { VersionType } from "./versionType";

export interface SiteSingleSelectableFields {
    includeAllSiteFields: boolean | null;
    siteFields: SiteFields;
    version1: VersionType;
}