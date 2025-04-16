import { ReversalCode } from "./reversalCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReversalType {
    reversalCodeValue: ReversalCode;
    reversalCodeValueSpecified: boolean;
    reversalCode: ReversalCode | null;
    originalConfirmation: string;
    partialReversalOriginalTotalAmountValue: number;
    partialReversalOriginalTotalAmountValueSpecified: boolean;
    partialReversalOriginalTotalAmount: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
