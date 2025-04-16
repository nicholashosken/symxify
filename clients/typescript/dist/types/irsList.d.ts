import { Irs } from "./irs";
export interface IrsList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    irs: Irs[];
    irsSpecified: boolean;
}
