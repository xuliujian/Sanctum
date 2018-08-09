
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookFriendGroupGrid extends Serenity.EntityGrid<BookFriendGroupRow, any> {
        protected getColumnsKey() { return 'Community.BookFriendGroup'; }
        protected getDialogType() { return BookFriendGroupDialog; }
        protected getIdProperty() { return BookFriendGroupRow.idProperty; }
        protected getLocalTextPrefix() { return BookFriendGroupRow.localTextPrefix; }
        protected getService() { return BookFriendGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}