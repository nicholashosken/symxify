import { Site } from "./site";
export interface SiteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    site: Site[];
    siteSpecified: boolean;
}
