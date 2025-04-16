import { SiteFields_2 } from "./siteFields_2";

export interface SiteUpdateRequest {
    siteLocatorValue: number;
    siteLocatorValueSpecified: boolean;
    siteLocator: number | null;
    siteFields: SiteFields_2;
}