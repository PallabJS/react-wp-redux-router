import React from "react";

import { createUseStyles } from "react-jss";
import { coreColor, coreStyle } from "../../core/styles/styleDefinition";
import { useCoreStyle } from "../../core/styles/style.container";

const useStyle = createUseStyles({
  card: {
    width: "100%",
    minHeight: 200,
    boxShadow: coreStyle.boxShadow[1],
  },
  productImage: {
    width: "100%",
    height: "auto",
  },
  header: {
    color: coreColor.blue(1, 100),
    fontSize: coreStyle.fontSize.normal,
    fontWeight: coreStyle.fontWeight[2],
    marginBottom: 5,
  },
  subtitle: {
    color: coreColor.blue(1, 200),
    fontSize: coreStyle.fontSize.medium,
    fontWeight: coreStyle.fontWeight[1],
  },
  extraText: {
    margin: 10,
    fontSize: coreStyle.fontSize.small,
  },
});

const Card = ({
  title,
  subtitle,
  imageUrl,
  submitText,
  cancelText,
  onSubmit,
  onCancel,
  extraText = [],
}) => {
  const coreStyle = useCoreStyle();
  const style = useStyle();

  if (!Array.isArray(imageUrl)) imageUrl = [imageUrl];

  return (
    <div className={style.Card}>
      <div style={{ width: "100%" }}>
        <img src={imageUrl} className={style.productImage} />
      </div>
      <header className={style.header} dangerouslySetInnerHTML={{ __html: title }}></header>
      <p className={style.subtitle}>{subtitle}</p>

      <div className={style.extraText}>{extraText}</div>

      <div className={coreStyle.inputGroup}>
        <input
          value={submitText}
          type="button"
          className={coreStyle.primaryButton}
          style={{ marginRight: "auto" }}
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default Card;
