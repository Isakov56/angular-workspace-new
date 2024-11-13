export class TestClass {
    path: string;
  label: string;
  icon: string;

  // Constructor to initialize properties when an object is created
  constructor(path: string, label: string, icon: string) {
    this.path = path;
    this.label = label;
    this.icon = icon;
  }

  // Define a method
  displayInfo(): string {
    return `User: ${this.label} (icon: ${this.icon})`;
  }
}
