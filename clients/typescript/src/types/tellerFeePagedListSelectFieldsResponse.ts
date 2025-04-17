import { TellerFee } from "./tellerFee";
import { VersionType } from "./versionType";

export interface TellerFeePagedListSelectFieldsResponse {
    tellerFee: TellerFee[];
    token: string;
    version1: VersionType;
    messageId: string;
}