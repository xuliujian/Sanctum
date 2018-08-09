namespace Sanctum.Community {
    export interface PersonalityAnalysisForm {
        FeatureName: Serenity.StringEditor;
        FeatureDecription: Serenity.StringEditor;
        MatchCategories: Serenity.StringEditor;
        Creator: Serenity.IntegerEditor;
        CreatedTime: Serenity.DateEditor;
        Modifier: Serenity.IntegerEditor;
        ModifiedTime: Serenity.DateEditor;
    }

    export class PersonalityAnalysisForm extends Serenity.PrefixedContext {
        static formKey = 'Community.PersonalityAnalysis';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonalityAnalysisForm.init)  {
                PersonalityAnalysisForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(PersonalityAnalysisForm, [
                    'FeatureName', w0,
                    'FeatureDecription', w0,
                    'MatchCategories', w0,
                    'Creator', w1,
                    'CreatedTime', w2,
                    'Modifier', w1,
                    'ModifiedTime', w2
                ]);
            }
        }
    }
}
