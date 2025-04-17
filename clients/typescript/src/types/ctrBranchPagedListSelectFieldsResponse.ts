import { CtrBranch } from "./ctrBranch";
import { VersionType } from "./versionType";

export interface CtrBranchPagedListSelectFieldsResponse {
    ctrBranch: CtrBranch[];
    token: string;
    version1: VersionType;
    messageId: string;
}