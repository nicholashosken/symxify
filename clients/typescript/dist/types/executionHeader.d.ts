import { VersionType } from "./versionType";
export interface ExecutionHeader {
    messageId: string;
    rgState: string;
    version1: VersionType;
}
