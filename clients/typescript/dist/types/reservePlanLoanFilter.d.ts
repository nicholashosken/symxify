import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReservePlanLoanFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
