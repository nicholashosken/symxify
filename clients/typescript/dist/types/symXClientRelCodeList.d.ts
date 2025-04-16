import { BitMap } from "./bitMap";
export interface SymXClientRelCodeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    relCodeList: BitMap;
}
