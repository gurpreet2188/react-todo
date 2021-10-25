import React, { forwardRef }from "react";
const Test = (props, ref) => (
    <button ref={ref}>Test</button>
)

export default forwardRef(Test)