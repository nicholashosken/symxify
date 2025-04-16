import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppWorkFlowFields {
    applicationTypeValue: boolean;
    applicationTypeValueSpecified: boolean;
    applicationType: boolean | null;
    event: number[];
    eventSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}