import { WireOfacDetails } from "./wireOfacDetails";
export interface WireOfacDetailsList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireOfacDetails: WireOfacDetails[];
    wireOfacDetailsSpecified: boolean;
}
