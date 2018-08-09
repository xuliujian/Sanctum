
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookCommentGrid extends Serenity.EntityGrid<BookCommentRow, any> {
        protected getColumnsKey() { return 'Community.BookComment'; }
        protected getDialogType() { return BookCommentDialog; }
        protected getIdProperty() { return BookCommentRow.idProperty; }
        protected getLocalTextPrefix() { return BookCommentRow.localTextPrefix; }
        protected getService() { return BookCommentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}