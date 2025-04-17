import { GlSubaccount } from "./glSubaccount";

export interface GlSubaccountList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    glSubaccount: GlSubaccount[];
    glSubaccountSpecified: boolean;
}