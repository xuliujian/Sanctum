
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[WeiXinUser]")]
    [DisplayName("Wei Xin User"), InstanceName("Wei Xin User")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class WeiXinUserRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Open Id"), Size(32), NotNull, QuickSearch]
        public String OpenId
        {
            get { return Fields.OpenId[this]; }
            set { Fields.OpenId[this] = value; }
        }

        [DisplayName("Nick Name"), Size(32)]
        public String NickName
        {
            get { return Fields.NickName[this]; }
            set { Fields.NickName[this] = value; }
        }

        [DisplayName("Country"), Size(50)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Province"), Size(50)]
        public String Province
        {
            get { return Fields.Province[this]; }
            set { Fields.Province[this] = value; }
        }

        [DisplayName("City"), Size(50)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Header Image"), NotNull]
        public String HeaderImage
        {
            get { return Fields.HeaderImage[this]; }
            set { Fields.HeaderImage[this] = value; }
        }

        [DisplayName("Mobile"), Size(50)]
        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }

        [DisplayName("Address")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Honour Rank"), NotNull]
        public Double? HonourRank
        {
            get { return Fields.HonourRank[this]; }
            set { Fields.HonourRank[this] = value; }
        }

        [DisplayName("Knowledge Rank"), NotNull]
        public Double? KnowledgeRank
        {
            get { return Fields.KnowledgeRank[this]; }
            set { Fields.KnowledgeRank[this] = value; }
        }

        [DisplayName("Personality Eval")]
        public String PersonalityEval
        {
            get { return Fields.PersonalityEval[this]; }
            set { Fields.PersonalityEval[this] = value; }
        }

        [DisplayName("Hobby Category")]
        public String HobbyCategory
        {
            get { return Fields.HobbyCategory[this]; }
            set { Fields.HobbyCategory[this] = value; }
        }

        [DisplayName("Active Longitude"), Size(18)]
        public Decimal? ActiveLongitude
        {
            get { return Fields.ActiveLongitude[this]; }
            set { Fields.ActiveLongitude[this] = value; }
        }

        [DisplayName("Active Latitude"), Size(18)]
        public Decimal? ActiveLatitude
        {
            get { return Fields.ActiveLatitude[this]; }
            set { Fields.ActiveLatitude[this] = value; }
        }

        [DisplayName("Last Active Time")]
        public DateTime? LastActiveTime
        {
            get { return Fields.LastActiveTime[this]; }
            set { Fields.LastActiveTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OpenId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WeiXinUserRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField OpenId;

            public StringField NickName;

            public StringField Country;

            public StringField Province;

            public StringField City;

            public StringField HeaderImage;

            public StringField Mobile;

            public StringField Address;

            public DoubleField HonourRank;

            public DoubleField KnowledgeRank;

            public StringField PersonalityEval;

            public StringField HobbyCategory;

            public DecimalField ActiveLongitude;

            public DecimalField ActiveLatitude;

            public DateTimeField LastActiveTime;


		}
    }
}
