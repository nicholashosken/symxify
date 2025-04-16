import { ImagingTellerTransactionsMemberId_2 } from "./imagingTellerTransactionsMemberId_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Imaging_2 {
    tellerTransactionsMemberId: ImagingTellerTransactionsMemberId_2[];
    tellerTransactionsMemberIdSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}