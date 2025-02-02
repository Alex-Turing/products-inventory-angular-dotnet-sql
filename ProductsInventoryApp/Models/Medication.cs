using System;
using System.Collections.Generic;

namespace ProductsInventoryApp.Models;

public partial class Medication
{
    public int MedicationId { get; set; }

    public string MedicationDescription { get; set; } = null!;

    public decimal? MedicationCost { get; set; }

    public string? PackageSize { get; set; }

    public string? Strength { get; set; }

    public string? Sig { get; set; }

    public int? UnitsUsedYtd { get; set; }

    public DateTime? LastPrescribedDate { get; set; }
}
