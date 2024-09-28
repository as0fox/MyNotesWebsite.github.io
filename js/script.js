const btn_bold = document.getElementById('btn_bold');
const btn_italic = document.getElementById('btn_italic');
const btn_right = document.getElementById('btn_right');
const btn_left = document.getElementById('btn_left');
const btn_center = document.getElementById('btn_center');
const btn_upper = document.getElementById('btn_upper');
const btn_lower = document.getElementById('btn_lower');
const btn_capitalize = document.getElementById('btn_capitalize');
const btn_clear = document.getElementById('btn_clear');
const btn_print = document.getElementById('btn_print');
const btn_brush=document.getElementById('btn_brush')

const textColorPicker = document.getElementById('textColorPicker');
const bgColorPicker = document.getElementById('bgColorPicker');

const fontSizeInput = document.getElementById('fontSizeInput');
const fontFamilySelector = document.getElementById('fontFamilySelector');
const text_Area = document.getElementById('massage');

// Bold
btn_bold.addEventListener("click", () => {
  text_Area.style.fontWeight = text_Area.style.fontWeight === 'bold' ? 'normal' : 'bold';
  btn_bold.style.color = btn_bold.style.color === 'blue' ? 'black' : 'blue';
  btn_bold.style.borderColor = btn_bold.style.borderColor === 'blue' ? 'black' : 'blue';
});

// Italic
btn_italic.addEventListener("click", () => {
  text_Area.style.fontStyle = text_Area.style.fontStyle === 'italic' ? 'normal' : 'italic';
  btn_italic.style.color = btn_italic.style.color === 'blue' ? 'black' : 'blue';
  btn_italic.style.borderColor = btn_italic.style.borderColor === 'blue' ? 'black' : 'blue';
});

// Align Right
btn_right.addEventListener("click", () => {
  text_Area.style.textAlign = text_Area.style.textAlign === 'right'?'center':'right';
  btn_right.style.color = btn_right.style.color === 'blue' ? 'black' : 'blue';
  btn_right.style.borderColor = btn_right.style.borderColor === 'blue' ? 'black' : 'blue';
  btn_center.style.color = btn_right.style.color === 'blue' ? 'black' : 'blue';
  btn_center.style.borderColor = btn_right.style.borderColor === 'blue' ? 'black' : 'blue';
  btn_left.style.color = btn_right.style.color === 'blue' ? 'black' : 'black';
  btn_left.style.borderColor = btn_right.style.borderColor === 'blue' ? 'black' : 'black';
});

// Align Left
btn_left.addEventListener("click", () => {
    text_Area.style.textAlign = text_Area.style.textAlign === 'left'?'center':'left';
    btn_left.style.color = btn_left.style.color === 'blue' ? 'black' : 'blue';
    btn_left.style.borderColor = btn_left.style.borderColor === 'blue' ? 'black' : 'blue';

    btn_center.style.color =  btn_left.style.color === 'blue' ? 'black' : 'blue';
    btn_center.style.borderColor =  btn_left.style.borderColor === 'blue' ? 'black' : 'blue';
    btn_right.style.color =  btn_left.style.color === 'blue' ? 'black' : 'black';
    btn_right.style.borderColor =  btn_left.style.borderColor === 'blue' ? 'black' : 'black';
});

// Center Align
btn_center.addEventListener("click", () => {
  text_Area.style.textAlign = 'center';
  btn_center.style.color = 'blue'
  btn_center.style.borderColor = 'blue';

  btn_left.style.color = btn_right.style.color === 'blue' ? 'black' : 'black';
  btn_left.style.borderColor = btn_right.style.borderColor === 'blue' ? 'black' : 'black';

  btn_right.style.color = btn_right.style.color === 'blue' ? 'black' : 'black';
  btn_right.style.borderColor = btn_right.style.borderColor === 'blue' ? 'black' : 'black';
});

// Uppercase
btn_upper.addEventListener("click", () => {
  text_Area.value =   text_Area.value === text_Area.value.toUpperCase()?text_Area.value.toLowerCase():text_Area.value.toUpperCase();
  btn_upper.style.color = btn_upper.style.color === 'blue' ? 'black' : 'blue';
  btn_upper.style.borderColor = btn_upper.style.borderColor === 'blue' ? 'black' : 'blue';
  btn_lower.style.color = btn_upper.style.color === 'blue' ? 'black' : 'blue';
  btn_lower.style.borderColor = btn_upper.style.borderColor === 'blue' ? 'black' : 'blue';
  btn_capitalize.style.color = btn_upper.style.color === 'blue' ? 'black' : 'black';
  btn_capitalize.style.borderColor = btn_upper.style.borderColor === 'blue' ? 'black' : 'black';
});

// Lowercase
btn_lower.addEventListener("click", () => {
  text_Area.value = text_Area.value.toLowerCase();
  btn_lower.style.color = 'blue';
  btn_lower.style.borderColor = 'blue';
  btn_upper.style.color = btn_lower.style.color === 'blue' ? 'black' : 'black';
  btn_upper.style.borderColor = btn_lower.style.borderColor === 'blue' ? 'black' : 'black';
  btn_capitalize.style.color = btn_lower.style.color === 'blue' ? 'black' : 'black';
  btn_capitalize.style.borderColor = btn_lower.style.borderColor === 'blue' ? 'black' : 'black';
});

// Capitalize
btn_capitalize.addEventListener("click", () => {
  text_Area.value =  text_Area.value === text_Area.value.replace(/\b\w/g, (char) => char.toUpperCase())?text_Area.value.toLowerCase():text_Area.value.replace(/\b\w/g, (char) => char.toUpperCase());
  btn_capitalize.style.color = btn_capitalize.style.color === 'blue' ? 'black' : 'blue';
  btn_capitalize.style.borderColor = btn_capitalize.style.borderColor === 'blue' ? 'black' : 'blue';
  btn_lower.style.color = btn_capitalize.style.color === 'blue' ? 'black' : 'blue';
  btn_lower.style.borderColor = btn_capitalize.style.borderColor === 'blue' ? 'black' : 'blue';
  btn_upper.style.color = btn_capitalize.style.color === 'blue' ? 'black' : 'black';
  btn_upper.style.borderColor = btn_capitalize.style.borderColor === 'blue' ? 'black' : 'black';
});

// Clear
btn_clear.addEventListener("click", () => {
  text_Area.value = '';
  btn_clear.style.color = 'blue';
  btn_clear.style.borderColor =  'blue';
});


// Text Color
textColorPicker.addEventListener("input", (e) => {
    text_Area.style.color = e.target.value;
    textColorPicker.style.color =  'blue';
    textColorPicker.style.borderColor =  'blue';
  });
  
  // Background Color
  bgColorPicker.addEventListener("input", (e) => {
    text_Area.style.backgroundColor = e.target.value;
    btn_palette.style.color = btn_palette.style.color === 'blue' ? 'black' : 'blue';
    btn_palette.style.borderColor = btn_palette.style.borderColor === 'blue' ? 'black' : 'blue';
  });
// Font Size
fontSizeInput.addEventListener("input", () => {
  const fontSize = fontSizeInput.value;
  text_Area.style.fontSize = fontSize + 'px';
});

// Font Family
fontFamilySelector.addEventListener("change", () => {
  const fontFamily = fontFamilySelector.value;
  text_Area.style.fontFamily = fontFamily;
});

// Print Text
btn_print.addEventListener("click", () => {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`<pre>${text_Area.value}</pre>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
  btn_print.style.color = btn_print.style.color === 'blue' ? 'black' : 'blue';
  btn_print.style.borderColor = btn_print.style.borderColor === 'blue' ? 'black' : 'blue';
});
