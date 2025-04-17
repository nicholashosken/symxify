import { CtrForeign } from "./ctrForeign";
import { VersionType } from "./versionType";

export interface CtrForeignSelectFieldsResponse {
    ctrForeign: CtrForeign;
    version1: VersionType;
    messageId: string;
}