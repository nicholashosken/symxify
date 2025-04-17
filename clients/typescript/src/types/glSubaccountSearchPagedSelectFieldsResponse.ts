import { GlSubaccount } from "./glSubaccount";
import { VersionType } from "./versionType";

export interface GlSubaccountSearchPagedSelectFieldsResponse {
    glSubaccount: GlSubaccount[];
    token: string;
    version1: VersionType;
    messageId: string;
}