import { VersionType } from "./versionType";
export interface Status {
    statusCode: number | null;
    message: string;
    version1: VersionType;
}
