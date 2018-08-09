
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BookFriend]")]
    [DisplayName("Book Friend"), InstanceName("Book Friend")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BookFriendRow : Row, IIdRow
    {

        [DisplayName("Id"), Column("ID"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Group Id"), NotNull]
        public Int32? GroupId
        {
            get { return Fields.GroupId[this]; }
            set { Fields.GroupId[this] = value; }
        }

        [DisplayName("Member Id"), NotNull]
        public Int32? MemberId
        {
            get { return Fields.MemberId[this]; }
            set { Fields.MemberId[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Active Level"), NotNull]
        public Double? ActiveLevel
        {
            get { return Fields.ActiveLevel[this]; }
            set { Fields.ActiveLevel[this] = value; }
        }

        [DisplayName("Join Time"), NotNull]
        public DateTime? JoinTime
        {
            get { return Fields.JoinTime[this]; }
            set { Fields.JoinTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BookFriendRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field GroupId;

            public Int32Field MemberId;

            public Int32Field Status;

            public DoubleField ActiveLevel;

            public DateTimeField JoinTime;


		}
    }
}
