namespace Sanctum.Community {
    export interface PrivateBookForm {
        BookName: Serenity.StringEditor;
        BookCategories: Serenity.StringEditor;
        Author: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        Publisher: Serenity.StringEditor;
        CoverImage: Serenity.StringEditor;
        RecommendLevel: Serenity.DecimalEditor;
        Insight: Serenity.StringEditor;
        Summary: Serenity.StringEditor;
        NeedPaid: Serenity.BooleanEditor;
        BookshelfId: Serenity.IntegerEditor;
        OffShelves: Serenity.BooleanEditor;
        Status: Serenity.IntegerEditor;
        Uploader: Serenity.IntegerEditor;
        UploadTime: Serenity.DateEditor;
    }

    export class PrivateBookForm extends Serenity.PrefixedContext {
        static formKey = 'Community.PrivateBook';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PrivateBookForm.init)  {
                PrivateBookForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateEditor;

                Q.initFormType(PrivateBookForm, [
                    'BookName', w0,
                    'BookCategories', w0,
                    'Author', w0,
                    'Price', w1,
                    'Publisher', w0,
                    'CoverImage', w0,
                    'RecommendLevel', w1,
                    'Insight', w0,
                    'Summary', w0,
                    'NeedPaid', w2,
                    'BookshelfId', w3,
                    'OffShelves', w2,
                    'Status', w3,
                    'Uploader', w3,
                    'UploadTime', w4
                ]);
            }
        }
    }
}
