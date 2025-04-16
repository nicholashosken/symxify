import { SecField } from "./secField";
export interface SecFieldList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    secField: SecField[];
    secFieldSpecified: boolean;
}
