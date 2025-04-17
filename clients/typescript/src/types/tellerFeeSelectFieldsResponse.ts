import { TellerFee } from "./tellerFee";
import { VersionType } from "./versionType";

export interface TellerFeeSelectFieldsResponse {
    tellerFee: TellerFee;
    version1: VersionType;
    messageId: string;
}