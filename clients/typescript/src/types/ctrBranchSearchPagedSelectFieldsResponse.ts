import { CtrBranch } from "./ctrBranch";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrBranchSearchPagedSelectFieldsResponse {
    ctrBranch: CtrBranch[];
    ctrBranchSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}