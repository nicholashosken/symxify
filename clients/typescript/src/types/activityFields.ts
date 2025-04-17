import { VersionType } from "./versionType";

export interface ActivityFields {
    branch: boolean | null;
    console: boolean | null;
    date: boolean | null;
    helpCode: boolean | null;
    session: boolean | null;
    time: boolean | null;
    userInput: boolean | null;
    userNumber: boolean | null;
    version1: VersionType;
}