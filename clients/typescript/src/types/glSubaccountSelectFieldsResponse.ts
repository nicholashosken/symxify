import { GlSubaccount } from "./glSubaccount";
import { VersionType } from "./versionType";

export interface GlSubaccountSelectFieldsResponse {
    glSubaccount: GlSubaccount;
    version1: VersionType;
    messageId: string;
}