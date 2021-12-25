import React from "react";

const FeatureLocked = (props) => {
    const { pageName } = props;

    return (
        <div> {pageName} is currently locked. Become a premium member to access this Feature. </div>
    );
};

export default FeatureLocked;
