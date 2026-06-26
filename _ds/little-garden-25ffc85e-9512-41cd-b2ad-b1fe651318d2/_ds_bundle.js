/* @ds-bundle: {"format":3,"namespace":"LittleGardenDesignSystem_25ffc8","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a691ab7c8753","components/core/Button.jsx":"68e7d68bec47","components/core/Card.jsx":"c134d971eb67","components/core/Divider.jsx":"8e9928cd193b","components/core/Eyebrow.jsx":"c8f339674ff2","components/core/Input.jsx":"bbe757b509af","components/core/Tag.jsx":"7bb1ee717502"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LittleGardenDesignSystem_25ffc8 = window.LittleGardenDesignSystem_25ffc8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Little Garden — Badge
 * Small status / category pill. Tones: teal, gold, leaf, neutral, on-dark.
 */
function Badge({
  children,
  tone = "teal",
  subtle = false,
  style = {},
  ...rest
}) {
  const tones = {
    teal: {
      solid: "var(--color-primary)",
      tint: "var(--lg-teal-100)",
      ink: "var(--lg-teal-900)"
    },
    gold: {
      solid: "var(--color-secondary)",
      tint: "var(--lg-gold-100)",
      ink: "var(--lg-gold-700)"
    },
    leaf: {
      solid: "var(--lg-leaf-500)",
      tint: "#E4EEDA",
      ink: "#3A5A26"
    },
    neutral: {
      solid: "var(--lg-ink-700)",
      tint: "var(--lg-cream-200)",
      ink: "var(--lg-ink-700)"
    }
  };
  const t = tones[tone] || tones.teal;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "5px 11px",
    borderRadius: "var(--radius-pill)",
    background: subtle ? t.tint : t.solid,
    color: subtle ? t.ink : "var(--lg-white)",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Little Garden — Button
 * Variants: primary (teal), secondary (gold), outline, ghost.
 * Sizes: sm, md, lg. Optional pill shape and full width.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "13px"
    },
    md: {
      padding: "12px 24px",
      fontSize: "15px"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "16px"
    }
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--lg-white)",
      border: "1.5px solid var(--color-primary)"
    },
    secondary: {
      background: "var(--color-secondary)",
      color: "var(--lg-white)",
      border: "1.5px solid var(--color-secondary)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1.5px solid var(--color-primary)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1.5px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "transform var(--dur-fast) var(--ease-soft), background var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
    WebkitTapHighlightColor: "transparent",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverBg = {
    primary: "var(--color-primary-hover)",
    secondary: "var(--color-secondary-hover)",
    outline: "var(--color-primary-tint)",
    ghost: "var(--color-primary-tint)"
  };
  const onEnter = e => {
    if (disabled) return;
    e.currentTarget.style.background = hoverBg[variant];
    if (variant === "primary" || variant === "secondary") {
      e.currentTarget.style.borderColor = hoverBg[variant];
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.borderColor = variants[variant].border.split(" ").pop();
    e.currentTarget.style.boxShadow = "none";
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(1px) scale(0.99)";
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = "none";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Little Garden — Card
 * Soft warm container. Variants: elevated (shadow), outline, flat.
 * Optional padding control and hoverable lift.
 */
function Card({
  children,
  variant = "elevated",
  padding = "lg",
  hoverable = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: "0",
    sm: "16px",
    md: "24px",
    lg: "32px"
  };
  const variants = {
    elevated: {
      background: "var(--surface-card)",
      border: "1.5px solid transparent",
      boxShadow: "var(--shadow-md)"
    },
    outline: {
      background: "var(--surface-card)",
      border: "1.5px solid var(--border-soft)",
      boxShadow: "none"
    },
    flat: {
      background: "var(--surface-alt)",
      border: "1.5px solid transparent",
      boxShadow: "none"
    }
  };
  const base = {
    borderRadius: "var(--radius-lg)",
    padding: pads[padding],
    transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    overflow: "hidden",
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (!hoverable) return;
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "var(--shadow-lg)";
  };
  const onLeave = e => {
    if (!hoverable) return;
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = variants[variant].boxShadow;
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Little Garden — Divider
 * Centered ornamental rule with optional center label (the "est. 2025" feel).
 * A small leaf mark sits in the middle when no label is given.
 */
function Divider({
  label,
  tone = "gold",
  style = {},
  ...rest
}) {
  const lineColor = tone === "teal" ? "var(--border-strong)" : "var(--border-gold)";
  const markColor = tone === "teal" ? "var(--color-primary)" : "var(--color-secondary)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      color: markColor,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1.5px",
      background: lineColor
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "18px",
      color: markColor,
      whiteSpace: "nowrap"
    }
  }, label) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      lineHeight: 1
    },
    "aria-hidden": "true"
  }, "\u2767"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1.5px",
      background: lineColor
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Little Garden — Eyebrow
 * All-caps tracked kicker above headings. Optional leading leaf mark / rule.
 */
function Eyebrow({
  children,
  tone = "gold",
  withRule = false,
  style = {},
  ...rest
}) {
  const colors = {
    gold: "var(--text-accent)",
    teal: "var(--color-primary)",
    onDark: "var(--lg-gold-300)",
    muted: "var(--text-muted)"
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "13px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: colors[tone] || colors.gold,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), withRule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "32px",
      height: "1.5px",
      background: "currentColor",
      opacity: 0.5
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Little Garden — Input
 * Text field with optional label, helper, and error state.
 */
function Input({
  label,
  helper,
  error,
  id,
  type = "text",
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `lg-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const fieldStyle = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    color: "var(--text-strong)",
    background: "var(--surface-card)",
    padding: "12px 14px",
    borderRadius: "var(--radius-sm)",
    border: `1.5px solid ${error ? "var(--color-danger)" : "var(--border-soft)"}`,
    outline: "none",
    transition: "border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
    ...style
  };
  const onFocus = e => {
    e.currentTarget.style.borderColor = error ? "var(--color-danger)" : "var(--focus-ring)";
    e.currentTarget.style.boxShadow = `0 0 0 3px ${error ? "rgba(194,75,58,0.15)" : "rgba(41,138,129,0.15)"}`;
  };
  const onBlur = e => {
    e.currentTarget.style.borderColor = error ? "var(--color-danger)" : "var(--border-soft)";
    e.currentTarget.style.boxShadow = "none";
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    style: fieldStyle,
    onFocus: onFocus,
    onBlur: onBlur
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: error ? "var(--color-danger)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Little Garden — Tag
 * Filter / removable chip. Selectable + dismissible variants.
 */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: "13px",
    padding: "7px 14px",
    borderRadius: "var(--radius-pill)",
    cursor: onClick ? "pointer" : "default",
    transition: "background var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft)",
    background: selected ? "var(--color-primary)" : "var(--surface-card)",
    color: selected ? "var(--lg-white)" : "var(--text-strong)",
    border: `1.5px solid ${selected ? "var(--color-primary)" : "var(--border-strong)"}`,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base,
    onClick: onClick
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      cursor: "pointer",
      fontSize: "15px",
      lineHeight: 1,
      opacity: 0.7
    },
    "aria-label": "remove"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
