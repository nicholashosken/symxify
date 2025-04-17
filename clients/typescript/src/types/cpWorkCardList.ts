import { CpWorkCard } from "./cpWorkCard";

export interface CpWorkCardList {
    hasReachedMaximumListSize: boolean | null;
    cpWorkCard: CpWorkCard[];
}