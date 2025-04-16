import { GlCodeFields_2 } from "./glCodeFields_2";

export interface GlCodeUpdateRequest {
    glCodePrimaryGlCodeValue: number;
    glCodePrimaryGlCodeValueSpecified: boolean;
    glCodePrimaryGlCode: number | null;
    glCodeFields: GlCodeFields_2;
}