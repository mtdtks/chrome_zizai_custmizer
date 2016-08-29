InputFolder = "C:\Users\matsuoka\chrome_zizai_customizer" 'ZIPに収録するファイルのあるディレクトリ名
ZipFile     = "C:\Users\matsuoka\chrome_zizai_customizer.zip" 'ZIPファイル名
 
CreateObject("Scripting.FileSystemObject").CreateTextFile(ZipFile, True).Write "PK" & Chr(5) & Chr(6) & String(18, vbNullChar)
Set objShell = CreateObject("Shell.Application")
Set source = objShell.NameSpace(InputFolder).Items
objShell.NameSpace(ZipFile).CopyHere(source)
wScript.Sleep 2000
