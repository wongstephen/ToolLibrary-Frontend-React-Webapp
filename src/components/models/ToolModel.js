const FormData = require("form-data");

class ToolModel {
  constructor(toolName, toolLoanee, toolAvator, toolImageUrl) {
    this.toolName = toolName;
    this.toolLoanee = toolLoanee;
    this.toolAvator = toolAvator;
    this.toolImageUrl = toolImageUrl;
    this.toolImageFile = null;
    this.toolNotes = "";
  }

  getToolName() {
    return this.toolName;
  }

  getToolLoanee() {
    if (!this.loanee) {
      return "";
    }
    return this.toolLoanee;
  }

  getToolAvator() {
    return this.toolAvator;
  }

  getToolImageUrl() {
    return this.toolImageUrl;
  }

  getToolImageFile() {
    return this.toolImageFile;
  }

  getToolNotes() {
    return this.toolNotes;
  }

  setToolName(el) {
    this.toolName = el;
  }

  setToolLoanee(el) {
    this.toolLoanee = el;
  }

  setToolAvator(el) {
    this.toolAvator = el;
  }

  setToolImageUrl(el) {
    this.toolImageUrl = el;
  }

  setToolImageFile(el) {
    this.toolImageFile = el;
  }

  setToolNotes(el) {
    this.toolNotes = el.toString();
  }
  getFormData() {
    const formData = new FormData();
    this.toolName && formData.append("name", this.toolName);
    this.toolLoanee && formData.append("loanee", this.toolLoanee);
    this.toolAvator && formData.append("avator", this.toolAvator);
    this.toolImageFile && formData.append("toolImageFile", this.toolImageFile);
    this.toolNotes && formData.append("notes", this.toolNotes);
    // console.log(tshis.toolImageFile);
    // for (const el of formData.entries()) {
    //   console.log(el[0] + ": " + el[1]);
    // }
    return formData;
  }
}

export default ToolModel;
