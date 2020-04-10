export default class GenericField {
  constructor(name, label) {
    this.name = name;
    this.label = label;
  }

  forView(value) {
    throw new Error('Called superclass');
  }

  forFilter() {
    throw new Error('Called superclass');
  }

  forForm() {
    throw new Error('Called superclass');
  }

  forFormInitialValue(value) {
    throw new Error('Called superclass');
  }

  forExport() {
    throw new Error('Called superclass');
  }

  forImport() {
    throw new Error('Called superclass');
  }
}
