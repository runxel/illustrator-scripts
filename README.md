
Illustrator-Scripts
======================
JavaScript scripts for Adobe Illustrator CS/CC.  
test environment: Adobe Illustrator CS6 and CC (Windows x64).

Inspired by [Hiroyuki Sato](https://github.com/shspage/illustrator-scripts).

A good place to start Illustrator scripting [is here](https://github.com/rjduran/adobe-scripting).

---

**How to download**

1. To download all scripts, use the "Download ZIP" button above.

2. To download a script, click on the script name in the list. The page of the code will open. Right click on the "Raw" button, and then "Save As...".

Right clicking on the script name (link) and using "Save as" will download a source code of the webpage, not a script file.

After download put the script(s) in the designated place.
E.g. `C:\Program Files\Adobe\Adobe Illustrator CS6 (64 Bit)\Presets\en_EN\Scripts`

---

### [ObjectArea.jsx](ObjectArea.jsx)
This script gives you the area size of the selected paths in cm², mm² or inch².

**Usage:**

1. Select _one_ path and run the script:
2. Hit the button you want to have the space calculated in.

**Notice:**
- Fails on compound paths.
- May fail on difficult paths.
- Returns `NaN` on non-paths like text.

---

## Third-party
Other places too look:
- Classic [John Wundes](https://github.com/johnwun/js4ai) scripts
- [Hiroyuki Sato](https://github.com/shspage/illustrator-scripts)
- [Alexander Ladygin's repo](https://github.com/alexander-ladygin/illustrator-scripts) is brimming of useful scripts
- [Illustrator Praxis](http://illustrator.hilfdirselbst.ch/dokuwiki/en/skripte/javascript/uebersicht) with a big collection of different scripts
- [Tom Byrne's MultiExporter.jsx](https://gist.github.com/TomByrne/7816376)  
  Just save it with the filename `MultiExporter.jsx`.  
  Then put that into your scripts folder. It can be found under  
  `C:\Program Files\Adobe\Adobe Illustrator [VERSION]\Presets\[LANGUAGE]\Scripts`
  In Illustrator, use the `File > Scripts > MultiExporter` option to bring up the dialogue box.
  
  To get easier access to the scripts install the [plugin by majman](https://github.com/majman/adobe-scripts-panel) which retrofits a panel, like known from the other Adobe apps.
