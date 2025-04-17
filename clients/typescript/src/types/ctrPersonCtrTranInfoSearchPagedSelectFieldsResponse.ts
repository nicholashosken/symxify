import { CtrPersonCtrTranInfo } from "./ctrPersonCtrTranInfo";
import { VersionType } from "./versionType";

export interface CtrPersonCtrTranInfoSearchPagedSelectFieldsResponse {
    ctrPersonCtrTranInfo: CtrPersonCtrTranInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}