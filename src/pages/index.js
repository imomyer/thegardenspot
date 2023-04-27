import * as React from "react"

import '../styles/global.css'

const IndexPage = () => {
  return (
    <main>
      <div class="title-container"><h1>THE GARDEN SPOT</h1></div>
      <div class="content">
        <div>
            <img
          class="portrait"
          src="../../Roll_308-030.jpg"
          alt="The Garden Spot"
        />
        </div>
        <div>
          <img
            class="landscape"
            src="../../Roll_296-14.jpg"
            alt="The Garden Spot"
          />
      </div>
      <div>
        <img
          class="portrait"
          src="../../Roll_309-008.jpg"
          alt="The Garden Spot"
        />
      </div>
      <div>
        <img
          class="portrait"
          src="../../Roll_310-36.jpg"
          alt="The Garden Spot"
        />
      </div>
      <div>
        <img
          class="landscape"
          src="../../Roll_310-27.jpg"
          alt="The Garden Spot"
        />
      </div>
    </div>
    </main>
  )
}

export default IndexPage
