import { GlSubaccount } from "./glSubaccount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlSubaccountSearchPagedSelectFieldsResponse {
    glSubaccount: GlSubaccount[];
    glSubaccountSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
