import { GlSubaccount } from "./glSubaccount";
import { VersionType } from "./versionType";
export interface GlSubaccountPagedListSelectFieldsResponse {
    glSubaccount: GlSubaccount[];
    token: string;
    version1: VersionType;
    messageId: string;
}
