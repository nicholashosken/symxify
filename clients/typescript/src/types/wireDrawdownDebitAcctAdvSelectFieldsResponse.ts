import { WireDrawdownDebitAcctAdv } from "./wireDrawdownDebitAcctAdv";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireDrawdownDebitAcctAdvSelectFieldsResponse {
    wireDrawdownDebitAcctAdv: WireDrawdownDebitAcctAdv;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}