import { ReversalCode } from "./reversalCode";
import { VersionType } from "./versionType";
export interface ReversalType {
    reversalCode: ReversalCode | null;
    originalConfirmation: string;
    partialReversalOriginalTotalAmount: number | null;
    version1: VersionType;
}
