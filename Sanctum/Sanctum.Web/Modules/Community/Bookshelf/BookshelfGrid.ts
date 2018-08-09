
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookshelfGrid extends Serenity.EntityGrid<BookshelfRow, any> {
        protected getColumnsKey() { return 'Community.Bookshelf'; }
        protected getDialogType() { return BookshelfDialog; }
        protected getIdProperty() { return BookshelfRow.idProperty; }
        protected getLocalTextPrefix() { return BookshelfRow.localTextPrefix; }
        protected getService() { return BookshelfService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}