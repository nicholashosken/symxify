import { Site } from "./site";

export interface SiteList {
    hasReachedMaximumListSize: boolean | null;
    site: Site[];
}