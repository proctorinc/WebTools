import { ChangeEvent, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { HslaColor, HslaColorPicker } from "react-colorful";
import { Colord, colord, getFormat } from "colord";
import { CopyButton } from "./CopyButton";
import { formatHsv } from "../../utils";
import { HEX, HSL, HSV, RGB } from "./contants";

export const ColorPicker = () => {
  const initialColor: HslaColor = { h: 256, s: 75, l: 34, a: 1 };
  const [pickerColor, setPickerColor] = useState(initialColor);
  const [hexColor, setHexColor] = useState(colord(initialColor).toHex());
  const [rgbColor, setRgbColor] = useState(colord(initialColor).toRgbString());
  const [hsvColor, setHsvColor] = useState(formatHsv(colord(initialColor)));
  const [hslColor, setHslColor] = useState(colord(initialColor).toHslString());

  const updatePickerColor = (color: Colord) => {
    setPickerColor(color.toHsl());
  };

  const updateHexColor = (color: Colord) => {
    setHexColor(color.toHex());
  };

  const updateRGBColor = (color: Colord) => {
    setRgbColor(color.toRgbString());
  };

  const updateHSVColor = (color: Colord) => {
    setHsvColor(formatHsv(color));
  };

  const updateHSLColor = (color: Colord) => {
    setHslColor(color.toHslString());
  };

  const handlePickerChange = (input: HslaColor) => {
    const color = colord(input);
    setPickerColor(input);
    updateHexColor(color);
    updateRGBColor(color);
    updateHSVColor(color);
    updateHSLColor(color);
  };

  const handleColorChange = (
    type: string,
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const input = event.target.value;
    const format = getFormat(input);
    const color = colord(input);

    if (type === HEX) {
      setHexColor(input);
    } else if (type === RGB) {
      setRgbColor(input);
    } else if (type === HSL) {
      setHslColor(input);
    } else if (type === HSV) {
      setHsvColor(input);
    }

    if (format === HEX || format === RGB || format === HSL || format === HSV) {
      updatePickerColor(color);

      if (format !== HEX) {
        updateHexColor(color);
      }
      if (format !== RGB) {
        updateRGBColor(color);
      }
      if (format !== HSL) {
        updateHSLColor(color);
      }
      if (format !== HSV) {
        updateHSVColor(color);
      }
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
        <Grid display="flex" flexDirection="column" item xs={6}>
          <TextField
            label="HEX"
            variant="outlined"
            value={hexColor}
            onChange={(event) => handleColorChange(HEX, event)}
            InputProps={{
              endAdornment: <CopyButton value={hexColor} />,
            }}
          />
        </Grid>
        <Grid display="flex" flexDirection="column" item xs={6}>
          <TextField
            label="RGB"
            variant="outlined"
            value={colord(rgbColor).toRgbString()}
            onChange={(event) => handleColorChange(RGB, event)}
            InputProps={{
              endAdornment: <CopyButton value={hsvColor} />,
            }}
          />
        </Grid>
        <Grid display="flex" flexDirection="column" item xs={6}>
          <TextField
            label="HSV"
            variant="outlined"
            value={hsvColor}
            onChange={(event) => handleColorChange(HSV, event)}
            InputProps={{
              endAdornment: <CopyButton value={hsvColor} />,
            }}
          />
        </Grid>
        <Grid display="flex" flexDirection="column" item xs={6}>
          <TextField
            label="HSL"
            variant="outlined"
            value={colord(hslColor).toHslString()}
            onChange={(event) => handleColorChange(HSL, event)}
            InputProps={{
              endAdornment: <CopyButton value={hslColor} />,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
