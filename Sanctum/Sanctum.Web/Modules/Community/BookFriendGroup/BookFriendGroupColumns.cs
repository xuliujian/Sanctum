
namespace Sanctum.Community.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Community.BookFriendGroup")]
    [BasedOnRow(typeof(Entities.BookFriendGroupRow), CheckNames = true)]
    public class BookFriendGroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String GroupName { get; set; }
        public Int32 OwnerId { get; set; }
        public DateTime CreatedTime { get; set; }
    }
}