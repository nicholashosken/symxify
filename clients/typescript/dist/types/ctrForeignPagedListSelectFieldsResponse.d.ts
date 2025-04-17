import { CtrForeign } from "./ctrForeign";
import { VersionType } from "./versionType";
export interface CtrForeignPagedListSelectFieldsResponse {
    ctrForeign: CtrForeign[];
    token: string;
    version1: VersionType;
    messageId: string;
}
