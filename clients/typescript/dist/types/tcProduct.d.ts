import { TcProductProductDescription } from "./tcProductProductDescription";
import { VersionType } from "./versionType";
export interface TcProduct {
    createCheckRecord: boolean | null;
    numberofProducts: number | null;
    productDescription: TcProductProductDescription[];
    version1: VersionType;
}
