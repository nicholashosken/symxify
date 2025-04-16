import { WdFee } from "./wdFee";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WdFeeSelectFieldsResponse {
    wdFee: WdFee;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}