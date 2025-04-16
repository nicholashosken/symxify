import { CpWorkCard } from "./cpWorkCard";

export interface CpWorkCardList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cpWorkCard: CpWorkCard[];
    cpWorkCardSpecified: boolean;
}