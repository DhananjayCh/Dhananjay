using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_PhotoGalleryTxModel
    {
        public int ID { get; set; }
        public string Album_Title { get; set; }
        public bool Pinned_Album { get; set; }
        public bool Active { get; set; }
    }
}