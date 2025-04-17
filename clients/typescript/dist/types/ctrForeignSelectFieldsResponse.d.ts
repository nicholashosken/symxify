import { CtrForeign } from "./ctrForeign";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrForeignSelectFieldsResponse {
    ctrForeign: CtrForeign;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
