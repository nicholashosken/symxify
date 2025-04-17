import { VersionType } from "./versionType";
export interface ActivityFm {
    branch: number | null;
    console: number | null;
    date: string | null;
    helpCode: number | null;
    session: number | null;
    time: number | null;
    userInput: string;
    userNumber: number | null;
    version1: VersionType;
}
