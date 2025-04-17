import { TellerFee } from "./tellerFee";
import { VersionType } from "./versionType";

export interface TellerFeeSearchPagedSelectFieldsResponse {
    tellerFee: TellerFee[];
    token: string;
    version1: VersionType;
    messageId: string;
}