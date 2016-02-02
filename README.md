
Illustrator-Scripts
======================
JavaScript scripts for Adobe Illustrator CSx.  
test environment: Adobe Illustrator CS6 (Windows x64)

**How to download**

1. To download all scripts, use the "Download ZIP" button above.

2. To download a script, click on the script name in the list. The page of the code will open. Right click on the "Raw" button, and then "Save As...".

Right clicking on the script name (link) and using "Save as" will download a source code of the webpage, not a script file.

After download put the script(s) in the designated place.
E.g. `C:\Program Files\Adobe\Adobe Illustrator CS6 (64 Bit)\Presets\en_EN\Scripts`

---

### ObjectArea.jsx
This script gives you the area size of the selected paths in cm², mm² or inch².

**Usage:**

1. Select _one_ path and run the script:
2. Hit the button you want to have the space calculated in.

**Notice:**
- Fails on compund paths.
- May fail on difficult paths.
- Returns `NaN` on non-paths like text.
