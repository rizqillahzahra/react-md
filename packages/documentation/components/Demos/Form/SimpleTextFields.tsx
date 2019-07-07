import React, { FC, Fragment } from "react";
import { TextField, Form } from "@react-md/form";
import {
  FavoriteSVGIcon,
  PersonSVGIcon,
  PhoneSVGIcon,
  LocationOnSVGIcon,
  ArrowDropDownSVGIcon,
  EmailSVGIcon,
  ClearSVGIcon,
} from "@react-md/material-icons";
import { SrOnly } from "@react-md/typography";

import "./SimpleTextFields.scss";
import Phone from "components/Phone";
import { Button } from "@react-md/button";
import { Divider } from "@react-md/divider";

const SimpleTextFields: FC = () => {
  return (
    <Fragment>
      <Form className="simple-text-fields-form">
        <TextField
          id="outline-field-1"
          theme="outline"
          label="Label"
          placeholder="Placeholder"
        />
        <TextField
          id="outline-field-2"
          theme="outline"
          label="Label"
          placeholder="Placeholder"
          dense
        />
        <TextField
          id="outline-field-3"
          theme="outline"
          placeholder="Placeholder"
        />
        <TextField
          id="outline-field-4"
          theme="outline"
          placeholder="Placeholder"
          dense
        />
        <TextField
          id="outline-field-5"
          theme="outline"
          label="Label"
          placeholder="Placeholder"
          leftAddon={<FavoriteSVGIcon />}
        />
        <TextField
          id="outline-field-6"
          theme="outline"
          label="Label"
          placeholder="Placeholder"
          rightAddon={
            <Button id="field6-clear" buttonType="icon" aria-label="Clear">
              <ClearSVGIcon />
            </Button>
          }
        />
        <Divider />
        <TextField
          id="underline-field-1"
          theme="underline"
          label="Label"
          placeholder="Placeholder"
        />
        <TextField
          id="underline-field-2"
          theme="underline"
          label="Label"
          placeholder="Placeholder"
          dense
        />
        <TextField
          id="underline-field-3"
          theme="underline"
          placeholder="Placeholder"
        />
        <TextField
          id="underline-field-4"
          theme="underline"
          placeholder="Placeholder"
          dense
        />
        <TextField
          id="underline-field-5"
          theme="underline"
          label="Label"
          placeholder="Placeholder"
          leftAddon={<FavoriteSVGIcon />}
        />
        <TextField
          id="underline-field-6"
          theme="underline"
          label="Label"
          placeholder="Placeholder"
          rightAddon={
            <Button id="field6-clear" buttonType="icon" aria-label="Clear">
              <ClearSVGIcon />
            </Button>
          }
        />
        <Divider />
        <TextField
          id="filled-field-1"
          theme="filled"
          label="Label"
          placeholder="Placeholder"
        />
        <TextField
          id="filled-field-2"
          theme="filled"
          label="Label"
          placeholder="Placeholder"
          dense
        />
        <TextField
          id="filled-field-3"
          theme="filled"
          placeholder="Placeholder"
        />
        <TextField
          id="filled-field-4"
          theme="filled"
          placeholder="Placeholder"
          dense
        />
        <TextField
          id="filled-field-5"
          theme="filled"
          label="Label"
          placeholder="Placeholder"
          leftAddon={<FavoriteSVGIcon />}
        />
        <TextField
          id="filled-field-6"
          theme="filled"
          label="Label"
          placeholder="Placeholder"
          rightAddon={
            <Button id="field6-clear" buttonType="icon" aria-label="Clear">
              <ClearSVGIcon />
            </Button>
          }
        />
      </Form>
      <Phone id="text-field-form">
        <Form className="simple-text-fields-form simple-text-fields-form--phone">
          <PersonSVGIcon />
          <TextField
            id="contact-name"
            name="name"
            label="Name"
            placeholder="John Snow"
            style={{ marginTop: 0 }}
          />
          <PhoneSVGIcon />
          <TextField
            id="contact-phone"
            type="tel"
            name="phone"
            label="Phone"
            placeholder="123-4567"
            pattern="\d{3}-\d{4}"
            maxLength={8}
            style={{ marginTop: 0 }}
          />
          <LocationOnSVGIcon
            style={{ alignSelf: "flex-start", marginTop: "1rem" }}
          />
          <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
            <SrOnly component="legend">Full Address</SrOnly>
            <TextField
              id="contact-address"
              name="address"
              label="Address"
              placeholder="Some place street"
              style={{ marginTop: 0 }}
            />
            <TextField
              id="contact-city"
              name="city"
              label="City"
              placeholder="Denver"
            />
            <TextField
              id="contact-state"
              name="state"
              label="State"
              placeholder="Denver"
              rightAddon={<ArrowDropDownSVGIcon />}
              style={{ width: "calc(50% - .5rem)", marginRight: ".5rem" }}
              inline
            />
            <TextField
              id="contact-zip"
              name="zip"
              label="Zip"
              placeholder="12345"
              pattern="\d{5}"
              maxLength={5}
              style={{ width: "calc(50% - .5rem)", marginLeft: ".5rem" }}
              inline
            />
          </fieldset>
          <EmailSVGIcon />
          <TextField
            id="contact-email"
            name="email"
            label="Email"
            placeholder="jsnow@email.com"
            style={{ marginTop: 0 }}
          />
        </Form>
      </Phone>
    </Fragment>
  );
};

export default SimpleTextFields;