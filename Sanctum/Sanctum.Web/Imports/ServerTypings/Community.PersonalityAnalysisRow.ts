namespace Sanctum.Community {
    export interface PersonalityAnalysisRow {
        Id?: number;
        FeatureName?: string;
        FeatureDecription?: string;
        MatchCategories?: string;
        Creator?: number;
        CreatedTime?: string;
        Modifier?: number;
        ModifiedTime?: string;
    }

    export namespace PersonalityAnalysisRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FeatureName';
        export const localTextPrefix = 'Community.PersonalityAnalysis';

        export declare const enum Fields {
            Id = "Id",
            FeatureName = "FeatureName",
            FeatureDecription = "FeatureDecription",
            MatchCategories = "MatchCategories",
            Creator = "Creator",
            CreatedTime = "CreatedTime",
            Modifier = "Modifier",
            ModifiedTime = "ModifiedTime"
        }
    }
}
