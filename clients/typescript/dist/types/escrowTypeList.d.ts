import { EscrowType } from "./escrowType";
export interface EscrowTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    escrowType: EscrowType[];
    escrowTypeSpecified: boolean;
}
