<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:strip-space elements="*" />
<xsl:output method="text" />
<xsl:template match="/opt">
import { Formik } from 'formik';
import React, { Component } from 'react';
import Loader from 'components/Loader';

import InputFormItem from 'components/FormItems/items/InputFormItem';
import InputNumberFormItem from 'components/FormItems/items/InputNumberFormItem';
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
import SelectFormItem from 'components/FormItems/items/SelectFormItem';
import DatePickerFormItem from 'components/FormItems/items/DatePickerFormItem';
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';
import FilesFormItem from 'components/FormItems/items/FilesFormItem';

import ((name))Fields from 'components/CRUD/((Name))/((name))Fields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

<xsl:for-each select="./entities[@name='((name))']/fields[@type='relation_one' or @type='relation_many'][not(@ref = preceding-sibling::fields/@ref)]">
import <xsl:value-of select="@ref_cap"/>AutocompleteFormItem from 'components/CRUD/<xsl:value-of select="@ref_cap"/>/autocomplete/<xsl:value-of select="@ref_cap"/>AutocompleteFormItem';
</xsl:for-each>

class ((Name))Form extends Component {
  iniValues = () => {
    return IniValues(((name))Fields, this.props.record || {});
  }

  formValidations = () => {
    return FormValidations(((name))Fields, this.props.record || {});
  }

  handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(((name))Fields, values || {});
    this.props.onSubmit(id, data);
  };

  title = () => {
    if(this.props.isProfile) {
      return 'Edit My Profile';
    }

    return this.props.isEditing
      ? 'Edit ((Name))'
      : 'Add ((Name))';
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <Widget title={<h4>{this.title()}</h4>} collapse close>
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={this.iniValues()}
          validationSchema={this.formValidations()}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>

<xsl:for-each select="./entities[@name='((name))']/fields[@show_in_form='yes']">
<xsl:if test="@type='string' or @type='decimal'">
                <InputFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
<xsl:if test="position()=1">
                  autoFocus
</xsl:if>
                />
</xsl:if>
<xsl:if test="@type='int'">
                <InputNumberFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                />
</xsl:if>
<xsl:if test="@type='date'">
                <DatePickerFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                />
</xsl:if>
<xsl:if test="@type='datetime'">
                <DatePickerFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                  showTimeInput
                />
</xsl:if>
<xsl:if test="@type='boolean'">
                <SwitchFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                />
</xsl:if>
<xsl:if test="@type='enum' and (@widget='select' or not(@widget))">
                <SelectFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                />
</xsl:if>
<xsl:if test="@type='enum' and @widget='radio'">
                <RadioFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                />
</xsl:if>
<xsl:if test="@type='files'">
                <FilesFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                  path={'((name))/<xsl:value-of select="@name"/>'}
                  fileProps={{
                    size: undefined,
                    formats: undefined,
                  }}
                  max={undefined}
                />
</xsl:if>
<xsl:if test="@type='images'">
                <ImagesFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                  path={'((name))/<xsl:value-of select="@name"/>'}
                  fileProps={{
                    size: undefined,
                    formats: undefined,
                  }}
                  max={undefined}
                />
</xsl:if>
<xsl:if test="@type='relation_one'">
                <<xsl:value-of select="@ref_cap"/>AutocompleteFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                  showCreate={!this.props.modal}
                />
</xsl:if>
<xsl:if test="@type='relation_many'">
                <<xsl:value-of select="@ref_cap"/>AutocompleteFormItem
                  name={'<xsl:value-of select="@name"/>'}
                  schema={((name))Fields}
                  showCreate={!this.props.modal}
                  mode="multiple"
                />
</xsl:if>
</xsl:for-each>

                <div className="form-buttons">
                  <button
                    className="btn btn-primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    Save
                  </button>{' '}{' '}

                  <button
                    className="btn btn-light"
                    type="button"
                    disabled={saveLoading}
                    onClick={form.handleReset}
                  >
                    Reset
                  </button>{' '}{' '}

                    <button
                      className="btn btn-light"
                      type="button"
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                    >
                      Cancel
                    </button>
                </div>
              </form>
            );
          }}
        />
      </Widget>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Loader />;
    }

    if (isEditing && !record) {
      return <Loader />;
    }

    return this.renderForm();
  }
}

export default ((Name))Form;
</xsl:template>
</xsl:stylesheet>
