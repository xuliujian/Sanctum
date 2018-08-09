
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BorrowApply]")]
    [DisplayName("Borrow Apply"), InstanceName("Borrow Apply")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BorrowApplyRow : Row, IIdRow
    {

        [DisplayName("Id"), Column("ID"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Apply Book Id"), NotNull]
        public Int32? ApplyBookId
        {
            get { return Fields.ApplyBookId[this]; }
            set { Fields.ApplyBookId[this] = value; }
        }

        [DisplayName("Applier"), NotNull]
        public Int32? Applier
        {
            get { return Fields.Applier[this]; }
            set { Fields.Applier[this] = value; }
        }

        [DisplayName("Apply Time"), NotNull]
        public DateTime? ApplyTime
        {
            get { return Fields.ApplyTime[this]; }
            set { Fields.ApplyTime[this] = value; }
        }

        [DisplayName("Apply Status"), NotNull]
        public Int32? ApplyStatus
        {
            get { return Fields.ApplyStatus[this]; }
            set { Fields.ApplyStatus[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BorrowApplyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field ApplyBookId;

            public Int32Field Applier;

            public DateTimeField ApplyTime;

            public Int32Field ApplyStatus;


		}
    }
}
