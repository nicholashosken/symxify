import { RemitFundType } from "./remitFundType";
import { RemitPayerType } from "./remitPayerType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface RemitInformation {
    remitCode: string;
    fundTypeValue: RemitFundType;
    fundTypeValueSpecified: boolean;
    fundType: RemitFundType | null;
    payerValue: RemitPayerType;
    payerValueSpecified: boolean;
    payer: RemitPayerType | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
