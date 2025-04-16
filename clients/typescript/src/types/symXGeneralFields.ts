import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SymXGeneralFields {
    customSpecfile: number[];
    customSpecfileSpecified: boolean;
    ficsAppPasswordValue: boolean;
    ficsAppPasswordValueSpecified: boolean;
    ficsAppPassword: boolean | null;
    ficsAppUserIdValue: boolean;
    ficsAppUserIdValueSpecified: boolean;
    ficsAppUserId: boolean | null;
    ficsDataSourceNameValue: boolean;
    ficsDataSourceNameValueSpecified: boolean;
    ficsDataSourceName: boolean | null;
    ficsDbPasswordValue: boolean;
    ficsDbPasswordValueSpecified: boolean;
    ficsDbPassword: boolean | null;
    ficsDbUserIdValue: boolean;
    ficsDbUserIdValueSpecified: boolean;
    ficsDbUserId: boolean | null;
    instanceIdValue: boolean;
    instanceIdValueSpecified: boolean;
    instanceId: boolean | null;
    noticesPrinterTypeValue: boolean;
    noticesPrinterTypeValueSpecified: boolean;
    noticesPrinterType: boolean | null;
    specfileLoadMethod: number[];
    specfileLoadMethodSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}