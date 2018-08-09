namespace Sanctum.Community {
    export interface RecommendBookForm {
        BookName: Serenity.StringEditor;
        BookCategory: Serenity.StringEditor;
        Author: Serenity.StringEditor;
        Exponent: Serenity.DecimalEditor;
        BookRemark: Serenity.StringEditor;
        Instroduction: Serenity.StringEditor;
        ViewCount: Serenity.IntegerEditor;
        HeatLevel: Serenity.DecimalEditor;
        Referrer: Serenity.IntegerEditor;
        ReferTime: Serenity.DateEditor;
    }

    export class RecommendBookForm extends Serenity.PrefixedContext {
        static formKey = 'Community.RecommendBook';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RecommendBookForm.init)  {
                RecommendBookForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;

                Q.initFormType(RecommendBookForm, [
                    'BookName', w0,
                    'BookCategory', w0,
                    'Author', w0,
                    'Exponent', w1,
                    'BookRemark', w0,
                    'Instroduction', w0,
                    'ViewCount', w2,
                    'HeatLevel', w1,
                    'Referrer', w2,
                    'ReferTime', w3
                ]);
            }
        }
    }
}
