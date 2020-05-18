<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:strip-space elements="*" />
<xsl:output method="text" />
<xsl:template match="/opt">

import auth from 'reducers/auth';
import alerts from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
<xsl:for-each select="./entities">
import <xsl:value-of select="@name"/> from 'reducers/<xsl:value-of select="@name"/>/<xsl:value-of select="@name"/>Reducers';
</xsl:for-each>

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    alerts,
    auth,
    navigation,
<xsl:for-each select="./entities">
    <xsl:value-of select="@name"/>,
</xsl:for-each>
  });

</xsl:template>
</xsl:stylesheet>
