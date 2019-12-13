<template>
  <section data-v-7e5aa87c class="el-container container-subjectExtra is-vertical">
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
            <div
              style="line-height: 80px; text-align: right;  margin-right: 30px;  cursor: pointer;"
            >
              <i aria-hidden="true" class="fa fa-list"></i>
            </div>
          </div>
        </div>
        <div data-v-7e5aa87c class="el-row">
                <div data-v-7e5aa87c  style="margin-top:10px">
                  <form
                    data-v-7e5aa87c
                    class="el-form resultForm el-form--label-left el-form--inline"
                    width="100%"
                  >
                    <div data-v-7e5aa87c class="el-form-item">
                      <label class="el-form-item__label" style="width: 80px;">&nbsp;&nbsp;提取状态:</label>
                      <div class="el-form-item__content">
                        <button
                          data-v-7e5aa87c
                          type="button"
                          class="el-button el-button--success el-button--mini is-round"
                          style="cursor: auto;"
                        >
                          <!---->
                          <!---->
                          <span>已完成</span>
                        </button>
                        <!---->
                      </div>
                    </div>
                    <div data-v-7e5aa87c class="el-form-item">
                      <label class="el-form-item__label" style="width: 100px;">事件提取词典:</label>
                      <div class="el-form-item__content">
                        <div style="margin-left: 20px;">
                          xx词典
                          <!---->
                        </div>
                      </div>
                    </div>
                    <div data-v-7e5aa87c class="el-form-item">
                      <label class="el-form-item__label" style="width: 80px;">提取级别:</label>
                      <div class="el-form-item__content">
                        <div style="margin-left: 20px;">
                          随便
                          <!---->
                        </div>
                      </div>
                    </div>
                    <div data-v-7e5aa87c class="el-form-item">
                      <label class="el-form-item__label" style="width: 80px;">提取时间:</label>
                      <div class="el-form-item__content">
                        <div style="margin-left: 20px;">
                          2019-11-08 17:04:14
                          <!---->
                        </div>
                      </div>
                    </div>
                  </form>

                  <div>
                    <div data-v-7e5aa87c style="margin: 10px 0px; height: 30px;">
                      <div data-v-7e5aa87c class="el-col el-col-19">
                        <button
                          data-v-7e5aa87c
                          type="button"
                          class="el-button wordStatistics el-button--text"
                          style="cursor: auto;"
                        >
                          <!---->
                          <!---->
                          <span>
                            <i data-v-7e5aa87c class="fa fa-mars-stroke fa-lg"></i> &nbsp;提取结果
                          </span>
                        </button>
                      </div>
                    </div>

                    <el-table :data="tableData"  border           stripe
            header-cell-style="text-align: center"
            style="width: 100%">
                      <el-table-column align="center" prop="articleID" label="文本 ID" width="180"></el-table-column>
                      <el-table-column align="center" prop="title" label="标题" width="180"></el-table-column>
                      <el-table-column align="center" prop="content" label="正文"></el-table-column>
                      <el-table-column align="center" prop="num" label="事件数量"></el-table-column>
                      <el-table-column align="center" prop="operation" label="操作" width="80px"><el-button type="text" @click="toResultDetail">详情</el-button></el-table-column>
                    </el-table>

                    <div data-v-7e5aa87c style="margin: 10px 0px; height: 30px;">
                      <div data-v-7e5aa87c class="el-col el-col-pull-#24">
                        <button
                          data-v-7e5aa87c
                          type="button"
                          class="el-button wordStatistics el-button--text"
                          style="display: block;"
                        >
                          <!---->
                          <!---->
                          <span>
                            <i data-v-7e5aa87c class="fa fa-sign-out fa-lg"></i> &nbsp;导出
                          </span>
                        </button>
                      </div>
                    </div>
      <div data-v-0f1723f0 class="el-col el-col-24" style="margin-top: 10px;">
         <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="total,prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
      </div>
                  </div>
                </div>
              </div>
            </div>
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
  name: "EventResult",
  data() {
    return {
        tableData:[
            {
                articleID: '1',
                title:'title',
                content:'xxxxx',
                num:'233',
                operation:'',
            },
        ]
    };
  },
  methods:{
      toResultDetail(){
          this.$router.push('/resultDetail')
      }
  }
};
</script>

<style scoped>
</style>