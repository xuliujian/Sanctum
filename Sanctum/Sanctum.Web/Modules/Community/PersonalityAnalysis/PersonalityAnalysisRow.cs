
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[PersonalityAnalysis]")]
    [DisplayName("Personality Analysis"), InstanceName("Personality Analysis")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PersonalityAnalysisRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Feature Name"), Size(50), NotNull, QuickSearch]
        public String FeatureName
        {
            get { return Fields.FeatureName[this]; }
            set { Fields.FeatureName[this] = value; }
        }

        [DisplayName("Feature Decription"), Size(1073741823), NotNull]
        public String FeatureDecription
        {
            get { return Fields.FeatureDecription[this]; }
            set { Fields.FeatureDecription[this] = value; }
        }

        [DisplayName("Match Categories")]
        public String MatchCategories
        {
            get { return Fields.MatchCategories[this]; }
            set { Fields.MatchCategories[this] = value; }
        }

        [DisplayName("Creator"), NotNull]
        public Int32? Creator
        {
            get { return Fields.Creator[this]; }
            set { Fields.Creator[this] = value; }
        }

        [DisplayName("Created Time"), NotNull]
        public DateTime? CreatedTime
        {
            get { return Fields.CreatedTime[this]; }
            set { Fields.CreatedTime[this] = value; }
        }

        [DisplayName("Modifier"), NotNull]
        public Int32? Modifier
        {
            get { return Fields.Modifier[this]; }
            set { Fields.Modifier[this] = value; }
        }

        [DisplayName("Modified Time"), NotNull]
        public DateTime? ModifiedTime
        {
            get { return Fields.ModifiedTime[this]; }
            set { Fields.ModifiedTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FeatureName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PersonalityAnalysisRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField FeatureName;

            public StringField FeatureDecription;

            public StringField MatchCategories;

            public Int32Field Creator;

            public DateTimeField CreatedTime;

            public Int32Field Modifier;

            public DateTimeField ModifiedTime;


		}
    }
}
