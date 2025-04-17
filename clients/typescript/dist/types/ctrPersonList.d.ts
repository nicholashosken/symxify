import { CtrPerson } from "./ctrPerson";
export interface CtrPersonList {
    hasReachedMaximumListSize: boolean | null;
    ctrPerson: CtrPerson[];
}
