
import React from "react";

export function Input({ value, id,onChange, name, disabled, type, pattern }) {
  return (
    <div className="form-group">
      <input
        className="form-control"
        value={value}
        id={id}
        onChange={onChange}
        type={type}
        name={name}
        disabled={disabled}
        pattern={pattern}
      />
    </div>
  );
}
