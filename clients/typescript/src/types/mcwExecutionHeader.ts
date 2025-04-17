import { VersionType } from "./versionType";

export interface McwExecutionHeader {
    messageId: string;
    mcwState: string;
    version1: VersionType;
}