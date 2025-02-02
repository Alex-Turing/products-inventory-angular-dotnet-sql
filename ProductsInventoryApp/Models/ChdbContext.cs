using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ProductsInventoryApp.Models;

public partial class ChdbContext : DbContext
{
    public ChdbContext()
    {
    }

    public ChdbContext(DbContextOptions<ChdbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Medication> Medications { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("name=chdb");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Medication>(entity =>
        {
            entity.HasKey(e => e.MedicationId).HasName("PK__medicati__DD94789B489C4C68");

            entity.ToTable("medications");

            entity.Property(e => e.MedicationId).HasColumnName("medication_id");
            entity.Property(e => e.LastPrescribedDate)
                .HasColumnType("date")
                .HasColumnName("last_prescribed_date");
            entity.Property(e => e.MedicationCost)
                .HasColumnType("decimal(9, 2)")
                .HasColumnName("medication_cost");
            entity.Property(e => e.MedicationDescription)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("medication_description");
            entity.Property(e => e.PackageSize)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("package_size");
            entity.Property(e => e.Sig)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("sig");
            entity.Property(e => e.Strength)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("strength");
            entity.Property(e => e.UnitsUsedYtd).HasColumnName("units_used_ytd");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
