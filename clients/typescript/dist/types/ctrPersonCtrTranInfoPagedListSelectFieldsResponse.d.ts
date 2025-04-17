import { CtrPersonCtrTranInfo } from "./ctrPersonCtrTranInfo";
import { VersionType } from "./versionType";
export interface CtrPersonCtrTranInfoPagedListSelectFieldsResponse {
    ctrPersonCtrTranInfo: CtrPersonCtrTranInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}
