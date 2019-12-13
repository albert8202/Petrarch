<template>
  <section data-v-0f1723f0 class="el-container container-defineLibrary is-vertical">
    <!-- <header data-v-0f1723f0 class="el-header" style="height: 60px;">
      <nav data-v-273cece6 data-v-0f1723f0 class="nav-bar">
        <div data-v-273cece6 class="brand">
          <img
            data-v-273cece6
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABBCAYAAAA36tphAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZjAzZDM3Zi00OWVmLTQ5OWMtYjcyYi0yNTA3NzNmMGQ0MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDkwMkRCNEZCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDkwMkRCNEVCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEREY2REJENTcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEREY2REJENjcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIvPiA8L3Jk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"
            alt
          />
        </div>
        <div data-v-273cece6 class="navbar-right">
          <span data-v-273cece6 class>
            <i data-v-273cece6 class="fa fa-file-text"></i> 我的分析
          </span>
          <span data-v-273cece6 class="active">
            <i data-v-273cece6 class="fa fa-bar-chart"></i> 分析配置
          </span>
          <div data-v-273cece6 class="el-dropdown">
            <span
              data-v-273cece6
              class="el-dropdown-link el-dropdown-selfdefine"
              aria-haspopup="list"
              aria-controls="dropdown-menu-6927"
              role="button"
              tabindex="0"
            >
              <i data-v-273cece6 class="fa fa-user-circle"></i>
              <span data-v-273cece6 class="pl0">return0</span>
              <i data-v-273cece6 class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <ul
              data-v-273cece6
              class="el-dropdown-menu el-popper"
              id="dropdown-menu-6927"
              style="display: none;"
            >
              <span data-v-273cece6>
                <li data-v-273cece6 tabindex="-1" class="el-dropdown-menu__item">个人中心</li>
              </span>
              <span data-v-273cece6>
                <li data-v-273cece6 tabindex="-1" class="el-dropdown-menu__item">个人权益</li>
              </span>
              <span data-v-273cece6>
                <li data-v-273cece6 tabindex="-1" class="el-dropdown-menu__item">退出</li>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </header> -->
    <div data-v-0f1723f0 class="content">
      <div data-v-0f1723f0 class="el-row">
        <div data-v-0f1723f0 class="el-col el-col-22">
          <ul data-v-0f1723f0 class="menus">
            <router-link to="AnalysisMenu">
            <li data-v-0f1723f0 style="cursor: pointer;">
              <span data-v-0f1723f0>分析配置</span>
              <i data-v-0f1723f0 class="fa fa-angle-right fa-lg"></i>&nbsp;
            </li>
            </router-link>
            <li data-v-0f1723f0 style="color: rgb(233, 71, 67);">
              <span data-v-0f1723f0>分词词典</span>
            </li>
          </ul>
        </div>
        <div data-v-0f1723f0 class="el-col el-col-2">
          <div data-v-0f1723f0 style="margin-top: 20px; text-align: right; display: none;">
            <button
              data-v-0f1723f0
              type="button"
              class="el-button el-button--primary el-button--mini"
              style="background-color: rgb(247, 247, 247); color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);"
            >
              <!---->
              <!---->
              <span>返回分析</span>
            </button>
          </div>
        </div>
      </div>
      <div data-v-0f1723f0 class="el-col el-col-24">
        <form data-v-0f1723f0 class="el-form el-form--label-left">
          <div data-v-0f1723f0 class="el-form-item">
            <label class="el-form-item__label">词典名称</label>
            <div class="el-form-item__content">
              <div data-v-0f1723f0 class="el-input el-input--suffix" style="width: 200px;">
                <!---->
                <input type="text" autocomplete="off" placeholder="请输入" class="el-input__inner" />
                <!---->
                <!---->
                <!---->
              </div>
              <button data-v-0f1723f0 type="button" class="el-button el-button--primary">
                <!---->
                <!---->
                <span>查询</span>
              </button>
              <!---->
            </div>
          </div>
        </form>
      </div>
      <div data-v-0f1723f0 class="el-col el-col-24">
        <button data-v-0f1723f0 type="button" class="el-button wordStatistics el-button--text" style="margin-bottom:20px">
          <!---->
          <!---->
          <span>
            <i data-v-0f1723f0 class="fa fa-plus-square-o fa-lg"></i> &nbsp;创建词典
          </span>
        </button>
        <p data-v-0f1723f0></p>
      </div>
      <div data-v-0f1723f0 class="el-col el-col-24">
        <div data-v-0f1723f0 class="el-table el-table--fit el-table--enable-row-transition">
          <div class="hidden-columns">
            <div data-v-0f1723f0></div>
            <div data-v-0f1723f0></div>
            <div data-v-0f1723f0></div>
            <div data-v-0f1723f0></div>
          </div>
          <div class="el-table__header-wrapper">
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              class="el-table__header"
              style="width: 1160px;"
            >
              <colgroup>
                <col name="el-table_3_column_12" width="55" />
                <col name="el-table_3_column_13" width="369" />
                <col name="el-table_3_column_14" width="368" />
                <col name="el-table_3_column_15" width="368" />
              </colgroup>
              <thead class>
                <tr class>
                  <th
                    colspan="1"
                    rowspan="1"
                    class="el-table_3_column_12 is-center is-leaf"
                    style="background-color: rgb(245, 247, 249); font-weight: bold; text-align: center;"
                  >
                    <div class="cell">#</div>
                  </th>
                  <th
                    colspan="1"
                    rowspan="1"
                    class="el-table_3_column_13 is-leaf"
                    style="background-color: rgb(245, 247, 249); font-weight: bold; text-align: center;"
                  >
                    <div class="cell">词典名称</div>
                  </th>
                  <th
                    colspan="1"
                    rowspan="1"
                    class="el-table_3_column_14 is-leaf"
                    style="background-color: rgb(245, 247, 249); font-weight: bold; text-align: center;"
                  >
                    <div class="cell">创建时间</div>
                  </th>
                  <th
                    colspan="1"
                    rowspan="1"
                    class="el-table_3_column_15 is-center is-hidden is-leaf"
                    style="background-color: rgb(245, 247, 249); font-weight: bold; text-align: center;"
                  >
                    <div class="cell">操作</div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="el-table__body-wrapper is-scrolling-none">
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              class="el-table__body"
              style="width: 1160px;"
            >
              <colgroup>
                <col name="el-table_3_column_12" width="55" />
                <col name="el-table_3_column_13" width="369" />
                <col name="el-table_3_column_14" width="368" />
                <col name="el-table_3_column_15" width="368" />
              </colgroup>
              <tbody>
                <tr class="el-table__row" style="text-align: center;">
                  <td
                    rowspan="1"
                    colspan="1"
                    class="el-table_3_column_12 is-center"
                    style="text-align: center; height: 30px;"
                  >
                    <div class="cell">26</div>
                  </td>
                  <td
                    rowspan="1"
                    colspan="1"
                    class="el-table_3_column_13"
                    style="text-align: center; height: 30px;"
                  >
                    <div class="cell">Ss</div>
                  </td>
                  <td
                    rowspan="1"
                    colspan="1"
                    class="el-table_3_column_14"
                    style="text-align: center; height: 30px;"
                  >
                    <div class="cell">2019-12-12 14:29:49</div>
                  </td>
                  <td
                    rowspan="1"
                    colspan="1"
                    class="el-table_3_column_15 is-center is-hidden"
                    style="text-align: center; height: 30px;"
                  >
                    <div class="cell">
                      <div data-v-0f1723f0 class="el-dropdown">
                        <button
                          data-v-0f1723f0
                          type="button"
                          class="el-button el-button--info el-button--mini el-dropdown-selfdefine"
                          aria-haspopup="list"
                          aria-controls="dropdown-menu-4711"
                          role="button"
                          tabindex="0"
                        >
                          <!---->
                          <!---->
                          <span>
                            操作
                            <i
                              class="fa fa-arrow-down"
                            ></i>
                          </span>
                        </button>
                        
                        <!-- <ul
                          data-v-0f1723f0
                          class="el-dropdown-menu el-popper"
                          id="dropdown-menu-5424"
                          style="display: none;"
                        >
                          <span data-v-0f1723f0>
                            <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">查看</li>
                          </span>
                          <span data-v-0f1723f0>
                            <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">编辑</li>
                          </span>
                          <span data-v-0f1723f0>
                            <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">导入</li>
                          </span>
                          <span data-v-0f1723f0>
                            <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">删除</li>
                          </span>
                        </ul> -->
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="el-table__row" style="text-align: center;">
                  <td
                    rowspan="1"
                    colspan="1"
                    class="el-table_3_column_12 is-center"
                    style="text-align: center; height: 30px;"
                  >
                    <div class="cell">19</div>
                  </td>
                  <td
                    rowspan="1"
                    colspan="1"
                    class="el-table_3_column_13"
                    style="text-align: center; height: 30px;"
                  >
                    <div class="cell">分词词典模板</div>
                  </td>
                  <td
                    rowspan="1"
                    colspan="1"
                    class="el-table_3_column_14"
                    style="text-align: center; height: 30px;"
                  >
                    <div class="cell">2019-10-16 14:08:31</div>
                  </td>
                  <td
                    rowspan="1"
                    colspan="1"
                    class="el-table_3_column_15 is-center is-hidden"
                    style="text-align: center; height: 30px;"
                  >
                    <div class="cell">
                      <div data-v-0f1723f0 class="el-dropdown">
                        <button
                          data-v-0f1723f0
                          type="button"
                          class="el-button el-button--info el-button--mini el-dropdown-selfdefine"
                          aria-haspopup="list"
                          aria-controls="dropdown-menu-7312"
                          role="button"
                          tabindex="0"
                        >
                          <!---->
                          <!---->
                          <span>
                            操作
                            <i
                              class="fa fa-arrow-down"
                            ></i>
                          </span>
                        </button>
                        <ul
                          data-v-0f1723f0
                          class="el-dropdown-menu el-popper"
                          id="dropdown-menu-7312"
                          style="display: none;"
                        >
                          <span data-v-0f1723f0>
                            <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">查看</li>
                          </span>
                          <span data-v-0f1723f0 style="display: none;">
                            <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">编辑</li>
                          </span>
                          <span data-v-0f1723f0 style="display: none;">
                            <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">导入</li>
                          </span>
                          <span data-v-0f1723f0 style="display: none;">
                            <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">删除</li>
                          </span>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <!---->
              </tbody>
            </table>
            <!---->
            <!---->
          </div>
          <!---->
          <!---->
          <div class="el-table__fixed-right" style="width: 368px; height: 159px;">
            <div class="el-table__fixed-header-wrapper">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                class="el-table__header"
                style="width: 1160px;"
              >
                <colgroup>
                  <col name="el-table_3_column_12" width="55" />
                  <col name="el-table_3_column_13" width="369" />
                  <col name="el-table_3_column_14" width="368" />
                  <col name="el-table_3_column_15" width="368" />
                </colgroup>
                <thead class>
                  <tr class>
                    <th
                      colspan="1"
                      rowspan="1"
                      class="el-table_3_column_12 is-center is-hidden is-leaf"
                      style="background-color: rgb(245, 247, 249); font-weight: bold; text-align: center;"
                    >
                      <div class="cell">#</div>
                    </th>
                    <th
                      colspan="1"
                      rowspan="1"
                      class="el-table_3_column_13 is-hidden is-leaf"
                      style="background-color: rgb(245, 247, 249); font-weight: bold; text-align: center;"
                    >
                      <div class="cell">词典名称</div>
                    </th>
                    <th
                      colspan="1"
                      rowspan="1"
                      class="el-table_3_column_14 is-hidden is-leaf"
                      style="background-color: rgb(245, 247, 249); font-weight: bold; text-align: center;"
                    >
                      <div class="cell">创建时间</div>
                    </th>
                    <th
                      colspan="1"
                      rowspan="1"
                      class="el-table_3_column_15 is-center is-leaf"
                      style="background-color: rgb(245, 247, 249); font-weight: bold; text-align: center;"
                    >
                      <div class="cell">操作</div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="el-table__fixed-body-wrapper" style="top: 45px;">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                class="el-table__body"
                style="width: 1160px;"
              >
                <colgroup>
                  <col name="el-table_3_column_12" width="55" />
                  <col name="el-table_3_column_13" width="369" />
                  <col name="el-table_3_column_14" width="368" />
                  <col name="el-table_3_column_15" width="368" />
                </colgroup>
                <tbody>
                  <tr class="el-table__row" style="text-align: center;">
                    <td
                      rowspan="1"
                      colspan="1"
                      class="el-table_3_column_12 is-center is-hidden"
                      style="text-align: center; height: 30px;"
                    >
                      <div class="cell">26</div>
                    </td>
                    <td
                      rowspan="1"
                      colspan="1"
                      class="el-table_3_column_13 is-hidden"
                      style="text-align: center; height: 30px;"
                    >
                      <div class="cell">Ss</div>
                    </td>
                    <td
                      rowspan="1"
                      colspan="1"
                      class="el-table_3_column_14 is-hidden"
                      style="text-align: center; height: 30px;"
                    >
                      <div class="cell">2019-12-12 14:29:49</div>
                    </td>
                    <td
                      rowspan="1"
                      colspan="1"
                      class="el-table_3_column_15 is-center"
                      style="text-align: center; height: 30px;"
                    >
                      <div class="cell">
                        <div data-v-0f1723f0 class="el-dropdown">
                          <button
                            data-v-0f1723f0
                            type="button"
                            class="el-button el-button--info el-button--mini el-dropdown-selfdefine"
                            aria-haspopup="list"
                            aria-controls="dropdown-menu-5220"
                            role="button"
                            tabindex="0"
                          >
                            <!---->
                            <!---->
                            <span>
                              操作
                              <i
                              class="fa fa-arrow-down"
                            ></i>
                              <!-- <i
                                data-v-0f1723f0
                                class="el-icon-arrow-down el-icon&amp;#45;&amp;#45;right"
                              ></i> -->
                            </span>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="el-table__row" style="text-align: center;">
                    <td
                      rowspan="1"
                      colspan="1"
                      class="el-table_3_column_12 is-center is-hidden"
                      style="text-align: center; height: 30px;"
                    >
                      <div class="cell">19</div>
                    </td>
                    <td
                      rowspan="1"
                      colspan="1"
                      class="el-table_3_column_13 is-hidden"
                      style="text-align: center; height: 30px;"
                    >
                      <div class="cell">分词词典模板</div>
                    </td>
                    <td
                      rowspan="1"
                      colspan="1"
                      class="el-table_3_column_14 is-hidden"
                      style="text-align: center; height: 30px;"
                    >
                      <div class="cell">2019-10-16 14:08:31</div>
                    </td>
                    <td
                      rowspan="1"
                      colspan="1"
                      class="el-table_3_column_15 is-center"
                      style="text-align: center; height: 30px;"
                    >
                      <div class="cell">
                        <div data-v-0f1723f0 class="el-dropdown">
                          <button
                            data-v-0f1723f0
                            type="button"
                            class="el-button el-button--info el-button--mini el-dropdown-selfdefine"
                            aria-haspopup="list"
                            aria-controls="dropdown-menu-5392"
                            role="button"
                            tabindex="0"
                          >
                            <!---->
                            <!---->
                            <span>
                              操作
                              <i
                              class="fa fa-arrow-down"
                            ></i>
                              <!-- <i
                                data-v-0f1723f0
                                class="el-icon-arrow-down el-icon&amp;#45;&amp;#45;right"
                              ></i> -->
                            </span>
                          </button>
                          <ul
                            data-v-0f1723f0
                            class="el-dropdown-menu el-popper"
                            id="dropdown-menu-5392"
                            style="display: none;"
                          >
                            <span data-v-0f1723f0>
                              <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">查看</li>
                            </span>
                            <span data-v-0f1723f0 style="display: none;">
                              <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">编辑</li>
                            </span>
                            <span data-v-0f1723f0 style="display: none;">
                              <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">导入</li>
                            </span>
                            <span data-v-0f1723f0 style="display: none;">
                              <li data-v-0f1723f0 tabindex="-1" class="el-dropdown-menu__item">删除</li>
                            </span>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!---->
                </tbody>
              </table>
            </div>
            <!---->
          </div>
          <div class="el-table__fixed-right-patch" style="width: 0px; height: 45px;"></div>
          <div class="el-table__column-resize-proxy" style="display: none;"></div>
          <div class="el-loading-mask" style="display: none;">
            <div class="el-loading-spinner">
              <svg viewBox="25 25 50 50" class="circular">
                <circle cx="50" cy="50" r="20" fill="none" class="path" />
              </svg>
              <!---->
            </div>
          </div>
        </div>
      </div>
      <div data-v-0f1723f0 class="el-col el-col-24" style="margin-top: 10px;">
        <div data-v-0f1723f0 class="el-pagination">
          <span class="el-pagination__total">共 2 条</span>
          <button type="button" disabled="disabled" class="btn-prev">
            <i class="fa fa-arrow-left"></i>
          </button>
          <ul class="el-pager">
            <li class="number active">1</li>
            <!---->
            <!---->
            <!---->
          </ul>
          <button type="button" disabled="disabled" class="btn-next">
            <i class="fa fa-arrow-right"></i>
          </button>
          <span class="el-pagination__jump">
            前往
            <div class="el-input el-pagination__editor is-in-pagination">
              <!---->
              <input type="number" autocomplete="off" min="1" max="1" class="el-input__inner" />
              <!---->
              <!---->
              <!---->
            </div>页
          </span>
        </div>
      </div>
    </div>
    <footer data-v-0f1723f0 class="el-footer" style="height: 60px;">
      <div data-v-4e9c2f90 data-v-0f1723f0 class="footer">
        <div data-v-4e9c2f90 class="links">
          <a data-v-4e9c2f90 href="#">关于我们</a>
          <a data-v-4e9c2f90 href="#">服务协议</a>
          <a data-v-4e9c2f90>隐私政策</a>
        </div>
        <div data-v-4e9c2f90 class="copyright">
          Copyright © 2019 上海萌泰数据科技股份有限公司 © 版权所有.
          <a
            data-v-4e9c2f90
            href=" http://beian.miit.gov.cn"
            target="_blank"
            style="color: rgb(73, 49, 133);"
          >沪 ICP 备 09099644 号</a>
        </div>
      </div>
    </footer>
  </section>
  
</template>

<script>
export default {
  name: "Dictionary",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>