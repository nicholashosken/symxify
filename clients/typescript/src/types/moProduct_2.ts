import { MoProductProductDescription_2 } from "./moProductProductDescription_2";
import { VersionType } from "./versionType";

export interface MoProduct_2 {
    createCheckRecord: boolean | null;
    numberofProducts: number | null;
    productDescription: MoProductProductDescription_2[];
    version1: VersionType;
}