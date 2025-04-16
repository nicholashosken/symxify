import { TellerTranFee } from "./tellerTranFee";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TellerTranFeeSelectFieldsResponse {
    tellerTranFee: TellerTranFee;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}