
namespace Sanctum.Community.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Community.BorrowRequirement")]
    [BasedOnRow(typeof(Entities.BorrowRequirementRow), CheckNames = true)]
    public class BorrowRequirementForm
    {
        public Int32 PublisherID { get; set; }
        public String BookName { get; set; }
        public String BookCategory { get; set; }
        public Boolean IsPaid { get; set; }
        public Int32 Status { get; set; }
        public Int32 ViewCount { get; set; }
        public DateTime PublishTime { get; set; }
    }
}