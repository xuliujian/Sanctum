
namespace Sanctum.Community.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Community.BorrowApply")]
    [BasedOnRow(typeof(Entities.BorrowApplyRow), CheckNames = true)]
    public class BorrowApplyForm
    {
        public Int32 ApplyBookId { get; set; }
        public Int32 Applier { get; set; }
        public DateTime ApplyTime { get; set; }
        public Int32 ApplyStatus { get; set; }
    }
}