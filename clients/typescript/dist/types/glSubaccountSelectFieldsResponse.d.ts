import { GlSubaccount } from "./glSubaccount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlSubaccountSelectFieldsResponse {
    glSubaccount: GlSubaccount;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
