const FormData = require("form-data");

class ToolModel {
  constructor(toolName, toolLoanee, toolAvator, toolImageUrl) {
    this.toolName = toolName;
    this.toolLoanee = toolLoanee;
    this.toolAvator = toolAvator;
    this.toolImageUrl = toolImageUrl;
    this.toolImageFile = null;
  }

  getToolName() {
    return this.toolName;
  }

  getToolLoanee() {
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

  getFormData() {
    const formData = new FormData();
    this.toolName && formData.append("name", this.toolName);
    this.toolLoanee && formData.append("loanee", this.toolLoanee);
    this.toolAvator && formData.append("avator", this.toolAvator);
    this.toolImageFile && formData.append("toolImageFile", this.toolImageFile);
    console.log(this.toolImageFile);
    for (const el of formData.entries()) {
      console.log(el[0] + ": " + el[1]);
    }
    return formData;
  }
}

export default ToolModel;
