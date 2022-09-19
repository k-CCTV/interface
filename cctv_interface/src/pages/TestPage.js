import React from "react";
import "../css/test.css";
import { Icon } from "@iconify/react";

function TestPage() {
  return (
    <div className="testPage">
      <div className="app-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="app-icon">
              <Icon icon="bxs:cctv" width="36" height="36" />
            </div>
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item active">
              <a href="/">
                <Icon icon="ant-design:home-outlined" width="24" height="24" />
                <span>Home</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="/danger">
                <Icon
                  icon="ph:traffic-signal-light"
                  color="red"
                  width="24"
                  height="24"
                />
                <span>Danger</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="/warn">
                <Icon
                  icon="ph:traffic-signal-light"
                  color="orange"
                  width="24"
                  height="24"
                />
                <span>Warn</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="/normal">
                <Icon
                  icon="ph:traffic-signal-light"
                  color="green"
                  width="24"
                  height="24"
                />
                <span>Normal</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="/null">
                <Icon
                  icon="ph:traffic-signal-light"
                  color="grey"
                  width="24"
                  height="24"
                />
                <span>Null</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="/test">
                <Icon icon="ph:traffic-signal-light" width="24" height="24" />
                <span>Test Server</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="app-content">
          <div className="app-content-header">
            <h1 className="app-content-headerText">CCTV List</h1>
            <button className="mode-switch" title="Switch Theme">
              <Icon icon="eva:moon-fill" width="24" height="24" />
            </button>
            <button
              className="app-content-headerButton"
              //   onclick="window.location.href='/post'"
            >
              Add Image
            </button>
          </div>
          <div className="app-content-actions">
            <input
              className="search-bar"
              placeholder="Search for title"
              type="text"
              //   onkeyup="searchFunc()"
            />
            <div className="app-content-actions-wrapper">
              <div className="filter-button-wrapper">
                <button className="action-button filter jsFilter">
                  <span>Filter</span>
                  <Icon icon="line-md:image-twotone" width="24" height="24" />
                </button>
                <div className="filter-menu">
                  <label>Category</label>
                  <select>
                    <option>All Categories</option>
                    <option>Furniture</option>
                    <option>Decoration</option>
                    <option>Kitchen</option>
                    <option>Bathroom</option>
                  </select>
                  <label>Status</label>
                  <select>
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Disabled</option>
                  </select>
                  <div className="filter-menu-buttons">
                    <button className="filter-button reset">Reset</button>
                    <button className="filter-button apply">Apply</button>
                  </div>
                </div>
              </div>
              <button className="action-button list active" title="List View">
                <Icon icon="bi:list-ol" width="24" height="24" />
              </button>
              <button className="action-button grid" title="Grid View">
                <Icon icon="bi:grid-3x3" width="24" height="24" />
              </button>
            </div>
          </div>
          <div className="cctv-area-wrapper tableView">
            <div className="cctv-header">
              <div className="cctv-cell image">
                CCTV
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell author">
                작성자
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell status-cell">
                상태
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell content">
                설명
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell created_date">
                작성날짜
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell modified_date">
                수정날짜
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
            </div>
            {/* {% for board in boards %}
          <div className="cctv-row">
            <button className="cell-more-button">
              <span className="iconify" data-icon="feather:more-vertical" data-width="18" data-height="18"></span>
            </button>
              <div className="cctv-cell image">
                {% if board.fileType == ".mp4" %}
                <img src="media/images/thumbnail.png" />
                {% else %}
                <img src="{{board.image.url}}" />
                {% endif %}
                <a href="/post/{{ board.id }}" id="searchTitle">
                  <span className="searchTitle">{{ board.title }}</span>
                </a>
              </div>
            <div className="cctv-cell author"><span className="cell-label">작성자</span><span className="searchAuthor">{{ board.author }}</span></div>
            <div className="cctv-cell status-cell">
              <span className="cell-label">상태:</span>
              {% if board.status == 1 %}
              <span className="status normal">정상</span>
              {% elif board.status == 2 %}
              <span className="status warn">경고</span>
              {% elif board.status == 3 %}
              <span className="status danger">위험</span>
              {% else %}
              <span className="status disabled">NULL</span>
              {% endif %}
            </div>
            <div className="cctv-cell content"><span className="cell-label">설명:</span><span className="searchContent">{{ board.content }}</span></div>
            <div className="cctv-cell created_date"><span className="cell-label">작성 날짜:</span>{{ board.created_date | date:"Y-m-d h:i" }}</div>
            <div className="cctv-cell modified_date"><span className="cell-label">수정 날짜:</span>{{ board.modified_date | date:"Y-m-d h:i" }}</div>
          </div>
          {% endfor %} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
