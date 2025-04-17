import { TellerTranFee } from "./tellerTranFee";
import { VersionType } from "./versionType";
export interface TellerTranFeeSelectFieldsResponse {
    tellerTranFee: TellerTranFee;
    version1: VersionType;
    messageId: string;
}
