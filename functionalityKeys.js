class Functionality {
  constructor(textArea) {
    this.textArea = textArea;
  }

  get lines() {
    return this.textArea.value.split('\n');
  }

  getCurrentPosition() {
    const { selectionStart } = this.textArea;
    const { lines } = this;

    const lineEnds = lines.reduce((acc, line) => {
      acc.push(acc[acc.length - 1] + line.length + 1);
      return acc;
    }, [0]);

    const index = lineEnds.findIndex((lineEnd) => lineEnd > selectionStart) - 1;
    return [index, selectionStart - lineEnds[index]];
  }

  setCurrentPosition(index) {
    this.textArea.setSelectionRange(index, index);
  }

  deleteSymbol() {
    const cursorPos = this.textArea.selectionStart;
    if (cursorPos > 0) {
      const textValue = this.textArea.value;
      const selectedText = textValue.substring(0, cursorPos - 1) + textValue.substring(cursorPos);
      this.textArea.value = selectedText;
      this.textArea.selectionStart = cursorPos - 1;
      this.textArea.selectionEnd = cursorPos - 1;
    }
  }

  tab() {
    const cursorPos = this.textArea.selectionStart;
    const selectedText = this.textArea.value.substring(cursorPos);
    const updatedValue = `${this.textArea.value.substring(0, cursorPos)}    ${selectedText}`;
    this.textArea.value = updatedValue;
    this.textArea.selectionStart = cursorPos + 4;
    this.textArea.selectionEnd = cursorPos + 4;
  }

  enter() {
    const cursorPos = this.textArea.selectionStart;
    const selectedText = this.textArea.value.substring(cursorPos);
    const updatedValue = `${this.textArea.value.substring(0, cursorPos)}\n${selectedText}`;
    this.textArea.value = updatedValue;
    this.textArea.selectionStart = cursorPos + 1;
    this.textArea.selectionEnd = cursorPos + 1;
  }

  space() {
    const cursorPos = this.textArea.selectionStart;
    const selectedText = this.textArea.value.substring(cursorPos);
    const updatedValue = `${this.textArea.value.substring(0, cursorPos)} ${selectedText}`;
    this.textArea.value = updatedValue;
    this.textArea.selectionStart = cursorPos + 1;
    this.textArea.selectionEnd = cursorPos + 1;
  }

  arrowUp() {
    const { selectionStart } = this.textArea;
    const [row, column] = this.getCurrentPosition();

    const previousLineBegin = selectionStart - column - 1;
    const newSelectionStart = row > 0 ? previousLineBegin : 0;
    this.setCurrentPosition(newSelectionStart);
  }

  arrowLeft() {
    const { selectionStart } = this.textArea;
    if (selectionStart === 0) return;

    this.setCurrentPosition(selectionStart - 1);
  }

  arrowDown() {
    const { selectionStart } = this.textArea;
    const [row, column] = this.getCurrentPosition();
    const { lines } = this;

    const nextLineBegin = selectionStart + lines[row].length - column + 1;
    const newSelectionStart = row < lines.length - 1
      ? nextLineBegin
      : this.textArea.value.length;
    this.setCurrentPosition(newSelectionStart);
  }

  arrowRight() {
    const { selectionStart } = this.textArea;
    if (selectionStart === this.textArea.value.length) return;

    this.setCurrentPosition(selectionStart + 1);
  }
}

export default Functionality;
