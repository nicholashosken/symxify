import { CtrBranch } from "./ctrBranch";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrBranchSelectFieldsResponse {
    ctrBranch: CtrBranch;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}