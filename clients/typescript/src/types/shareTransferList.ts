import { ShareTransfer } from "./shareTransfer";

export interface ShareTransferList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareTransfer: ShareTransfer[];
    shareTransferSpecified: boolean;
}