import { IntType } from "./intType";
export interface IntTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    intType: IntType[];
    intTypeSpecified: boolean;
}
