using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_AwardTxModel
    {
        public int ID { get; set; }
        public string Award_type { get; set; }
        public string Emp_Code { get; set; }
        public string Reason { get; set; }
        public Emp_IdChild Emp_Id { get;set;}
        public bool Pinned_Awards { get; set; }
        public bool Active { get; set; }
    }

    public class Emp_IdChild
    {
        public int ID { get; set; }
        public string EmpCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

}