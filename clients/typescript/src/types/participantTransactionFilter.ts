import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParticipantTransactionFilter {
    startPostDateValue: string;
    startPostDateValueSpecified: boolean;
    startPostDate: string | null;
    endPostDateValue: string;
    endPostDateValueSpecified: boolean;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}