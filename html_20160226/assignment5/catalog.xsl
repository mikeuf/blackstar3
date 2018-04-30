<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
  <h2>ACME Records Release Catalog</h2>
  <table border="1">
    <tr bgcolor="#CEB888">
      <th>sku</th>
      <th>Record Title</th>
      <th>Release Date</th>
      <th>Format</th>
    </tr>
    <xsl:for-each select="catalog/record">
    <tr>
      <td><xsl:value-of select="sku"/></td>
      <td><xsl:value-of select="recordTitle"/></td>
      <td><xsl:value-of select="releaseDate"/></td>
      <td><xsl:value-of select="format"/></td>
      </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet> 

