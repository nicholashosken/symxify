import { CtrPerson } from "./ctrPerson";

export interface CtrPersonList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    ctrPerson: CtrPerson[];
    ctrPersonSpecified: boolean;
}