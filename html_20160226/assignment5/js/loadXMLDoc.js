function loadXMLDoc(dname)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest(); // Everything but IE
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");  // IE Only
  }
xhttp.open("GET",dname,false);   // Open the file
xhttp.send("");
return xhttp.responseXML;
}
function displayResult(fname)
{
xml=loadXMLDoc(fname+".xml");
xsl=loadXMLDoc(fname+".xsl");
// code for IE
if (window.ActiveXObject)
  {
  ex=xml.transformNode(xsl);
  document.getElementById("example").innerHTML=ex;
  }
// code for Mozilla, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
  {
  xsltProcessor=new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);
  resultDocument = xsltProcessor.transformToFragment(xml,document);
  document.getElementById("example").appendChild(resultDocument);
  }
}
