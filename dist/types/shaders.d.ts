/**
 * Shader Constants used across all shader programs
 */
export declare const SHADER_CONSTANTS: {
    readonly MAX_COLORS: 20;
    readonly MIN_ZOOM: 0.1;
    readonly DEFAULT_ALPHA: 0;
    readonly PRECISION: "highp";
};
/**
 * GradShader: Handles the gradient rendering for heatmap points
 * - vertex: Handles point positioning and size
 * - fragment: Calculates point color and intensity
 */
export declare const GradShader: {
    vertex: string;
    fragment: string;
};
export declare const ColorShader: {
    vertex: string;
    fragment: string;
};
export declare const ImageShader: {
    vertex: string;
    fragment: string;
};
