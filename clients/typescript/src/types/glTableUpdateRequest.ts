import { GlTableFields_2 } from "./glTableFields_2";

export interface GlTableUpdateRequest {
    glTableGlTableTypeValue: number;
    glTableGlTableTypeValueSpecified: boolean;
    glTableGlTableType: number | null;
    glTableFields: GlTableFields_2;
}