import { EftTransfer } from "./eftTransfer";

export interface EftTransferList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    eftTransfer: EftTransfer[];
    eftTransferSpecified: boolean;
}