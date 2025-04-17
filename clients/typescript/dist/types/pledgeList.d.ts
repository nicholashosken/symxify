import { Pledge } from "./pledge";
export interface PledgeList {
    hasReachedMaximumListSize: boolean | null;
    pledge: Pledge[];
}
