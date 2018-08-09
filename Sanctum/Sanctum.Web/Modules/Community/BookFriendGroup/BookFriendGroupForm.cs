
namespace Sanctum.Community.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Community.BookFriendGroup")]
    [BasedOnRow(typeof(Entities.BookFriendGroupRow), CheckNames = true)]
    public class BookFriendGroupForm
    {
        public String GroupName { get; set; }
        public Int32 OwnerId { get; set; }
        public DateTime CreatedTime { get; set; }
    }
}