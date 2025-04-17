import { EftTransfer } from "./eftTransfer";

export interface EftTransferList {
    hasReachedMaximumListSize: boolean | null;
    eftTransfer: EftTransfer[];
}