$secureUrl = Read-Host "Enter the rotated Neon DATABASE_URL" -AsSecureString
if ($secureUrl.Length -eq 0) {
  throw "DATABASE_URL cannot be empty."
}

$previousUrl = [Environment]::GetEnvironmentVariable("DATABASE_URL", "Process")
$urlPointer = [IntPtr]::Zero
$databaseUrl = $null
$exitCode = 1

try {
  $urlPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureUrl)
  $databaseUrl = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($urlPointer)
  [Environment]::SetEnvironmentVariable("DATABASE_URL", $databaseUrl, "Process")

  & npx.cmd drizzle-kit push
  $exitCode = $LASTEXITCODE
}
catch {
  Write-Error $_
}
finally {
  [Environment]::SetEnvironmentVariable("DATABASE_URL", $previousUrl, "Process")

  if ($urlPointer -ne [IntPtr]::Zero) {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($urlPointer)
  }

  $secureUrl.Dispose()
  $databaseUrl = $null
}

exit $exitCode
