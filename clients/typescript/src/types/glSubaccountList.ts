import { GlSubaccount } from "./glSubaccount";

export interface GlSubaccountList {
    hasReachedMaximumListSize: boolean | null;
    glSubaccount: GlSubaccount[];
}