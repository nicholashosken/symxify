import { ShareTransfer } from "./shareTransfer";

export interface ShareTransferList {
    hasReachedMaximumListSize: boolean | null;
    shareTransfer: ShareTransfer[];
}