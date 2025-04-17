import { WireDrawdownDebitAcctAdv } from "./wireDrawdownDebitAcctAdv";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireDrawdownDebitAcctAdvPagedListSelectFieldsResponse {
    wireDrawdownDebitAcctAdv: WireDrawdownDebitAcctAdv[];
    wireDrawdownDebitAcctAdvSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}