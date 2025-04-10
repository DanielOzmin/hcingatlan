using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class SeedDataAndRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "Properties",
                table: "Employees");

            migrationBuilder.AddColumn<Guid>(
                name: "EmployeeId",
                table: "Properties",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "PropertyId",
                table: "Messages",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Img",
                table: "Employees",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Properties_EmployeeId",
                table: "Properties",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_EmployeeId",
                table: "Messages",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_PropertyId",
                table: "Messages",
                column: "PropertyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_Employees_EmployeeId",
                table: "Messages",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_Properties_PropertyId",
                table: "Messages",
                column: "PropertyId",
                principalTable: "Properties",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Properties_Employees_EmployeeId",
                table: "Properties",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Messages_Employees_EmployeeId",
                table: "Messages");

            migrationBuilder.DropForeignKey(
                name: "FK_Messages_Properties_PropertyId",
                table: "Messages");

            migrationBuilder.DropForeignKey(
                name: "FK_Properties_Employees_EmployeeId",
                table: "Properties");

            migrationBuilder.DropIndex(
                name: "IX_Properties_EmployeeId",
                table: "Properties");

            migrationBuilder.DropIndex(
                name: "IX_Messages_EmployeeId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_Messages_PropertyId",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "EmployeeId",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "PropertyId",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "Img",
                table: "Employees");

            migrationBuilder.AddColumn<string>(
                name: "CustomerId",
                table: "Properties",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Properties",
                table: "Employees",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
