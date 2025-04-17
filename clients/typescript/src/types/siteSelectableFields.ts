import { SiteFields } from "./siteFields";
import { SiteCashOrderTypeSelectableFields } from "./siteCashOrderTypeSelectableFields";
import { VersionType } from "./versionType";

export interface SiteSelectableFields {
    includeAllSiteFields: boolean | null;
    siteFields: SiteFields;
    siteCashOrderTypeSelectableFields: SiteCashOrderTypeSelectableFields;
    version1: VersionType;
}