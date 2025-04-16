import { SiteFields } from "./siteFields";
import { SiteCashOrderTypeSelectableFields } from "./siteCashOrderTypeSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SiteSelectableFields {
    includeAllSiteFieldsValue: boolean;
    includeAllSiteFieldsValueSpecified: boolean;
    includeAllSiteFields: boolean | null;
    siteFields: SiteFields;
    siteCashOrderTypeSelectableFields: SiteCashOrderTypeSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}