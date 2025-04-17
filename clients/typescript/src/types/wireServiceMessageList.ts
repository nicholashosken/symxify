import { WireServiceMessage } from "./wireServiceMessage";

export interface WireServiceMessageList {
    hasReachedMaximumListSize: boolean | null;
    wireServiceMessage: WireServiceMessage[];
}