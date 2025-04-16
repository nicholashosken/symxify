import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PagingRequestContext {
    numberOfRecordsToReturnValue: number;
    numberOfRecordsToReturnValueSpecified: boolean;
    numberOfRecordsToReturn: number | null;
    numberOfRecordsToSkipValue: number;
    numberOfRecordsToSkipValueSpecified: boolean;
    numberOfRecordsToSkip: number | null;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}