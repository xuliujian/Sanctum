
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookCategoryGrid extends Serenity.EntityGrid<BookCategoryRow, any> {
        protected getColumnsKey() { return 'Community.BookCategory'; }
        protected getDialogType() { return BookCategoryDialog; }
        protected getIdProperty() { return BookCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return BookCategoryRow.localTextPrefix; }
        protected getService() { return BookCategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}