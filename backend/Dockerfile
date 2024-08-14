FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /webapp

EXPOSE 5001
EXPOSE 7001

COPY ./*.csproj ./
RUN dotnet restore 

COPY . .
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /webapp
COPY --from=build /webapp/out .
ENTRYPOINT [ "dotnet", "backend.dll" ]


