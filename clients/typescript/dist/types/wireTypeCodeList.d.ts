import { WireTypeCode } from "./wireTypeCode";
export interface WireTypeCodeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireTypeCode: WireTypeCode[];
    wireTypeCodeSpecified: boolean;
}
