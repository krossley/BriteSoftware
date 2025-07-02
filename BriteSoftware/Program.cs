var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Enable serving static files (like index.html)
app.UseDefaultFiles(); // Looks for index.html by default
app.UseStaticFiles();  // Serves static files from wwwroot

app.Run();
