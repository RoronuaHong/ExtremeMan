import React from "react";
import { NavBar, Icon } from "antd-mobile";

import "./styles";

const CommonHeader = () => (
    <div className="common-header-box">
        <NavBar
            mode="dark"
            icon={ <Icon type="left" /> }
            onLeftClick={ () => console.log("onLeftClick") }
            rightContent={[
                <Icon key="0" type="ellipsis" />
            ]}
        >
            极简客
        </NavBar>
    </div>
);

export default CommonHeader;