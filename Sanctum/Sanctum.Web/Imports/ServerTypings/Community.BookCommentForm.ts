namespace Sanctum.Community {
    export interface BookCommentForm {
        BookId: Serenity.IntegerEditor;
        CommentUserId: Serenity.IntegerEditor;
        ApprovalCount: Serenity.IntegerEditor;
        CommentContent: Serenity.StringEditor;
        ReplyCommentId: Serenity.IntegerEditor;
        CommentTime: Serenity.DateEditor;
    }

    export class BookCommentForm extends Serenity.PrefixedContext {
        static formKey = 'Community.BookComment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BookCommentForm.init)  {
                BookCommentForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(BookCommentForm, [
                    'BookId', w0,
                    'CommentUserId', w0,
                    'ApprovalCount', w0,
                    'CommentContent', w1,
                    'ReplyCommentId', w0,
                    'CommentTime', w2
                ]);
            }
        }
    }
}
