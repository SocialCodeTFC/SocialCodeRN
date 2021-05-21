FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["SocialCode.API/SocialCode.API.csproj", "SocialCode.API/"]
RUN dotnet restore "SocialCode.API/SocialCode.API.csproj"
COPY . .
WORKDIR "/src/SocialCode.API"
RUN dotnet build "SocialCode.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SocialCode.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SocialCode.API.dll"]

