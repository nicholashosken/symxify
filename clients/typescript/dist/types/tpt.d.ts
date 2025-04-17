import { VersionType } from "./versionType";
export interface Tpt {
    blankLines: number | null;
    checkDetailLines: number | null;
    compression: number | null;
    customFormat: boolean | null;
    documentAccountCode: number | null;
    documentNumber: number | null;
    forms: string;
    linesPerPage: number | null;
    printer: number | null;
    printerType: number | null;
    queueNumber: number | null;
    queueSubNumber: number | null;
    queueSubType: number | null;
    queueTypes: number | null;
    version1: VersionType;
}
