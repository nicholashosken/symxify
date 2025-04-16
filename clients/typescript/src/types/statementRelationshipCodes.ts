import { BitMap } from "./bitMap";

export interface StatementRelationshipCodes {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    relationshipCodes: BitMap;
}