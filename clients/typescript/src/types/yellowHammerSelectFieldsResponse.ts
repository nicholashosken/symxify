import { YellowHammer } from "./yellowHammer";
import { VersionType } from "./versionType";

export interface YellowHammerSelectFieldsResponse {
    yellowHammer: YellowHammer;
    version1: VersionType;
    messageId: string;
}