import { RemitFundType } from "./remitFundType";
import { RemitPayerType } from "./remitPayerType";
import { VersionType } from "./versionType";

export interface RemitInformation {
    remitCode: string;
    fundType: RemitFundType | null;
    payer: RemitPayerType | null;
    version1: VersionType;
}