import { OnlineFee } from "./onlineFee";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineFeeSelectFieldsResponse {
    onlineFee: OnlineFee;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
