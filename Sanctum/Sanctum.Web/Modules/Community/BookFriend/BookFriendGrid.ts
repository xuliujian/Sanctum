
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookFriendGrid extends Serenity.EntityGrid<BookFriendRow, any> {
        protected getColumnsKey() { return 'Community.BookFriend'; }
        protected getDialogType() { return BookFriendDialog; }
        protected getIdProperty() { return BookFriendRow.idProperty; }
        protected getLocalTextPrefix() { return BookFriendRow.localTextPrefix; }
        protected getService() { return BookFriendService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}