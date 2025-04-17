import { VersionType } from "./versionType";

export interface TcProductFields {
    createCheckRecord: boolean | null;
    numberofProducts: boolean | null;
    productDescription: number[];
    version1: VersionType;
}