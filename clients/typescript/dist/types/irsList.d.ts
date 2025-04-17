import { Irs } from "./irs";
export interface IrsList {
    hasReachedMaximumListSize: boolean | null;
    irs: Irs[];
}
