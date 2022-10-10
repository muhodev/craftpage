import { Fragment } from "react";

function isObject(val) {
  return val && typeof val === "object" && !Array.isArray(val);
}

function renderRecursively(key, blocks) {
  const block = blocks[key];

  if (!block) return null;

  const Element = block.element;

  const children = block.children;

  const attrs = isObject(block.attrs) ? block.attrs : {};

  if (!Element) return null;
  return (
    <Element key={block.key} {...attrs}>
      {typeof children === "string" && children}
      {Array.isArray(children) &&
        children.map((child) => (
          <Fragment key={child}>{renderRecursively(child, blocks)}</Fragment>
        ))}
    </Element>
  );
}

export default function Editor({ blocks }) {
  return renderRecursively("root", blocks);
}
