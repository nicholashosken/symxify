import { WdFee } from "./wdFee";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WdFeePagedListSelectFieldsResponse {
    wdFee: WdFee[];
    wdFeeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}