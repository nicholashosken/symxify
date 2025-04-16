import { Pledge } from "./pledge";

export interface PledgeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    pledge: Pledge[];
    pledgeSpecified: boolean;
}