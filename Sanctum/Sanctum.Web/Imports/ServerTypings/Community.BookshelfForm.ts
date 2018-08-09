namespace Sanctum.Community {
    export interface BookshelfForm {
        BookshelfName: Serenity.StringEditor;
        AdornBackground: Serenity.StringEditor;
        Introduction: Serenity.StringEditor;
        Creator: Serenity.IntegerEditor;
        CreatedTime: Serenity.DateEditor;
        Modifier: Serenity.IntegerEditor;
        ModifiedTime: Serenity.DateEditor;
    }

    export class BookshelfForm extends Serenity.PrefixedContext {
        static formKey = 'Community.Bookshelf';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BookshelfForm.init)  {
                BookshelfForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(BookshelfForm, [
                    'BookshelfName', w0,
                    'AdornBackground', w0,
                    'Introduction', w0,
                    'Creator', w1,
                    'CreatedTime', w2,
                    'Modifier', w1,
                    'ModifiedTime', w2
                ]);
            }
        }
    }
}
