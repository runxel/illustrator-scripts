// ObjectArea.jsx
// Adobe Illustrator CSx script

// gives you the area size of an object

// test env: Adobe Illustrator CS6 oon Win x64
// 2016-02-01

// Lucas Becker
// https://github.com/runxel
// This script is distributed under the MIT License.

// -------------------------------------------------
main();
function main(){
	if (documents.length < 1) return;

	var selObjects = app.activeDocument.selection;
	var selObjectsNum = selObjects.length;

	if(selObjectsNum < 1){
		alert("You must select one path before launching this script.")
		return;
	}
	if(selObjectsNum > 1){
		alert("Please select only one path at a time.")
		return;
	}

	// show a dialog
	var win = new Window("dialog", "Object Area");
	win.orientation = "column";
    win.alignChildren = "fill";

	win.radioPanel = win.add("panel", [15, 76, 215, 122], "unit");
    win.radioPanel.orientation = "row";
    win.radioPanel.cm = win.radioPanel.add("radiobutton", undefined, "cm²");
    win.radioPanel.mm = win.radioPanel.add("radiobutton", undefined, "mm²");
    win.radioPanel.inch = win.radioPanel.add("radiobutton", undefined, "inches²");
    win.radioPanel.cm.value = true;

    win.output = win.add("panel", [15, 15, 240, 61], "area size");
    win.output.orientation = "row";
    win.output.txtBox = win.output.add("edittext", [175, 14, 370, 34], areaSize(0));

    win.radioPanel.cm.onClick = function() {
    	win.output.txtBox.text = areaSize(0);
    }
    win.radioPanel.mm.onClick = function() {
    	win.output.txtBox.text = areaSize(1);
    }
    win.radioPanel.inch.onClick = function() {
    	win.output.txtBox.text = areaSize(2);
    }

    win.show();
}

function areaSize(unit) {
	var size = 0;
	// standard value is in pixels
	size = parseFloat(Math.abs(app.activeDocument.selection[0].area/8.03521617/100).toFixed(3));
	if(unit == 1){ // mm
		size = Math.abs(size*100).toFixed(3);
	} else if(unit == 2){ // inch
		size = Math.abs(size * 0.155).toFixed(3);
	}
	return size;
}
