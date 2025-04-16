import { ImagingTellerTransactionsMemberId } from "./imagingTellerTransactionsMemberId";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Imaging {
    tellerTransactionsMemberId: ImagingTellerTransactionsMemberId[];
    tellerTransactionsMemberIdSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
