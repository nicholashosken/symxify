import { CheckOrderDefault } from "./checkOrderDefault";

export interface CheckOrderDefaultList {
    hasReachedMaximumListSize: boolean | null;
    checkOrderDefault: CheckOrderDefault[];
}