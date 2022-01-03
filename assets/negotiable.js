import React from "react";
import WebView from "react-native-webview";

function getHtml() {
    const html = '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><style>html, body {width: 100%; height: 100%;overflow:hidden;}body {margin:0; padding:0}</style></head><body>'
        + "<svg id=\"euhSHZWov2R1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"0 0 640 480\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\"><rect id=\"euhSHZWov2R2\" width=\"112.469438\" height=\"26.405868\" rx=\"0\" ry=\"0\" transform=\"matrix(1 0 0 1 75.501222 77.261614)\" fill=\"rgb(157,150,141)\" stroke=\"none\" stroke-width=\"0\"\/><text id=\"euhSHZWov2R3\" dx=\"0\" dy=\"0\" font-family=\"&quot;euhSHZWov2R1:::Oswald&quot;\" font-size=\"28\" font-weight=\"400\" transform=\"matrix(0.935435 0 0 0.558825 81.134201 95.929829)\" fill=\"rgb(0,100,0)\" stroke=\"none\" stroke-width=\"0\"><tspan id=\"euhSHZWov2R4\" y=\"0\" font-weight=\"400\" stroke-width=\"0\"><![CDATA[Negotiable]]><\/tspan><\/text><style><![CDATA[@font-face {font-family: 'euhSHZWov2R1:::Oswald';font-style: normal;font-weight: 400;src: url(data:font\/ttf;charset=utf-8;base64,AAEAAAASAQAABAAgR0RFRgBYABMAAAHkAAAALkdQT1MsKiTZAAAD3AAAAKxHU1VCR0xIaQAABIgAAADKT1MvMq8Md44AAAKEAAAAYFNUQVR5kmodAAABuAAAACpjbWFwAdECgwAAAuQAAAB0Y3Z0IA0lHpkAAANYAAAAgmZwZ22eNhTQAAAPkAAADhVnYXNwAAAAEAAAASwAAAAIZ2x5Zl1qMbgAAAhkAAAHLGhlYWQSAQeYAAACFAAAADZoaGVhCK4CyQAAAZQAAAAkaG10eBLIAj0AAAJMAAAAOGxvY2EQig6MAAABNAAAAB5tYXhwAV4POwAAAVQAAAAgbmFtZTFfUb8AAAYgAAACQnBvc3T\/nwAyAAABdAAAACBwcmVwEDxsxwAABVQAAADLAAEAAf\/\/AA8AAAAAACcAvwE9Aa4CcQKpAsICzQLmAzIDdwN3A5YAAAABAAAADgBgAAcAagAFAAIAKgBXAI0AAACIDhUABAADAAMAAAAAAAD\/nAAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAABKn+3wAABOz\/O\/7vBMcAAQAAAAAAAAAAAAAAAAAAAA4AAQABAAgAAQAAABQAAQAAABwAAndnaHQBAAAAAAIAAQAAAAABAwGQAAAAAAABAAIAHgAAAAAAAAAOAAEAAgAAAAwAAAAMAAEAAAACAAIAAQAGAAEACAALAAEAAAABAAAABBmai10tv18PPPUADwPoAAAAANXqoGUAAAAA2O4IxP87\/uEExwURAAAABgACAAAAAAAAAqoAWgIQAD8BqgAqAb8AOAGlACsBswAUAOUAPQDgAD0A4AA9AOUAQAGpACwBNAAWAOUAAAAA\/8oABAHLAZAABQAAAooCWAAAAEsCigJYAAABXgAyAVsAAAAAAAAAAAAAAACgAAL\/QAAgSwAAAAAAAAAAbmV3dADAAAD7AgSp\/t8AAAUtAXkgAAGXAAAAAAJCAyoAAAAgAAMAAAACAAAAAwAAABQAAwABAAAAFAAEAGAAAAAUABAAAwAEACAATgBiAGUAZwBpAGwAbwB0\/\/8AAAAgAE4AYQBlAGcAaQBsAG8AdP\/\/\/+z\/s\/+h\/5\/\/nv+d\/53\/m\/+XAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGsAawBPAE8DKgAAAkIAAP9ZAzH\/9wJK\/\/j\/WQAYABgAGAAYAkL\/9wJC\/\/cAawBrAE8ATwMqAAADGwJCAAD\/WAMx\/\/cDGwJK\/\/j\/WAAYABgAGAAYA4IBsQOCAacAAAABAAAACgAkADIAAkRGTFQADmxhdG4ADgAEAAAAAP\/\/AAEAAAABa2VybgAIAAAAAQAAAAEABAACAAgAAQAIAAIAOAAEAAAAYABGAAQABQAAAAAAAAAAAAAAAAAAAAAAAP\/4AAAAAAAAAAAAAAAA\/\/wAAP\/6AAAAAQAFAAIAAwAEAAUACgABAAIACgACAAAAAQADAAAAAAAAAAAAAQAEAAEAAgAEAAEAAAACAAMAAQAAAAoAbACqAAJERkxUAFhsYXRuAA4AAAAFQVpFIABCQ1JUIAA6S0FaIAAyVEFUIAAqVFJLIAAiAAD\/\/wABAAQAAP\/\/AAEAAwAA\/\/8AAQACAAD\/\/wABAAEAAP\/\/AAEAAAAEAAAAAP\/\/AAAABWxvY2wAOGxvY2wAMmxvY2wALGxvY2wAJmxvY2wAIAAAAAEAAgAAAAEAAQAAAAEAAAAAAAEAAwAAAAEABAAFAAwADAAMAAwADAABAAAAAQAIAAEABgACAAEAAQAGAAAAS7gAyFJYsQEBjlmwAbkIAAgAY3CxAAdCtQA2Jx4EACqxAAdCQAo7BCsIIwQVBwQKKrEAB0JACj8CMwYnAhwFBAoqsQALQr0PAAsACQAFgAAEAAsqsQAPQr0AQABAAEAAQAAEAAsquQAD\/5xEsSQBiFFYsECIWLkAA\/+cRLEoAYhRWLgIAIhYuQAD\/5xEWRuxJwGIUVi6CIAAAQRAiGNUWLkAA\/+cRFlZWVlZQAo9Ai0GJQIXBQQOKrgB\/4WwBI2xAgBEswVkBgBERAAAAAAKAH4AAwABBAkAAACqARoAAwABBAkAAQAMAQ4AAwABBAkAAgAOAQAAAwABBAkAAwAyAM4AAwABBAkABAAcALIAAwABBAkABQBWAFwAAwABBAkABgAcAEAAAwABBAkADgA0AAwAAwABBAkBAAAMAAAAAwABBAkBAwAOAQAAVwBlAGkAZwBoAHQAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAE8AcwB3AGEAbABkAC0AUgBlAGcAdQBsAGEAcgBWAGUAcgBzAGkAbwBuACAANAAuADEAMAAwADsAIAB0AHQAZgBhAHUAdABvAGgAaQBuAHQAIAAoAHYAMQAuADgALgAxAC4ANAAzAC0AYgAwAGMAOQApAE8AcwB3AGEAbABkACAAUgBlAGcAdQBsAGEAcgA0AC4AMQAwADAAOwBuAGUAdwB0ADsATwBzAHcAYQBsAGQALQBSAGUAZwB1AGwAYQByAFIAZQBnAHUAbABhAHIATwBzAHcAYQBsAGQAQwBvAHAAeQByAGkAZwBoAHQAIAAyADAAMQA2ACAAVABoAGUAIABPAHMAdwBhAGwAZAAgAFAAcgBvAGoAZQBjAHQAIABBAHUAdABoAG8AcgBzACAAKABoAHQAdABwAHMAOgAvAC8AZwBpAHQAaAB1AGIALgBjAG8AbQAvAGcAbwBvAGcAbABlAGYAbwBuAHQAcwAvAE8AcwB3AGEAbABkAEYAbwBuAHQAKQAAAAEAPwAAAdADKgAJACRAIQgDAgIAAUwBAQAALU0EAwICAi4CTgAAAAkACRESEQUJGSszETMTETMRIwMRP03mXkjpAyr95gIa\/NYCKf3XAAIAKv\/4AYMCSgAlADIAnEAJKyojCQQFAgFMS7ALUFhAHwACAQUBAnIAAQEDYQADAzZNBwEFBQBhBAYCAAA3AE4bS7AeUFhAIAACAQUBAgWAAAEBA2EAAwM2TQcBBQUAYQQGAgAANwBOG0AkAAIBBQECBYAAAQEDYQADAzZNAAQELk0HAQUFAGEGAQAANwBOWVlAFycmAQAmMicyIB8YFhQTDw0AJQElCAkWKxciJiY1ND4CNzU0JiYjIgYGFRUnNjYzMhYVERQWFhcjJiYnBgYnMjY2NzUOAxUUFp4iNB4kP1MuCBkZFhsMagJUWFZIAwUCYgMJAgo5CBAcFgQZLCETGggnPSI2SjMmEikjLhcUJRkdBGBbXln++BsyKxMQMRQiO1wSFwekDhwfJxkjKAACADj\/+AGUAyoAFAAkAIxLsB5QWEAPCAEFAyIhAgQFAwEABANMG0APCAEFAyIhAgQFAwEBBANMWUuwHlBYQB0AAgItTQAFBQNhAAMDNk0HAQQEAGEBBgIAADcAThtAIQACAi1NAAUFA2EAAwM2TQABAS5NBwEEBABhBgEAADcATllAFxYVAQAfHRUkFiQMCgcGBQQAFAEUCAkWKwUiJicVIxEzETY2MzIeAhUVFAYGJzI2NjU1NCYmIyIGBxEWFgEFHzESa2sTNSUtNRoIGD5PHBgGCBocFSUODicIHxMqAyr+6hYgL0dJGow9bUNUKUYqjCQ9JBIL\/o0LDwACACv\/+AF6AkoAHQAoAG5LsAlQWEAlAAQCAwMEcgAFAAIEBQJnAAYGAWEAAQE2TQADAwBiBwEAADcAThtAJgAEAgMCBAOAAAUAAgQFAmcABgYBYQABATZNAAMDAGIHAQAANwBOWUAVAQAlIx8eGhkVEw8OCggAHQEdCAkWKxciJiY1NTQ2NjMyFhYVFSMVFBYWMzI2NjU1MxUUBgMzNTQmJiMiBgYV1kRKHR5LQklFFuQNHRcYGQloSpl7CBkbGhsKCDVnS4RNZjQ8cU8vdCMsFRcrHSMWV2QBYTQkMRkYOTIAAwAU\/00BvwJNADgARwBbAIFAGR0YAgUBIQEEBSsOAgIEQQgCAwIETBwBAUpLsC1QWEAgCAEEAAIDBAJpAAUFAWEAAQE2TQcBAwMAYQYBAAAyAE4bQB0IAQQAAgMEAmkHAQMGAQADAGUABQUBYQABATYFTllAG0lIOjkBAFNRSFtJWzlHOkcpJxYUADgBOAkJFisXIiYmNTQ2NjcmJjU0NjcmJjU0NjYzMhYXNjY3NxcOAgcWFhUUBgYjIiYnBgYVFBYXFxYWFRQGBicyNjU0JiYnJw4CFRQWEzI+AjU0LgIjIg4CFRQeAsw0VDAYJhUcHCIeISIlSTUvOQ8FLB0QGw0rJQUHCx5FPQ0eDAYNFxlaREIsWTw5Ng0iIFsLFAwsNRcbDgUFDRsXFh0OBgUPHLMWMCccKh8KCCMTIC4bGU5FRFsvICAIJw0HRQIPDwURQBk7WjMEAwkYCwsNAggGRkEvQSBUGx4SGA4DCAsWGQ4aGgFbESEwHh4xIxISITEgGy8iFAAAAgA9AAAAqAMIAAMABwBMS7AbUFhAFwUBAwMCXwACAi9NAAAAME0EAQEBLgFOG0AVAAIFAQMAAgNnAAAAME0EAQEBLgFOWUASBAQAAAQHBAcGBQADAAMRBgkXKzMRMxEDNTMVPWtrawJC\/b4CmHBwAAEAPQAAAKgCQgADABlAFgAAADBNAgEBAS4BTgAAAAMAAxEDCRcrMxEzET1rAkL9vgD\/\/wA9AAAAqQMWAiYABwAAAAYADXMAAAEAQAAAAKsDKgADABlAFgAAAC1NAgEBAS4BTgAAAAMAAxEDCRcrMxEzEUBrAyr81gAAAgAs\/\/gBfQJKABEAIwAtQCoAAwMBYQABATZNBQECAgBhBAEAADcAThMSAQAcGhIjEyMKCAARAREGCRYrFyImJjU1NDY2MzIWFhUVFAYGJzI2NjU1NCYmIyIGBhUVFBYW1UBKHx9KQEBJHx9JQB8ZBQUZHx8aBQUaCDRgQahBYDQ0YEGoQWA0TyQ7ILUhOiUlOiG1IDskAAABABb\/+AEbAusAGAA\/QDwVAQYBFgEABgJMAAMCA4UFAQEBAl8EAQICME0ABgYAYgcBAAA3AE4BABQRDg0MCwoJCAcGBQAYARgICRYrFyImJjURIzUzNTMVMxUjERQWMzI2NxUGBtAtNxk9PWtdXRYfCBUKFCIIIj4qAXlHqalH\/o4iHQIBTwMDAAAB\/8oCnwA2AxYAAwAmsQZkREAbAAABAQBXAAAAAV8CAQEAAU8AAAADAAMRAwkXK7EGAEQDNTMVNmwCn3d3sAAsILAAVVhFWSAgS7gADlFLsAZTWliwNBuwKFlgZiCKVViwAiVhuQgACABjYyNiGyEhsABZsABDI0SyAAEAQ2BCLbABLLAgYGYtsAIsIyEjIS2wAywgZLMDFBUAQkOwE0MgYGBCsQIUQ0KxJQNDsAJDVHggsAwjsAJDQ2FksARQeLICAgJDYEKwIWUcIbACQ0OyDhUBQhwgsAJDI0KyEwETQ2BCI7AAUFhlWbIWAQJDYEItsAQssAMrsBVDWCMhIyGwFkNDI7AAUFhlWRsgZCCwwFCwBCZasigBDUNFY0WwBkVYIbADJVlSW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCxAQ1DRWNFYWSwKFBYIbEBDUNFY0UgsDBQWCGwMFkbILDAUFggZiCKimEgsApQWGAbILAgUFghsApgGyCwNlBYIbA2YBtgWVlZG7ACJbAMQ2OwAFJYsABLsApQWCGwDEMbS7AeUFghsB5LYbgQAGOwDENjuAUAYllZZGFZsAErWVkjsABQWGVZWSBksBZDI0JZLbAFLCBFILAEJWFkILAHQ1BYsAcjQrAII0IbISFZsAFgLbAGLCMhIyGwAysgZLEHYkIgsAgjQrAGRVgbsQENQ0VjsQENQ7AEYEVjsAUqISCwCEMgiiCKsAErsTAFJbAEJlFYYFAbYVJZWCNZIVkgsEBTWLABKxshsEBZI7AAUFhlWS2wByywCUMrsgACAENgQi2wCCywCSNCIyCwACNCYbACYmawAWOwAWCwByotsAksICBFILAOQ2O4BABiILAAUFiwQGBZZrABY2BEsAFgLbAKLLIJDgBDRUIqIbIAAQBDYEItsAsssABDI0SyAAEAQ2BCLbAMLCAgRSCwASsjsABDsAQlYCBFiiNhIGQgsCBQWCGwABuwMFBYsCAbsEBZWSOwAFBYZVmwAyUjYUREsAFgLbANLCAgRSCwASsjsABDsAQlYCBFiiNhIGSwJFBYsAAbsEBZI7AAUFhlWbADJSNhRESwAWAtsA4sILAAI0KzDQwAA0VQWCEbIyFZKiEtsA8ssQICRbBkYUQtsBAssAFgICCwD0NKsABQWCCwDyNCWbAQQ0qwAFJYILAQI0JZLbARLCCwEGJmsAFjILgEAGOKI2GwEUNgIIpgILARI0IjLbASLEtUWLEEZERZJLANZSN4LbATLEtRWEtTWLEEZERZGyFZJLATZSN4LbAULLEAEkNVWLESEkOwAWFCsBErWbAAQ7ACJUKxDwIlQrEQAiVCsAEWIyCwAyVQWLEBAENgsAQlQoqKIIojYbAQKiEjsAFhIIojYbAQKiEbsQEAQ2CwAiVCsAIlYbAQKiFZsA9DR7AQQ0dgsAJiILAAUFiwQGBZZrABYyCwDkNjuAQAYiCwAFBYsEBgWWawAWNgsQAAEyNEsAFDsAA+sgEBAUNgQi2wFSwAsQACRVRYsBIjQiBFsA4jQrANI7AEYEIgsBQjQiBgsAFhtxgYAQARABMAQkJCimAgsBRDYLAUI0KxFAgrsIsrGyJZLbAWLLEAFSstsBcssQEVKy2wGCyxAhUrLbAZLLEDFSstsBossQQVKy2wGyyxBRUrLbAcLLEGFSstsB0ssQcVKy2wHiyxCBUrLbAfLLEJFSstsCssIyCwEGJmsAFjsAZgS1RYIyAusAFdGyEhWS2wLCwjILAQYmawAWOwFmBLVFgjIC6wAXEbISFZLbAtLCMgsBBiZrABY7AmYEtUWCMgLrABchshIVktsCAsALAPK7EAAkVUWLASI0IgRbAOI0KwDSOwBGBCIGCwAWG1GBgBABEAQkKKYLEUCCuwiysbIlktsCEssQAgKy2wIiyxASArLbAjLLECICstsCQssQMgKy2wJSyxBCArLbAmLLEFICstsCcssQYgKy2wKCyxByArLbApLLEIICstsCossQkgKy2wLiwgPLABYC2wLywgYLAYYCBDI7ABYEOwAiVhsAFgsC4qIS2wMCywLyuwLyotsDEsICBHICCwDkNjuAQAYiCwAFBYsEBgWWawAWNgI2E4IyCKVVggRyAgsA5DY7gEAGIgsABQWLBAYFlmsAFjYCNhOBshWS2wMiwAsQACRVRYsQ4GRUKwARawMSqxBQEVRVgwWRsiWS2wMywAsA8rsQACRVRYsQ4GRUKwARawMSqxBQEVRVgwWRsiWS2wNCwgNbABYC2wNSwAsQ4GRUKwAUVjuAQAYiCwAFBYsEBgWWawAWOwASuwDkNjuAQAYiCwAFBYsEBgWWawAWOwASuwABa0AAAAAABEPiM4sTQBFSohLbA2LCA8IEcgsA5DY7gEAGIgsABQWLBAYFlmsAFjYLAAQ2E4LbA3LC4XPC2wOCwgPCBHILAOQ2O4BABiILAAUFiwQGBZZrABY2CwAENhsAFDYzgtsDkssQIAFiUgLiBHsAAjQrACJUmKikcjRyNhIFhiGyFZsAEjQrI4AQEVFCotsDossAAWsBcjQrAEJbAEJUcjRyNhsQwAQrALQytlii4jICA8ijgtsDsssAAWsBcjQrAEJbAEJSAuRyNHI2EgsAYjQrEMAEKwC0MrILBgUFggsEBRWLMEIAUgG7MEJgUaWUJCIyCwCkMgiiNHI0cjYSNGYLAGQ7ACYiCwAFBYsEBgWWawAWNgILABKyCKimEgsARDYGQjsAVDYWRQWLAEQ2EbsAVDYFmwAyWwAmIgsABQWLBAYFlmsAFjYSMgILAEJiNGYTgbI7AKQ0awAiWwCkNHI0cjYWAgsAZDsAJiILAAUFiwQGBZZrABY2AjILABKyOwBkNgsAErsAUlYbAFJbACYiCwAFBYsEBgWWawAWOwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbA8LLAAFrAXI0IgICCwBSYgLkcjRyNhIzw4LbA9LLAAFrAXI0IgsAojQiAgIEYjR7ABKyNhOC2wPiywABawFyNCsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbkIAAgAY2MjIFhiGyFZY7gEAGIgsABQWLBAYFlmsAFjYCMuIyAgPIo4IyFZLbA\/LLAAFrAXI0IgsApDIC5HI0cjYSBgsCBgZrACYiCwAFBYsEBgWWawAWMjICA8ijgtsEAsIyAuRrACJUawF0NYUBtSWVggPFkusTABFCstsEEsIyAuRrACJUawF0NYUhtQWVggPFkusTABFCstsEIsIyAuRrACJUawF0NYUBtSWVggPFkjIC5GsAIlRrAXQ1hSG1BZWCA8WS6xMAEUKy2wQyywOisjIC5GsAIlRrAXQ1hQG1JZWCA8WS6xMAEUKy2wRCywOyuKICA8sAYjQoo4IyAuRrACJUawF0NYUBtSWVggPFkusTABFCuwBkMusDArLbBFLLAAFrAEJbAEJiAgIEYjR2GwDCNCLkcjRyNhsAtDKyMgPCAuIzixMAEUKy2wRiyxCgQlQrAAFrAEJbAEJSAuRyNHI2EgsAYjQrEMAEKwC0MrILBgUFggsEBRWLMEIAUgG7MEJgUaWUJCIyBHsAZDsAJiILAAUFiwQGBZZrABY2AgsAErIIqKYSCwBENgZCOwBUNhZFBYsARDYRuwBUNgWbADJbACYiCwAFBYsEBgWWawAWNhsAIlRmE4IyA8IzgbISAgRiNHsAErI2E4IVmxMAEUKy2wRyyxADorLrEwARQrLbBILLEAOyshIyAgPLAGI0IjOLEwARQrsAZDLrAwKy2wSSywABUgR7AAI0KyAAEBFRQTLrA2Ki2wSiywABUgR7AAI0KyAAEBFRQTLrA2Ki2wSyyxAAEUE7A3Ki2wTCywOSotsE0ssAAWRSMgLiBGiiNhOLEwARQrLbBOLLAKI0KwTSstsE8ssgAARistsFAssgABRistsFEssgEARistsFIssgEBRistsFMssgAARystsFQssgABRystsFUssgEARystsFYssgEBRystsFcsswAAAEMrLbBYLLMAAQBDKy2wWSyzAQAAQystsFosswEBAEMrLbBbLLMAAAFDKy2wXCyzAAEBQystsF0sswEAAUMrLbBeLLMBAQFDKy2wXyyyAABFKy2wYCyyAAFFKy2wYSyyAQBFKy2wYiyyAQFFKy2wYyyyAABIKy2wZCyyAAFIKy2wZSyyAQBIKy2wZiyyAQFIKy2wZyyzAAAARCstsGgsswABAEQrLbBpLLMBAABEKy2waiyzAQEARCstsGssswAAAUQrLbBsLLMAAQFEKy2wbSyzAQABRCstsG4sswEBAUQrLbBvLLEAPCsusTABFCstsHAssQA8K7BAKy2wcSyxADwrsEErLbByLLAAFrEAPCuwQistsHMssQE8K7BAKy2wdCyxATwrsEErLbB1LLAAFrEBPCuwQistsHYssQA9Ky6xMAEUKy2wdyyxAD0rsEArLbB4LLEAPSuwQSstsHkssQA9K7BCKy2weiyxAT0rsEArLbB7LLEBPSuwQSstsHwssQE9K7BCKy2wfSyxAD4rLrEwARQrLbB+LLEAPiuwQCstsH8ssQA+K7BBKy2wgCyxAD4rsEIrLbCBLLEBPiuwQCstsIIssQE+K7BBKy2wgyyxAT4rsEIrLbCELLEAPysusTABFCstsIUssQA\/K7BAKy2whiyxAD8rsEErLbCHLLEAPyuwQistsIgssQE\/K7BAKy2wiSyxAT8rsEErLbCKLLEBPyuwQistsIsssgsAA0VQWLAGG7IEAgNFWCMhGyFZWUIrsAhlsAMkUHixBQEVRVgwWS0AAAA=) format('truetype');}]]><\/style><\/svg>"
        + '</body></html>';
    return html;
}

const SVGatorComponent = React.forwardRef((props, ref) => {
    let newProps = {...props};

    const html = getHtml();

    let attrs = {};
    let attrMatch = html.match(/<svg(.*?)>/)[1].match(/[a-z0-9]+\=['"]([^'"]+)['"]/ig) || [];
    attrMatch.forEach(attr => {
        let parts = attr.split('=', 2);
        let key = parts.shift().toLowerCase();
        let value = parts.join('=');
        value = value.replace(/^['"]+|['"]+$/g, '');
        attrs[key] = value;
    });

    let viewBox = attrs.viewbox ? attrs.viewbox.split(' ') : [];
    let svgWidth = attrs.width ? attrs.width : viewBox[2] || 100;
    let svgHeight = attrs.height ? attrs.height : viewBox[3] || 100;

    if (!newProps.hasOwnProperty('width') && svgWidth) {
        newProps.width = svgWidth;
    }

    if (!newProps.hasOwnProperty('height') && svgHeight) {
        let ratio = Math.min(newProps.width / svgWidth, 1);
        newProps.height = ratio * svgHeight;
    }
    if (newProps.width) {
        newProps.width = parseInt(newProps.width);
    }
    if (newProps.height) {
        newProps.height = parseInt(newProps.height);
    }

    return (
        <WebView ref={ref} {...newProps} source={{html}} containerStyle={{flex: 0}} style={{backgroundColor: "transparent", flex: 0}}/>
    );
});

export default SVGatorComponent;
