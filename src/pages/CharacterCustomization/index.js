import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import ColorPicker from '../../components/ColorPicker'
import styled from 'styled-components'
import Avatar from '../../components/Avatar'

const CustomForm = styled(Form)`
  width: 90px;
  grid-row-start: 2;
  grid-column-start: 2;
  align-self: center;

  #root__title {
    display: none;
  }

  .form-group {
    margin-bottom: 20px;
  }

  fieldset {
    border: none;
    padding: 10px 20px;
  }

  label {
    font-size: 14px;
    color: #444;
  }
`

const CustomLink = styled(Link)`
  position: absolute;
  top: 10px;
  right: 20px;
`

const AvatarPreviewContainer = styled.div`
  grid-row-start: 2;
  grid-column-start: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: linear-gradient(
    to bottom,
    #6EB1DC,
    #8ED1FC 195px,
    #63a054 195px,
    #83c074
  );

  &>div {
    position: initial;
  }

  .avatar-shadow {
    display: none;
  }
`

const Page = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 50px 20px;
  display: grid;
  grid-template-columns: calc(50% - 240px) 90px 300px calc(50% - 150px);
  grid-template-rows: auto 300px calc(45% - 110px);
  background: linear-gradient(
    to bottom,
    #6EB1DC80,
    #8ED1FC80 55%,
    #63a05480 55%,
    #83c07480
  );
`

const CharacterCustomization = ({ update, avatar }) => {
  const widgets = { color: ColorPicker }
  const schema = {
    title: "Customize your avatar",
    type: "object",
    required: ["head", "body", "legs"],
    properties: {
      head: { type: "string" },
      body: { type: "string" },
      legs: { type: "string" }
    }
  }
  const uiSchema = {
    head: { "ui:widget": "color", "ui:options": { label: false } },
    body: { "ui:widget": "color", "ui:options": { label: false } },
    legs: { "ui:widget": "color", "ui:options": { label: false } }
  }
  const CustomFieldTemplate = (props) => {
    const {id, classNames, label, help, displayLabel, errors, children} = props;
    return (
      <div className={classNames}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {displayLabel ? id === 'root' ? '' : <label style={{ marginRight: '10px' }} htmlFor={id}>{label}</label> : ''}
          {children}
        </div>
        {errors}
        {help}
      </div>
    );
  }
  const opts = {
    onChange: ({formData}) => update(formData),
    widgets,
    schema,
    uiSchema,
    formData: avatar,
    FieldTemplate: CustomFieldTemplate
  }
  const Submit = () => <button type="submit" style={{display: "none"}} />
  return (
    <Page>
      <CustomForm {...opts}><Submit /></CustomForm>
      <CustomLink to="/p/0">Back to the adventure</CustomLink>
      <AvatarPreviewContainer>
        <Avatar avatar={avatar} style={{ left: 'calc(50% + 20px)' }} />
      </AvatarPreviewContainer>
    </Page>
  )
}

export default CharacterCustomization