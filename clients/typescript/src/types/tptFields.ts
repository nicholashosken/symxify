import { VersionType } from "./versionType";

export interface TptFields {
    blankLines: boolean | null;
    checkDetailLines: boolean | null;
    compression: boolean | null;
    customFormat: boolean | null;
    documentAccountCode: boolean | null;
    documentNumber: boolean | null;
    forms: boolean | null;
    linesPerPage: boolean | null;
    printer: boolean | null;
    printerType: boolean | null;
    queueNumber: boolean | null;
    queueSubNumber: boolean | null;
    queueSubType: boolean | null;
    queueTypes: boolean | null;
    version1: VersionType;
}