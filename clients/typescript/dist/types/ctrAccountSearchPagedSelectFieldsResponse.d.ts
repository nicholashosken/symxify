import { CtrAccount } from "./ctrAccount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrAccountSearchPagedSelectFieldsResponse {
    ctrAccount: CtrAccount[];
    ctrAccountSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
