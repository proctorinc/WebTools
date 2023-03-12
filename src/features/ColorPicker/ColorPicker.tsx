import { ChangeEvent, useState } from "react";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { HslaColor, HslaColorPicker, HsvaColor } from "react-colorful";
import { colord, getFormat } from "colord";
import { CopyAll } from "@mui/icons-material";
import { copyToClipboard } from "../../utils";

const formatHsv = (hsv: HsvaColor) => {
  return `hsv${hsv.a !== 1 ? "a" : ""}(${hsv.h}, ${hsv.s}%, ${hsv.v}%${
    hsv.a !== 1 ? ` ${hsv.a}` : ""
  })`;
};

export const ColorPicker = () => {
  const initialColor: HslaColor = { h: 256, s: 75, l: 34, a: 1 };
  const [pickerColor, setPickerColor] = useState(initialColor);
  const [hexColor, setHexColor] = useState(colord(initialColor).toHex());
  const [rgbColor, setRgbColor] = useState(colord(initialColor).toRgbString());
  const [hsvColor, setHsvColor] = useState(
    formatHsv(colord(initialColor).toHsv())
  );
  const [hslColor, setHslColor] = useState(colord(initialColor).toHslString());

  const handlePickerChange = (input: HslaColor) => {
    const color = colord(input);
    setPickerColor(input);
    setHexColor(color.toHex());
    setRgbColor(color.toRgbString());
    setHsvColor(formatHsv(color.toHsv()));
    setHslColor(color.toHslString());
  };

  const handleHexChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const format = getFormat(input);
    const color = colord(input);
    setHexColor(input);

    if (format === "hex") {
      setPickerColor(color.toHsl());
      setRgbColor(color.toRgbString());
      setHsvColor(formatHsv(color.toHsv()));
      setHslColor(color.toHslString());
    }
  };

  const handleRgbChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const format = getFormat(input);
    const color = colord(input);
    setRgbColor(input);

    if (format === "rgb") {
      setPickerColor(color.toHsl());
      setHexColor(color.toHex());
      setHsvColor(formatHsv(color.toHsv()));
      setHslColor(color.toHslString());
    }
  };

  const handleHslChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const format = getFormat(input);
    const color = colord(input);
    setHslColor(input);

    if (format === "hsl") {
      setPickerColor(color.toHsl());
      setHexColor(color.toHex());
      setRgbColor(color.toRgbString());
      setHsvColor(formatHsv(color.toHsv()));
    }
  };

  const handleHsvChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const format = getFormat(input);
    const color = colord(input);
    setHsvColor(input);

    if (format === "hsv") {
      setPickerColor(color.toHsl());
      setHexColor(color.toHex());
      setRgbColor(color.toRgbString());
      setHslColor(color.toHslString());
    }
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={3} width="100%">
          <div
            style={{
              height: 300,
              width: "100%",
              background: colord(pickerColor).toHex(),
              borderRadius: "8px",
            }}
          />
        </Grid>
        <Grid item xs={9} width="100%">
          <HslaColorPicker
            style={{
              height: 300,
              width: "100%",
            }}
            color={pickerColor}
            onChange={handlePickerChange}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" paddingY={5} spacing={2}>
        <Grid display="flex" flexDirection="column" item xs={5} width="100%">
          <TextField
            label="HEX"
            variant="outlined"
            value={hexColor}
            onChange={handleHexChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => copyToClipboard(hexColor)}>
                    <CopyAll />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid display="flex" flexDirection="column" item xs={5} width="100%">
          <TextField
            label="RGB"
            variant="outlined"
            value={colord(rgbColor).toRgbString()}
            onChange={handleRgbChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => copyToClipboard(rgbColor)}>
                    <CopyAll />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid display="flex" flexDirection="column" item xs={5} width="100%">
          <TextField
            label="HSV"
            variant="outlined"
            value={hsvColor}
            onChange={handleHsvChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => copyToClipboard(hsvColor)}>
                    <CopyAll />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid display="flex" flexDirection="column" item xs={5} width="100%">
          <TextField
            label="HSL"
            variant="outlined"
            value={colord(hslColor).toHslString()}
            onChange={handleHslChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => copyToClipboard(hslColor)}>
                    <CopyAll />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
