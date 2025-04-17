import { SiteFields_2 } from "./siteFields_2";

export interface SiteUpdateRequest {
    siteLocator: number | null;
    siteFields: SiteFields_2;
}