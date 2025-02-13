
using Microsoft.EntityFrameworkCore;
using SecurityMasterAPI.Models;
using SecurityMasterAPI.Models.BondRepo;
using SecurityMasterAPI.Models.EquityRepo;
using Serilog;

namespace SecurityMasterAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<SecurityMaster3685Context>(
                options => options.UseSqlServer(builder.Configuration.GetConnectionString("SecurityMasterConn"))
                );

            builder.Services.AddTransient<IEquity, EquityOperations>();
            builder.Services.AddTransient<IBond, BondOperations>();

            builder.Services.AddCors(options => options.AddPolicy("IVPSecurityMasterPolicy", builder =>
            {
                builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            }));

            //Configuring Serilog
            Log.Logger = new LoggerConfiguration()
                .ReadFrom.Configuration(builder.Configuration)
                .Enrich.FromLogContext()
                .WriteTo.Console()
                .WriteTo.File("logs/SecMasterLog")
                .CreateLogger();

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Host.UseSerilog();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("IVPSecurityMasterPolicy");

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
