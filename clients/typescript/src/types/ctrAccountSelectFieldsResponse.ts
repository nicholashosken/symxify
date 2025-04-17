import { CtrAccount } from "./ctrAccount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrAccountSelectFieldsResponse {
    ctrAccount: CtrAccount;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}