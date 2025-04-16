import { OnlineFee } from "./onlineFee";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineFeeSearchPagedSelectFieldsResponse {
    onlineFee: OnlineFee[];
    onlineFeeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
