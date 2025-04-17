import { SecondaryVerification } from "./secondaryVerification";
import { VersionType } from "./versionType";

export interface HomeBankingCredentials {
    userName: string;
    password: string;
    secondaryVerification: SecondaryVerification;
    version1: VersionType;
}