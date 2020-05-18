<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:strip-space elements="*" />
<xsl:output method="text" />
<xsl:template match="/opt">

const ((name))Fields = {
	id: { type: 'id', label: 'ID' },
<xsl:for-each select="./entities[@name='((name))']/fields">
    <xsl:value-of select="@name"/>: { type: '<xsl:value-of select="@type"/>', label: '<xsl:value-of select="@title"/>',
<xsl:if test="./options">
    options: [
<xsl:for-each select="./options">
    { value: '<xsl:value-of select="."/>', label: '<xsl:value-of select="."/>' },
</xsl:for-each>
]
</xsl:if>
    },
</xsl:for-each>
}

export default ((name))Fields;
</xsl:template>
</xsl:stylesheet>
