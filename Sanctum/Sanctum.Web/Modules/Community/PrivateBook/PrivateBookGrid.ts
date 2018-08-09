
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class PrivateBookGrid extends Serenity.EntityGrid<PrivateBookRow, any> {
        protected getColumnsKey() { return 'Community.PrivateBook'; }
        protected getDialogType() { return PrivateBookDialog; }
        protected getIdProperty() { return PrivateBookRow.idProperty; }
        protected getLocalTextPrefix() { return PrivateBookRow.localTextPrefix; }
        protected getService() { return PrivateBookService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}