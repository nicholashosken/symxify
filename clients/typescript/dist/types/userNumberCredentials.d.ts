import { VersionType } from "./versionType";
export interface UserNumberCredentials {
    userNumber: number | null;
    password: string;
    version1: VersionType;
}
