import React from "react";
import "../style/flowchart.css";

const FlowChart = () => {
  return (
    <div class="content">
      <h1 className="flowhead">Benefits</h1>

      <ul class="administration">
        <li>
          <ul class="director">
            <li>
              <ul>
                <li class="department dep-b">
                  <ul class="sections">
                    <li class="section">
                      <a href="/">
                        <span>Competitive Pricing</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="department dep-c">
                  <ul class="sections">
                    <li class="section">
                      <a href="/">
                        <span> Fresh Quality</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="department dep-d">
                  <ul class="sections">
                    <li class="section">
                      <a href="/">
                        <span>High-Speed Logistic Support</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="department dep-e">
                  <ul class="sections">
                    <li class="section">
                      <a href="/">
                        <span>Credit Facilities</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FlowChart;
