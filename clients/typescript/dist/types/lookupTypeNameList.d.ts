import { LookupTypeName } from "./lookupTypeName";
export interface LookupTypeNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    lookupTypeName: LookupTypeName[];
    lookupTypeNameSpecified: boolean;
}
