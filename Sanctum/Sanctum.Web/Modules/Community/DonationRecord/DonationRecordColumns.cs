
namespace Sanctum.Community.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Community.DonationRecord")]
    [BasedOnRow(typeof(Entities.DonationRecordRow), CheckNames = true)]
    public class DonationRecordColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 DonateUserId { get; set; }
        public DateTime DonatedTime { get; set; }
        public Int32 BookId { get; set; }
        public Int32 DonationStyle { get; set; }
        [EditLink]
        public String Comment { get; set; }
        public Boolean IsReceived { get; set; }
        public String Receiver { get; set; }
        public String Charger { get; set; }
        public DateTime ReceivedTime { get; set; }
    }
}