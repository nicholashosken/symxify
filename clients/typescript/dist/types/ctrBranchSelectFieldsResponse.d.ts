import { CtrBranch } from "./ctrBranch";
import { VersionType } from "./versionType";
export interface CtrBranchSelectFieldsResponse {
    ctrBranch: CtrBranch;
    version1: VersionType;
    messageId: string;
}
