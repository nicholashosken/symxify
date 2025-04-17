import { WireServiceMessage } from "./wireServiceMessage";
export interface WireServiceMessageList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireServiceMessage: WireServiceMessage[];
    wireServiceMessageSpecified: boolean;
}
