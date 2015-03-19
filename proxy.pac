function FindProxyForURL(url, host) {
 
  if (shExpMatch(url,"*.google.com/*")) { return "DIRECT"; }
  if (shExpMatch(url,"*.google.fr/*")) { return "DIRECT"; }

  return "PROXY proxy.example.com:1234";
}