import { WireTypeCode } from "./wireTypeCode";

export interface WireTypeCodeList {
    hasReachedMaximumListSize: boolean | null;
    wireTypeCode: WireTypeCode[];
}