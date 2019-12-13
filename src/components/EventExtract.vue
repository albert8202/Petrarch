<template>
  <section data-v-7e5aa87c class="el-container container-subjectExtra is-vertical">
    <!-- <header data-v-7e5aa87c class="el-header" style="height: 60px;">
      <nav data-v-273cece6 data-v-7e5aa87c class="nav-bar">
        <div data-v-273cece6 class="brand">
          <img
            data-v-273cece6
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABBCAYAAAA36tphAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZjAzZDM3Zi00OWVmLTQ5OWMtYjcyYi0yNTA3NzNmMGQ0MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDkwMkRCNEZCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDkwMkRCNEVCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEREY2REJENTcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEREY2REJENjcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIvPiA8L3Jk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"
            alt
          />
        </div>
        <div data-v-273cece6 class="navbar-right">
          <span data-v-273cece6 class="active">
            <i data-v-273cece6 class="fa fa-file-text"></i> 我的分析
          </span>
          <span data-v-273cece6 class>
            <i data-v-273cece6 class="fa fa-bar-chart"></i> 分析配置
          </span>
          <div data-v-273cece6 class="el-dropdown">
            <span
              data-v-273cece6
              class="el-dropdown-link el-dropdown-selfdefine"
              aria-haspopup="list"
              aria-controls="dropdown-menu-2534"
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
              id="dropdown-menu-2534"
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
    </header>-->
    <div data-v-7e5aa87c class="content">
      <div data-v-7e5aa87c class="el-row">
        <div data-v-7e5aa87c class="el-col el-col-22">
          <ul data-v-7e5aa87c class="menus">
            <li data-v-7e5aa87c style="cursor: pointer;">
              <span data-v-7e5aa87c>我的分析</span>
              <i data-v-7e5aa87c class="fa fa-angle-right fa-lg"></i>&nbsp;
            </li>
            <li data-v-7e5aa87c style="cursor: pointer;">
              <span data-v-7e5aa87c>分析</span>
              <i data-v-7e5aa87c class="fa fa-angle-right fa-lg"></i>&nbsp;
            </li>
            <li data-v-7e5aa87c style="color: rgb(233, 71, 67);">
              <span data-v-7e5aa87c>事件提取</span>
            </li>
          </ul>
        </div>
      </div>
      <div data-v-7e5aa87c class="el-row">
        <div
          data-v-7e5aa87c
          class="el-row"
          style="height: 80px; background-color: rgb(245, 247, 249);"
        >
          <div class="el-col el-col-22">
            <div class="el-row" style="height: 40px; line-height: 40px; padding-left: 20px;">
              <span>
                  <el-button type="success" style="padding:3px;font-size:10px;text-align:center">主</el-button>
                &nbsp;&nbsp;
              </span>
                <span
                  style="color: rgb(0, 0, 0); font-weight: bold; font-size: 14px;"
                >
                  文本库样例
                </span>
            </div>
            <div class="el-row" style="height: 40px; line-height: 30px; padding-left: 20px;">
              <form class="el-form el-form--label-left el-form--inline">
                <div class="el-form-item">
                  <!---->
                  <div class="el-form-item__content">
                    <div>
                      <i class="fa fa-database"></i>&nbsp;&nbsp;
                      <span>
                        共计：
                        <span style="color: red;">90</span>&nbsp;条
                      </span>
                    </div>
                    <!---->
                  </div>
                </div>
                <div class="el-form-item">
                  <!---->
                  <div class="el-form-item__content">
                    <div style="margin-left: 20px;">
                      <i aria-hidden="true" class="fa fa-clock-o"></i>&nbsp;&nbsp;
                      <span>创建时间：2019-11-08 16:37:04</span>
                    </div>
                    <!---->
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="el-col el-col-2">
            <div style="line-height: 80px; text-align: right; margin-right: 30px; cursor: pointer;">
              <i aria-hidden="true" class="fa fa-list"></i>
            </div>
          </div>
        </div>

        <div style="margin-top:20px">
          <el-table
            :data="tableData"
            stripe
            header-cell-style="background-color: rgb(245, 247, 249); text-align: center"
            style="width: 100%"
          >
            <el-table-column align="center" prop="name" label="名称"></el-table-column>
            <el-table-column align="center" prop="dicName" label="事件词典名称"></el-table-column>
            <el-table-column align="center" prop="level" label="提取级别"></el-table-column>
            <el-table-column align="center" prop="time" label="创建时间"></el-table-column>
            <el-table-column align="center" prop="state" label="状态">
              <el-button size="mini" type="success" round>
                <span>右边能点</span>
              </el-button>
            </el-table-column>
            <el-table-column  align="center" prop="operation" label="操作">
                <router-link to="EventResult">
                <el-button type="text"><span><i class="fa fa-line-chart"></i></span>
                </el-button>
                </router-link>
                <el-buutton type="text" style="margin-left:10px;color:rgb(0,0,0)"><span>
            <i class="fa fa-trash"></i></span></el-buutton></el-table-column>
          </el-table>
        </div>

        <div data-v-7e5aa87c class="newStatistic" style="display: block;">
          <div data-v-7e5aa87c class="add">
            <h3>&nbsp;&nbsp;新建主题抽取</h3>
            <p data-v-7e5aa87c></p>
          </div>
          <form data-v-7e5aa87c class="el-form el-form--label-left" style="width: 600px;">
            <div data-v-7e5aa87c class="el-form-item is-required">
              <label class="el-form-item__label" style="width: 100px;">事件文本库</label>
              <div class="el-form-item__content" style="margin-left: 100px;">
                <span data-v-7e5aa87c>
                  <div data-v-7e5aa87c class="el-select" style="width: 300px;">
                    <!---->
                    <div class="el-input el-input--suffix">
                      <!---->
                      <input
                        type="text"
                        readonly="readonly"
                        autocomplete="off"
                        placeholder="请选择"
                        class="el-input__inner"
                      />
                      <!---->
                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                          <!---->
                          <!---->
                        </span>
                        <!---->
                      </span>
                      <!---->
                    </div>
                    <div class="el-select-dropdown el-popper" style="display: none;">
                      <div class="el-scrollbar" style>
                        <div
                          class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                        >
                          <ul class="el-scrollbar__view el-select-dropdown__list">
                            <!---->
                            <li data-v-7e5aa87c class="el-select-dropdown__item selected">
                              <span>文本库样例</span>
                            </li>
                            <li data-v-7e5aa87c class="el-select-dropdown__item">
                              <span>中国梦</span>
                            </li>
                            <li data-v-7e5aa87c class="el-select-dropdown__item">
                              <span>新时代</span>
                            </li>
                          </ul>
                        </div>
                        <div class="el-scrollbar__bar is-horizontal">
                          <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                        </div>
                        <div class="el-scrollbar__bar is-vertical">
                          <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                        </div>
                      </div>
                      <!---->
                    </div>
                  </div>
                </span>
                <!---->
              </div>
            </div>
            <div data-v-7e5aa87c class="el-form-item is-required">
              <label for="name" class="el-form-item__label" style="width: 100px;">自定义名称</label>
              <div class="el-form-item__content" style="margin-left: 100px;">
                <div data-v-7e5aa87c class="el-input el-input--suffix" style="width: 300px;">
                  <!---->
                  <input type="text" autocomplete="off" placeholder="请输入" class="el-input__inner" />
                  <!---->
                  <!---->
                  <!---->
                </div>
                <!---->
              </div>
            </div>

            <div data-v-7e5aa87c class="el-form-item is-required">
              <label for="analysisParams" class="el-form-item__label" style="width: 100px;">提取级别</label>
              <div class="el-form-item__content" style="margin-left: 100px;">
                <div data-v-7e5aa87c role="radiogroup" class="el-radio-group">
                  <!-- <label
                          data-v-7e5aa87c
                          role="radio"
                          aria-checked="true"
                          tabindex="0"
                          class="el-radio is-checked"
                        >
                          <span class="el-radio__input is-checked">
                            <span class="el-radio__inner"></span>
                            <input
                              type="radio"
                              aria-hidden="true"
                              tabindex="-1"
                              class="el-radio__original"
                              value="1"
                            />
                          </span>
                          <span class="el-radio__label">
                            整篇抽取
                          </span>
                  </label>-->
                  <label data-v-7e5aa87c role="radio" tabindex="-1" class="el-radio">
                    <span class="el-radio__input">
                      <span class="el-radio__inner"></span>
                      <input
                        type="radio"
                        aria-hidden="true"
                        tabindex="-1"
                        class="el-radio__original"
                        value="2"
                      />
                    </span>
                    <span class="el-radio__label">
                      句子提取
                      <!---->
                    </span>
                  </label>
                  <label data-v-7e5aa87c role="radio" tabindex="-1" class="el-radio">
                    <span class="el-radio__input">
                      <span class="el-radio__inner"></span>
                      <input
                        type="radio"
                        aria-hidden="true"
                        tabindex="-1"
                        class="el-radio__original"
                        value="3"
                      />
                    </span>
                    <span class="el-radio__label">
                      段落提取
                      <!---->
                    </span>
                  </label>
                </div>
                <!---->
              </div>
            </div>
            <div data-v-7e5aa87c class="el-form-item is-required">
              <label for="subId" class="el-form-item__label" style="width: 100px;">事件词典</label>
              <div class="el-form-item__content" style="margin-left: 100px;">
                <div data-v-7e5aa87c class="el-select" style="width: 300px;">
                  <!---->
                  <div class="el-input el-input--suffix">
                    <!---->
                    <input
                      type="text"
                      readonly="readonly"
                      autocomplete="off"
                      placeholder="请选择"
                      class="el-input__inner"
                    />
                    <!---->
                    <span class="el-input__suffix">
                      <span class="el-input__suffix-inner">
                        <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                        <!---->
                        <!---->
                      </span>
                      <!---->
                    </span>
                    <!---->
                  </div>
                  <div class="el-select-dropdown el-popper" style="display: none;">
                    <div class="el-scrollbar" style>
                      <div
                        class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                      >
                        <ul class="el-scrollbar__view el-select-dropdown__list">
                          <!---->
                          <li data-v-7e5aa87c class="el-select-dropdown__item">
                            <span>主题逻辑词典模板 1</span>
                          </li>
                          <li data-v-7e5aa87c class="el-select-dropdown__item">
                            <span>主题逻辑词典模板 2</span>
                          </li>
                        </ul>
                      </div>
                      <div class="el-scrollbar__bar is-horizontal">
                        <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                      </div>
                      <div class="el-scrollbar__bar is-vertical">
                        <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
                <!-- 新建词典？ -->
                <!-- <button
                        data-v-7e5aa87c
                        type="button"
                        class="el-button el-tooltip el-button--default el-button--medium"
                        aria-describedby="el-tooltip-7609"
                        tabindex="0"
                      >
                        <i class="el-icon-plus"></i>
                </button>-->
                <!---->
              </div>
            </div>
          </form>
          <button data-v-7e5aa87c type="button" class="el-button el-button--primary">
            <!---->
            <!---->
            <span>开始抽取</span>
          </button>
          <button
            data-v-7e5aa87c
            type="button"
            class="el-button el-button--default"
            style="margin-bottom: 20px;"
          >
            <!---->
            <!---->
            <span>取消抽取</span>
          </button>
        </div>
      </div>
      <!---->
    </div>
    <footer data-v-7e5aa87c class="el-footer" style="height: 60px;">
      <div data-v-4e9c2f90 data-v-7e5aa87c class="footer">
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
  name: "EventExtract",
  data() {
    return {
      tableData: [
        {
          name: "name",
          dicName: "someDictionary",
          level: "juzi",
          time: "now",
          state: "",
          operation: ""
        }
      ]
    };
  },
  methods: {
    toResult() {
      this.$router.push("/eventResult");
    }
  }
};
</script>

<style scoped>
</style>