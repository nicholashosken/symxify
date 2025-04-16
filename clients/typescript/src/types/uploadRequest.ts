import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { FileManagementBaseRequest } from "./fileManagementBaseRequest";

export interface UploadRequest extends FileManagementBaseRequest {
    fileName: string;
    data: string;
    noNewlineValue: boolean;
    noNewlineValueSpecified: boolean;
    noNewline: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}