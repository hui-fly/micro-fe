<template>
    <div class="page" ref="page">
        <div class="container" ref="container">
            <div class="card-box search_container">
                <el-form inline label-width="80px" label-position="right" size="small" :model="filterParams">
                    <el-form-item label="任务名">
                        <el-input placeholder="请输入任务名" v-model.trim="filterParams.title" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="任务状态">
                        <el-select
                            class="source-from"
                            placeholder="请选择"
                            v-model="filterParams.task_status"
                            clearable
                        >
                            <el-option value label="全部"></el-option>
                            <el-option value="enable" label="上线"></el-option>
                            <el-option value="disable" label="下线"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="周期">
                        <el-input v-model="filterParams.task_cycle" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="getTaskList('cx')">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addTask">新增</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="card-box table_container">
                <div class="select-all btns"></div>
                <el-table
                    style="width: 100%"
                    align="center"
                    :data="tableData"
                    empty-text="暂无数据"
                    v-loading="tableLoading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    @selection-change="handleSelectionChange"
                    @row-click="handleClickRow"
                    ref="eltableCurrentRow"
                >
                    <el-table-column label="任务名" prop="title"></el-table-column>
                    <el-table-column label="任务惟一标识" prop="task_name"></el-table-column>
                    <el-table-column label="任务ID" prop="task_id"></el-table-column>
                    <el-table-column label="周期" prop="task_cycle" width="120px"></el-table-column>
                    <el-table-column label="分组类型" prop="task_type"></el-table-column>
                    <el-table-column label="上线状态" prop="task_status">
                        <template slot-scope="scoped">
                            <span>{{ scoped.row.task_status === 'enable' ? '上线' : '下线' }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="有效期" width="190px">
                        <template slot-scope="scoped">
                            <span v-if="scoped.row.start_time <= 0">长期</span>
                            <span v-else>
                                {{ new Date(scoped.row.start_time).toLocaleDateString() }}
                                至{{ new Date(scoped.row.end_time).toLocaleDateString() }}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="100px">
                        <div class="btns" slot-scope="scoped">
                            <el-button type="info" size="mini" @click.stop="editTask(scoped.row)">编辑</el-button>
                            <el-button type="warning" size="mini" @click.stop="handelDel(scoped.row)">删除</el-button>
                        </div>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <el-pagination
            background
            class="pagination"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="15"
            layout="total, prev, pager, next"
            :total="totalCount"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    components: {},
    data () {
        return {
            tableData: [
                {
                    title: '',
                    task_id: '',
                    task_type: '',
                    task_cycle: ''
                }
            ],
            filterParams: {
                page: 1,
                page_size: 15,
                title: '',
                task_status: '',
                task_cycle: ''
            },
            list: [],
            currentPage: 1,
            totalCount: 10,
            currentType: 1,
            tableLoading: false,
            flag: false
        };
    },
    computed: {},
    watch: {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {
        this.getTaskList();
    },
    methods: {
        editTask (row) {},
        addTask () {},
        handelDel (task) {},
        getTaskList (type) {
            if (type === 'cx') {
                this.filterParams.page = 1;
            }
            let params = {
                ...this.filterParams
            };
            this.tableLoading = true;
            this.$mapi.getTaskList(params).then(res => {
                this.tableLoading = false;
                let list = res.data.list;
                this.totalCount = res.data.total;
                list.forEach(item => {
                    if (item.start_time <= 0 && item.end_time <= 0) {
                        item.expiration = 1;
                    } else {
                        item.expiration = 2;
                        item.start_time *= 1000;
                        item.end_time *= 1000;
                        item.date = [item.start_time, item.end_time];
                    }
                });
                this.tableData = list;
            });
        },
        handleCurrentChange (page) {
            this.currentPage = page;
            this.filterParams.page = page;
            this.getTaskList();
        },
        handleSelectionChange (val) {},
        handleClickRow (row, col, event) {
            this.flag = !this.flag;
            this.$refs.eltableCurrentRow.toggleRowSelection(row, this.flag);
        }
    }
};
</script>
<style lang="less" scoped>
.page {
    width: 100%;
    .container {
        overflow-y: auto;
        width: 100%;
        padding: 10px 20px 0 20px;
        box-sizing: border-box;
        margin-bottom: 40px;
    }
    .pagination {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 20px;
        text-align: right;
        background: #fff;
        z-index: 10;
    }
}
.btns {
    button {
        width: 60px;
        padding: 3px 0;
        margin: 0 5px;
    }
}
</style>
