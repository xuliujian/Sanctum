
namespace Sanctum.Community.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Community.BookFriend")]
    [BasedOnRow(typeof(Entities.BookFriendRow), CheckNames = true)]
    public class BookFriendForm
    {
        public Int32 GroupId { get; set; }
        public Int32 MemberId { get; set; }
        public Int32 Status { get; set; }
        public Double ActiveLevel { get; set; }
        public DateTime JoinTime { get; set; }
    }
}