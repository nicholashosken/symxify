import { EscrowType } from "./escrowType";
export interface EscrowTypeList {
    hasReachedMaximumListSize: boolean | null;
    escrowType: EscrowType[];
}
