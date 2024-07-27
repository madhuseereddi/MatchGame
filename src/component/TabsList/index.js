import React from 'react'
import './index.css'

const TabsList = ({ eachItem, switchingTab, isActive }) => {
  const { tabId, displayText } = eachItem

  const switchTab = () => {
    switchingTab(tabId)
  }

  return (
    <li>
      <button
        className={isActive ? 'tablist-para1 active-tab' : 'tablist-para1'}
        onClick={switchTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsList