@echo off
setlocal

for %%f in (./proto/*.proto) do (
    protoc --ng_out=./proto -I ./proto %%f
)

endlocal
