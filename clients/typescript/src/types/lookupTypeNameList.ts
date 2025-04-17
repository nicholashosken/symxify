import { LookupTypeName } from "./lookupTypeName";

export interface LookupTypeNameList {
    hasReachedMaximumListSize: boolean | null;
    lookupTypeName: LookupTypeName[];
}