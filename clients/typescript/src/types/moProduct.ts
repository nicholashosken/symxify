import { MoProductProductDescription } from "./moProductProductDescription";
import { VersionType } from "./versionType";

export interface MoProduct {
    createCheckRecord: boolean | null;
    numberofProducts: number | null;
    productDescription: MoProductProductDescription[];
    version1: VersionType;
}