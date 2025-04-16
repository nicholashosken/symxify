import { SiteChildrenFilter } from "./siteChildrenFilter";

export interface SiteFilter {
    query: string;
    siteChildrenFilter: SiteChildrenFilter;
}