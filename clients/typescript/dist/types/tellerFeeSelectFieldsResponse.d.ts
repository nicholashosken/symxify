import { TellerFee } from "./tellerFee";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TellerFeeSelectFieldsResponse {
    tellerFee: TellerFee;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
