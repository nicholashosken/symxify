import { MiscPmt } from "./miscPmt";
import { VersionType } from "./versionType";

export interface MiscPmtSelectFieldsResponse {
    miscPmt: MiscPmt;
    version1: VersionType;
    messageId: string;
}