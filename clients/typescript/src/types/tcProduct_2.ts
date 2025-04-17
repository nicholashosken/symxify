import { TcProductProductDescription_2 } from "./tcProductProductDescription_2";
import { VersionType } from "./versionType";

export interface TcProduct_2 {
    createCheckRecord: boolean | null;
    numberofProducts: number | null;
    productDescription: TcProductProductDescription_2[];
    version1: VersionType;
}