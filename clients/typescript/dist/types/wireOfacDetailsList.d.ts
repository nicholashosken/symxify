import { WireOfacDetails } from "./wireOfacDetails";
export interface WireOfacDetailsList {
    hasReachedMaximumListSize: boolean | null;
    wireOfacDetails: WireOfacDetails[];
}
