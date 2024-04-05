export default function(type, element, content, children) {
    // If element is a list item,
    if (type === "list-item") {
      // return some customized HTML.
      return `<li class="example-class">${children.join("")}</li>`;
    }
    // Otherwise, return null.
    return null;
  }