import { SecField } from "./secField";

export interface SecFieldList {
    hasReachedMaximumListSize: boolean | null;
    secField: SecField[];
}